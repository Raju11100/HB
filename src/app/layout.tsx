import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday! ✨ | A Special Experience",
  description: "A personal interactive birthday story made with love and memories.",
  robots: "noindex, nofollow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09080d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable} ${caveat.variable}`}>
      <body className="bg-dark text-warm-cream antialiased selection:bg-burgundy selection:text-warm-cream">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
