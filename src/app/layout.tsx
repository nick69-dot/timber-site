import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimberMart India - Premium Quality Timber & Wood Products",
  description: "India's trusted timber marketplace offering premium quality Teak, Sal, Sheesham, and other wood varieties. Best prices with GST invoice. Free delivery across India.",
  keywords: ["timber", "wood", "teak", "sal", "sheesham", "India", "lumber", "plywood", "hardwood", "timber market"],
  authors: [{ name: "TimberMart India" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TimberMart India - Premium Quality Timber",
    description: "India's trusted timber marketplace with premium quality wood at best prices",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
