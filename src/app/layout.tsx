import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trung Nguyen - Software Engineer",
  description: "Trung Nguyen is a software engineer with experience in frontend and backend technologies including Java, React, Angular, and AEM. Skilled in digital banking, Adobe Experience Manager, and logistics systems.",
  keywords: "Software Engineer, Java Developer, Full Stack Developer, AEM Developer, Vietnam Software Engineer, Digital Banking, Adobe Experience Manager",
  authors: [{ name: "Trung Nguyen" }],
  creator: "Trung Nguyen",
  publisher: "Trung Nguyen",
  robots: "index, follow",
  icons: {
    icon: '/ttng/favicon.svg',
    shortcut: '/ttng/favicon.svg',
    apple: '/ttng/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/ttng/favicon.svg',
    },
  },
  openGraph: {
    type: "profile",
    title: "Trung Nguyen - Software Engineer",
    description: "Software Engineer specializing in Java, AEM, and Digital Banking solutions",
    images: ["/ttng/me.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trung Nguyen - Software Engineer",
    description: "Software Engineer specializing in Java, AEM, and Digital Banking solutions",
    images: ["/ttng/me.jpeg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
