import React from 'react';

const entries = [
  {
    period: 'Aug 2021 — Present',
    title: 'Software Engineer',
    company: 'Zuehlke Engineering Vietnam',
    location: 'Ho Chi Minh City',
    bullets: [
      'Built microservice-based solutions using Kotlin/Java, Kafka, and Postgres in a cloud-native container architecture.',
      'Led Customer Service Domain development, contributing to architectural decisions and team deliverables.',
      'Collaborated with Architecture teams on solution design and testing strategies.',
    ],
  },
  {
    period: 'Jun 2015 — Aug 2021',
    title: 'Software Engineer',
    company: 'FPT Software',
    location: 'Ho Chi Minh City',
    bullets: [
      'Delivered Adobe Experience Manager and Adobe Analytics implementations as a Full Stack Engineer.',
      'Contributed to solution architecture for a port management system modernization project.',
      'Developed frontend features using Angular across multiple client engagements.',
      'Maintained web application and database infrastructure on Red Hat Enterprise Linux.',
      'Implemented system integrations between logistics platforms with cross-functional teams.',
      'Followed TDD practices and maintained design documentation to team standards.',
    ],
  },
];

export default function Experience() {
  return (
    <section>
      <SectionHeading>Experience</SectionHeading>

      <div className="space-y-8">
        {entries.map((entry) => (
          <div
            key={entry.title + entry.company}
            className="group relative pl-5 border-l-2 border-slate-100 hover:border-indigo-300 transition-colors duration-300"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-indigo-400 transition-colors duration-300" />

            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-0.5">
              <h3 className="text-sm font-bold text-slate-900">{entry.title}</h3>
              <span className="text-[11px] text-slate-400 whitespace-nowrap">{entry.period}</span>
            </div>

            <p className="text-xs font-semibold text-indigo-500 mb-3">
              {entry.company} · {entry.location}
            </p>

            <ul className="space-y-1.5">
              {entry.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-xs text-slate-600 leading-relaxed">
                  <span className="text-slate-300 flex-shrink-0 mt-0.5">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <h2 className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-slate-100" />
    </div>
  );
}
