import React from 'react';

export default function Header() {
  return (
    <header className="text-center" itemScope itemType="http://schema.org/Person">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900" itemProp="name">
        Trung Nguyen,{' '}
        <span className="font-normal" itemProp="jobTitle">Software Engineer</span>
      </h1>

      <div className="mt-3 text-sm text-gray-500 space-y-1" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        <p>
          <span itemProp="addressLocality">Ho Chi Minh City</span>,{' '}
          <span itemProp="addressCountry">Vietnam</span>
        </p>
        <p>
          <a href="tel:+84989648549" itemProp="telephone" className="hover:text-gray-800 transition-colors">
            +84 989 648 549
          </a>
          {' – '}
          <a href="mailto:nguyentrung0435@gmail.com" itemProp="email" className="hover:text-gray-800 transition-colors">
            nguyentrung0435@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/trung-t-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            LinkedIn
          </a>
          {' – '}
          <a
            href="https://github.com/trung-t-nguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>

      <div className="mt-6 border-t border-gray-300" />

      <div className="mt-6 grid grid-cols-[160px_1fr] gap-8 text-left">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-900 pt-0.5">Profile</p>
        <p className="text-sm text-gray-600 leading-relaxed" itemProp="description">
          A dedicated software engineer with experience in full-stack development, working with Java, React, Angular,
          and Adobe Experience Manager. Passionate about building quality software solutions and collaborating with
          teams to deliver meaningful projects.
        </p>
      </div>
    </header>
  );
}
