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
