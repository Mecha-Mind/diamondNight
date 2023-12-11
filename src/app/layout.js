import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/context/ThemeContext";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Diamond Night",
  description:
    "Welcome to 'Diamond night' Discover best techs in the whole world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
