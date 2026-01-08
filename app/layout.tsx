import { Metadata } from 'next';
import './globals.css';
import { defaultMetadata } from './metadata';
import { libreBaskerville, arabicFont } from './fonts';
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='ltr'>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${libreBaskerville.variable} ${arabicFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
