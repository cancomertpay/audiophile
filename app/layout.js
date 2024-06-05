import Header from "@/components/header/header";
import "./globals.css";

import { manrope } from "@/lib/typography";
import Footer from "@/components/footer/footer";
import About from "@/components/home/about";

export const metadata = {
  title: "Audiophile",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} select-none relative`}>
        <Header />
        <main className="w-full bg-neutral-white">
          {children}

          {/* about section */}
          <About />
        </main>

        <Footer />
      </body>
    </html>
  );
}
