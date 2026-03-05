import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-headline text-3xl font-black mb-6 uppercase tracking-tighter">H.O.S_Mall</h2>
            <p className="opacity-60 text-sm leading-relaxed">
              우아함의 정수에서 럭셔리를 재정의합니다. H.O.S_Mall의 모든 의상은 당신의 품격을 높이는 비전을 담고 있습니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">컬렉션</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">2024 가을/겨울</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">시그니처 테일러링</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">클래식 럭셔리</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">프라이빗 시리즈</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">서비스</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">배송 및 반품</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">사이즈 가이드</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">프라이빗 상담</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">개인정보 처리방침</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">CONNECT</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">인스타그램</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">링크드인</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">뉴스레터 구독</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">문의하기</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-xs opacity-40 uppercase tracking-widest">
          <p>© 2024 H.O.S_Mall. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#">이용 약관</Link>
            <Link href="#">웹 접근성</Link>
            <Link href="#">쿠키 정책</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
