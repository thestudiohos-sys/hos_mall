import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const users = PlaceHolderImages.filter(img => img.id.startsWith('user-'));
  
  const testimonials = [
    {
      name: "Elara Vance",
      role: "Fashion Consultant",
      text: "The quality of craftsmanship at H.O.S_Mall is unparalleled. Every garment feels like a personal commission.",
      image: users[0]?.imageUrl
    },
    {
      name: "Marcus Thorne",
      role: "Creative Director",
      text: "I've been wearing their collection for years. The way they blend timeless silhouettes with modern edge is genius.",
      image: users[1]?.imageUrl
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Trusted by Visionaries</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">Client Voices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-secondary/50 p-12 relative">
              <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10" />
              <p className="font-headline text-2xl italic text-primary mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src={t.image || ''} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}