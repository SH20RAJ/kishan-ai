'use client';

import { useState, useRef, useEffect } from 'react';
import type { ChatMessage, AIResponse } from '@/types';

const starterQuestions = [
  { text: 'What diseases affect wheat?', emoji: '🌾' },
  { text: 'Weather forecast this week', emoji: '🌦️' },
  { text: 'Current mandi prices for rice', emoji: '📊' },
  { text: 'Government schemes for small farmers', emoji: '🏛️' },
  { text: 'How to protect crops from pests?', emoji: '🐛' },
];

function createMessageMeta() {
  return {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  };
}

export default function ChatPage() {
  const [messages, setMessages] = useState<(ChatMessage & { aiResponse?: AIResponse })[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMeta = createMessageMeta();
    const userMsg: ChatMessage & { aiResponse?: AIResponse } = {
      id: userMeta.id, role: 'user', content: text, timestamp: userMeta.timestamp,
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text }) });
      const data = (await res.json()) as { data: AIResponse };
      const aiResp: AIResponse = data.data;
      const assistantMeta = createMessageMeta();
      setMessages(prev => [...prev, {
        id: assistantMeta.id, role: 'assistant', content: aiResp.answer,
        timestamp: assistantMeta.timestamp, sources: aiResp.sources, aiResponse: aiResp,
      }]);
    } catch {
      const errorMeta = createMessageMeta();
      setMessages(prev => [...prev, {
        id: errorMeta.id, role: 'assistant', content: 'Sorry, something went wrong. Please try again.',
        timestamp: errorMeta.timestamp,
      }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-8rem)] bg-white">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-20 h-20 rounded-2xl bg-[#58CC02] flex items-center justify-center overflow-hidden mb-4 shadow-[0_5px_0_#46A302]">
              <img src="/logo.png" alt="Kino Mascot" className="w-16 h-16 object-cover scale-[1.08]" />
            </div>
            <h2 className="text-xl font-extrabold text-[#4B4B4B] mb-1">Ask Kino</h2>
            <p className="text-[#777777] text-sm mb-6">Your AI farming assistant — ask anything!</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {starterQuestions.map((q) => (
                <button key={q.text} onClick={() => sendMessage(q.text)}
                  className="px-4 py-2.5 rounded-2xl bg-white border-2 border-[#E5E5E5] text-sm font-extrabold text-[#4B4B4B] hover:border-[#1CB0F6] hover:text-[#1CB0F6] active:translate-y-[2px] shadow-[0_3px_0_#E5E5E5] active:shadow-none transition-all min-h-[44px] min-w-[44px]">
                  {q.emoji} {q.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-xl bg-[#58CC02] flex items-center justify-center overflow-hidden mr-2 mt-1 shrink-0 shadow-[0_2px_0_#46A302]">
                <img src="/logo.png" alt="Kino Mascot" className="w-6 h-6 object-cover scale-[1.08]" />
              </div>
            )}
            <div className={`max-w-[80%] rounded-2xl px-5 py-3.5 ${
              msg.role === 'user'
                ? 'bg-[#58CC02] text-white shadow-[0_4px_0_#46A302] rounded-br-lg'
                : 'bg-white border-2 border-[#E5E5E5] text-[#4B4B4B] shadow-[0_2px_0_#E5E5E5] rounded-bl-lg'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              {msg.aiResponse?.recommendedActions && msg.aiResponse.recommendedActions.length > 0 && (
                <div className="mt-3 pt-3 border-t border-[#E5E5E5]/50">
                  <p className="text-xs font-extrabold uppercase tracking-wider mb-2 opacity-70">Action Checklist</p>
                  <ul className="space-y-1.5">
                    {msg.aiResponse.recommendedActions.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-5 h-5 rounded-md bg-[#58CC02]/10 text-[#58CC02] flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5 border border-[#58CC02]/20">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {msg.aiResponse?.caution && (
                <div className="mt-3 p-2.5 rounded-xl bg-[#FFC800]/10 border border-[#FFC800] text-xs text-[#4B4B4B]">
                  ⚠️ {msg.aiResponse.caution}
                </div>
              )}
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-2 pt-2 border-t border-[#E5E5E5]/50 flex flex-wrap gap-1.5">
                  {msg.sources.map((s, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-[#1CB0F6]/10 text-[#1CB0F6] font-extrabold border border-[#1CB0F6]/10">
                      📄 {s.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-xl bg-[#58CC02] flex items-center justify-center overflow-hidden mr-2 shrink-0 shadow-[0_2px_0_#46A302]">
              <img src="/logo.png" alt="Kino Mascot" className="w-6 h-6 object-cover scale-[1.08]" />
            </div>
            <div className="bg-white border-2 border-[#E5E5E5] rounded-2xl rounded-bl-lg px-5 py-3.5 shadow-[0_2px_0_#E5E5E5]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#58CC02] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#58CC02] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#58CC02] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-sm text-[#777777] font-extrabold">🦜 Kino is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-16 bg-white/95 backdrop-blur-sm border-t-2 border-[#E5E5E5] px-4 py-3">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Kino a question..." disabled={loading}
            className="flex-1 px-5 py-3.5 rounded-2xl bg-white border-2 border-[#E5E5E5] text-[#4B4B4B] placeholder:text-[#AFAFAF] focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 font-medium min-h-[44px]" />
          <button type="submit" disabled={!input.trim() || loading}
            className="bg-[#58CC02] text-white px-5 py-3.5 rounded-2xl font-extrabold shadow-[0_4px_0_#46A302] active:translate-y-[4px] active:shadow-none disabled:opacity-50 disabled:shadow-none disabled:translate-y-[4px] transition-all min-h-[44px] min-w-[44px]"
            aria-label="Send message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
