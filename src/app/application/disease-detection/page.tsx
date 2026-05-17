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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ crop, symptoms, image: imagePreview }),
      });
      const json = await res.json() as { data: DiseaseResult };
      setResult(json.data);
    } catch {
      setResult({
        possibleIssue: 'Analysis failed',
        confidence: 'low',
        description: 'Could not analyze the image. Please try again.',
        recommendedActions: ['Try uploading a clearer image', 'Consult your local KVK'],
        caution: 'Unable to complete analysis. Please consult an expert.',
        consultExpert: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-6 pb-8">
      <h1 className="text-xl font-bold text-[var(--foreground)] mb-1">Disease Detection</h1>
      <p className="text-[var(--muted)] text-sm mb-6">Upload a photo of your crop to identify possible diseases</p>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block">
          <div className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
            imagePreview ? 'border-[var(--primary)] bg-[var(--primary)]/5' : 'border-[var(--border-color)] hover:border-[var(--primary)]'
          }`}>
            {imagePreview ? (
              <div className="relative">
                <img src={imagePreview} alt="Crop preview" className="max-h-48 mx-auto rounded-lg" />
                <span className="text-sm text-[var(--primary)] mt-2 block">Click to change image</span>
              </div>
            ) : (
              <>
                <svg className="w-10 h-10 mx-auto text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
                </svg>
                <p className="text-sm text-[var(--muted)] mt-2">Tap to upload a crop photo</p>
              </>
            )}
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
      </div>

      {/* Crop Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Select Crop</label>
        <select
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-[var(--foreground)] min-h-[48px]"
        >
          <option value="">Choose your crop...</option>
          {crops.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Symptoms */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Describe Symptoms (optional)</label>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="e.g., Yellow spots on leaves, brown edges, wilting..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-[var(--foreground)] placeholder:text-[var(--muted-light)] resize-none"
        />
      </div>

      {/* Analyze Button */}
      <button
        onClick={analyze}
        disabled={!crop || loading}
        className="w-full py-4 rounded-xl bg-[var(--primary)] text-white font-bold text-lg min-h-[48px] disabled:opacity-50"
      >
        {loading ? 'Analyzing...' : 'Analyze Crop'}
      </button>

      {/* Demo Notice */}
      <p className="text-xs text-[var(--muted)] text-center mt-3">
        Demo mode - results are for illustration. Connect AI service for real analysis.
      </p>

      {/* Result */}
      {result && (
        <div className="mt-6 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] overflow-hidden">
          <div className="p-4 border-b border-[var(--border-color)]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[var(--foreground)]">{result.possibleIssue}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                result.confidence === 'high' ? 'bg-green-100 text-green-800' :
                result.confidence === 'medium' ? 'bg-amber-100 text-amber-800' :
                'bg-red-100 text-red-800'
              }`}>
                {result.confidence} confidence
              </span>
            </div>
            <p className="text-sm text-[var(--muted)]">{result.description}</p>
          </div>

          <div className="p-4 border-b border-[var(--border-color)]">
            <h4 className="font-semibold text-[var(--foreground)] text-sm mb-2">Recommended Actions</h4>
            <ul className="space-y-2">
              {result.recommendedActions.map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                  <span className="w-5 h-5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-xs shrink-0 mt-0.5">{i + 1}</span>
                  {action}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-amber-50 border-b border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Caution:</strong> {result.caution}
            </p>
          </div>

          {result.consultExpert && (
            <div className="p-4 bg-[var(--primary)]/5">
              <p className="text-sm text-[var(--primary)] font-medium">
                Please consult your nearest KVK (Krishi Vigyan Kendra) or agriculture extension officer for confirmed diagnosis and treatment.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
