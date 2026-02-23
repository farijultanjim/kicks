import type { Metadata } from "next";
import { Rubik, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kicks",
  description: "Discover the latest trends in footwear with Kicks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${openSans.variable} antialiased `}>
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
