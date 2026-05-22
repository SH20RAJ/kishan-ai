import Link from "next/link";
import { sectionLinks } from "@/lib/pitch";
import { PrintPitchButton } from "./PrintPitchButton";

export function PitchNavigation() {
  return (
    <header className="pitch-no-print sticky top-0 z-50 border-b border-[#DDD2BD] bg-[#FAF7F0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-black text-[#174C35]">
          KisanAI
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-bold text-[#47524A] lg:flex">
          <a href="#problem" className="hover:text-[#174C35]">Problem</a>
          <a href="#market-opportunity" className="hover:text-[#174C35]">Market</a>
          <a href="#business-model" className="hover:text-[#174C35]">Model</a>
          <a href="#investor-qa" className="hover:text-[#174C35]">Q&A</a>
          <a href="#data-proof" className="hover:text-[#174C35]">Proof</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="mailto:partnerships@kishanai.com?subject=KisanAI%20pilot%20or%20investment%20conversation" className="hidden rounded-md border border-[#DDD2BD] bg-[#FFFDF8] px-4 py-2.5 text-sm font-black text-[#174C35] transition hover:border-[#B8892E] sm:inline-flex">
            Contact for Pilot
          </a>
          <PrintPitchButton />
        </div>
      </div>
      <div className="overflow-x-auto border-t border-[#DDD2BD] lg:hidden">
        <div className="flex min-w-max gap-2 px-4 py-2">
          {sectionLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="rounded-full border border-[#DDD2BD] bg-[#FFFDF8] px-3 py-1.5 text-xs font-bold text-[#47524A]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

