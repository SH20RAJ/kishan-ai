export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] px-4 py-16 text-[#1F2A24] sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="h-4 w-40 rounded bg-[#DDD2BD]" />
        <div className="mt-6 h-12 max-w-3xl rounded bg-[#DDD2BD]" />
        <div className="mt-4 h-6 max-w-2xl rounded bg-[#E8E0CF]" />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["one", "two", "three", "four"].map((item) => (
            <div key={item} className="h-40 rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]" />
          ))}
        </div>
      </div>
    </div>
  );
}

