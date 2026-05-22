import type { ReactNode } from "react";

export function PitchSection({
  id,
  label,
  title,
  intro,
  children,
  tone = "paper",
}: {
  id: string;
  label?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "paper" | "surface" | "muted" | "dark";
}) {
  const toneClass = {
    paper: "bg-[#FAF7F0]",
    surface: "bg-[#FFFDF8]",
    muted: "bg-[#F1EBDD]",
    dark: "bg-[#174C35] text-[#FFFDF8]",
  }[tone];

  return (
    <section id={id} className={`scroll-mt-28 py-14 sm:py-20 ${toneClass}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-3xl">
          {label && <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#B8892E]">{label}</p>}
          <h2 className={`text-3xl font-black tracking-normal sm:text-4xl ${tone === "dark" ? "text-[#FFFDF8]" : "text-[#1F2A24]"}`}>
            {title}
          </h2>
          {intro && <p className={`mt-4 text-base leading-7 sm:text-lg ${tone === "dark" ? "text-[#E8E0CF]" : "text-[#47524A]"}`}>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

