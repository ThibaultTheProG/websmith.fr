import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import { Providers } from "./providers";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "WebSmith - Développement web & mobile sur mesure",
  description: "Développez votre site web ou votre application mobile avec WebSmith, votre partenaire digital pour des solutions sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="GTM-5P34XP5W" />
        {/* Script anti-flash pour définir le thème avant le chargement de React */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var mode = localStorage.getItem('theme');
                if (mode === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            })();
          `
        }} />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
