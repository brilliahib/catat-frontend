import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Catat | Make your finances made easy!",
  description:
    "Catat helps you manage your finances with ease. Track your expenses, set budgets, and gain insights into your spending habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased font-rubik`}>
        <main className="flex w-full justify-center px-5 sm:px-0">
          <div className="w-full max-w-lg">{children}</div>
        </main>
      </body>
    </html>
  );
}
