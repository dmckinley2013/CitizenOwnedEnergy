import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Citizen Owned Energy - Lake Worth Beach Electric Utility",
  description: "A non-profit, citizen-owned utility providing reliable, low-cost, and clean energy to 28,000 customers while giving back to our community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <footer className="bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <p className="text-center text-xs leading-5 text-gray-400">
                &copy; 2025 Citizen Owned Energy - Lake Worth Beach Electric Utility. All rights reserved.
              </p>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-400">
                Providing reliable, low-cost, and clean energy to our community since the 1960s.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}