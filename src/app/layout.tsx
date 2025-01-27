import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./component/Topbar";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import { CartProvider } from "./context/cartcontext";

export const metadata: Metadata = {
  title: "Comforty Website",
  description: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Topbar />
          <Header />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
