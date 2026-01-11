import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import StickyFeatures from './components/StickyFeatures';
import Capabilities from './components/Capabilities';
import ProductionReady from './components/ProductionReady';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import BusinessImpact from './components/BusinessImpact';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        // @ts-ignore
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical', // 'direction' was deprecated/incorrect in some versions, 'orientation' is safe or just omit for default
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Trust />
            <StickyFeatures />
            <Capabilities />
            <ProductionReady />
            <HowItWorks />
            <Industries />
            <BusinessImpact />
            <Security />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
