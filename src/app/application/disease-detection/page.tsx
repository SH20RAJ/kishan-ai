'use client';

import { useState } from 'react';
import type { DiseaseResult } from '@/types';

const crops = ['Rice', 'Wheat', 'Cotton', 'Tomato', 'Potato', 'Onion', 'Chilli', 'Soybean', 'Mustard', 'Sugarcane'];

export default function DiseaseDetectionPage() {
  const [crop, setCrop] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState<DiseaseResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const analyze = async () => {
    if (!crop) return;
    setLoading(true);
    try {
      const res = await fetch('/api/disease-detect', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ crop, symptoms, image: imagePreview }),
      });
      const data = (await res.json()) as { data: DiseaseResult };
      setResult(data.data);
    } catch {
      setResult({ possibleIssue: 'Analysis failed', confidence: 'low', description: 'Could not analyze. Please try again.',
        recommendedActions: ['Try uploading a clearer image', 'Consult your local KVK'],
        caution: 'Unable to complete analysis. Please consult an expert.', consultExpert: true });
    } finally { setLoading(false); }
  };

  return (
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto bg-white">
      {/* Header with Kino */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#FF9600] flex items-center justify-center text-2xl shadow-[0_3px_0_#E68600]">📸</div>
        <div>
          <h1 className="text-lg font-extrabold text-[#4B4B4B]">Disease Detection</h1>
          <p className="text-xs text-[#777777]">🦜 Upload a crop photo — Kino will help identify issues</p>
        </div>
      </div>

      {/* Image Upload — Tactile Card */}
      <div className="mb-5">
        <label className="block">
          <div className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all min-h-[44px] ${
            imagePreview ? 'border-[#58CC02] bg-[#58CC02]/5 shadow-[0_4px_0_#46A302]' : 'border-[#E5E5E5] hover:border-[#1CB0F6] active:translate-y-[2px]'
          }`}>
            {imagePreview ? (
              <div className="relative">
                <img src={imagePreview} alt="Crop preview" className="max-h-48 mx-auto rounded-2xl border-2 border-[#E5E5E5]" />
                <span className="text-xs text-[#58CC02] font-extrabold mt-3 block">Tap to change image</span>
              </div>
            ) : (
              <>
                <div className="w-16 h-16 rounded-2xl bg-[#FF9600]/10 flex items-center justify-center mx-auto mb-3 text-3xl">📷</div>
                <p className="text-sm font-extrabold text-[#4B4B4B]">Tap to upload a crop photo</p>
                <p className="text-xs text-[#777777] mt-1">Take a clear photo of affected leaves or stems</p>
              </>
            )}
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
      </div>

      {/* Crop Selector */}
      <div className="mb-4">
        <label className="block text-sm font-extrabold text-[#4B4B4B] mb-2 uppercase tracking-wide">Select Crop</label>
        <select value={crop} onChange={(e) => setCrop(e.target.value)}
          className="w-full px-4 py-3.5 rounded-2xl bg-white border-2 border-[#E5E5E5] text-[#4B4B4B] font-medium focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 min-h-[44px]">
          <option value="">Choose your crop...</option>
          {crops.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Symptoms */}
      <div className="mb-6">
        <label className="block text-sm font-extrabold text-[#4B4B4B] mb-2 uppercase tracking-wide">Symptoms (optional)</label>
        <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)}
          placeholder="e.g., Yellow spots on leaves, brown edges, wilting..." rows={3}
          className="w-full px-4 py-3.5 rounded-2xl bg-white border-2 border-[#E5E5E5] text-[#4B4B4B] placeholder:text-[#AFAFAF] resize-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20" />
      </div>

      {/* Analyze Button — 3D Orange */}
      <button onClick={analyze} disabled={!crop || loading}
        className="w-full py-4 rounded-2xl bg-[#FF9600] text-white font-extrabold text-lg shadow-[0_5px_0_#E68600] active:translate-y-[5px] active:shadow-none disabled:opacity-50 disabled:shadow-none disabled:translate-y-[5px] transition-all min-h-[44px]">
        {loading ? '🔄 Analyzing...' : '🔍 Analyze Crop'}
      </button>

      <p className="text-[10px] text-[#777777] text-center mt-3 font-extrabold">Demo mode — connect AI service for real analysis</p>

      {/* Result — Tactile Success/Error Card */}
      {result && (
        <div className="mt-6 rounded-2xl border-2 border-[#E5E5E5] bg-white overflow-hidden shadow-[0_2px_0_#E5E5E5]">
          <div className="p-5 border-b-2 border-[#E5E5E5]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-extrabold text-[#4B4B4B]">{result.possibleIssue}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                result.confidence === 'high' ? 'bg-[#58CC02]/10 text-[#58CC02] border border-[#58CC02]/20' :
                result.confidence === 'medium' ? 'bg-[#FFC800]/10 text-[#4B4B4B] border border-[#FFC800]/20' :
                'bg-[#FF4B4B]/10 text-[#FF4B4B] border border-[#FF4B4B]/20'
              }`}>
                {result.confidence} confidence
              </span>
            </div>
            <p className="text-sm text-[#777777]">{result.description}</p>
          </div>

          <div className="p-5 border-b-2 border-[#E5E5E5]">
            <h4 className="font-extrabold text-[#4B4B4B] text-sm mb-3 uppercase tracking-wider">Action Checklist</h4>
            <ul className="space-y-2.5">
              {result.recommendedActions.map((action, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#4B4B4B]">
                  <span className="w-6 h-6 rounded-lg bg-[#58CC02]/10 text-[#58CC02] flex items-center justify-center text-xs font-extrabold shrink-0 border border-[#58CC02]/20">✓</span>
                  <span className="pt-0.5">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-[#FFC800]/10 border-b-2 border-[#FFC800]">
            <p className="text-sm text-[#4B4B4B] font-extrabold">⚠️ {result.caution}</p>
          </div>

          {result.consultExpert && (
            <div className="p-4 bg-[#1CB0F6]/10">
              <p className="text-sm text-[#1CB0F6] font-extrabold">🏥 Please consult your nearest KVK or agriculture extension officer for confirmed diagnosis.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
