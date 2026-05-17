"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";

interface DiseaseUploadCardProps {
  onAnalyze?: (data: { image: File; crop: string; notes: string }) => void;
  className?: string;
}

const crops = [
  "Rice (Paddy)", "Wheat", "Cotton", "Sugarcane", "Maize",
  "Tomato", "Potato", "Onion", "Chilli", "Soybean",
  "Groundnut", "Mustard", "Banana", "Grapes", "Mango",
  "Tea", "Coffee", "Coconut", "Turmeric", "Other",
];

export default function DiseaseUploadCard({
  onAnalyze,
  className = "",
}: DiseaseUploadCardProps) {
  const [dragging, setDragging] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [crop, setCrop] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setImage(file);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    onAnalyze?.({ image, crop, notes });
    // Simulate loading for demo
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div
      className={`rounded-2xl border border-border bg-surface overflow-hidden ${className}`}
    >
      <div className="p-5 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">
          {"\uD83D\uDCF7"} Detect Crop Disease
        </h3>
        <p className="text-sm text-muted mt-1">
          Upload a clear photo of the affected leaf or plant
        </p>
      </div>

      <div className="p-5 space-y-5">
        {/* Upload area */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          role="button"
          aria-label="Upload image. Drag and drop or tap to select."
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
          className={`relative flex flex-col items-center justify-center h-48 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
            dragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40 hover:bg-surface-raised"
          }`}
        >
          {preview ? (
            <img
              src={preview}
              alt="Uploaded crop photo"
              className="absolute inset-0 w-full h-full object-contain p-2"
            />
          ) : (
            <>
              <span className="text-3xl mb-2" aria-hidden="true">{"\uD83D\uDCE4"}</span>
              <p className="text-sm font-medium text-foreground">
                Drag photo here or tap to upload
              </p>
              <p className="text-xs text-muted mt-1">JPG, PNG up to 10MB</p>
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleChange}
            className="sr-only"
            aria-label="Choose image file"
          />
        </div>

        {/* Crop selector */}
        <div>
          <label htmlFor="disease-crop" className="block text-sm font-medium text-foreground mb-1.5">
            Crop
          </label>
          <select
            id="disease-crop"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-border bg-surface text-base focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">Select crop (optional)</option>
            {crops.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Symptom notes */}
        <div>
          <label htmlFor="disease-notes" className="block text-sm font-medium text-foreground mb-1.5">
            Symptoms Observed <span className="text-muted text-xs">(optional)</span>
          </label>
          <textarea
            id="disease-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="e.g. Yellow spots on leaves, wilting, white powder on stems..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-base placeholder:text-muted-light resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        {/* Analyze button */}
        <button
          onClick={handleAnalyze}
          disabled={!image || loading}
          className="w-full h-12 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Photo"
          )}
        </button>
      </div>
    </div>
  );
}
