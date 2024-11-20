import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Twoslash Snippet',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <body>{children}</body>
    </html>
  );
}
