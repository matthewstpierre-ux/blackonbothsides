import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Syne } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  weight: ["400", "600"],
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackonbothsidesmusic.com"),
  title: "Black On Both Sides Music",
  description:
    "All Black-owned and operated Music Supervision. Culturally grounded music supervision for TV, Film, and Commercials.",
  openGraph: {
    title: "Black On Both Sides Music",
    description:
      "All Black-owned and operated Music Supervision. Culturally grounded expertise for US-based Black productions.",
    images: ["/images/team-group.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${syne.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
