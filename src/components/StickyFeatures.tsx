import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Brain, ChevronRight } from 'lucide-react';

const features = [
    {
        icon: MessageSquare,
        title: "Contextual Understanding",
        description: "Flowcore agents don't just match keywords. They understand the entire conversation history, customer intent, and sentiment to provide human-level responses.",
        visual: "Conversation History UI"
    },
    {
        icon: Brain,
        title: "Decision Making",
        description: "Equipped with your business logic, agents can make independent decisions — approving refunds, scheduling appointments, or escalating complex issues.",
        visual: "Logic Flow Diagram"
    },
    {
        icon: Zap,
        title: "Action Execution",
        description: "Beyond conversation, agents trigger real workflows: updating CRMs, sending invoices, or managing bookings directly within your existing systems.",
        visual: "API Integration View"
    }
];

export default function StickyFeatures() {
    const [activeFeature, setActiveFeature] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // In a real implementation, we would use IntersectionObserver on individual sections 
    // to trigger the active state. For simplicity in this demo, we'll use a click/hover 
    // interaction or just standard scroll behavior.
    // Here mimicking the "Conduit" feel where scrolling the left side updates the right.

    const handleScroll = () => {
        if (!containerRef.current) return;
        // Basic scroll spy logic could go here
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="solutions" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-20 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Beyond simple chatbots. <br />
                        <span className="text-blue-600">True AI Employees.</span>
                    </h2>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-20">

                    {/* Left: Scrollable Tabs */}
                    <div className="space-y-12 mb-12 lg:mb-0">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`py-8 border-l-2 pl-8 transition-all duration-500 cursor-pointer group ${activeFeature === index
                                    ? 'border-brand-orange'
                                    : 'border-gray-100 hover:border-gray-200'
                                    }`}
                                onMouseEnter={() => setActiveFeature(index)}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className={`flex items-center gap-3 mb-4 transition-colors ${activeFeature === index ? 'text-brand-orange' : 'text-gray-400 group-hover:text-gray-600'
                                    }`}>
                                    <feature.icon className="w-6 h-6" />
                                    <span className="font-bold uppercase tracking-wider text-sm">{feature.title}</span>
                                </div>

                                <h3 className={`text-3xl font-bold mb-4 transition-colors ${activeFeature === index ? 'text-slate-900' : 'text-gray-300 group-hover:text-gray-400'
                                    }`}>
                                    {feature.title}
                                </h3>

                                <p className={`text-lg leading-relaxed transition-all duration-500 ${activeFeature === index
                                    ? 'text-slate-600 opacity-100 max-h-40'
                                    : 'text-gray-300 opacity-60 max-h-0 lg:max-h-0 overflow-hidden' /* On mobile we might want to keep it visible or expandable */
                                    }`}>
                                    {feature.description}
                                </p>

                                {/* Mobile Visual (Shown inline) */}
                                <div className={`lg:hidden mt-8 transition-all duration-500 overflow-hidden ${activeFeature === index ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
                                    <div className="bg-brand-gray rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
                                        <div className="p-6 bg-gray-50 flex items-center justify-center">
                                            {/* Reuse the visual logic here */}
                                            {index === 0 && (
                                                <div className="w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-100 p-4 space-y-4">
                                                    <div className="flex gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
                                                        <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-xs text-gray-500 w-full">Can I get a refund?</div>
                                                    </div>
                                                    <div className="flex gap-3 flex-row-reverse">
                                                        <div className="w-8 h-8 rounded-full bg-brand-orange shrink-0" />
                                                        <div className="bg-orange-50 p-3 rounded-2xl rounded-tr-none text-xs text-gray-700 w-full border border-orange-100">
                                                            <span className="block text-[10px] text-orange-600 font-bold mb-1 uppercase">Sentiment: Frustrated</span>
                                                            Checking policy... Yes. Processing.
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {index === 1 && (
                                                <div className="w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-100 p-6">
                                                    <div className="flex justify-between items-center mb-6">
                                                        <div className="text-sm font-bold text-gray-900">Logic Flow</div>
                                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="h-8 bg-gray-50 rounded border border-gray-200 flex items-center px-3 text-xs font-mono text-gray-500">Input: Refund</div>
                                                        <div className="flex justify-center"><div className="w-[1px] h-3 bg-gray-300" /></div>
                                                        <div className="h-8 bg-orange-50 rounded border border-orange-200 flex items-center px-3 text-xs font-mono text-orange-700 font-bold">Approve</div>
                                                        <div className="flex justify-center"><div className="w-[1px] h-3 bg-gray-300" /></div>
                                                        <div className="h-8 bg-gray-50 rounded border border-gray-200 flex items-center px-3 text-xs font-mono text-gray-500">Action: Stripe</div>
                                                    </div>
                                                </div>
                                            )}
                                            {index === 2 && (
                                                <div className="relative w-full py-8 flex items-center justify-center">
                                                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 z-10 flex items-center gap-3">
                                                        <div className="p-2 bg-green-100 rounded-lg text-green-600"><Zap className="w-4 h-4" /></div>
                                                        <div>
                                                            <div className="text-sm font-bold">Action Done</div>
                                                            <div className="text-xs text-gray-500">Refund #9928</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {activeFeature === index && (
                                    <div className="mt-6 flex items-center text-brand-orange font-medium text-sm gap-1 lg:flex hidden">
                                        Learn more <ChevronRight className="w-4 h-4" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Visual */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-32 h-[600px] bg-brand-gray rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl transition-all duration-500">
                            {/* Animated Content Switching based on activeFeature */}
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full flex items-center justify-center p-12 bg-gray-50"
                            >
                                {activeFeature === 0 && (
                                    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
                                        {/* Chat Visual */}
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-200" />
                                            <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-xs text-gray-500 w-full">Can I get a refund?</div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-brand-orange" />
                                            <div className="bg-orange-50 p-3 rounded-2xl rounded-tr-none text-xs text-gray-700 w-full border border-orange-100">
                                                <span className="block text-[10px] text-orange-600 font-bold mb-1 uppercase">Sentiment: Frustrated</span>
                                                Checking policy... Yes, you are eligible. Processing now.
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeFeature === 1 && (
                                    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="text-sm font-bold text-gray-900">Logic Flow</div>
                                            <div className="h-2 w-2 rounded-full bg-green-500" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-10 bg-gray-50 rounded border border-gray-200 flex items-center px-4 text-xs font-mono text-gray-500">Input: Refund Request</div>
                                            <div className="flex justify-center"><div className="w-[1px] h-4 bg-gray-300" /></div>
                                            <div className="h-10 bg-orange-50 rounded border border-orange-200 flex items-center px-4 text-xs font-mono text-orange-700 font-bold">Decision: Approve</div>
                                            <div className="flex justify-center"><div className="w-[1px] h-4 bg-gray-300" /></div>
                                            <div className="h-10 bg-gray-50 rounded border border-gray-200 flex items-center px-4 text-xs font-mono text-gray-500">Action: Stripe API</div>
                                        </div>
                                    </div>
                                )}

                                {activeFeature === 2 && (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 opacity-10">
                                            {[...Array(36)].map((_, i) => <div key={i} className="bg-slate-900 rounded-sm" />)}
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 z-10 flex items-center gap-4">
                                            <div className="p-3 bg-green-100 rounded-lg text-green-600"><Zap /></div>
                                            <div>
                                                <div className="text-sm font-bold">Action Completed</div>
                                                <div className="text-xs text-gray-500">Refund #9928 processed via API</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
