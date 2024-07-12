import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import BootstrapClient from "./components/BoostrapClient";
import Footer from "./components/Footer";
import Card from "./components/Card";

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
        {children}
        <BootstrapClient />
        <Card />
        <Footer />
      </body>
    </html>
  );
}