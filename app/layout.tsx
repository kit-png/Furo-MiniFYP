import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClientProviders } from "@/components/client-providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furo - API Marketplace",
  description: "Monetize your APIs with crypto micropayments using x402 protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased`}
      >
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
