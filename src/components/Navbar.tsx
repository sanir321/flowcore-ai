import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Add these imports if not already present
import {
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Building2,
    Home,
    Wrench,
    Landmark,
    ShoppingBag,
    CreditCard,
    FileText,
    PieChart,
    Blocks,
    Handshake,
    Headphones,
    Newspaper,
    Info,
    RefreshCw,
    DollarSign,
    GraduationCap
} from 'lucide-react';

// Data for the dropdowns
const industries = [
    { icon: Building2, title: "Hospitality", description: "Automate STR and hotel operations" },
    { icon: Home, title: "Property Management", description: "From tour booked to lease signed" },
    { icon: Wrench, title: "Home Services", description: "AI that answers calls and books services" },
    { icon: Landmark, title: "Financial Services", description: "Never lose a lead again" },
    { icon: ShoppingBag, title: "E-Commerce", description: "24/7 sales and support assistant" },
    { icon: CreditCard, title: "Consumer Software", description: "Integrated, secure support for apps" },
];

const resources = [
    { icon: Blocks, title: "Integrations", description: "Connect Flowcore to your stack" },
    { icon: Handshake, title: "Agency Partner", description: "Build & resell enterprise AI solutions" },
    { icon: Headphones, title: "Flowcore Support", description: "24/7 staffed-support team" },
    { icon: Newspaper, title: "Blog", description: "Updates from the Flowcore team" },
    { icon: Info, title: "Company", description: "Conversational AI for support and sales" },
    { icon: RefreshCw, title: "Changelog", description: "We ship remarkably quickly" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || activeDropdown ? 'bg-white text-brand-dark py-4 shadow-sm' : 'bg-transparent text-white py-6'
                }`}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between">

                    {/* 1. Left: Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50 relative">
                        <span className="text-2xl font-bold tracking-tight">flowcore</span>
                    </div>

                    {/* 2. Center: Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Industries Dropdown Trigger */}
                        <div
                            className="group relative cursor-pointer flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity py-4"
                            onMouseEnter={() => setActiveDropdown('industries')}
                        >
                            <span className={`flex items-center gap-1 ${activeDropdown === 'industries' ? 'text-brand-orange' : ''}`}>
                                Industries <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                            </span>
                        </div>

                        <a href="#capabilities" className="text-sm font-medium hover:opacity-80 transition-opacity">Customers</a>
                        <a href="#solutions" className="text-sm font-medium hover:opacity-80 transition-opacity">Pricing</a>

                        {/* Resources Dropdown Trigger */}
                        <div
                            className="group relative cursor-pointer flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity py-4"
                            onMouseEnter={() => setActiveDropdown('resources')}
                        >
                            <span className={`flex items-center gap-1 ${activeDropdown === 'resources' ? 'text-brand-orange' : ''}`}>
                                Resources <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                            </span>
                        </div>
                    </div>

                    {/* 3. Right: CTAs */}
                    <div className="hidden md:flex items-center gap-6">
                        <a href="#cta" className="text-sm font-medium hover:opacity-80 transition-opacity">
                            Book Demo
                        </a>
                        <a
                            href="#how-it-works"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${isScrolled || activeDropdown
                                ? 'bg-brand-dark text-white hover:bg-black'
                                : 'bg-white text-brand-dark hover:bg-gray-100'
                                }`}
                        >
                            Product Tour
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Industries Mega Menu Dropdown */}
            {activeDropdown === 'industries' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-12 text-brand-dark"
                    onMouseEnter={() => setActiveDropdown('industries')}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-12 gap-12">

                            {/* Column 1: Industry List */}
                            <div className="col-span-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-8">Flowcore by Industry</h3>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                                    {industries.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group cursor-pointer">
                                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">{item.title}</div>
                                                <div className="text-sm text-gray-500 font-medium">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2: Learn More / Cards */}
                            <div className="col-span-4 border-l border-gray-100 pl-12">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-8">Learn More</h3>
                                <div className="space-y-4">
                                    {/* Card 1 */}
                                    <div className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 p-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white rounded-lg shadow-sm text-brand-orange">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">Case Studies</div>
                                                <div className="text-xs text-gray-500">See how others automate</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 p-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white rounded-lg shadow-sm text-blue-500">
                                                <PieChart className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">ROI Calculator</div>
                                                <div className="text-xs text-gray-500">Calculate your savings</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-8">
                                    <a href="#cta" className="text-sm font-bold text-brand-orange hover:text-orange-700 flex items-center gap-1 transition-colors">
                                        View all integrations <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}

            {/* Resources Mega Menu Dropdown */}
            {activeDropdown === 'resources' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-12 text-brand-dark"
                    onMouseEnter={() => setActiveDropdown('resources')}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-12 gap-12">

                            {/* Column 1: Resources List */}
                            <div className="col-span-8">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-8">Resources</h3>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                                    {resources.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group cursor-pointer">
                                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">{item.title}</div>
                                                <div className="text-sm text-gray-500 font-medium">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2: Learn More / Cards */}
                            <div className="col-span-4 border-l border-gray-100 pl-12">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-8">Learn More</h3>
                                <div className="space-y-4">
                                    {/* Card 1 */}
                                    <div className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 p-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white rounded-lg shadow-sm text-brand-orange">
                                                <DollarSign className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">Become an Affiliate</div>
                                                <div className="text-xs text-gray-500">Earn 30% of every deal</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 p-4 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white rounded-lg shadow-sm text-blue-500">
                                                <GraduationCap className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">Flowcore University</div>
                                                <div className="text-xs text-gray-500">Level up your AI skills</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-white text-brand-dark border-b border-gray-100 p-4 md:hidden shadow-lg"
                >
                    <div className="flex flex-col gap-2">
                        {/* Industries Accordion */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
                                className="flex items-center justify-between w-full text-base font-medium py-2 text-gray-900"
                            >
                                Industries
                                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                            </button>
                            {activeDropdown === 'industries' && (
                                <div className="pl-4 py-2 space-y-4">
                                    {industries.map((item, idx) => (
                                        <div key={idx} className="flex gap-3 items-center">
                                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="#capabilities" className="text-base font-medium py-2 text-gray-900 border-b border-gray-50">Customers</a>
                        <a href="#solutions" className="text-base font-medium py-2 text-gray-900 border-b border-gray-50">Pricing</a>

                        {/* Resources Accordion */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                                className="flex items-center justify-between w-full text-base font-medium py-2 text-gray-900"
                            >
                                Resources
                                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                            </button>
                            {activeDropdown === 'resources' && (
                                <div className="pl-4 py-2 space-y-4">
                                    {resources.map((item, idx) => (
                                        <div key={idx} className="flex gap-3 items-center">
                                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mt-4 flex flex-col gap-3">
                            <a href="#cta" className="w-full text-center py-3 rounded-lg border border-gray-200 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors">Book Demo</a>
                            <a href="#how-it-works" className="w-full bg-brand-dark text-white px-4 py-3 rounded-lg text-base font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors">
                                Product Tour
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
