
"use client";

import Link from 'next/link';
import { ShoppingBag, Menu, Search, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function Navbar() {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "카탈로그 요청됨",
      description: "H.O.S_Mall 2024 시그니처 카탈로그를 다운로드합니다.",
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-headline text-3xl md:text-4xl font-black tracking-tighter text-primary hover:text-accent transition-colors">
            H.O.S_Mall
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <Link href="#collections" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-accent">컬렉션</Link>
            <Link href="#story" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-accent">브랜드 스토리</Link>
            <Link href="#ai-stylist" className="hover:text-accent transition-colors py-2 border-b-2 border-transparent hover:border-accent">AI 스타일리스트</Link>
            <Link href="#contact" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-accent">문의</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-primary/10">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleDownload}
              className="text-primary hover:text-accent"
              title="디지털 카탈로그 다운로드"
            >
              <Download className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-primary hover:text-accent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-primary hover:text-accent">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="hidden md:block ml-2">
              <Button className="font-black uppercase tracking-[0.2em] text-[10px] px-8 py-6 rounded-none shadow-xl hover:shadow-accent/20 transition-all">
                VIP 전용관
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
