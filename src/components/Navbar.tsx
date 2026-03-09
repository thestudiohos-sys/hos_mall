
"use client";

import Link from 'next/link';
import { ShoppingBag, Menu, Search, User, UserPlus, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from '@/context/AuthContext';

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <TooltipProvider delayDuration={100}>
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
              <Link href="/vip" className="text-accent hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-accent font-black">VIP 전용관</Link>
              <Link href="#contact" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-accent">문의</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-primary/10">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110 active:scale-95 rounded-none md:rounded-md">
                    <Search className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>상품 검색</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex items-center gap-1 md:gap-2">
              {!user ? (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="/signup">
                        <Button variant="ghost" size="icon" className="text-primary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110 active:scale-95 rounded-none md:rounded-md">
                          <UserPlus className="h-5 w-5" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>회원가입</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href="/login">
                        <Button variant="ghost" size="icon" className="text-primary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110 active:scale-95 rounded-none md:rounded-md">
                          <User className="h-5 w-5" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>로그인</p>
                    </TooltipContent>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-primary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110 active:scale-95 rounded-none md:rounded-md">
                        <User className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{user.displayName || '내 계정'}</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => logout()}
                        className="text-primary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110 active:scale-95 rounded-none md:rounded-md"
                      >
                        <LogOut className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>로그아웃</p>
                    </TooltipContent>
                  </Tooltip>
                </>
              )}

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative text-primary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110 active:scale-95 rounded-none md:rounded-md">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>장바구니</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden text-primary hover:text-accent hover:bg-accent/10 transition-all hover:scale-110 active:scale-95 rounded-none md:rounded-md">
                    <Menu className="h-6 w-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>전체 메뉴</p>
                </TooltipContent>
              </Tooltip>

              <div className="hidden md:block ml-2">
                <Link href="/vip">
                  <Button className="font-black uppercase tracking-[0.2em] text-[10px] px-8 py-6 rounded-none shadow-xl hover:shadow-accent/20 transition-all hover:translate-y-[-2px] active:translate-y-[0px] bg-primary text-primary-foreground">
                    VIP 전용관
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </TooltipProvider>
  );
}
