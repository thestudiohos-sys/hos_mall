import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BrandStory() {
  const storyImg = PlaceHolderImages.find(img => img.id === 'story-image');

  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h4 className="text-accent uppercase tracking-[0.3em] font-bold text-sm">브랜드 철학</h4>
            <h2 className="font-headline text-4xl md:text-6xl text-primary leading-tight">
              가벼움의 미학, <br /> 한계를 넘어서.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              전통적인 럭셔리의 무게감을 덜어내고, 현대적인 가벼움을 지향하는 Antigravity는 혁신적인 소재와 정교한 테일러링을 통해 새로운 기준을 제시합니다. 우리의 모든 디자인은 자유로운 움직임과 영원한 우아함을 담고 있습니다.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="font-headline text-3xl text-primary mb-2">혁신</h3>
                <p className="text-sm text-muted-foreground">첨단 소재와 전통 기법의 융합을 통한 새로운 실루엣.</p>
              </div>
              <div>
                <h3 className="font-headline text-3xl text-primary mb-2">미니멀리즘</h3>
                <p className="text-sm text-muted-foreground">불필요한 요소를 제거한 정제된 럭셔리의 정수.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden order-1 md:order-2 bg-secondary/20">
            {storyImg?.imageUrl && (
              <Image
                src={storyImg.imageUrl}
                alt={storyImg.description || 'Antigravity story'}
                fill
                className="object-cover"
                data-ai-hint={storyImg.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
