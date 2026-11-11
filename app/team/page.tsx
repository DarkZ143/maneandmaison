import type { Metadata } from "next";
import TeamPage from "./team-page";

export const metadata: Metadata = {
  title: "Our Artisans | Mane & Maison",
  description:
    "Meet the resident colorist, hair architect, and scalp sanctuary specialist behind Mane & Maison's thoughtful salon experience in Urbandale, Iowa.",
};

export default function OurTeamPage() {
  return <TeamPage />;
}
