import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const users = PlaceHolderImages.filter(img => img.id.startsWith('user-'));
  
  const testimonials = [
    {
      name: "엘라라 반스",
      role: "패션 컨설턴트",
      text: "H.O.S_Mall의 장인 정신은 타의 추종을 불허합니다. 모든 옷이 마치 저만을 위해 특별히 주문 제작된 것 같습니다.",
      image: users[0]?.imageUrl
    },
    {
      name: "마커스 쏜",
      role: "크리에이티브 디렉터",
      text: "수년째 이 브랜드의 컬렉션을 입고 있습니다. 유행을 타지 않는 실루엣에 현대적인 감각을 더하는 방식은 정말 천재적입니다.",
      image: users[1]?.imageUrl
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">선구자들이 신뢰하는 브랜드</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">고객의 목소리</p>
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
