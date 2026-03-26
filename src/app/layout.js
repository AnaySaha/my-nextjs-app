import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS"
  },
  description: "Trying to learn NextJS as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        <main className="flex h-screen h-max-[600px] place-content-center place-item-center">
          {children}
        </main>
        <footer className="text-center bg-slate-600">
          Awsome nextJS Project
        </footer>
      </body>
    </html>
  );
}
