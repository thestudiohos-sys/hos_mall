import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function Collections() {
  const items = PlaceHolderImages.filter(img => img.id.startsWith('collection-'));

  return (
    <section id="collections" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 text-center mb-16">
        <h4 className="text-accent uppercase tracking-[0.3em] font-bold text-sm mb-4">선택된 피스들</h4>
        <h2 className="font-headline text-4xl md:text-6xl text-primary mb-6">현재 컬렉션</h2>
        <div className="w-24 h-px bg-primary mx-auto" />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <Image
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={item.imageHint}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <Button variant="secondary" className="rounded-none px-8 py-6 uppercase tracking-widest text-xs">상세 보기</Button>
              </div>
            </div>
            <h3 className="font-headline text-2xl text-primary mb-2">{item.description}</h3>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">시즌 에센셜</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-12 py-8 text-sm uppercase tracking-[0.2em]">
          전체 룩북 둘러보기
        </Button>
      </div>
    </section>
  );
}
