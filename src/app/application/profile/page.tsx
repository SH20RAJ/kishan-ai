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
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

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
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#58CC02] flex items-center justify-center text-2xl shadow-[0_3px_0_#46A302]">🦜</div>
        <div>
          <h1 className="text-lg font-extrabold text-[#4B4B4B]">Profile & Settings</h1>
          <p className="text-xs text-[#777777]">Manage your preferences</p>
        </div>
      </div>

      {/* Language */}
      <section className="mb-6 rounded-2xl bg-white border-2 border-[#E5E5E5] p-5 shadow-[0_2px_0_#E5E5E5]">
        <label className="block text-sm font-extrabold text-[#4B4B4B] mb-2 uppercase tracking-wide">Preferred Language</label>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="w-full px-4 py-3.5 rounded-2xl bg-white border-2 border-[#E5E5E5] text-[#4B4B4B] font-medium focus:border-[#1CB0F6] min-h-[44px]">
          <option value="en">English</option>
          <option value="hi">हिन्दी (Hindi)</option>
          <option value="mr">मराठी (Marathi)</option>
          <option value="te">తెలుగు (Telugu)</option>
          <option value="ta">தமிழ் (Tamil)</option>
          <option value="kn">ಕನ್ನಡ (Kannada)</option>
        </select>
      </section>

      {/* Location */}
      <section className="mb-6 rounded-2xl bg-white border-2 border-[#E5E5E5] p-5 shadow-[0_2px_0_#E5E5E5]">
        <h2 className="text-sm font-extrabold text-[#4B4B4B] mb-3 uppercase tracking-wide">Location</h2>
        <div className="grid grid-cols-2 gap-3">
          <select value={state} onChange={(e) => setState(e.target.value)} className="px-3 py-3 rounded-2xl bg-white border-2 border-[#E5E5E5] text-sm text-[#4B4B4B] font-medium focus:border-[#1CB0F6] min-h-[44px]">
            <option value="">Select State</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="District"
            className="px-3 py-3 rounded-2xl bg-white border-2 border-[#E5E5E5] text-sm text-[#4B4B4B] placeholder:text-[#AFAFAF] font-medium focus:border-[#1CB0F6] min-h-[44px]"
          />
        </div>
      </section>

      {/* Toggle Settings */}
      <section className="mb-6 rounded-2xl bg-white border-2 border-[#E5E5E5] p-5 shadow-[0_2px_0_#E5E5E5]">
        <h2 className="text-sm font-extrabold text-[#4B4B4B] mb-3 uppercase tracking-wide">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-extrabold text-[#4B4B4B] text-sm">🔔 Notifications</p>
              <p className="text-xs text-[#777777]">Weather alerts and mandi updates</p>
            </div>
            <button onClick={() => setNotifications(!notifications)}
              className={`w-12 h-7 rounded-full relative cursor-pointer transition-all min-w-[44px] min-h-[28px] ${notifications ? 'bg-[#58CC02]' : 'bg-[#E5E5E5]'}`}>
              <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.15)] ${notifications ? 'left-[22px]' : 'left-0.5'}`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-extrabold text-[#4B4B4B] text-sm">🌙 Dark Mode</p>
              <p className="text-xs text-[#777777]">Reduce eye strain at night</p>
            </div>
            <button onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-7 rounded-full relative cursor-pointer transition-all min-w-[44px] min-h-[28px] ${darkMode ? 'bg-[#58CC02]' : 'bg-[#E5E5E5]'}`}>
              <div className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.15)] ${darkMode ? 'left-[22px]' : 'left-0.5'}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Crops */}
      <section className="mb-6 rounded-2xl bg-white border-2 border-[#E5E5E5] p-5 shadow-[0_2px_0_#E5E5E5]">
        <h2 className="text-sm font-extrabold text-[#4B4B4B] mb-3 uppercase tracking-wide">🌾 Crops You Grow</h2>
        <div className="flex flex-wrap gap-2">
          {allCrops.map(crop => (
            <button
              key={crop}
              onClick={() => toggleCrop(crop)}
              className={`px-3 py-2 rounded-full text-sm font-extrabold min-h-[44px] min-w-[44px] ${
                selectedCrops.includes(crop)
                  ? 'bg-[#58CC02] text-white shadow-[0_3px_0_#46A302]'
                  : 'bg-white border-2 border-[#E5E5E5] text-[#4B4B4B] shadow-[0_2px_0_#E5E5E5]'
              }`}
            >
              {crop}
            </button>
          ))}
        </div>
      </section>

      {/* Save */}
      <button onClick={handleSave} className="w-full py-4 rounded-2xl bg-[#58CC02] text-white font-extrabold text-lg shadow-[0_5px_0_#46A302] active:translate-y-[5px] active:shadow-none transition-all min-h-[44px]">
        {saved ? '✓ Saved!' : 'Save Profile'}
      </button>

      {/* Privacy */}
      <section className="mt-8 p-5 rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
        <h2 className="font-extrabold text-[#4B4B4B] mb-2">🛡️ Data & Privacy</h2>
        <ul className="space-y-2 text-sm text-[#777777]">
          <li className="flex items-start gap-2">
            <span className="text-[#58CC02] font-extrabold">✓</span>
            <span>Your data is encrypted and never sold to third parties</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#58CC02] font-extrabold">✓</span>
            <span>You can request data deletion at any time</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#58CC02] font-extrabold">✓</span>
            <span>Chat history is stored to improve your experience</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#58CC02] font-extrabold">✓</span>
            <span>Location is used only for weather and mandi price lookup</span>
          </li>
        </ul>
        <a href="/privacy" className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#1CB0F6] font-extrabold min-h-[44px]">Read Privacy Policy →</a>
      </section>
    </div>
  );
}
