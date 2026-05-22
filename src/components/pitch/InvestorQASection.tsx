"use client";

import { useMemo, useState } from "react";
import type { PitchQA } from "@/lib/pitch";
import { QAAccordion } from "./QAAccordion";

const difficulties = [
  "All difficulties",
  "Basic",
  "Good",
  "Tough",
  "Irritating",
  "Trick",
  "Advanced VC Diligence",
];

const confidences = [
  "All confidence",
  "High proof",
  "Medium proof",
  "Assumption",
  "Needs validation",
];

export function InvestorQASection({ questions }: { questions: PitchQA[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [difficulty, setDifficulty] = useState("All difficulties");
  const [confidence, setConfidence] = useState("All confidence");

  const categories = useMemo(
    () => ["All categories", ...Array.from(new Set(questions.map((item) => item.category)))],
    [questions],
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return questions.filter((item) => {
      const matchesQuery = !normalized
        || item.question.toLowerCase().includes(normalized)
        || item.shortAnswer.toLowerCase().includes(normalized)
        || item.bestFounderAnswer.toLowerCase().includes(normalized)
        || item.category.toLowerCase().includes(normalized);
      const matchesCategory = category === "All categories" || item.category === category;
      const matchesDifficulty = difficulty === "All difficulties" || item.difficulty === difficulty;
      const matchesConfidence = confidence === "All confidence" || item.confidence === confidence;
      return matchesQuery && matchesCategory && matchesDifficulty && matchesConfidence;
    });
  }, [category, confidence, difficulty, query, questions]);

  return (
    <section id="investor-qa" className="scroll-mt-28 bg-[#FAF7F0] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-[#B8892E]">Investor Q&A</p>
          <h2 className="text-3xl font-black tracking-normal text-[#1F2A24] sm:text-4xl">
            A diligence-ready Q&A bank, built to answer hard questions without overclaiming.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#47524A] sm:text-lg">
            Search by topic, filter by category, difficulty, or proof level, then expand each answer for proof, what not to say, and the strongest founder response.
          </p>
        </div>

        <div className="pitch-no-print sticky top-[70px] z-20 mb-6 rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]/95 p-4 backdrop-blur">
          <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <label className="block">
              <span className="mb-1 block text-xs font-black uppercase tracking-[0.08em] text-[#667066]">Search Q&A</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search chatbot, government, pricing, safety..."
                className="w-full rounded-md border border-[#DDD2BD] bg-[#FAF7F0] px-3 py-2.5 text-sm text-[#1F2A24] outline-none focus:border-[#174C35]"
              />
            </label>
            <FilterSelect label="Category" value={category} options={categories} onChange={setCategory} />
            <FilterSelect label="Difficulty" value={difficulty} options={difficulties} onChange={setDifficulty} />
            <FilterSelect label="Confidence" value={confidence} options={confidences} onChange={setConfidence} />
          </div>
          <p className="mt-3 text-sm font-semibold text-[#47524A]">
            Showing {filtered.length} of {questions.length} questions.
          </p>
        </div>

        <div className="space-y-4">
          {filtered.map((item) => (
            <QAAccordion key={item.id} item={item} />
          ))}
          {!filtered.length && (
            <div className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-8 text-center text-sm font-semibold text-[#47524A]">
              No questions match these filters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-black uppercase tracking-[0.08em] text-[#667066]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-[#DDD2BD] bg-[#FAF7F0] px-3 py-2.5 text-sm font-bold text-[#1F2A24] outline-none focus:border-[#174C35]"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

