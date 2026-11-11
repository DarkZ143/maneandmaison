import type { Metadata } from "next";
import "./globals.css";
import RouteLoader from "./route-loader";

export const metadata: Metadata = {
  title: "Mane & Maison | Salon & Hospitality Sanctuary",
  description:
    "An intimate salon sanctuary in Urbandale, Iowa. Thoughtful hair artistry, restorative rituals, and a residential hospitality experience opening Fall 2026.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <RouteLoader />
      </body>
    </html>
  );
}
