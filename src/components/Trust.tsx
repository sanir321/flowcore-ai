import { motion } from 'framer-motion';

const logos = [
    "Acme Corp", "Global Bank", "TechFlow", "MediCare", "LogistiX", "FinServe"
];

export default function Trust() {
    return (
        <section className="py-10 bg-brand-dark border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-medium text-gray-500 mb-8 uppercase tracking-[0.2em]">
                    Trusted by leading enterprises
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-80 transition-opacity duration-500">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-lg font-bold text-white flex items-center gap-2 select-none"
                        >
                            <div className="w-5 h-5 bg-white/20 rounded-sm" />
                            {logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
