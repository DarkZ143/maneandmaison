import type { Metadata } from "next";
import GuestCarePage from "./guest-care-page";

export const metadata: Metadata = {
  title: "FAQs & Guest Care | Mane & Maison",
  description:
    "Find guest guidance for appointments, pricing, the Quiet Chair, scalp wellness, and founding reservations at Mane & Maison.",
};

export default function GuestCareRoute() {
  return <GuestCarePage />;
}
