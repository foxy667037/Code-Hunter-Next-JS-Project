import "./globals.css";
import Script from "next/script";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// Metadata updated for SEO and professional appearance
export const metadata = {
  title: "Tech Script | Hunting Bugs, Codes & More",
  description:
    "Join the journey of the Code Hunter as he hunts down bugs, explores code, and solves complex problems. Learn tips, tricks, and insights from a coding enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <Script strategy="lazyOnload" />
    </html>
  );
}
