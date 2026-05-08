import React from 'react';

const projects = [
  {
    tag: 'Fintech',
    title: 'Digital Banking Platform',
    location: 'Singapore',
    description:
      'Cloud-native digital banking platform built with microservices architecture, serving customers in Singapore.',
    highlights: [
      'Scalable microservices with Kotlin/Java, Kafka, and Postgres.',
      'Led Customer Service Domain technical delivery.',
      'Collaborated with enterprise architects on solution design.',
    ],
  },
  {
    tag: 'Digital Marketing',
    title: 'Adobe Service Offering',
    location: 'Vietnam',
    description:
      'Adobe Experience Cloud implementation for a digital marketing agency, enhancing content operations and analytics.',
    highlights: [
      'Integrated AEM with Analytics, Target, and Campaign.',
      'Optimized content management workflows.',
    ],
  },
  {
    tag: 'Port Operations',
    title: 'Port Management Modernization',
    location: 'Vietnam',
    description:
      'Modernized legacy port management systems, improving UX and operational efficiency for port operators.',
    highlights: [
      'Designed modern solution architecture for port ops.',
      'Built frontend with Angular; deployed via Docker.',
      'Integrated WSO2 Identity Server for enterprise auth.',
    ],
  },
  {
    tag: 'Logistics',
    title: 'Total Logistics Management',
    location: 'Vietnam',
    description:
      'Enterprise logistics platform integrating transportation and warehouse management across multiple business units.',
    highlights: [
      'System integrations for logistics and transport ops.',
      'Mobile warehouse management solution.',
      'Infrastructure maintenance on RHEL.',
    ],
  },
];

export default function Projects() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-7">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 whitespace-nowrap">
          Projects
        </h2>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group border border-slate-100 rounded-xl p-5 flex flex-col gap-3 hover:border-indigo-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-50 px-2 py-0.5 rounded">
                {project.tag}
              </span>
              <span className="text-[10px] text-slate-400">{project.location}</span>
            </div>

            <h3 className="text-sm font-bold text-slate-900 leading-snug">{project.title}</h3>

            <p className="text-xs text-slate-500 leading-relaxed">{project.description}</p>

            <ul className="space-y-1.5 mt-auto pt-1">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-xs text-slate-600">
                  <span className="text-indigo-300 flex-shrink-0 mt-0.5">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
