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
    const userMsg: ChatMessage & { aiResponse?: AIResponse } = {
      id: Date.now().toString(), role: 'user', content: text, timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text }) });
      const data = await res.json();
      const aiResp: AIResponse = data.data;
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(), role: 'assistant', content: aiResp.answer,
        timestamp: new Date().toISOString(), sources: aiResp.sources, aiResponse: aiResp,
      }]);
    } catch {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(), role: 'assistant', content: 'Sorry, something went wrong. Please try again.',
        timestamp: new Date().toISOString(),
      }]);
    } finally { setLoading(false); }
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-8rem)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-b from-primary to-primary-dark flex items-center justify-center mb-4 shadow-[0_5px_0_#14532d]">
              <span className="text-4xl">🦜</span>
            </div>
            <h2 className="text-xl font-extrabold text-foreground mb-1">Ask Kino</h2>
            <p className="text-muted text-sm mb-6">Your AI farming assistant — ask anything!</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {starterQuestions.map((q) => (
                <button key={q.text} onClick={() => sendMessage(q.text)}
                  className="px-4 py-2.5 rounded-2xl bg-surface border-2 border-border text-sm font-bold text-foreground hover:border-primary hover:text-primary active:translate-y-[2px] shadow-[0_3px_0_rgba(0,0,0,0.05)] active:shadow-none transition-all">
                  {q.emoji} {q.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-primary to-primary-dark flex items-center justify-center text-sm mr-2 mt-1 shrink-0 shadow-[0_2px_0_#14532d]">🦜</div>
            )}
            <div className={`max-w-[80%] rounded-3xl px-5 py-3.5 ${
              msg.role === 'user'
                ? 'bg-gradient-to-b from-primary to-primary-dark text-white shadow-[0_4px_0_#14532d] rounded-br-lg'
                : 'bg-surface border-2 border-border text-foreground shadow-[0_3px_0_rgba(0,0,0,0.04)] rounded-bl-lg'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              {msg.aiResponse?.recommendedActions && msg.aiResponse.recommendedActions.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border/50">
                  <p className="text-xs font-extrabold uppercase tracking-wider mb-2 opacity-70">Action Checklist</p>
                  <ul className="space-y-1.5">
                    {msg.aiResponse.recommendedActions.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-5 h-5 rounded-md bg-primary/10 text-primary flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5 border border-primary/20">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {msg.aiResponse?.caution && (
                <div className="mt-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
                  ⚠️ {msg.aiResponse.caution}
                </div>
              )}
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-2 pt-2 border-t border-border/50 flex flex-wrap gap-1.5">
                  {msg.sources.map((s, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded-lg bg-primary/10 text-primary font-bold border border-primary/10">
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
            <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-primary to-primary-dark flex items-center justify-center text-sm mr-2 shrink-0 shadow-[0_2px_0_#14532d]">🦜</div>
            <div className="bg-surface border-2 border-border rounded-3xl rounded-bl-lg px-5 py-3.5 shadow-[0_3px_0_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-sm text-muted font-medium">Kino is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-16 bg-background/95 backdrop-blur-sm border-t-2 border-border px-4 py-3">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Kino a question..." disabled={loading}
            className="flex-1 px-5 py-3.5 rounded-2xl bg-surface border-2 border-border text-foreground placeholder:text-muted-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-medium" />
          <button type="submit" disabled={!input.trim() || loading}
            className="btn-3d-primary px-5 py-3.5 shadow-[0_4px_0_var(--primary-dark)] disabled:opacity-50 disabled:shadow-none disabled:translate-y-[4px]"
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
