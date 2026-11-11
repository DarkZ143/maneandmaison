import type { Metadata } from "next";
import ContactPage from "./contact-page";

export const metadata: Metadata = {
  title: "Contact & Atelier Inquiries | Mane & Maison",
  description:
    "Contact the Mane & Maison concierge about the Fall 2026 founding waitlist, salon experiences, stylist residency, or visiting our Urbandale atelier.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
