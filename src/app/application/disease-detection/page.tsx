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
      const data = await res.json();
      setResult(data.data);
    } catch {
      setResult({ possibleIssue: 'Analysis failed', confidence: 'low', description: 'Could not analyze. Please try again.',
        recommendedActions: ['Try uploading a clearer image', 'Consult your local KVK'],
        caution: 'Unable to complete analysis. Please consult an expert.', consultExpert: true });
    } finally { setLoading(false); }
  };

  return (
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto">
      {/* Header with Kino */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-saffron to-accent flex items-center justify-center text-2xl shadow-[0_3px_0_#9a3412]">📸</div>
        <div>
          <h1 className="text-lg font-extrabold text-foreground">Disease Detection</h1>
          <p className="text-xs text-muted">Upload a crop photo — Kino will help identify issues</p>
        </div>
      </div>

      {/* Image Upload — Tactile Card */}
      <div className="mb-5">
        <label className="block">
          <div className={`border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all ${
            imagePreview ? 'border-primary bg-primary/5 shadow-[0_4px_0_rgba(22,101,52,0.1)]' : 'border-border hover:border-primary active:translate-y-[2px]'
          }`}>
            {imagePreview ? (
              <div className="relative">
                <img src={imagePreview} alt="Crop preview" className="max-h-48 mx-auto rounded-2xl border-2 border-border" />
                <span className="text-xs text-primary font-bold mt-3 block">Tap to change image</span>
              </div>
            ) : (
              <>
                <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center mx-auto mb-3 text-3xl">📷</div>
                <p className="text-sm font-bold text-foreground">Tap to upload a crop photo</p>
                <p className="text-xs text-muted mt-1">Take a clear photo of affected leaves or stems</p>
              </>
            )}
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
      </div>

      {/* Crop Selector */}
      <div className="mb-4">
        <label className="block text-sm font-extrabold text-foreground mb-2 uppercase tracking-wide">Select Crop</label>
        <select value={crop} onChange={(e) => setCrop(e.target.value)}
          className="w-full px-4 py-3.5 rounded-2xl bg-surface border-2 border-border text-foreground font-medium focus:border-primary focus:ring-2 focus:ring-primary/20">
          <option value="">Choose your crop...</option>
          {crops.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Symptoms */}
      <div className="mb-6">
        <label className="block text-sm font-extrabold text-foreground mb-2 uppercase tracking-wide">Symptoms (optional)</label>
        <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)}
          placeholder="e.g., Yellow spots on leaves, brown edges, wilting..." rows={3}
          className="w-full px-4 py-3.5 rounded-2xl bg-surface border-2 border-border text-foreground placeholder:text-muted-light resize-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </div>

      {/* Analyze Button — 3D Saffron */}
      <button onClick={analyze} disabled={!crop || loading}
        className="btn-3d-saffron w-full py-4 text-lg shadow-[0_5px_0_#9a3412] disabled:opacity-50 disabled:shadow-none disabled:translate-y-[5px]">
        {loading ? '🔄 Analyzing...' : '🔍 Analyze Crop'}
      </button>

      <p className="text-[10px] text-muted text-center mt-3 font-medium">Demo mode — connect AI service for real analysis</p>

      {/* Result — Tactile Success/Error Card */}
      {result && (
        <div className="mt-6 rounded-3xl border-2 border-border bg-surface overflow-hidden shadow-[0_4px_0_rgba(0,0,0,0.05)]">
          <div className="p-5 border-b-2 border-border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-extrabold text-foreground">{result.possibleIssue}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                result.confidence === 'high' ? 'bg-green-100 text-green-800 border border-green-200' :
                result.confidence === 'medium' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {result.confidence} confidence
              </span>
            </div>
            <p className="text-sm text-muted">{result.description}</p>
          </div>

          <div className="p-5 border-b-2 border-border">
            <h4 className="font-extrabold text-foreground text-sm mb-3 uppercase tracking-wider">Action Checklist</h4>
            <ul className="space-y-2.5">
              {result.recommendedActions.map((action, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-extrabold shrink-0 border border-primary/20">✓</span>
                  <span className="pt-0.5">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-amber-50 border-b-2 border-amber-200">
            <p className="text-sm text-amber-800 font-medium">⚠️ {result.caution}</p>
          </div>

          {result.consultExpert && (
            <div className="p-4 bg-primary/5">
              <p className="text-sm text-primary font-bold">🏥 Please consult your nearest KVK or agriculture extension officer for confirmed diagnosis.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
