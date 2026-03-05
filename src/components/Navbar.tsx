import Link from 'next/link';
import { ShoppingBag, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-headline text-3xl font-black tracking-tighter text-primary">
            ANTIGRAVITY
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <Link href="#collections" className="hover:text-primary transition-colors">컬렉션</Link>
            <Link href="#story" className="hover:text-primary transition-colors">브랜드 스토리</Link>
            <Link href="#ai-stylist" className="hover:text-accent transition-colors">AI 스타일리스트</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden md:block">
            <Button className="font-medium uppercase tracking-widest text-xs px-6">둘러보기</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
