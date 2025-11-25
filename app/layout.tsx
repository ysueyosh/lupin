import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '探偵事務所 Lupin | 浮気調査・企業調査',
  description:
    '浮気調査から企業調査まで、確かな実績でサポートいたします。無料相談24時間365日対応。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-800
    bg-[url('/siteBackground.svg')] bg-cover bg-fixed bg-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
