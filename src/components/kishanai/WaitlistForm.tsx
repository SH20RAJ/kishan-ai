"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  state: string;
  crops: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  state?: string;
}

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

interface WaitlistFormProps {
  className?: string;
}

export default function WaitlistForm({ className = "" }: WaitlistFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    state: "",
    crops: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!form.state) newErrors.state = "Please select your state";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className={`text-center py-10 ${className}`}
      >
        <span className="text-4xl block mb-3" aria-hidden="true">{"\uD83C\uDF3E"}</span>
        <h3 className="text-xl font-bold text-foreground">You are on the list!</h3>
        <p className="text-base text-muted mt-2 max-w-md mx-auto">
          Thank you for joining the KisanAI pilot. We will contact you on your phone number when we launch in your area.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-5 ${className}`}
      aria-label="Join waitlist form"
    >
      <div>
        <label htmlFor="wl-name" className="block text-sm font-medium text-foreground mb-1.5">
          Full Name <span className="text-error">*</span>
        </label>
        <input
          id="wl-name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="e.g. Ramesh Kumar"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "wl-name-err" : undefined}
          className="w-full h-12 px-4 rounded-xl border border-border bg-surface text-base placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        {errors.name && (
          <p id="wl-name-err" role="alert" className="text-sm text-error mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="wl-phone" className="block text-sm font-medium text-foreground mb-1.5">
          Phone Number <span className="text-error">*</span>
        </label>
        <div className="flex">
          <span className="flex items-center px-3 h-12 rounded-l-xl border border-r-0 border-border bg-surface-raised text-sm text-muted">
            +91
          </span>
          <input
            id="wl-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
            placeholder="9876543210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "wl-phone-err" : undefined}
            className="flex-1 h-12 px-4 rounded-r-xl border border-border bg-surface text-base placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        {errors.phone && (
          <p id="wl-phone-err" role="alert" className="text-sm text-error mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="wl-state" className="block text-sm font-medium text-foreground mb-1.5">
          State <span className="text-error">*</span>
        </label>
        <select
          id="wl-state"
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
          aria-invalid={!!errors.state}
          aria-describedby={errors.state ? "wl-state-err" : undefined}
          className="w-full h-12 px-4 rounded-xl border border-border bg-surface text-base focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="">Select your state</option>
          {indianStates.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.state && (
          <p id="wl-state-err" role="alert" className="text-sm text-error mt-1">{errors.state}</p>
        )}
      </div>

      <div>
        <label htmlFor="wl-crops" className="block text-sm font-medium text-foreground mb-1.5">
          Main Crops <span className="text-muted text-xs">(optional)</span>
        </label>
        <input
          id="wl-crops"
          type="text"
          value={form.crops}
          onChange={(e) => setForm({ ...form, crops: e.target.value })}
          placeholder="e.g. Rice, Wheat, Cotton"
          className="w-full h-12 px-4 rounded-xl border border-border bg-surface text-base placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {status === "error" && (
        <div role="alert" className="p-3 rounded-lg bg-error/5 border border-error/20 text-sm text-error">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-12 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] transition-all"
      >
        {status === "submitting" ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  );
}
