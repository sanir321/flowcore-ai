
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section id="cta" className="py-32 bg-brand-dark relative overflow-hidden">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-brand-dark" />
            <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-3xl opacity-30 animate-pulse" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight"
                >
                    Bring AI employees into <br />
                    your operations.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-blue-600/50 active:scale-95 flex items-center gap-2">
                        Talk to Sales
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="text-white font-medium hover:text-blue-300 transition-colors px-6 py-4">
                        Schedule a Demo
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
