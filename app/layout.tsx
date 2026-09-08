import type { Metadata, Viewport } from 'next';
import './globals.css';
import { FormModalProvider } from '@/context/FormModalContext';

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#141817',
};

export const metadata: Metadata = {
  title: 'CodeistaAI — Make your next move with Python',
  description:
    'Explore a proposed Python learning journey from fundamentals to practical projects. CodeistaAI standalone UI prototype.',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FormModalProvider>{children}</FormModalProvider>
      </body>
    </html>
  );
}
