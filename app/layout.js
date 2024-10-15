import "./globals.css";
import { Poppins } from "next/font/google";

//Rainbowkit
import Providers from "@/app/_context/Provider";
import "@rainbow-me/rainbowkit/styles.css";

import Header from "./_components/Header";
import ToasterContext from "./_context/ToasterContext";
import SessionsProvider from "./_context/SessionsProvider";
import CookieConsent from "./_components/CookieConsent";

// font family
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Pepe Coin - A Meme Coin",
    default: "Welcome / The Pepe Coin - A Meme Coin",
  },
  description:
    "It is meme coin based on pepe meme frog . in this pepe is exchanged from ether,btc etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={`${poppins.className} scroll-smooth overflow-x-hidden `}>
        <Providers>
          <SessionsProvider>
            <ToasterContext />
            {/* <CookieConsent /> */}
            {children}
          </SessionsProvider>
        </Providers>
      </body>
    </html>
  );
}
