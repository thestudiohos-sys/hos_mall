import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero');

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <Image
        src={heroImg?.imageUrl || ''}
        alt={heroImg?.description || ''}
        fill
        className="object-cover transition-transform duration-1000 hover:scale-105"
        priority
        data-ai-hint={heroImg?.imageHint}
      />
      <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="font-headline text-5xl md:text-8xl font-black mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          The Ascent of Style
        </h1>
        <p className="font-body text-lg md:text-2xl max-w-2xl mb-10 opacity-90 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Curating excellence since 1998. Experience the fusion of luxury craftsmanship and contemporary vision at H.O.S_Mall.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-primary rounded-none px-10 py-8 text-sm uppercase tracking-[0.2em]">
            Shop Collections
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none px-10 py-8 text-sm uppercase tracking-[0.2em]">
            Brand Film
          </Button>
        </div>
      </div>
    </section>
  );
}