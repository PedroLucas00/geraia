import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer";
import NavBar from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geraia",
  description: "Created by Pedro lucas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <FooterComponent></FooterComponent>
      </body>
    </html>
  );
}
