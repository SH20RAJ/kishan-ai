'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 text-center bg-[#F7F7F7]">
      <div className="text-[100px] mb-4">😟</div>
      <p className="text-6xl font-extrabold text-[#FF4B4B] mb-4">Oops!</p>
      <h1 className="text-2xl font-extrabold text-[#4B4B4B] mb-2">Something went wrong</h1>
      <p className="text-[#777777] mb-8 max-w-md">{error.message || 'An unexpected error occurred. Please try again.'}</p>
      <button
        onClick={reset}
        className="px-8 py-3.5 rounded-2xl bg-[#58CC02] text-white font-extrabold shadow-[0_5px_0_#46A302] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all min-h-[48px] cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
