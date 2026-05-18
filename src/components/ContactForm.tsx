"use client";

import { useContactForm } from "@/src/hooks/useContactForm";

export default function ContactForm() {

    const { formData, status, handleChange, handleSubmit } = useContactForm();
  
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {status === "success" && (
                <div className="p-4 rounded-md bg-emerald-950/50 border border-emerald-900 text-emerald-400 text-sm">
                    Thank you! Your project inquiry has been successfully submitted.
                </div>
            )}
            {status === "error" && (
                <div className="p-4 rounded-md bg-rose-950/50 border border-rose-900 text-rose-400 text-sm">
                    Something went wrong. Please try again or use the contact details above.
                </div>
            )}
            <div>
                <label htmlFor="companyName" className="block text-xs font-mono text-zinc-500 mb-2">YOUR COMPANY NAME</label>
                <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-md bg-black border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="e.g. Acme Corp"
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-xs font-mono text-zinc-500 mb-2">EMAIL ADDRESS</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-md bg-black border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="you@company.com"
                    required
                />
            </div>
            <div>
                <label htmlFor="details" className="block text-xs font-mono text-zinc-500 mb-2">PROJECT DETAILS & STACK REQS</label>
                <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-md bg-black border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Describe the milestones, system parameters, and timeline targets..."
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full py-3 rounded-lg bg-zinc-100 text-black font-semibold text-sm hover:bg-zinc-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "submitting" ? (
                    <>
                        <span className="h-4 w-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Submitting...
                    </>
                ) : status === "success" ? (
                    "Inquiry Sent ✓"
                ) : (
                    "Submit Safe Project Inquiry"
                )}
            </button>
        </form>
    );
}