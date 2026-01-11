
export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100 text-slate-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2">
                        <span className="text-xl font-bold text-slate-900 block mb-6">flowcore</span>
                        <p className="text-sm max-w-xs mb-6">
                            Building the workforce of the future with AI employees that think, plan, and act.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-8 h-8 bg-gray-100 rounded-full" />
                            <div className="w-8 h-8 bg-gray-100 rounded-full" />
                            <div className="w-8 h-8 bg-gray-100 rounded-full" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Agents</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Workflows</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Security</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Solutions</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Support</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Sales</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Operations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Terms</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <div>© {new Date().getFullYear()} Flowcore AI Inc.</div>
                    <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        Global Systems Operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
