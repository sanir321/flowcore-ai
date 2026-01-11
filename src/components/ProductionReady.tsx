import { CheckCircle2 } from 'lucide-react';

const features = [
    "No Hallucinations",
    "Role-Based Access",
    "Audit Logs",
    "SSO Integration"
];

export default function ProductionReady() {
    return (
        <section className="py-24 bg-brand-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 overflow-hidden relative">

                    <div className="grid md:grid-cols-2 gap-16 items-center z-10 relative">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
                                Production-Ready <br />
                                <span className="text-brand-orange">Day One.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We don't just wrap an LLM. Flowcore provides the orchestration layer that makes AI employees reliable, secure, and ready for real enterprise workloads.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((f, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                                        <span className="text-sm font-medium text-slate-700">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-brand-dark/5 p-8 border border-dashed border-slate-300 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-slate-200 mb-2">99.9%</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-widest">Uptime SLA</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
