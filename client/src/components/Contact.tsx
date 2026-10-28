import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const data = portfolioData[language];

  const contactMethods = [
    {
      icon: Mail,
      label: language === 'en' ? 'Email' : 'البريد الإلكتروني',
      value: data.email,
      href: `mailto:${data.email}`
    },
    {
      icon: Phone,
      label: language === 'en' ? 'Phone' : 'الهاتف',
      value: data.phone,
      href: `tel:${data.phone}`
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: data.linkedin
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Get In Touch' : 'تواصل معي'}
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-gradient-emerald-lime rounded-full"></div>
          </div>
          <p className="text-gray-700 text-lg mt-6 max-w-2xl mx-auto">
            {language === 'en'
              ? 'I\'m always interested in hearing about new projects and opportunities. Feel free to reach out!'
              : 'أنا مهتم دائماً بسماع عن المشاريع والفرص الجديدة. لا تتردد في التواصل!'}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.icon === Linkedin ? '_blank' : undefined}
                rel={method.icon === Linkedin ? 'noopener noreferrer' : undefined}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-all duration-300 text-center hover:shadow-lg"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-emerald-lime rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {method.label}
                </h3>
                <p className="text-gray-700 text-sm break-all hover:text-emerald-600 transition-colors">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="max-w-2xl mx-auto bg-gradient-emerald-lime rounded-2xl p-12 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Ready to Start Your Project?' : 'هل أنت مستعد لبدء مشروعك؟'}
          </h3>
          <p className="text-white/90 mb-8 text-lg">
            {language === 'en'
              ? 'Let\'s collaborate and build something amazing together. Reach out today!'
              : 'دعنا نتعاون ونبني شيئاً رائعاً معاً. تواصل معي اليوم!'}
          </p>
          <a
            href={`mailto:${data.email}`}
            className="inline-block px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {language === 'en' ? 'Send Me an Email' : 'أرسل لي بريداً إلكترونياً'}
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {language === 'en' ? 'Connect with me on' : 'تابعني على'}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 hover:bg-emerald-100 rounded-full transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={24} className="text-emerald-600" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-4 bg-gray-100 hover:bg-emerald-100 rounded-full transition-colors"
              title="Email"
            >
              <Mail size={24} className="text-emerald-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
