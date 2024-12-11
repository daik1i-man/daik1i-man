import { Poppins } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '900']
})

export const metadata: Metadata = {
  title: "daik1i-man's world!",
  description: "Alimboyev Joshqin's portfolio.",
  icons: '/logo.jpg'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
