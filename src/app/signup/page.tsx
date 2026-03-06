
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { UserPlus, ArrowRight } from 'lucide-react';

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <Link href="/" className="mb-12 font-headline text-3xl font-black tracking-tighter text-primary hover:text-accent transition-colors">
                H.O.S_Mall
            </Link>

            <div className="w-full max-w-[450px] space-y-8 bg-white/50 backdrop-blur-md p-8 md:p-12 border border-primary/10 shadow-2xl">
                <div className="space-y-2 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                        <UserPlus className="w-6 h-6" />
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Create Account</h1>
                    <p className="text-muted-foreground text-sm tracking-widest uppercase">럭셔리한 혜택의 시작, H.O.S_Mall 멤버십</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest">이름</Label>
                        <Input id="name" placeholder="Name" required className="rounded-none border-t-0 border-x-0 border-b border-primary/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent transition-all duration-500" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest">이메일</Label>
                        <Input id="email" type="email" placeholder="email@example.com" required className="rounded-none border-t-0 border-x-0 border-b border-primary/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent transition-all duration-500" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-widest">비밀번호</Label>
                        <Input id="password" type="password" placeholder="••••••••" required className="rounded-none border-t-0 border-x-0 border-b border-primary/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent transition-all duration-500" />
                    </div>

                    <div className="flex items-center space-x-2 py-2">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="text-xs text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            <span className="underline cursor-pointer hover:text-accent">약관 및 개인정보 정책</span>에 동의합니다.
                        </label>
                    </div>

                    <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground h-14 rounded-none font-black uppercase tracking-[0.2em] text-xs hover:bg-accent transition-all duration-500 group">
                        {isLoading ? "Creating..." : (
                            <span className="flex items-center gap-2">
                                멤버십 가입하기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        )}
                    </Button>
                </form>

                <div className="text-center pt-4">
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">
                        이미 계정이 있으신가요?{" "}
                        <Link href="/login" className="text-primary font-bold hover:text-accent underline underline-offset-4 transition-colors">
                            로그인하기
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
