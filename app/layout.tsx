import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oop Loans: Everything You Need to Know About Opploans",
  description: "Compare Oop loans and similar options like Opploans. Learn how they work, their safety, approval requirements, and whether they’re the right fit for you.",
  openGraph:{
    title: "Oop Loans: Everything You Need to Know About Opploans",
  description: "Compare Oop loans and similar options like Opploans. Learn how they work, their safety, approval requirements, and whether they’re the right fit for you.",
  type:"website",
  locale:"en_US",
  url:""
  },
  verification: {
    google:"oLTQzVQABASowkgD0vaJgRO0BUMgWtnL-aFM4brddo4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        <div id="_lg_gorm_"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
