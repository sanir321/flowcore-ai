import { motion } from 'framer-motion';
import { Lock, Shield, Key } from 'lucide-react';

const features = [
    { icon: Lock, title: "SOC 2 Type II", desc: "Certified & Audited" },
    { icon: Shield, title: "E2E Encryption", desc: "AES-256 / TLS 1.3" },
    { icon: Key, title: "RBAC", desc: "Granular Controls" }
];

export default function Security() {
    return (
        <section id="security" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Trust & Safety</p>
                    <h2 className="text-3xl font-bold text-slate-900">
                        Enterprise-Grade Security
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-8 bg-brand-gray rounded-3xl border border-transparent hover:border-gray-200 transition-all"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-dark mb-4">
                                <f.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{f.title}</h3>
                            <p className="text-slate-500 text-sm">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
