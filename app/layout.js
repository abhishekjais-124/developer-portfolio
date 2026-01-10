import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Space_Grotesk } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./context/ThemeContext";
import ServiceWorkerRegister from "./components/helper/service-worker-register";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Portfolio of Abhishek - Software Developer",
  description:
    "This is the portfolio of Abhishek. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://abhishekjaiswal.dev"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${display.variable} bg-[#050915] dark:bg-[#050915] light:bg-white antialiased transition-colors duration-500`}>
        <ThemeProvider>
          <div className="pointer-events-none fixed inset-0 -z-20">
            <div className="absolute inset-0 dark:bg-[radial-gradient(120%_120%_at_15%_20%,rgba(22,242,179,0.18),transparent_45%),radial-gradient(120%_120%_at_80%_-10%,rgba(106,90,249,0.22),transparent_40%)] light:bg-[radial-gradient(120%_120%_at_15%_20%,rgba(100,200,150,0.1),transparent_45%),radial-gradient(120%_120%_at_80%_-10%,rgba(150,120,200,0.12),transparent_40%)]" />
            <div className="absolute inset-0 opacity-25 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] light:bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:120px_120px]" />
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_20%_80%,rgba(244,114,182,0.14),transparent_35%),radial-gradient(circle_at_90%_60%,rgba(22,242,179,0.12),transparent_32%)] light:bg-[radial-gradient(circle_at_20%_80%,rgba(200,100,150,0.08),transparent_35%),radial-gradient(circle_at_90%_60%,rgba(100,180,150,0.08),transparent_32%)] opacity-60" />
          </div>
          <ToastContainer />
          <ServiceWorkerRegister />
          <main className="min-h-screen relative mx-auto px-6 sm:px-10 lg:max-w-[72rem] xl:max-w-[78rem] 2xl:max-w-[94rem] dark:text-white light:text-gray-900 pb-12">
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
