"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const WorldMap = dynamic(
  () => import("@/components/ui/map").then((mod) => ({ default: mod.WorldMap })),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center">
        <Skeleton className="h-[360px] w-full rounded-xl" />
      </div>
    ),
  }
);

export default function GlobalReachMap() {
  return (
    <WorldMap
      dots={[
        {
          start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
          end: { lat: 51.5074, lng: -0.1278, label: "London" },
        },
        {
          start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
          end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
        },
        {
          start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
          end: { lat: -15.7975, lng: -47.8919, label: "Brasília" },
        },
        {
          start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
          end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
        },
        {
          start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
          end: { lat: 55.7558, lng: 37.6173, label: "Moscow" },
        },
      ]}
      lineColor="#c5a059"
      showLabels
    />
  );
}
