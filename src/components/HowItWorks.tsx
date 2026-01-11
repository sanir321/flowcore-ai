
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Connect",
        description: "Link your communication channels (WhatsApp, Email, Voice) and internal tools (CRM, Calendar) in one click."
    },
    {
        number: "02",
        title: "Configure",
        description: "Define your business rules, upload knowledge bases, and set permissions. No coding required."
    },
    {
        number: "03",
        title: "Deploy",
        description: "Launch your AI employees. Monitor their performance in real-time and jump in only when needed."
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-brand-dark mb-4"
                    >
                        Deploy in minutes.
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-200" />

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-slate-50 pt-4" // minimal bg to cover line if needed, or transparent
                            >
                                <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center text-3xl font-bold text-blue-600 mb-8 mx-auto shadow-sm relative z-10">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">{step.title}</h3>
                                <p className="text-lg text-slate-600 text-center leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
