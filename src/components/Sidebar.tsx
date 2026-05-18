import React from 'react';
import { CONTACT } from '@/lib/contact';

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Java', 'Kotlin', 'TypeScript', 'JavaScript'],
  },
  {
    label: 'Frameworks',
    skills: ['Spring Boot', 'Spring Data JPA', 'Angular', 'myBatis'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Kafka', 'CircleCI', 'Harness'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'Oracle', 'Redis'],
  },
  {
    label: 'Integration',
    skills: ['RabbitMQ', 'WSO2 API Mgmt', 'WSO2 Identity', 'Twilio'],
  },
  {
    label: 'Adobe',
    skills: ['AEM', 'Adobe Analytics'],
  },
  {
    label: 'Testing',
    skills: ['Pact', 'JUnit', 'Integration Testing'],
  },
  {
    label: 'Practices',
    skills: ['Agile', 'Microservices', 'CI/CD', 'TDD'],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-[270px] flex-shrink-0 bg-slate-900 flex flex-col print:hidden">
      {/* Accent bar */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 flex-shrink-0" />

      <div className="flex-1 px-8 py-10 flex flex-col gap-9 overflow-y-auto">
        {/* Name & title */}
        <div>
          <h1 className="text-2xl font-bold text-white leading-tight tracking-tight">
            {CONTACT.name}
          </h1>
          <p className="text-indigo-400 text-sm font-medium mt-2 tracking-wide" itemProp="jobTitle">
            {CONTACT.title}
          </p>
        </div>

        {/* Profile */}
        <div>
          <SidebarLabel>Profile</SidebarLabel>
          <p className="text-slate-400 text-xs leading-relaxed">
            Full-stack engineer with experience in Java, Kotlin, Angular, and Adobe Experience Manager.
            Passionate about cloud-native architectures and delivering quality software.
          </p>
        </div>

        {/* Contact */}
        <div>
          <SidebarLabel>Contact</SidebarLabel>
          <div className="space-y-2.5 text-xs text-slate-400">
            <ContactRow icon="📍">{CONTACT.locationCity}, {CONTACT.locationCountry}</ContactRow>
            <ContactRow icon="✉">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors break-all">
                {CONTACT.email}
              </a>
            </ContactRow>
            <ContactRow icon="📞">
              <a href={CONTACT.phoneTel} className="hover:text-white transition-colors">
                {CONTACT.phone}
              </a>
            </ContactRow>
            <ContactRow icon="in">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {CONTACT.linkedinDisplay}
              </a>
            </ContactRow>
            <ContactRow icon="gh">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {CONTACT.githubDisplay}
              </a>
            </ContactRow>
          </div>
        </div>

        {/* Skills */}
        <div>
          <SidebarLabel>Skills</SidebarLabel>
          <div className="space-y-4">
            {skillGroups.map(({ label, skills }) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-1.5">{label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-3">
      {children}
    </h2>
  );
}

type ContactIcon = '📍' | '✉' | '📞' | 'in' | 'gh';

function ContactRow({ icon, children }: { icon: ContactIcon; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-slate-600 mt-0.5 flex-shrink-0 font-mono text-[10px] w-4 text-center">
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}
