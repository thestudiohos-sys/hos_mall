import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-headline text-3xl font-black mb-6">H.O.S_Mall</h2>
            <p className="opacity-60 text-sm leading-relaxed">
              Redefining luxury through the lens of modern heritage. Every garment tells a story of ascent.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Collections</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Spring/Summer 2024</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Ready-to-Wear</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Accessories</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Limited Editions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Service</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Size Guide</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Order Tracking</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Instagram</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">LinkedIn</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Newsletter</Link></li>
              <li><Link href="#" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-xs opacity-40 uppercase tracking-widest">
          <p>© 2024 H.O.S_Mall Ascent. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#">Terms of Use</Link>
            <Link href="#">Accessibility</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}