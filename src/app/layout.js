import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
// import ScrollToTop from "@/elements/ScrollToTop/ScrollToTop";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const bodyFont = Poppins({
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
          <AuthProvider>
            <div className="mainContainer">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
