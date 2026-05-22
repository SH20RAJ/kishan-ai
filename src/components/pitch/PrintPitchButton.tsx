"use client";

export function PrintPitchButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center justify-center rounded-md border border-[#174C35] bg-[#174C35] px-4 py-2.5 text-sm font-black text-[#FFFDF8] transition hover:bg-[#1F2A24] ${className}`}
    >
      Download / Print Pitch
    </button>
  );
}

