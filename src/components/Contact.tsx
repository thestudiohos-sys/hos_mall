import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8">Visit the Atelier</h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Experience our full collection in person at our flagship locations worldwide.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <MapPin className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Seoul Flagship</h4>
                  <p className="text-muted-foreground">123 Gangnam-daero, Seoul, Korea</p>
                  <p className="text-sm mt-1">Mon-Sun: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <MapPin className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-bold text-primary mb-2">London Studio</h4>
                  <p className="text-muted-foreground">45 Savile Row, Mayfair, London</p>
                  <p className="text-sm mt-1">Mon-Sat: 11:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-primary/5 hover:bg-accent hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-primary/5 hover:bg-accent hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-primary/5 hover:bg-accent hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="bg-white p-12 shadow-xl border border-primary/10">
            <h3 className="font-headline text-3xl text-primary mb-8">Inquiries</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Full Name</label>
                <input type="text" className="w-full border-b border-primary/20 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Alexander McQueen" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email Address</label>
                <input type="email" className="w-full border-b border-primary/20 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="atelier@hosmall.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Message</label>
                <textarea className="w-full border-b border-primary/20 py-3 focus:outline-none focus:border-accent transition-colors min-h-[120px]" placeholder="How can we assist you?" />
              </div>
              <Button className="w-full py-8 text-sm uppercase tracking-[0.3em] font-bold">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}