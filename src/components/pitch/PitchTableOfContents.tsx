import { sectionLinks } from "@/lib/pitch";

export function PitchTableOfContents() {
  return (
    <aside className="pitch-no-print sticky top-[65px] z-40 hidden border-b border-[#DDD2BD] bg-[#FFFDF8]/95 backdrop-blur lg:block">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 sm:px-6">
        <div className="shrink-0">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[#B8892E]">Pitch memo</p>
          <p className="text-[11px] font-semibold text-[#667066]">Evidence-led draft</p>
        </div>
        <nav className="flex min-w-0 flex-1 gap-2 overflow-x-auto">
          {sectionLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="whitespace-nowrap rounded-full border border-[#DDD2BD] bg-[#FAF7F0] px-3 py-1.5 text-xs font-bold text-[#47524A] transition hover:border-[#B8892E] hover:text-[#174C35]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
