import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRU Insurance - Protection You Can Trust",
  description: "TRU Insurance provides clear, reliable coverage for what matters most. Licensed insurance agency with over 20 years of experience protecting families and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
