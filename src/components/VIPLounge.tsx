
"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Crown,
    Percent,
    Zap,
    Sparkles,
    Truck,
    TicketCheck,
    Bell,
    ArrowRight
} from "lucide-react";

const benefits = [
    {
        icon: <Percent className="w-8 h-8 text-amber-400" />,
        title: "상시 10% 추가 할인",
        description: "모든 컬렉션 구매 시 VIP 회원만을 위한 10% 추가 할인 혜택이 적용됩니다.",
        tag: "ALWAYS ON"
    },
    {
        icon: <Zap className="w-8 h-8 text-amber-400" />,
        title: "신상품 24시간 우선 구매권",
        description: "새로운 컬렉션이 공개되기 24시간 전에 미리 만나보고 구매하실 수 있습니다.",
        tag: "EARLY ACCESS"
    },
    {
        icon: <Sparkles className="w-8 h-8 text-amber-400" />,
        title: "1:1 퍼스널 스타일링",
        description: "전문 AI 스타일리스트와 인간 어드바이저가 제안하는 맞춤형 룩북 서비스를 제공합니다.",
        tag: "PREMIUM"
    },
    {
        icon: <Truck className="w-8 h-8 text-amber-400" />,
        title: "무제한 무료 퀵 배송",
        description: "금액에 상관없이 모든 주문건에 대해 무료 퀵 배송 및 간편 반품 서비스를 제공합니다.",
        tag: "CONCIERGE"
    },
    {
        icon: <TicketCheck className="w-8 h-8 text-amber-400" />,
        title: "포인트 2배 적립",
        description: "구매할 때마다 일반 회원 대비 2배의 H.O.S 포인트를 적립해 드립니다.",
        tag: "REWARDS"
    },
    {
        icon: <Bell className="w-8 h-8 text-amber-400" />,
        title: "프라이빗 이벤트 초대",
        description: "오프라인 팝업 스토어 및 VIP 전용 프라이빗 파티 초대권을 우선 발송합니다.",
        tag: "INVITATION"
    }
];

export function VIPLounge() {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-white">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/vip_bg.png"
                    alt="VIP Lounge Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-24">
                {/* Header Section */}
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/50 px-4 py-1 rounded-full font-bold tracking-widest uppercase">
                        VIP EXCLUSIVE
                    </Badge>
                    <h1 className="font-headline text-5xl md:text-7xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                        H.O.S LOUNGE
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        H.O.S_Mall의 특별한 멤버십 혜택으로 더욱 격조 있는 쇼핑 경험을 누리세요.<br />
                        당신만을 위해 준비된 프리미엄 서비스를 지금 확인해보세요.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            className="group bg-zinc-900/50 backdrop-blur-xl border-zinc-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-8">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <Badge variant="outline" className="mb-4 text-[10px] tracking-widest text-amber-400 border-amber-500/20">
                                    {benefit.tag}
                                </Badge>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-200 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    {benefit.description}
                                </p>
                                <div className="flex items-center text-amber-500 text-xs font-bold tracking-widest uppercase cursor-pointer group-hover:gap-2 transition-all">
                                    자세히 보기 <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-24 text-center p-12 rounded-3xl bg-gradient-to-r from-amber-900/20 via-zinc-900 to-amber-900/20 border border-amber-500/20 backdrop-blur-md animate-in fade-in zoom-in duration-1000">
                    <div className="flex justify-center mb-6">
                        <Crown className="w-12 h-12 text-amber-500 animate-pulse" />
                    </div>
                    <h2 className="text-3xl font-black mb-4 tracking-tight">H.O.S VIP 멤버가 되어보세요</h2>
                    <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                        누적 구매 금액 500만원 이상 회원님께 자동으로 VIP 등급이 부여됩니다.
                    </p>
                    <button className="bg-amber-500 hover:bg-amber-400 text-black font-black px-12 py-4 rounded-full transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transform hover:-translate-y-1">
                        멤버십 조건 확인하기
                    </button>
                </div>
            </div>
        </div>
    );
}
