import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/compontent/Navbar";
import Header from "@/compontent/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="main-body">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
