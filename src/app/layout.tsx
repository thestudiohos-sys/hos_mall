
import type { Metadata } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'H.O.S_Mall | 프리미엄 럭셔리 패션 & 컬렉션',
  description: 'H.O.S_Mall과 함께 럭셔리 패션의 정점을 경험하세요. 유니크한 컬렉션과 브랜드 철학을 만나보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
