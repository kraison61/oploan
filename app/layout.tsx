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
  title: "10 Best Payday Loan Alternatives (Even with Bad Credit)",
  description: "Avoid high-cost payday loans. Discover 10 safe, fast, and trusted loan alternatives — even if you have poor credit. Get the help you need today.",
  openGraph:{
    title: "F10 Best Payday Loan Alternatives (Even with Bad Credit)",
  description: "Avoid high-cost payday loans. Discover 10 safe, fast, and trusted loan alternatives — even if you have poor credit. Get the help you need today.",
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
