import type { Metadata } from "next";
import ServicePortfolio from "./service-portfolio";

export const metadata: Metadata = {
  title: "Services & Experiences | Mane & Maison",
  description:
    "Explore dimensional color, Japanese-inspired scalp rituals, tailored haircuts, and the thoughtful hospitality included with every Mane & Maison appointment.",
};

export default function ServicesPage() {
  return <ServicePortfolio />;
}
