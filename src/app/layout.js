import { Open_Sans  } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar/page";
import Footer from "./(components)/footer/page";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});


export const metadata = {
  title: "Edval Biography",
  description: "We help individuals, institutions, and organizations document lives, achievements, and histories with depth, accuracy, and lasting value",
  openGraph: {
    title: "Edval Biography",
    description: "We help individuals document lives and achievements",
    url: "https://edvalbiography.com",
    siteName: "Edval Biography",
    images: [
      {
        url: "/image/logo.png",
        width: 200,
        height: 30,
        alt: "Edval Biography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
