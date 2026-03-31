import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';
import PageTransition from '@/components/page-transition';
import { AnimatePresence } from 'framer-motion';

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: 'Imam - Ask Islamic Question',
  description: 'Get answers to your Islamic questions from knowledgeable sources.',
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${libreBaskerville.className} antialiased selection:bg-primary/20`}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>
        </div>
        <AnimatePresence mode="wait">
          <PageTransition>
            {children}
          </PageTransition>
        </AnimatePresence>
      </body>
    </html>
  );
}
