import "./globals.css";
import {ReactNode} from "react"

export const metadata = {
  title: "Premium Diamond Manufacturer | Certified Natural & Lab-Grown Diamonds",
  description: "High-quality diamonds directly from the manufacturer. Get pricing, catalog & custom cuts. Enquire now.",
  openGraph: {
    title: "Premium Diamond Manufacturer",
    description: "Direct factory pricing • Certified Diamonds • Fast Shipping",
  },
};

export default function RootLayout({ children }: {children:ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}

