import { sectionLinks } from "@/lib/pitch";

export function PitchTableOfContents() {
  return (
    <aside className="pitch-no-print fixed left-4 top-28 z-30 hidden w-48 rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]/95 p-4 shadow-sm backdrop-blur xl:block">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#B8892E]">Pitch memo</p>
      <p className="mt-1 text-xs font-semibold text-[#667066]">Evidence-led draft</p>
      <nav className="mt-4 max-h-[65vh] space-y-1 overflow-y-auto pr-1">
        {sectionLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="block rounded-md px-2 py-1.5 text-xs font-bold text-[#47524A] transition hover:bg-[#F1EBDD] hover:text-[#174C35]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

