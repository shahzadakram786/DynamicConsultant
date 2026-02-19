import type { Metadata, Viewport } from "next";
import { Inter, Merriweather } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"


import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/section/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Dynamics Total Wellness - Mental Health Counseling",
  description:
    "Professional mental health counseling services focusing on individual therapy, couples counseling, and comprehensive wellness solutions.",
  generator: "v0.app",
  keywords: ["counseling", "therapy", "mental health", "wellness", "therapist"],
alternates: {
    canonical: "dynamicstotalwellness.com"},

};

export const viewport: Viewport = {
  themeColor: "#2d7550",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${merriweather.variable}`}
    >
      <head>
 <meta name="google-site-verification" content="dIYeBRdWpg9YK5QBiZ34-dhrfv7QGtmyPdlb_pZiJqU" />
 <link rel="icon" href="/favicon.ico" sizes="any" />
 
      </head>
      <body className="font-sans antialiased bg-background text-foreground"
      data-density="default" data-font-size="base"  suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollProgress /> {/* This now lives globally */}
          <Header />
          <main>
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
