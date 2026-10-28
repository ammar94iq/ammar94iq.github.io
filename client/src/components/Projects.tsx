import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const { language, isArabic } = useLanguage();
  const data = portfolioData[language];
  const [visibleProjects, setVisibleProjects] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id');
            if (projectId) {
              setVisibleProjects((prev) => ({ ...prev, [projectId]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = sectionRef.current?.querySelectorAll('[data-project-id]');
    projectElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Selected Projects' : 'المشاريع المختارة'}
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-gradient-emerald-lime rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={sectionRef} className="space-y-16">
          {data.projects.map((project, index) => (
            <div
              key={index}
              data-project-id={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                isArabic ? (index % 2 === 0 ? 'md:flex-row-reverse' : '') : (index % 2 === 1 ? 'md:flex-row-reverse' : '')
              } ${visibleProjects[index] ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: visibleProjects[index] ? `${index * 0.1}s` : '0s'
              }}
            >
              {/* Image */}
              <div className={`relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${
                isArabic ? (index % 2 === 0 ? 'md:order-2' : 'md:order-1') : (index % 2 === 1 ? 'md:order-2' : 'md:order-1')
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className={`space-y-4 ${
                isArabic ? (index % 2 === 0 ? 'md:order-1' : 'md:order-2') : (index % 2 === 1 ? 'md:order-1' : 'md:order-2')
              }`}>
                <div className="inline-block px-3 py-1 bg-emerald-50 rounded-full">
                  <p className="text-emerald-700 font-semibold text-xs">
                    {language === 'en' ? 'Featured Project' : 'مشروع مميز'}
                  </p>
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="pt-4">
                  <p className="text-sm font-semibold text-gray-600 mb-3">
                    {language === 'en' ? 'Technologies' : 'التقنيات'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-8 bg-gradient-emerald-lime rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-3">
            {language === 'en' ? 'Interested in Working Together?' : 'مهتم بالعمل معي؟'}
          </h3>
          <p className="text-white/90 mb-6">
            {language === 'en' 
              ? 'Let\'s discuss your next project and how I can help bring your ideas to life.'
              : 'دعنا نناقش مشروعك القادم وكيف يمكنني مساعدتك في تحقيق أفكارك.'}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {language === 'en' ? 'Get In Touch' : 'تواصل معي'}
          </a>
        </div>
      </div>
    </section>
  );
}
