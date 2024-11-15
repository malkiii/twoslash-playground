import type { Metadata } from 'next';
// import localFont from "next/font/local";
import './globals.css';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: 'Twoslash Playground',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <body>{children}</body>
    </html>
  );
}
