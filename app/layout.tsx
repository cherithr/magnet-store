import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "./lib/store";

export const metadata: Metadata = {
  title: "Memento — Personalized Fridge Magnets | Premium Photo Gifts",
  description:
    "Turn your favorite memories into premium personalized fridge magnets. Custom 2×2 photo magnets for families, weddings, babies, and pets. Free shipping across India.",
  keywords:
    "personalized fridge magnets, custom photo magnets, family gifts, wedding gifts, baby gifts, photo gifts India",
  openGraph: {
    title: "Memento — Premium Personalized Fridge Magnets",
    description: "Turn your memories into beautiful fridge magnets. Trusted by 15,000+ families across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
