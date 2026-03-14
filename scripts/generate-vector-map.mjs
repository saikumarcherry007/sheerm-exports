import { readFileSync, writeFileSync } from "fs";
import { feature } from "topojson-client";
import { geoPath, geoEquirectangular } from "d3-geo";

// Load world-atlas 110m (simplified, clean lines)
const worldPath = new URL("../node_modules/world-atlas/countries-110m.json", import.meta.url);
const world = JSON.parse(readFileSync(worldPath, "utf-8"));

const countries = feature(world, world.objects.countries);

// Equirectangular projection: maps to 960x480 viewBox
// lng -180..180 → x 0..960
// lat 90..-90 → y 0..480
const projection = geoEquirectangular()
  .scale(960 / (2 * Math.PI))
  .translate([960 / 2, 480 / 2]);

const pathGenerator = geoPath(projection);

// Generate individual country paths
const countryPaths = countries.features.map((f) => {
  const d = pathGenerator(f);
  return d ? `<path d="${d}" />` : "";
}).filter(Boolean).join("\n    ");

// Generate light theme SVG
const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480">
  <rect width="960" height="480" fill="white" />
  <g fill="#e8e0d4" stroke="#d4ccc0" stroke-width="0.5" stroke-linejoin="round">
    ${countryPaths}
  </g>
</svg>`;

// Generate dark theme SVG
const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480">
  <rect width="960" height="480" fill="black" />
  <g fill="#1a1a2e" stroke="#2a2a3e" stroke-width="0.5" stroke-linejoin="round">
    ${countryPaths}
  </g>
</svg>`;

writeFileSync("public/world-map-light.svg", lightSvg);
writeFileSync("public/world-map-dark.svg", darkSvg);

console.log("Generated vector world-map-light.svg and world-map-dark.svg (960x480 equirectangular)");

// Also generate India path for the overlay
const india = countries.features.find((f) => f.id === "356"); // ISO 3166-1 numeric for India
if (india) {
  const indiaD = pathGenerator(india);
  console.log("\nIndia SVG path (equirectangular 960x480):");
  console.log(indiaD);
} else {
  console.log("India not found by ID 356, listing available IDs...");
  countries.features.forEach((f) => {
    if (f.properties && f.properties.name && f.properties.name.toLowerCase().includes("india")) {
      console.log(`Found: id=${f.id}, name=${f.properties.name}`);
    }
  });
  // Try all IDs to find India
  console.log("\nAll country IDs (first 20):");
  countries.features.slice(0, 20).forEach((f) => console.log(`  id=${f.id}`));
}
