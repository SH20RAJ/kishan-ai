import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'KisanAI privacy policy - how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-[#4B4B4B] flex items-center gap-2">🦜 KisanAI</Link>
          <Link href="/application" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#58CC02] text-white font-extrabold rounded-2xl text-sm shadow-[0_4px_0_#46A302] hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">Try KisanAI</Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-3xl font-extrabold text-[#4B4B4B] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#777777]">Last updated: May 2026</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">📋 What We Collect</h2>
            <ul className="space-y-2 text-sm text-[#777777]">
              <li><strong className="text-[#4B4B4B]">Profile Information:</strong> Name (optional), phone number, state, district, preferred language, crops you grow.</li>
              <li><strong className="text-[#4B4B4B]">Usage Data:</strong> Questions asked, features used, time spent. This helps us improve the service.</li>
              <li><strong className="text-[#4B4B4B]">Images:</strong> Crop photos you upload for disease detection. These are processed and may be stored to improve our models.</li>
              <li><strong className="text-[#4B4B4B]">Location:</strong> District-level location for weather and mandi price lookup. We do not collect precise GPS unless you explicitly provide it.</li>
              <li><strong className="text-[#4B4B4B]">Feedback:</strong> Your ratings and comments on AI responses.</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">⚙️ How We Use Your Data</h2>
            <ul className="space-y-2 text-sm text-[#777777]">
              <li>To provide personalized agricultural advisory</li>
              <li>To improve the accuracy of our AI responses</li>
              <li>To show relevant weather, mandi prices, and government schemes</li>
              <li>To measure and improve our service quality</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">🤝 Data Sharing</h2>
            <p className="text-sm text-[#777777]">We do NOT sell your personal data to anyone. We may share anonymized, aggregated data with research partners to improve agricultural advisory. We may share data with government partners only with your explicit consent.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">🔐 Data Security</h2>
            <p className="text-sm text-[#777777]">We encrypt data in transit (HTTPS) and at rest. We follow industry-standard security practices. However, no system is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">✅ Your Rights</h2>
            <ul className="space-y-2 text-sm text-[#777777]">
              <li><strong className="text-[#4B4B4B]">Access:</strong> You can request a copy of your data</li>
              <li><strong className="text-[#4B4B4B]">Deletion:</strong> You can request deletion of your account and data</li>
              <li><strong className="text-[#4B4B4B]">Correction:</strong> You can update your profile information at any time</li>
              <li><strong className="text-[#4B4B4B]">Consent Withdrawal:</strong> You can withdraw consent for data processing</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">🏛️ DPDP Act 2023 Compliance</h2>
            <p className="text-sm text-[#777777]">KisanAI is committed to complying with India&apos;s Digital Personal Data Protection Act, 2023. We process data based on consent and legitimate use. We follow data minimization principles — we only collect what is necessary to provide the service.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">👶 Children&apos;s Privacy</h2>
            <p className="text-sm text-[#777777]">KisanAI is not intended for users under 18. We do not knowingly collect data from minors.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">📞 Contact</h2>
            <p className="text-sm text-[#777777]">For privacy concerns or data deletion requests, contact us at privacy@kishanai.com</p>
          </section>
        </div>
      </main>
      <footer className="bg-[#4B4B4B] text-white py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-lg font-extrabold text-white flex items-center gap-2">🦜 KisanAI</Link>
            <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} KisanAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
