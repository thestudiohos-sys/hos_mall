
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn, ArrowRight } from 'lucide-react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { user } = useAuth();

    // Redirect if already logged in
    React.useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/');
        } catch (err: any) {
            console.error("Login error:", err);
            setError("이메일 또는 비밀번호가 잘못되었습니다.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <Link href="/" className="mb-12 font-headline text-3xl font-black tracking-tighter text-primary hover:text-accent transition-colors">
                H.O.S_Mall
            </Link>

            <div className="w-full max-w-[450px] space-y-8 bg-white/50 backdrop-blur-md p-8 md:p-12 border border-primary/10 shadow-2xl">
                <div className="space-y-2 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                        <LogIn className="w-6 h-6" />
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-primary uppercase">Welcome Back</h1>
                    <p className="text-muted-foreground text-sm tracking-widest uppercase">당신만의 럭셔리 라이프스타일, 로그인을 통해 이어가세요</p>
                </div>

                {error && (
                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 text-xs text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest">이메일</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-none border-t-0 border-x-0 border-b border-primary/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent transition-all duration-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-widest">비밀번호</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-none border-t-0 border-x-0 border-b border-primary/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-accent transition-all duration-500"
                        />
                    </div>

                    <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground h-14 rounded-none font-black uppercase tracking-[0.2em] text-xs hover:bg-accent transition-all duration-500 group">
                        {isLoading ? "Logging in..." : (
                            <span className="flex items-center gap-2">
                                로그인하기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        )}
                    </Button>
                </form>

                <div className="text-center pt-4">
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">
                        아직 회원이 아니신가요?{" "}
                        <Link href="/signup" className="text-primary font-bold hover:text-accent underline underline-offset-4 transition-colors">
                            멤버십 가입하기
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
