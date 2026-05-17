'use client';

import { useState } from 'react';

const allCrops = ['Rice', 'Wheat', 'Cotton', 'Tomato', 'Potato', 'Onion', 'Chilli', 'Soybean', 'Mustard', 'Sugarcane', 'Maize', 'Groundnut'];
const states = ['Andhra Pradesh', 'Bihar', 'Gujarat', 'Haryana', 'Karnataka', 'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'];

export default function ProfilePage() {
  const [lang, setLang] = useState('en');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const toggleCrop = (crop: string) => {
    setSelectedCrops(prev =>
      prev.includes(crop) ? prev.filter(c => c !== crop) : [...prev, crop]
    );
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="px-4 py-6 pb-8">
      <h1 className="text-xl font-bold text-[var(--foreground)] mb-6">Profile & Settings</h1>

      {/* Language */}
      <section className="mb-6">
        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Preferred Language</label>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] min-h-[48px]">
          <option value="en">English</option>
          <option value="hi">हिन्दी (Hindi)</option>
          <option value="mr">मराठी (Marathi)</option>
          <option value="te">తెలుగు (Telugu)</option>
          <option value="ta">தமிழ் (Tamil)</option>
          <option value="kn">ಕನ್ನಡ (Kannada)</option>
        </select>
      </section>

      {/* Location */}
      <section className="mb-6">
        <h2 className="text-sm font-medium text-[var(--foreground)] mb-2">Location</h2>
        <div className="grid grid-cols-2 gap-3">
          <select value={state} onChange={(e) => setState(e.target.value)} className="px-3 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-sm min-h-[48px]">
            <option value="">Select State</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="District"
            className="px-3 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-sm min-h-[48px]"
          />
        </div>
      </section>

      {/* Crops */}
      <section className="mb-6">
        <h2 className="text-sm font-medium text-[var(--foreground)] mb-2">Crops You Grow</h2>
        <div className="flex flex-wrap gap-2">
          {allCrops.map(crop => (
            <button
              key={crop}
              onClick={() => toggleCrop(crop)}
              className={`px-3 py-2 rounded-full text-sm font-medium min-h-[40px] ${
                selectedCrops.includes(crop)
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-[var(--surface)] border border-[var(--border-color)] text-[var(--foreground)]'
              }`}
            >
              {crop}
            </button>
          ))}
        </div>
      </section>

      {/* Save */}
      <button onClick={handleSave} className="w-full py-4 rounded-xl bg-[var(--primary)] text-white font-bold min-h-[48px]">
        {saved ? 'Saved!' : 'Save Profile'}
      </button>

      {/* Privacy */}
      <section className="mt-8 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
        <h2 className="font-semibold text-[var(--foreground)] mb-2">Data & Privacy</h2>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          <li>Your data is encrypted and never sold to third parties</li>
          <li>You can request data deletion at any time</li>
          <li>Chat history is stored to improve your experience</li>
          <li>Location is used only for weather and mandi price lookup</li>
        </ul>
        <a href="/privacy" className="inline-block mt-3 text-sm text-[var(--primary)] font-medium">Read Privacy Policy →</a>
      </section>
    </div>
  );
}
