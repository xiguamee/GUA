
import type { Metadata } from "next";
import "./globals.css";
import RootLayout from './RootLayout';


export const metadata: Metadata = {
  title: "solatool",
  description: "cheapest solana tools",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}