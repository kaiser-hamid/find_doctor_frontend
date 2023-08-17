import "../globals.scss";
import { Inter } from "next/font/google";

//components
import Header from "../components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get My Doctor",
  description:
    "Meet your healthcare needs by connecting with doctors and arranging appointments effortlessly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.class}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
