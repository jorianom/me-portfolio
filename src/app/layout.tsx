import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Riaño | Portafolio",
  description:
    "Portafolio de John Jairo Riaño, estudiante de Ingeniería de Sistemas y desarrollador especializado en tecnologías como Node.js, React y MongoDB.",
  keywords: [
    "Desarrollador Web",
    "Portafolio",
    "Next.js",
    "Node.js",
    "React",
    "MongoDB",
    "PostgreSQL",
    "GitHub Actions",
    "Full Stack",
  ],
  authors: [{ name: "John Jairo Riaño" }],
  openGraph: {
    title: "John Jairo Riaño | Portafolio",
    description:
      "Descubre los proyectos desarrollados por John Jairo con tecnologías modernas como React y Next.js.",
    url: "https://jorianom.github.io",
    siteName: "Portafolio de John Jairo Riaño",
    locale: "es_CO",
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
    <html lang="es" className="scroll-smooth">
      <Head>
        <title>John Jairo Riaño | Desarrollador Back-End y Full Stack</title>
        <meta name="description" content="Portafolio de John Jairo Riaño, estudiante de Ingeniería de Sistemas de la Universidad Nacional. Especializado en Node.js, MongoDB, React y Next.js." />
        <meta name="keywords" content="Desarrollador Node.js, Full Stack, Portafolio, Ingeniería de Sistemas, Universidad Nacional, React, Next.js, MongoDB, GitHub, Vercel" />
        <meta name="author" content="John Jairo Riaño" />

        {/* Open Graph */}
        <meta property="og:title" content="Portafolio | John Jairo Riaño" />
        <meta property="og:description" content="Proyectos con React, Next.js, Node.js, y MongoDB. Desarrollador web back-end y full stack." />
        <meta property="og:image" content="/photo.webp" />
        <meta property="og:url" content="https://tusitio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portafolio | John Jairo Riaño" />
        <meta name="twitter:description" content="Desarrollador especializado en Node.js, React y MongoDB." />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
