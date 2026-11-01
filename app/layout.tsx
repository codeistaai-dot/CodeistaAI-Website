import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { FormModalProvider } from '@/context/FormModalContext';

const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk-Variable.woff2',
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: '500 700',
});

const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '400 700',
});

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#1a0c40',
};

export const metadata: Metadata = {
  title: 'CodeistaAI — Make your next move with Python',
  description:
    'Explore a proposed Python learning journey from fundamentals to practical projects with CodeistaAI.',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <FormModalProvider>{children}</FormModalProvider>
      </body>
    </html>
  );
}
