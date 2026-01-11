
import { motion } from 'framer-motion';

const stats = [
    { value: "70%", label: "Reduction in Support Costs" },
    { value: "24/7", label: "Instant Availability" },
    { value: "3x", label: "Increase in Lead Qualification" },
    { value: "<1s", label: "Average Response Time" }
];

export default function BusinessImpact() {
    return (
        <section className="py-24 bg-brand-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="pt-8 md:pt-0 px-4"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
