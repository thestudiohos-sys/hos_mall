import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BrandStory } from '@/components/BrandStory';
import { Collections } from '@/components/Collections';
import { AINarrative } from '@/components/AINarrative';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <BrandStory />
      <Collections />
      <AINarrative />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}