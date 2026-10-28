import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const { language, isArabic } = useLanguage();
  const data = portfolioData[language];

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-emerald-lime opacity-5 -z-10"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isArabic ? 'md:order-2' : ''}`}>
            <div className="space-y-4 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full">
                <p className="text-emerald-700 font-semibold text-sm">
                  {language === 'en' ? '👋 Welcome to my portfolio' : '👋 مرحبا بك في محفظتي'}
                </p>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {data.name}
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-emerald-lime rounded-full"></div>
                <p className="text-2xl font-semibold text-emerald-600">
                  {data.title}
                </p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {data.summary}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={20} className="text-emerald-600" />
                <a href={`mailto:${data.email}`} className="hover:text-emerald-600 transition-colors">
                  {data.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={20} className="text-emerald-600" />
                <a href={`tel:${data.phone}`} className="hover:text-emerald-600 transition-colors">
                  {data.phone}
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-emerald-lime text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                {language === 'en' ? 'View My Work' : 'شاهد أعمالي'}
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors duration-200 flex items-center gap-2"
              >
                LinkedIn
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative h-96 md:h-full min-h-96 ${isArabic ? 'md:order-1' : ''}`}>
            <div className="absolute inset-0 bg-gradient-emerald-lime rounded-2xl opacity-10"></div>
            <img
              src="/images/hero-bg.png"
              alt="Hero background"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Floating card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-xl border border-gray-100 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm text-gray-600 font-medium">
                {language === 'en' ? 'Experience' : 'الخبرة'}
              </p>
              <p className="text-3xl font-bold text-emerald-600 mt-1">5+</p>
              <p className="text-sm text-gray-600 mt-1">
                {language === 'en' ? 'Years of Professional Development' : 'سنوات من التطوير المهني'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
