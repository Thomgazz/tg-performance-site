import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://tg-performance-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TG Performance — Préparation physique & coaching personnalisé",
  description:
    "Préparation physique de haut niveau appliquée aux sportifs et aux particuliers. Bilan, programmation, suivi et accompagnement par un préparateur physique expérimenté.",
  keywords: [
    "préparation physique",
    "coach sportif",
    "préparateur physique",
    "coaching personnalisé",
    "remise en forme",
    "préparation physique club",
  ],
  openGraph: {
    title: "TG Performance — Préparation physique & coaching personnalisé",
    description:
      "Une approche issue de la préparation physique de haut niveau, adaptée aux sportifs comme aux personnes souhaitant retrouver un corps plus fort, durable et performant.",
    url: siteUrl,
    siteName: "TG Performance",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
