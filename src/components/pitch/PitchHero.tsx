import { heroMetrics } from "@/lib/pitch";
import { MetricCard } from "./MetricCard";
import { PrintPitchButton } from "./PrintPitchButton";

export function PitchHero() {
  return (
    <section id="hero" className="scroll-mt-28 bg-[#FAF7F0] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#DDD2BD] bg-[#FFFDF8] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#6F4E37]">
              Investor pitch memo
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-normal text-[#1F2A24] sm:text-6xl">
              KisanAI: AI Decision Infrastructure for Indian Agriculture
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#47524A]">
              A vernacular-first AI farming assistant helping farmers, FPOs, and agri institutions make faster, safer, source-backed decisions across crop advisory, disease triage, weather action, mandi context, and scheme navigation.
            </p>
            <div className="mt-6 rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
              <p className="text-sm font-black uppercase tracking-[0.08em] text-[#174C35]">One-line pitch</p>
              <p className="mt-2 text-base leading-7 text-[#1F2A24]">
                KisanAI turns fragmented agricultural information into local-language next steps for farmers and the institutions that support them.
              </p>
              <p className="mt-4 text-sm font-black uppercase tracking-[0.08em] text-[#174C35]">30-second pitch</p>
              <p className="mt-2 text-base leading-7 text-[#47524A]">
                Indian farmers still make high-stakes decisions through scattered advice from dealers, portals, WhatsApp groups, weather apps, and mandi agents. KisanAI brings disease triage, weather interpretation, mandi context, and scheme guidance into one mobile-first assistant, starting narrow with one crop cluster, one region, and partner-led distribution.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#investor-qa" className="inline-flex items-center justify-center rounded-md border border-[#174C35] bg-[#174C35] px-5 py-3 text-sm font-black text-[#FFFDF8] transition hover:bg-[#1F2A24]">
                View Investor Q&A
              </a>
              <a href="#data-proof" className="inline-flex items-center justify-center rounded-md border border-[#DDD2BD] bg-[#FFFDF8] px-5 py-3 text-sm font-black text-[#174C35] transition hover:border-[#B8892E]">
                View Data Proof
              </a>
              <PrintPitchButton className="sm:hidden" />
              <a href="mailto:partnerships@kishanai.com?subject=KisanAI%20pilot%20conversation" className="inline-flex items-center justify-center rounded-md border border-[#DDD2BD] bg-[#FFFDF8] px-5 py-3 text-sm font-black text-[#174C35] transition hover:border-[#B8892E]">
                Contact for Pilot
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {heroMetrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

