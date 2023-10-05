import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const proximaNova = localFont({
  src: [
    {
      path: "../fonts/Proxima-Nova-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Proxima-Nova-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-proxima",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${proximaNova.variable}`}>
        {children}
      </body>
    </html>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "QuantumPro",
    description: "Video Production Services!",
    icons: {
      icon: ["/favicon.ico?v=1"],
      apple: ["/apple-touch-icon.png?v=1"],
      shortcut: ["/apple-touch-icon.png"],
    },
    manifest: "/site.webmanifest",
  };
}
