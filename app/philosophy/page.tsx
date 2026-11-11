import type { Metadata } from "next";
import PhilosophyPage from "./philosophy-page";

export const metadata: Metadata = {
  title: "Our Philosophy & Atelier | Mane & Maison",
  description:
    "Explore the residential architecture, slow salon philosophy, natural materials, and craft milestones behind Mane & Maison in Urbandale, Iowa.",
};

export default function PhilosophyRoute() {
  return <PhilosophyPage />;
}
