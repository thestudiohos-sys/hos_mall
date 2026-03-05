import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BrandStory() {
  const storyImg = PlaceHolderImages.find(img => img.id === 'story-image');

  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h4 className="text-accent uppercase tracking-[0.3em] font-bold text-sm">Philosophy</h4>
            <h2 className="font-headline text-4xl md:text-6xl text-primary leading-tight">
              Crafting Legacies, <br /> One Stitch at a Time.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Founded on the principles of timeless elegance and uncompromising quality, H.O.S_Mall was born from a desire to bridge the gap between haute couture and everyday wearable luxury. Our artisans spend hundreds of hours perfecting every silhouette.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="font-headline text-3xl text-primary mb-2">Sustainable</h3>
                <p className="text-sm text-muted-foreground">Ethically sourced materials and zero-waste production cycles.</p>
              </div>
              <div>
                <h3 className="font-headline text-3xl text-primary mb-2">Artisan</h3>
                <p className="text-sm text-muted-foreground">Every piece is hand-finished by master craftsmen in our atelier.</p>
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
