'use client';

import { useState } from 'react';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('privacy'); // for future toggles if needed

  return (
    <>

    <div className="bg-gradient-to-b to-white from-red-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Privacy Policy Box */}
        <Card title="Privacy Policy" isActive={activeTab === 'privacy'}>
          <p className="mb-4">
            At <strong>Happy Hours School, Bhilwara</strong>, we are committed to protecting the privacy and security of our students, parents, and visitors.
          </p>
          <h3 className="font-bold mt-4 mb-2 text-[#bf213e]">1. Information We Collect</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Names, contact details, and addresses provided through forms.</li>
            <li>Photos, achievements, and student records submitted for publication or admin purposes.</li>
            <li>Website interaction data (e.g., pages visited, time spent).</li>
          </ul>
          <h3 className="font-bold mt-4 mb-2 text-[#bf213e]">2. How We Use It</h3>
          <p className="mb-4">For communication, school record-keeping, and website improvement.</p>
          <h3 className="font-bold mt-4 mb-2 text-[#bf213e]">3. Consent & Security</h3>
          <p className="mb-2">By using this site, you agree to our policy. We use basic security protocols to safeguard your data.</p>
          <p className="text-sm italic text-gray-500 mt-6">Last updated: June 2025</p>
        </Card>

        {/* Terms & Conditions Box */}
        <Card title="Terms & Conditions" isActive={activeTab === 'terms'}>
          <p className="mb-4">
            By using the <strong>Happy Hours School</strong> website, you agree to comply with the following terms:
          </p>
          <h3 className="font-bold mt-4 mb-2 text-[#bf213e]">1. Website Use</h3>
          <p className="mb-4">
            Content is for informational purposes only. Do not misuse or misrepresent any data provided.
          </p>
          <h3 className="font-bold mt-4 mb-2 text-[#bf213e]">2. Content Ownership</h3>
          <p className="mb-4">
            All images, student information, and achievements remain the intellectual property of Happy Hours School.
          </p>
          <h3 className="font-bold mt-4 mb-2 text-[#bf213e]">3. Modifications</h3>
          <p className="mb-2">
            Terms may be updated without prior notice. Please review them periodically.
          </p>
          <p className="text-sm italic text-gray-500 mt-6">Last updated: June 2025</p>
        </Card>
      </div>
    </div>
    </>
    
  );
}

function Card({ title, children, isActive }) {
  return (
    <div
      className={`bg-white p-6 md:p-8 rounded-2xl border border-[#d4d9ff] shadow-lg transition-all duration-300`}
    >
      <h2 className="text-3xl lg:text-4xl mbl uppercase text-[#2d1a6b] mb-3">{title}</h2>
      <div className="text-gray-700 text-base leading-relaxed">{children}</div>
    </div>
  );
}
