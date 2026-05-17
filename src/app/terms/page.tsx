import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'KisanAI terms of service - usage terms and disclaimers.',
};

export default function TermsPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">KisanAI</Link>
          <Link href="/application" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">Try KisanAI</Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">Terms of Service</h1>
        <p className="text-sm text-[var(--muted)] mb-8">Last updated: May 2026</p>

        <div className="space-y-6 text-sm text-[var(--muted)]">
          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Service Description</h2>
            <p>KisanAI is an AI-assisted agricultural guidance platform. It provides information about crop diseases, weather, mandi prices, and government schemes based on curated knowledge sources.</p>
          </section>

          <section className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <h2 className="text-xl font-bold text-amber-800 mb-3">Important Disclaimers</h2>
            <ul className="space-y-2 text-amber-700">
              <li><strong>NOT a substitute for professional advice:</strong> KisanAI provides general guidance only. For critical decisions, always consult your local agriculture officer, KVK, or certified expert.</li>
              <li><strong>No accuracy guarantee:</strong> While we strive for accuracy, AI responses may contain errors. Always verify information with official sources.</li>
              <li><strong>No pesticide dosage recommendations:</strong> We do not recommend specific chemical dosages unless sourced from verified, official guidelines.</li>
              <li><strong>No scheme approval guarantee:</strong> We explain eligibility criteria but cannot guarantee approval for any government scheme.</li>
              <li><strong>No yield improvement promise:</strong> We do not promise that using KisanAI will increase your crop yield.</li>
              <li><strong>No financial advice:</strong> Mandi price information is for reference only. We do not provide financial or trading advice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">User Responsibilities</h2>
            <ul className="space-y-2">
              <li>Use KisanAI as a decision-support tool, not the sole source of truth</li>
              <li>Verify critical information with official sources</li>
              <li>Do not rely on KisanAI for emergency situations</li>
              <li>Provide accurate information when using the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Limitation of Liability</h2>
            <p>KisanAI and its team are not liable for any losses, damages, or crop failures resulting from reliance on information provided by the service. Use at your own discretion.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">Contact</h2>
            <p>For questions about these terms, contact us at legal@kishanai.com</p>
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
