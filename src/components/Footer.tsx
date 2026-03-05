
"use client";

import Link from 'next/link';
import { Apple, PlayCircle, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-headline text-4xl font-black mb-8 uppercase tracking-tighter">H.O.S_Mall</h2>
            <p className="opacity-60 text-sm leading-relaxed mb-10 max-w-xs">
              우아함의 정수에서 럭셔리를 재정의합니다. H.O.S_Mall의 모든 의상은 당신의 품격을 높이는 장인 정신을 담고 있습니다.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 hover:bg-accent transition-colors rounded-full"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-accent transition-colors rounded-full"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="p-2 bg-white/5 hover:bg-accent transition-colors rounded-full"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-accent">컬렉션</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link href="#" className="hover:text-accent hover:opacity-100 transition-all">2024 Autumn/Winter</Link></li>
              <li><Link href="#" className="hover:text-accent hover:opacity-100 transition-all">시그니처 테일러링</Link></li>
              <li><Link href="#" className="hover:text-accent hover:opacity-100 transition-all">클래식 에디션</Link></li>
              <li><Link href="#" className="hover:text-accent hover:opacity-100 transition-all">프라이빗 아카이브</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-8 text-xs uppercase tracking-[0.3em] text-accent">고객 지원</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link href="#" className="hover:text-accent hover:opacity-100 transition-all">배송 및 반품 정책</Link></li>
              <li><Link href="#" className="hover:text-accent hover:opacity-100 transition-all">퍼스널 쇼퍼 상담</Link></li>
              <li><Link href="#" className="hover:text-accent hover:opacity-100 transition-all">아틀리에 예약</Link></li>
              <li><Link href="#" className="hover:text-accent hover:opacity-100 transition-all">개인정보 보호정책</Link></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-black opacity-40">Mobile Application</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white hover:text-primary text-[10px] h-10 px-4 rounded-none transition-all">
                  <Apple className="mr-2 h-3.5 w-3.5" /> App Store
                </Button>
                <Button variant="outline" size="sm" className="bg-white/5 border-white/10 hover:bg-white hover:text-primary text-[10px] h-10 px-4 rounded-none transition-all">
                  <PlayCircle className="mr-2 h-3.5 w-3.5" /> Play Store
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] opacity-40 uppercase tracking-[0.3em] font-medium">
          <p>© 2024 H.O.S_Mall Luxury Group. All Rights Reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Use</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Accessibility</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Sustainability</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
