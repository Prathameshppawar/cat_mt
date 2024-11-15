// app/layout.tsx
import { Metadata } from "next";
import localFont from "next/font/local";
// import { ToastProvider } from '@/components/ui/toast';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"



// Font configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata: Metadata = {
  title: "Car Management Services",
  description: "Created by Prathamesh Pawar ",
};

// Root layout with ToastProvider
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>

        {/* <ToastProvider> */}
          {children}
        {/* </ToastProvider> */}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
