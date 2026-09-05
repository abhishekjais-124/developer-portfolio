import { Cormorant_Garamond, Outfit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import Atmosphere from "./components/atelier/atmosphere";
import LuxuryCursor from "./components/atelier/cursor";
import ScrollProgress from "./components/atelier/scroll-progress";
import { ThemeProvider } from "./context/ThemeContext";
import "./css/card.scss";
import "./css/globals.scss";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-family",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-family",
});

export const metadata = {
  title: "Abhishek Jaiswal — Software Engineer",
  description:
    "Senior Software Engineer in Bangalore. I design calm, high-scale backend systems, cloud platforms, and AI-driven products used by millions.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://abhishekjaiswal.dev"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${display.variable} ${sans.variable} font-sans bg-[#070707] text-[#f3eee4] antialiased`}>
        <ThemeProvider>
          <Atmosphere />
          <LuxuryCursor />
          <ScrollProgress />
          <ToastContainer theme="dark" />
          <Navbar />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
