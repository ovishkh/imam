import { Libre_Baskerville, Noto_Naskh_Arabic } from 'next/font/google';

export const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const arabicFont = Noto_Naskh_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});