export const metadata = {
  title: {
    default: "The Working Word Bible",
    template: "%s | The Working Word Bible",
  },
  description: "Read and study the Holy Bible",
};

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { BibleProvider } from "./_components/StateProvder";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <BibleProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </BibleProvider>
        <Footer />
      </body>
    </html>
  );
}
