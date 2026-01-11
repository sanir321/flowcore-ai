
import { motion } from 'framer-motion';
import { Building2, Stethoscope, Home, ShoppingBag, Phone, Truck } from 'lucide-react';

const industries = [
    { icon: Building2, name: "Hospitality Teams", desc: "Handle guest communication, bookings, and inquiries 24/7." },
    { icon: Home, name: "Real Estate Teams", desc: "Qualify leads and schedule viewings instantly." },
    { icon: Stethoscope, name: "Financial Services", desc: "Manage repetitive support queries and document collection." },
    { icon: ShoppingBag, name: "Operations Teams", desc: "Automate inbound work and reduce operational overload." },
    { icon: Phone, name: "Customer Support", desc: "Scale response capacity without hiring more agents." },
    { icon: Truck, name: "Logistics", desc: "Coordinate deliveries and track shipments automatically." }
];

export default function Industries() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-brand-dark mb-6"
                    >
                        Built for your industry.
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                                    <ind.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{ind.name}</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed">{ind.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
