import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://technewpublication.com"),
  title: "Tech New Publication | Manuscript Refinement",
  description: "Rigorous manuscript refinement, peer-review simulation, and journal-ready technical formatting for global researchers.",
  icons: {
    icon: "/assets/logo.avif",
    shortcut: "/assets/logo.avif",
  },
  openGraph: {
    title: "Tech New Publication",
    description: "Refining research for high-impact journals",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Tech New Publication" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech New Publication",
    description: "Refining research for high-impact journals",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
