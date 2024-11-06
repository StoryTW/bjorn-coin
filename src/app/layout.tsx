import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/layout/Header/Header';
import clsx from 'clsx';
import '@/assets/styles/index.scss';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bjorn',
  description: 'From Viral Sensation to Meme Icon. Sleep through market lows? Not $BJORN!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'root')}>
        <div className='container'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
