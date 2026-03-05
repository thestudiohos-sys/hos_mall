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
              시간을 초월하는 <br /> 우아함의 정수.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              전통적인 럭셔리의 가치를 계승하면서도 끊임없이 변화를 추구하는 H.O.S_Mall은 정교한 테일러링과 최고급 소재를 통해 당신의 일상에 특별함을 선사합니다. 우리의 모든 디자인은 시대를 아우르는 세련미를 담고 있습니다.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="font-headline text-3xl text-primary mb-2">장인 정신</h3>
                <p className="text-sm text-muted-foreground">숙련된 장인들의 손길로 완성되는 완벽한 디테일.</p>
              </div>
              <div>
                <h3 className="font-headline text-3xl text-primary mb-2">본질적 가치</h3>
                <p className="text-sm text-muted-foreground">유행에 흔들리지 않는 클래식 럭셔리의 미학.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden order-1 md:order-2 bg-secondary/20">
            {storyImg?.imageUrl && (
              <Image
                src={storyImg.imageUrl}
                alt={storyImg.description || 'H.O.S_Mall story'}
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
