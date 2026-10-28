import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const { language, toggleLanguage, isArabic } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!mounted) return null;

  const navItems = language === 'en' 
    ? ['About', 'Skills', 'Projects', 'Experience', 'Contact']
    : ['حول', 'المهارات', 'المشاريع', 'الخبرة', 'تواصل'];

  const scrollToSection = (index: number) => {
    const sectionIds = ['about', 'skills', 'projects', 'experience', 'contact'];
    const element = document.getElementById(sectionIds[index]);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-emerald-lime rounded-lg flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">
                {language === 'en' ? 'Ammar Abbas' : 'عمار عباس'}
              </h1>
              <p className="text-xs text-gray-600">
                {language === 'en' ? 'Backend Developer' : 'مطور Backend'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 text-sm"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-colors duration-200"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-100 pt-4">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
