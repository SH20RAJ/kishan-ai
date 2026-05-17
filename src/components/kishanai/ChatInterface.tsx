"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import TrustBadge from "./TrustBadge";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: { title: string; type: "government" | "kvk" | "research" | "expert" }[];
  timestamp?: string;
}

interface ChatInterfaceProps {
  messages?: Message[];
  suggestedQuestions?: string[];
  onSend?: (message: string) => void;
  onFeedback?: (messageId: string, helpful: boolean) => void;
  loading?: boolean;
  className?: string;
}

export default function ChatInterface({
  messages = [],
  suggestedQuestions = [
    "What fertilizer is best for wheat this season?",
    "How to treat leaf blight in rice?",
    "When should I sow cotton in Maharashtra?",
    "What are current tomato mandi prices?",
  ],
  onSend,
  onFeedback,
  loading = false,
  className = "",
}: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    onSend?.(trimmed);
    setInput("");
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = inputRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 120) + "px";
    }
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Messages area */}
      <div className="flex-1 overflow-auto px-4 py-6 space-y-4" role="log" aria-label="Chat messages" aria-live="polite">
        {messages.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4">
            <span className="text-4xl mb-3" aria-hidden="true">{"\uD83C\uDF3E"}</span>
            <h2 className="text-xl font-bold text-foreground">Namaste! How can I help today?</h2>
            <p className="text-base text-muted mt-2 max-w-md">
              Ask me about crop diseases, weather, mandi prices, government schemes, or any farming question.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-lg">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => onSend?.(q)}
                  className="px-4 py-2.5 rounded-full border border-border bg-surface text-sm text-foreground hover:bg-surface-raised hover:border-primary/30 active:scale-[0.97] transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 ${
                msg.role === "user"
                  ? "bg-primary text-white rounded-br-md"
                  : "bg-surface border border-border rounded-bl-md"
              }`}
            >
              <p className={`text-base leading-relaxed whitespace-pre-wrap ${msg.role === "user" ? "text-white" : "text-foreground"}`}>
                {msg.content}
              </p>

              {/* Sources */}
              {msg.role === "assistant" && msg.sources && msg.sources.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border/50">
                  {msg.sources.map((src, i) => (
                    <TrustBadge key={i} type={src.type} label={src.title} />
                  ))}
                </div>
              )}

              {/* Feedback for assistant */}
              {msg.role === "assistant" && onFeedback && (
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border/30">
                  <button
                    onClick={() => onFeedback(msg.id, true)}
                    aria-label="Helpful"
                    className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-surface-raised text-muted hover:text-success transition-colors text-sm"
                  >
                    {"\uD83D\uDC4D"}
                  </button>
                  <button
                    onClick={() => onFeedback(msg.id, false)}
                    aria-label="Not helpful"
                    className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-surface-raised text-muted hover:text-error transition-colors text-sm"
                  >
                    {"\uD83D\uDC4E"}
                  </button>
                </div>
              )}

              {msg.timestamp && (
                <p className={`text-[10px] mt-1.5 ${msg.role === "user" ? "text-white/60" : "text-muted-light"}`}>
                  {msg.timestamp}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-surface border border-border rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex items-center gap-1.5" aria-label="KisanAI is typing">
                <span className="h-2 w-2 bg-muted-light rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="h-2 w-2 bg-muted-light rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="h-2 w-2 bg-muted-light rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="sticky bottom-0 border-t border-border bg-surface/95 backdrop-blur-sm p-3 lg:p-4">
        <div className="flex items-end gap-2 max-w-3xl mx-auto">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              handleInput();
            }}
            onKeyDown={handleKeyDown}
            placeholder="Ask a farming question..."
            rows={1}
            aria-label="Type your message"
            className="flex-1 resize-none rounded-xl border border-border bg-surface-raised px-4 py-3 text-base placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/40 min-h-[48px] max-h-[120px]"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            aria-label="Send message"
            className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-primary text-white hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.96] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
