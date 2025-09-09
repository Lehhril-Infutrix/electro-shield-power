"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Button from "../UI/Button";

const MAX_MSG = 250;
// const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY || "";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({ name: "", email: "" });

  const remaining = MAX_MSG - message.length;

  const validate = (formData) => {
    const next = { name: "", email: "" };
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!name) next.name = "Name is required.";
    else if (name.length < 2) next.name = "Name must be at least 2 characters.";
    else if (!/^[a-zA-Z\s]+$/.test(name)) next.name = "Name can only contain letters and spaces.";

    if (!email) next.email = "Email is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) next.email = "Enter a valid email address.";

    setErrors(next);
    return !next.name && !next.email;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!validate(formData)) return;

    setSubmitting(true);
    setStatus({ ok: true, text: "Sending..." });

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);
    formData.append("from_name", "Website Contact");
    formData.append("subject", "New contact form submission");
    if (typeof window !== "undefined") formData.append("page", window.location.href);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();

      if (data.success) {
        setStatus({ ok: true, text: "Thanks! We’ll get back to you soon." });
        form.reset();
        setMessage("");
        setErrors({ name: "", email: "" });
      } else {
        setStatus({ ok: false, text: data.message || "Submission failed. Try again." });
      }
    } catch {
      setStatus({ ok: false, text: "Network error. Try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-20 bg-white scroll-m-16" aria-labelledby="contact-heading">
      <div className="container grid md:grid-cols-2 gap-12">
        {/* LEFT: Info + small map */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-heading">Contact Info</h3>
          {[
            { icon: Phone, label: "Call us", content: "+91 98 759 83535", href: "tel:+919875983535" },
            { icon: MapPin, label: "Find us", content: "C-12, Industrial Growth Center, Mansa Road, Bathinda, Punjab (151001)" },
            { icon: Mail, label: "Email", content: "info@electroshieldpower.com", href: "mailto:info@electroshieldpower.com" },
          ].map((item, idx) => {
            const Icon = item.icon;
            const isLink = Boolean(item.href);
            return (
              <div
                key={item.label}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5"
                data-aos="fade-up"
                data-aos-delay={idx * 120}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                      <Icon className="h-5 w-5 text-[var(--accent-color)]" />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <div className="mt-1 text-gray-700">
                      {isLink ? (
                        <a
                          href={item.href}
                          className="hover:text-[var(--accent-color)] break-words"
                          target={item.href?.startsWith("http") ? "_blank" : undefined}
                          rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* small map */}
          <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-sm" data-aos="zoom-in-up">
            <iframe
              title="Office map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109605.1580720669!2d74.8787582!3d30.2109946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916a5d5a6e10bdb%3A0x30fba6c3a6980c2f!2sBathinda%2C%20Punjab!5e0!3m2!1sen!2sin!4v1693659845156!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="bg-[var(--beige)] border border-[#efe7d8] rounded-2xl shadow-sm p-6 sm:p-8" data-aos="fade-left" data-aos-duration="900">
          <h3 className="text-2xl font-semibold text-heading">Get in touch.</h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6" noValidate>
            {/* Honeypot */}
            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your name <span className="text-[var(--accent-color)]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-gray-900 placeholder-gray-400 bg-white outline-none 
                    ${errors.name ? "border-[var(--accent-color)] focus:ring-[var(--accent-color)]" : "border-gray-200 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)]"}`}
                  aria-invalid={!!errors.name}
                />
                {errors.name ? <p className="mt-1 text-xs text-[var(--accent-color)]">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your email <span className="text-[var(--accent-color)]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className={`mt-1 w-full rounded-xl border px-4 py-2.5 text-gray-900 placeholder-gray-400 bg-white outline-none 
                    ${errors.email ? "border-[var(--accent-color)] focus:ring-[var(--accent-color)]" : "border-gray-200 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)]"}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email ? <p className="mt-1 text-xs text-[var(--accent-color)]">{errors.email}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Your website
              </label>
              <input
                id="website"
                name="website"
                type="url"
                placeholder="Company name"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={MAX_MSG}
                  placeholder="Type here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)] resize-y"
                />
                <span className="absolute bottom-2 right-3 text-xs text-gray-500">
                  {remaining}/{MAX_MSG}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span
                aria-live="polite"
                className={`text-sm ${status && status.ok ? "text-gray-600" : "text-[var(--accent-color)]"}`}
              >
                {status ? status.text : ""}
              </span>

              <Button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[var(--accent-color)] text-white font-semibold shadow hover:bg-[#b30001] disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] transition"
              >
                {submitting ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
