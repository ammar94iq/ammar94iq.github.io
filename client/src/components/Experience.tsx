import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Experience() {
  const { language } = useLanguage();
  const data = portfolioData[language];
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute('data-item-id');
            if (itemId) {
              setVisibleItems((prev) => ({ ...prev, [itemId]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const itemElements = sectionRef.current?.querySelectorAll('[data-item-id]');
    itemElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Professional Experience' : 'الخبرة المهنية'}
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-gradient-emerald-lime rounded-full"></div>
          </div>
        </div>

        {/* Timeline */}
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          {data.experience.map((exp, expIndex) => (
            <div
              key={expIndex}
              data-item-id={`exp-${expIndex}`}
              className={`relative pl-8 md:pl-0 pb-12 ${
                visibleItems[`exp-${expIndex}`] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: visibleItems[`exp-${expIndex}`] ? '0s' : '0s'
              }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-emerald-lime transform md:-translate-x-1/2"></div>

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-2 h-2 bg-emerald-600 rounded-full transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 mt-2"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${expIndex % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-sm mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mt-4">
                    {exp.highlights.map((highlight, highlightIndex: number) => {
                      const highlightKey = `highlight-${expIndex}-${highlightIndex}`;
                      return (
                      <div
                        key={highlightIndex}
                        data-item-id={highlightKey}
                        className={`flex gap-3 text-gray-700 text-sm ${
                          visibleItems[highlightKey] ? 'animate-fade-in' : 'opacity-0'
                        }`}
                        style={{
                          animationDelay: visibleItems[`exp-${expIndex}`] ? `${highlightIndex * 0.05}s` : '0s'
                        }}
                      >
                        <CheckCircle size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'en' ? 'Education' : 'التعليم'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <div
              data-item-id="education"
              className={`bg-white rounded-xl p-8 shadow-md border-l-4 border-emerald-600 animate-fade-in-up`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {data.education.degree}
                  </h4>
                  <p className="text-emerald-600 font-semibold text-sm mt-1">
                    {data.education.university}
                  </p>
                </div>
              </div>
              <div className="space-y-2 mt-4 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-800">{language === 'en' ? 'Field of Study' : 'مجال الدراسة'}:</span> {data.education.field}
                </p>
                <p>
                  <span className="font-semibold text-gray-800">{language === 'en' ? 'Duration' : 'المدة'}: </span>
                  {data.education.startYear} → {data.education.endYear}
                </p>
              </div>
            </div>

            {/* Languages Card */}
            <div
              data-item-id="languages"
              className={`bg-white rounded-xl p-8 shadow-md border-l-4 border-lime-500 animate-fade-in-up`}
              style={{
                animationDelay: '0.1s'
              }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Languages' : 'اللغات'}
              </h4>
              <div className="space-y-3">
                {data.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-gray-800 font-medium">{lang.name}</span>
                    <span className="text-emerald-600 font-semibold text-sm">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
