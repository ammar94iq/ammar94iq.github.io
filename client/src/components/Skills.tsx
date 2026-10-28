import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const { language } = useLanguage();
  const data = portfolioData[language];
  const [visibleSkills, setVisibleSkills] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.getAttribute('data-skill-id');
            if (skillId) {
              setVisibleSkills((prev) => ({ ...prev, [skillId]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = sectionRef.current?.querySelectorAll('[data-skill-id]');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { key: 'backend', label: language === 'en' ? 'Backend Development' : 'تطوير Backend' },
    { key: 'database', label: language === 'en' ? 'Database' : 'قواعس البيانات' },
    { key: 'frontend', label: language === 'en' ? 'Frontend' : 'Frontend' },
    { key: 'payments', label: language === 'en' ? 'Payment Integration' : 'تكامل الدفع' },
    { key: 'mobile', label: language === 'en' ? 'Mobile & APIs' : 'الجوال و APIs' },
    { key: 'devops', label: language === 'en' ? 'DevOps & Server' : 'DevOps والخوادم' },
    { key: 'tools', label: language === 'en' ? 'Development Tools' : 'أدوات التطوير' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Technical Skills' : 'المهارات التقنية'}
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-gradient-emerald-lime rounded-full"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.key}
              data-skill-id={category.key}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                visibleSkills[category.key] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: visibleSkills[category.key] ? `${categoryIndex * 0.1}s` : '0s'
              }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-gradient-emerald-lime rounded-full"></span>
                {category.label}
              </h3>
              
              <div className="space-y-2">
                {data.skills[category.key as keyof typeof data.skills].map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-gray-700"
                    style={{
                      opacity: visibleSkills[category.key] ? 1 : 0,
                      transform: visibleSkills[category.key] ? 'translateX(0)' : 'translateX(-10px)',
                      transition: `all 0.3s ease-out ${index * 0.05}s`
                    }}
                  >
                    <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md border-l-4 border-emerald-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Core Competencies' : 'الكفاءات الأساسية'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.competencies.map((competency, index) => (
              <div
                key={competency}
                className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.08}s forwards`,
                  opacity: 0
                }}
              >
                <span className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></span>
                <span className="text-gray-800 font-medium text-sm">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
