import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconShieldCheck,
  IconTerminal2,
  IconTruck,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Premium Quality",
      description: "Rigorous quality checks at every stage, from sourcing to shipping.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Global Reach",
      description: "Robust logistics network ensuring timely delivery across continents.",
      icon: <IconCloud />,
    },
    {
      title: "Efficient Sourcing",
      description: "Direct partnerships with growers for competitive pricing & freshness.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Timely Delivery",
      description: "We prioritize your deadlines with optimized shipping routes.",
      icon: <IconTruck />,
    },
    {
      title: "Customer Centric",
      description: "Transparent communication and dedicated support for every client.",
      icon: <IconHelp />,
    },
    {
      title: "Certified Excellence",
      description: "Adherence to international export standards and certifications.",
      icon: <IconCurrencyDollar />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature border border-[#c5a059]/20",
        "hover:border-[#c5a059]",
        "rounded-2xl",
        "overflow-hidden",
        "bg-white"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#c5a059]/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#c5a059]/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#6e0b14]">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#c5a059]/40 group-hover/feature:bg-[#c5a059] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#6e0b14]">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
