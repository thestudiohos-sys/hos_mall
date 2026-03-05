
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero');
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "룩북 다운로드 시작",
      description: "H.O.S_Mall 2024 Digital Lookbook 다운로드를 시작합니다.",
    });
  };

  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      {heroImg?.imageUrl && (
        <Image
          src={heroImg.imageUrl}
          alt={heroImg.description || 'H.O.S_Mall fashion hero'}
          fill
          className="object-cover transition-transform duration-[3000ms] hover:scale-110"
          priority
          data-ai-hint={heroImg.imageHint}
        />
      )}
      <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <span className="mb-6 block text-sm font-bold uppercase tracking-[0.5em] animate-in fade-in slide-in-from-top-4 duration-1000">
          The Essence of Timeless Luxury
        </span>
        <h1 className="font-headline text-6xl md:text-9xl font-black mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 uppercase tracking-tighter leading-none">
          H.O.S_Mall
        </h1>
        <p className="font-body text-lg md:text-2xl max-w-2xl mb-12 opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 leading-relaxed">
          시간을 초월하는 우아함의 새로운 기준. <br />
          럭셔리 장인 정신과 현대적 감각이 빚어낸 완벽한 조화를 경험하십시오.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white transition-all duration-300 rounded-none px-12 py-8 text-sm uppercase tracking-[0.3em] font-bold">
            컬렉션 쇼핑하기 <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleDownload}
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-none px-12 py-8 text-sm uppercase tracking-[0.3em] font-bold group"
          >
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            디지털 룩북 다운로드
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50">
        <div className="w-px h-16 bg-white" />
      </div>
    </section>
  );
}
