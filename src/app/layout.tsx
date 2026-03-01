import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WaveBackground } from "@/components/layout/wave-background";
import { siteConfig, personalInfo, socialLinks } from "@/lib/data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.siteName} | ${personalInfo.role}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  keywords: ["portfolio", "developer", "software engineer", "web development", "projects", personalInfo.name],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.siteName} | ${personalInfo.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteName} | ${personalInfo.role}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              url: siteConfig.url,
              jobTitle: personalInfo.role,
              email: personalInfo.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: personalInfo.location,
              },
              sameAs: socialLinks
                .filter((l) => l.icon !== "mail")
                .map((l) => l.href),
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable} ${bricolageGrotesque.variable} noise-overlay antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <WaveBackground />
          <Navbar />
          <main id="main-content" className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
