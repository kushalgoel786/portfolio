import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kushal Goel",
  description: "Kushal Goel loves coding and math and is currently studying computer science at the University of Waterloo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 ${inter.className} `}>
        {children}
      </body>
    </html>
  );
}
