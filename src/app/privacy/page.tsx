import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'KisanAI privacy policy - how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">KisanAI</Link>
          <Link href="/application" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">Try KisanAI</Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[var(--muted)] mb-8">Last updated: May 2026</p>

        <div className="prose prose-stone max-w-none space-y-6 text-[var(--foreground)]">
          <section>
            <h2 className="text-xl font-bold mb-3">What We Collect</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><strong>Profile Information:</strong> Name (optional), phone number, state, district, preferred language, crops you grow.</li>
              <li><strong>Usage Data:</strong> Questions asked, features used, time spent. This helps us improve the service.</li>
              <li><strong>Images:</strong> Crop photos you upload for disease detection. These are processed and may be stored to improve our models.</li>
              <li><strong>Location:</strong> District-level location for weather and mandi price lookup. We do not collect precise GPS unless you explicitly provide it.</li>
              <li><strong>Feedback:</strong> Your ratings and comments on AI responses.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">How We Use Your Data</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>To provide personalized agricultural advisory</li>
              <li>To improve the accuracy of our AI responses</li>
              <li>To show relevant weather, mandi prices, and government schemes</li>
              <li>To measure and improve our service quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Data Sharing</h2>
            <p className="text-sm text-[var(--muted)]">We do NOT sell your personal data to anyone. We may share anonymized, aggregated data with research partners to improve agricultural advisory. We may share data with government partners only with your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Data Security</h2>
            <p className="text-sm text-[var(--muted)]">We encrypt data in transit (HTTPS) and at rest. We follow industry-standard security practices. However, no system is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Your Rights</h2>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><strong>Access:</strong> You can request a copy of your data</li>
              <li><strong>Deletion:</strong> You can request deletion of your account and data</li>
              <li><strong>Correction:</strong> You can update your profile information at any time</li>
              <li><strong>Consent Withdrawal:</strong> You can withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">DPDP Act 2023 Compliance</h2>
            <p className="text-sm text-[var(--muted)]">KisanAI is committed to complying with India&apos;s Digital Personal Data Protection Act, 2023. We process data based on consent and legitimate use. We follow data minimization principles — we only collect what is necessary to provide the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Children&apos;s Privacy</h2>
            <p className="text-sm text-[var(--muted)]">KisanAI is not intended for users under 18. We do not knowingly collect data from minors.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Contact</h2>
            <p className="text-sm text-[var(--muted)]">For privacy concerns or data deletion requests, contact us at privacy@kishanai.com</p>
          </section>
        </div>
      </main>
      <footer className="bg-[var(--foreground)] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KisanAI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
