
import { Navbar } from '@/components/Navbar';
import { VIPLounge } from '@/components/VIPLounge';
import { Footer } from '@/components/Footer';

export default function VIPPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <VIPLounge />
            <Footer />
        </main>
    );
}
