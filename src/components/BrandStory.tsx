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
              한 땀 한 땀, <br /> 유산을 짓다.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              유행을 타지 않는 우아함과 타협하지 않는 품질을 원칙으로 설립된 H.O.S_Mall은 오뜨 꾸뛰르와 일상적인 럭셔리 사이의 가교가 되고자 탄생했습니다. 우리 장인들은 완벽한 실루엣을 위해 수백 시간을 쏟아붓습니다.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="font-headline text-3xl text-primary mb-2">지속 가능성</h3>
                <p className="text-sm text-muted-foreground">윤리적으로 조달된 소재와 폐기물 제로 생산 사이클.</p>
              </div>
              <div>
                <h3 className="font-headline text-3xl text-primary mb-2">장인 정신</h3>
                <p className="text-sm text-muted-foreground">모든 피스는 아틀리에의 마스터 장인들에 의해 수작업으로 마무리됩니다.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden order-1 md:order-2 bg-secondary/20">
            {storyImg?.imageUrl && (
              <Image
                src={storyImg.imageUrl}
                alt={storyImg.description || 'Our story'}
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
