import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'H.O.S_Mall Ascent | 프리미엄 럭셔리 패션 & 컬렉션',
  description: 'H.O.S_Mall과 함께 패션의 정점을 경험하세요. 유니크한 컬렉션과 브랜드 철학을 만나보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
