import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'KisanAI terms of service - usage terms and disclaimers.',
};

export default function TermsPage() {
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
          <div className="text-5xl mb-4">📜</div>
          <h1 className="text-3xl font-extrabold text-[#4B4B4B] mb-2">Terms of Service</h1>
          <p className="text-sm text-[#777777]">Last updated: May 2026</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">🌾 Service Description</h2>
            <p className="text-sm text-[#777777]">KisanAI is an AI-assisted agricultural guidance platform. It provides information about crop diseases, weather, mandi prices, and government schemes based on curated knowledge sources.</p>
          </section>

          <section className="bg-[#FFC800]/10 rounded-2xl p-6 border-2 border-[#FFC800]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">⚠️ Important Disclaimers</h2>
            <ul className="space-y-2 text-sm text-[#4B4B4B]">
              <li><strong>NOT a substitute for professional advice:</strong> KisanAI provides general guidance only. For critical decisions, always consult your local agriculture officer, KVK, or certified expert.</li>
              <li><strong>No accuracy guarantee:</strong> While we strive for accuracy, AI responses may contain errors. Always verify information with official sources.</li>
              <li><strong>No pesticide dosage recommendations:</strong> We do not recommend specific chemical dosages unless sourced from verified, official guidelines.</li>
              <li><strong>No scheme approval guarantee:</strong> We explain eligibility criteria but cannot guarantee approval for any government scheme.</li>
              <li><strong>No yield improvement promise:</strong> We do not promise that using KisanAI will increase your crop yield.</li>
              <li><strong>No financial advice:</strong> Mandi price information is for reference only. We do not provide financial or trading advice.</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">👤 User Responsibilities</h2>
            <ul className="space-y-2 text-sm text-[#777777]">
              <li>Use KisanAI as a decision-support tool, not the sole source of truth</li>
              <li>Verify critical information with official sources</li>
              <li>Do not rely on KisanAI for emergency situations</li>
              <li>Provide accurate information when using the service</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">⚖️ Limitation of Liability</h2>
            <p className="text-sm text-[#777777]">KisanAI and its team are not liable for any losses, damages, or crop failures resulting from reliance on information provided by the service. Use at your own discretion.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-3">📞 Contact</h2>
            <p className="text-sm text-[#777777]">For questions about these terms, contact us at legal@kishanai.com</p>
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
