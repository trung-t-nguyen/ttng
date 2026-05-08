import React from 'react';

const skillCategories: Record<string, string[]> = {
  'Programming Languages': ['Java', 'Kotlin', 'JavaScript / TypeScript'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CircleCI', 'Harness', 'Mesosphere DCOS', 'Marathon'],
  'Frameworks & Libraries': ['Spring Boot', 'Spring Data JPA', 'Angular', 'Struts', 'myBatis'],
  'Messaging & Integration': ['Apache Kafka', 'RabbitMQ', 'Twilio', 'WSO2 API Management', 'WSO2 Identity Server'],
  'Databases & Caching': ['Oracle', 'PostgreSQL', 'Redis'],
  'Application Servers': ['Apache Tomcat', 'IBM WebSphere'],
  'Adobe Experience Cloud': ['Adobe Experience Manager (AEM)', 'Adobe Analytics (AA)'],
  'Testing & Quality': ['Pact Contract Testing', 'JUnit', 'Integration Testing'],
  'E-commerce': ['Bazaar Voice', 'Price Spider'],
  Methodologies: ['Agile', 'Microservices Architecture', 'DevOps', 'CI/CD'],
};

export default function Skills() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 whitespace-nowrap">Skills</h2>
        <div className="flex-1 border-t border-gray-300" />
      </div>

      <div className="space-y-3">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="grid grid-cols-[160px_1fr] gap-8 items-start">
            <p className="text-xs text-gray-400 pt-1">{category}</p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
