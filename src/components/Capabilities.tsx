import { motion } from 'framer-motion';
import { MessageCircle, Settings, UserCheck, Inbox, BarChart3, ShieldCheck } from 'lucide-react';

const capabilities = [
    {
        icon: MessageCircle,
        title: "Respond across channels",
        description: "Handle inquiries on WhatsApp, Email, Voice, SMS, & Webchat.",
        colSpan: "md:col-span-1"
    },
    {
        icon: BarChart3,
        title: "Qualify & Collect",
        description: "Engage leads, gather requirements, and qualify potential customers.",
        colSpan: "md:col-span-2"
    },
    {
        icon: Settings,
        title: "Book & Update",
        description: "Schedule appointments and update CRM systems automatically.",
        colSpan: "md:col-span-1"
    },
    {
        icon: ShieldCheck,
        title: "Follow SOPs",
        description: "Strict adherence to business rules and standard operating procedures.",
        colSpan: "md:col-span-1"
    },
    {
        icon: UserCheck,
        title: "Escalate with Context",
        description: "Hand off complex cases to humans with full conversation history.",
        colSpan: "md:col-span-1"
    },
    {
        icon: Inbox,
        title: "24/7 Operations",
        description: "Run continuous operations without increasing headcount.",
        colSpan: "md:col-span-3"
    }
];

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-24 bg-brand-dark text-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        Real work, <br />
                        <span className="text-brand-orange">not conversation demos.</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Flowcore AI employees understand context, follow rules, and take action.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${cap.colSpan} p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group`}
                        >
                            <div className="mb-6">
                                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4 group-hover:scale-110 transition-transform">
                                    <cap.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{cap.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
