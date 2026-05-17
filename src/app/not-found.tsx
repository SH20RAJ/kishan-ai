import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 text-center bg-[#F7F7F7]">
      <div className="text-[100px] mb-4">🦜</div>
      <p className="text-6xl font-extrabold text-[#58CC02] mb-4">404</p>
      <h1 className="text-2xl font-extrabold text-[#4B4B4B] mb-2">Page not found</h1>
      <p className="text-[#777777] mb-8 max-w-md">Oops! The page you are looking for does not exist. Maybe it flew away with the birds.</p>
      <div className="flex gap-4">
        <Link href="/" className="px-6 py-3.5 rounded-2xl bg-[#58CC02] text-white font-extrabold shadow-[0_5px_0_#46A302] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all min-h-[48px] inline-flex items-center">
          Go Home
        </Link>
        <Link href="/application" className="px-6 py-3.5 rounded-2xl bg-[#FFC800] text-[#4B4B4B] font-extrabold shadow-[0_5px_0_#E6B400] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all min-h-[48px] inline-flex items-center">
          Try KisanAI
        </Link>
      </div>
    </div>
  );
}
