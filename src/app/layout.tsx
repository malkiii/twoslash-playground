import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './styles/globals.css';

const url = new URL('https://twoslash.malki.me');

export const metadata: Metadata = {
  title: 'Twoslash Snippet',
  description:
    'Preview and highlight TypeScript snippets effortlessly with our Shiki Twoslash-powered tool. Showcase code with inline type hints, error checks, and stunning syntax highlighting, perfect for developers and documentation.',
  openGraph: {
    type: 'website',
    images: new URL('/og', url),
    url,
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-JS8909WW4F" />
    </html>
  );
}
