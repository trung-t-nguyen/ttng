import Sidebar from '@/components/Sidebar';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Script from 'next/script';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Trung Nguyen",
    "jobTitle": "Expert Software Engineer",
    "description": "Polyglot Software Engineer with experience in frontend and backend technologies",
    "email": "nguyentrung0435@gmail.com",
    "telephone": "+84989648549",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "Vietnam"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Zuhlke Engineering Vietnam Ltd"
    },
    "knowsAbout": [
      "Java", "Angular", "Adobe Experience Manager",
      "Spring Framework", "Digital Banking", "Microservices"
    ]
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-200 flex items-start justify-center md:py-14 md:px-6">
        <div className="w-full max-w-5xl bg-white md:rounded-2xl md:shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-screen md:min-h-0">
          <Sidebar />
          <main className="flex-1 py-8 px-6 md:py-12 md:px-10 space-y-12" role="main">
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
}
