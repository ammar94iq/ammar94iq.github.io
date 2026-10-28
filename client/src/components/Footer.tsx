import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-emerald-lime rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <h3 className="text-white font-bold text-lg">
                {language === 'en' ? 'Ammar Abbas' : 'عمار عباس النايلي'}
              </h3>
            </div>
            <p className="text-sm">
              {language === 'en' 
                ? 'PHP Laravel Backend Developer'
                : 'مطور PHP Laravel Backend'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  {language === 'en' ? 'About' : 'حول'}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">
                  {language === 'en' ? 'Skills' : 'المهارات'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">
                  {language === 'en' ? 'Projects' : 'المشاريع'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {language === 'en' ? 'Contact' : 'تواصل'}
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'en' ? 'Contact Info' : 'معلومات الاتصال'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:eida0xx@gmail.com" className="hover:text-emerald-400 transition-colors">
                  eida0xx@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+964780972051" className="hover:text-emerald-400 transition-colors">
                  +964 780 972 0519
                </a>
              </li>
              <li>
                <span>{language === 'en' ? 'Al Diwaniyah, Iraq' : 'الديوانية، العراق'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              {language === 'en'
                ? `© ${currentYear} Ammar Abbas Al-Naili. All rights reserved.`
                : `© ${currentYear} عمار عباس النايلي. جميع الحقوق محفوظة.`}
            </p>
            <p className="text-gray-500">
              {language === 'en'
                ? 'Built with React & Tailwind CSS'
                : 'تم البناء باستخدام React و Tailwind CSS'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
