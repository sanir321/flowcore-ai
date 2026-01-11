import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    return (
        <section ref={containerRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0F0503] min-h-screen flex flex-col justify-center">
            {/* 1. Background Gradient Ambience (Matched to Screenshot) */}
            <div className="absolute top-0 left-0 right-0 h-[800px] overflow-hidden pointer-events-none z-0">
                {/* Main top glow */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[140vw] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5e2311] via-[#1a0b05] to-transparent opacity-60 blur-3xl" />
                {/* Secondary softer glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* 2. Headlines */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                >
                    AI employees for <br />
                    <span className="text-brand-orange">customer operations</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    Flowcore deploys AI employees that handle customer conversations and execute operational workflows — working alongside your human team.
                </motion.p>

                {/* 3. Input + Button CTA (Conduit Style) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center w-full max-w-lg mx-auto mb-24"
                >
                    <div className="relative w-full group">
                        <input
                            type="email"
                            placeholder="example@company.com"
                            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-48 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all font-light"
                        />
                        <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-orange hover:bg-orange-600 text-white px-6 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                            See Flowcore in action
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

                {/* 4. Floating UI Visual (Dashboard Mock) */}
                <motion.div
                    ref={containerRef}
                    style={{ y, opacity }}
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Main Dashboard Card */}
                    <div className="bg-white rounded-t-3xl shadow-2xl overflow-hidden border border-white/10 relative z-10">
                        {/* Header */}
                        <div className="h-14 bg-gray-50 border-b border-gray-100 flex items-center px-4 md:px-6 justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/50" />
                                </div>
                                <div className="hidden md:block h-4 w-[1px] bg-gray-200 mx-2" />
                                <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-md shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-medium text-gray-600">Active Monitoring</span>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-gray-400 hidden sm:block">flowcore_agent_v2.1.0</div>
                        </div>

                        {/* Content Area */}
                        <div className="p-4 md:p-8 bg-white min-h-[300px] flex gap-8 text-left">
                            {/* Sidebar List (Hidden on mobile) */}
                            <div className="hidden md:block w-64 flex-shrink-0 border-r border-gray-100 pr-8 space-y-4">
                                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Live Conversations</div>
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className={`p-3 rounded-xl flex items-center gap-3 ${i === 1 ? 'bg-blue-50 border border-blue-100' : 'hover:bg-gray-50'}`}>
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                                            {i === 1 ? 'JD' : i === 2 ? 'AS' : 'MK'}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">User {i === 1 ? 'John Doe' : 'Guest'}</div>
                                            <div className="text-xs text-gray-500 truncate w-32">Refund status check...</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 space-y-6 w-full">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs font-bold text-gray-600">JD</span>
                                    </div>
                                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-700 max-w-[85%] md:max-w-md">
                                        Hi, I still haven't received my refund for order #12345. It's been 5 days.
                                    </div>
                                </div>

                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-orange/20">
                                        <MessageSquare className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-white border border-gray-200 shadow-sm rounded-2xl rounded-tr-sm p-4 text-sm text-gray-900 max-w-[85%] md:max-w-md">
                                        <div className="flex items-center gap-2 mb-2 text-xs text-brand-orange font-medium">
                                            <CheckCircle className="w-3 h-3" />
                                            Policy Checked: Refund Eligible
                                        </div>
                                        I've checked the status of order #12345. The refund was processed yesterday and should appear on your statement within 24-48 hours. Would you like a receipt confirmation?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Glow beneath */}
                    <div className="absolute -bottom-10 left-0 right-0 h-20 bg-brand-orange/20 blur-3xl -z-10 rounded-full" />
                </motion.div>

            </div>
        </section>
    );
}
