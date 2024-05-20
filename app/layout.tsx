
import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Car Shop",
  description: "Unleash your automotive desires at our carshop, where elegance meets performance in a curated collection of precision-crafted vehicles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}