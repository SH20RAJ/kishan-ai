"use client";

import { useState, FormEvent } from "react";

interface FormData {
  orgName: string;
  contactName: string;
  email: string;
  phone: string;
  orgType: string;
  state: string;
  farmerCount: string;
}

interface FormErrors {
  orgName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  orgType?: string;
}

const orgTypes = [
  "FPO (Farmer Producer Organization)",
  "NGO / Non-Profit",
  "Government Department",
  "Agri-Business / Company",
  "Research Institution / University",
  "Bank / Financial Institution",
  "Cooperative Society",
  "Other",
];

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

interface PartnerLeadFormProps {
  className?: string;
}

export default function PartnerLeadForm({ className = "" }: PartnerLeadFormProps) {
  const [form, setForm] = useState<FormData>({
    orgName: "",
    contactName: "",
    email: "",
    phone: "",
    orgType: "",
    state: "",
    farmerCount: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.orgName.trim()) e.orgName = "Organization name is required";
    if (!form.contactName.trim()) e.contactName = "Contact name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    if (!form.phone.trim()) {
      e.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      e.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!form.orgType) e.orgType = "Please select organization type";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/partner-lead", {
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
      <div role="status" className={`text-center py-10 ${className}`}>
        <span className="text-4xl block mb-3" aria-hidden="true">{"\uD83E\uDD1D"}</span>
        <h3 className="text-xl font-bold text-foreground">Thank you for your interest!</h3>
        <p className="text-base text-muted mt-2 max-w-md mx-auto">
          Our partnerships team will reach out within 48 hours to discuss how we can work together.
        </p>
      </div>
    );
  }

  const inputCls = "w-full h-12 px-4 rounded-xl border border-border bg-surface text-base placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-5 ${className}`}
      aria-label="Partner inquiry form"
    >
      <div>
        <label htmlFor="pl-org" className="block text-sm font-medium text-foreground mb-1.5">
          Organization Name <span className="text-error">*</span>
        </label>
        <input
          id="pl-org"
          type="text"
          value={form.orgName}
          onChange={(e) => setForm({ ...form, orgName: e.target.value })}
          placeholder="e.g. Green Valley FPO"
          aria-invalid={!!errors.orgName}
          className={inputCls}
        />
        {errors.orgName && <p role="alert" className="text-sm text-error mt-1">{errors.orgName}</p>}
      </div>

      <div>
        <label htmlFor="pl-contact" className="block text-sm font-medium text-foreground mb-1.5">
          Contact Person <span className="text-error">*</span>
        </label>
        <input
          id="pl-contact"
          type="text"
          value={form.contactName}
          onChange={(e) => setForm({ ...form, contactName: e.target.value })}
          placeholder="Your full name"
          aria-invalid={!!errors.contactName}
          className={inputCls}
        />
        {errors.contactName && <p role="alert" className="text-sm text-error mt-1">{errors.contactName}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pl-email" className="block text-sm font-medium text-foreground mb-1.5">
            Email <span className="text-error">*</span>
          </label>
          <input
            id="pl-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@org.com"
            aria-invalid={!!errors.email}
            className={inputCls}
          />
          {errors.email && <p role="alert" className="text-sm text-error mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="pl-phone" className="block text-sm font-medium text-foreground mb-1.5">
            Phone <span className="text-error">*</span>
          </label>
          <div className="flex">
            <span className="flex items-center px-3 h-12 rounded-l-xl border border-r-0 border-border bg-surface-raised text-sm text-muted">+91</span>
            <input
              id="pl-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
              placeholder="9876543210"
              aria-invalid={!!errors.phone}
              className={`${inputCls} rounded-l-none flex-1`}
            />
          </div>
          {errors.phone && <p role="alert" className="text-sm text-error mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="pl-type" className="block text-sm font-medium text-foreground mb-1.5">
          Organization Type <span className="text-error">*</span>
        </label>
        <select
          id="pl-type"
          value={form.orgType}
          onChange={(e) => setForm({ ...form, orgType: e.target.value })}
          aria-invalid={!!errors.orgType}
          className={inputCls}
        >
          <option value="">Select type</option>
          {orgTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.orgType && <p role="alert" className="text-sm text-error mt-1">{errors.orgType}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pl-state" className="block text-sm font-medium text-foreground mb-1.5">
            State
          </label>
          <select
            id="pl-state"
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className={inputCls}
          >
            <option value="">Select state</option>
            {indianStates.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pl-farmers" className="block text-sm font-medium text-foreground mb-1.5">
            Farmer Reach
          </label>
          <input
            id="pl-farmers"
            type="text"
            value={form.farmerCount}
            onChange={(e) => setForm({ ...form, farmerCount: e.target.value })}
            placeholder="e.g. 5,000 farmers"
            className={inputCls}
          />
        </div>
      </div>

      {status === "error" && (
        <div role="alert" className="p-3 rounded-lg bg-error/5 border border-error/20 text-sm text-error">
          Something went wrong. Please try again or email us at partnerships@kishanai.com
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-12 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] transition-all"
      >
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
