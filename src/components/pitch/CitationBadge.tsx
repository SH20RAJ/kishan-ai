import { sourceById } from "@/lib/pitch";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function CitationBadge({ sourceId }: { sourceId: string }) {
  const source = sourceById[sourceId];

  if (!source) {
    return (
      <span className="inline-flex rounded-full border border-[#DDD2BD] bg-[#FFFDF8] px-2.5 py-1 text-xs font-semibold text-[#667066]">
        Source pending
      </span>
    );
  }

  const content = (
    <>
      <span>{source.title}</span>
      <SourceReliabilityBadge confidence={source.confidence} />
    </>
  );

  const className = "inline-flex max-w-full items-center gap-2 rounded-full border border-[#DDD2BD] bg-[#FFFDF8] px-3 py-1.5 text-xs font-semibold text-[#174C35] transition hover:border-[#B8892E] hover:text-[#6F4E37]";

  if (!source.url) {
    return <span className={className}>{content}</span>;
  }

  return (
    <a className={className} href={source.url} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

export function CitationGroup({ sourceIds }: { sourceIds: string[] }) {
  if (!sourceIds.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {sourceIds.map((sourceId) => (
        <CitationBadge key={sourceId} sourceId={sourceId} />
      ))}
    </div>
  );
}

