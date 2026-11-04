"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, MapPin, Mail, Send, Clock3 } from "lucide-react";
import { SITE_CONFIG, WEB3FORMS_ACCESS_KEY } from "@/constants";
import { socialLinks } from "@/data/social";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: FormState = { name: "", email: "", subject: "", message: "" };

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email address.";
  if (form.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (form.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: e.target.value }));
      if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...form,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative" aria-label="Contact">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project in mind, a role to fill, or just want to talk shop? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <div className="flex h-full flex-col gap-5">
              <div className="glass rounded-3xl p-7">
                <div className="mb-5 flex items-center gap-2">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium">{SITE_CONFIG.availability}</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3.5">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="size-4 text-primary" aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="size-4 text-primary" aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="text-sm font-medium">{SITE_CONFIG.location}</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                      <Clock3 className="size-4 text-primary" aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">Response time</div>
                      <div className="text-sm font-medium">Usually within 24 hours</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-7">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Elsewhere
                </h3>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    >
                      <social.icon className="size-4" aria-hidden />
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="relative rounded-3xl border border-border bg-card p-7 sm:p-9">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
                    role="status"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                    >
                      <CheckCircle2 className="size-16 text-emerald-500" aria-hidden />
                    </motion.div>
                    <h3 className="text-xl font-semibold">Message sent!</h3>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      Thanks for reaching out — I&apos;ll get back to you within 24
                      hours. In the meantime, feel free to connect on social.
                    </p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Name</Label>
                        <Input
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange("name")}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "error-name" : undefined}
                        />
                        {errors.name && (
                          <p id="error-name" className="text-xs text-red-500" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handleChange("email")}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "error-email" : undefined}
                        />
                        {errors.email && (
                          <p id="error-email" className="text-xs text-red-500" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject</Label>
                      <Input
                        id="contact-subject"
                        name="subject"
                        placeholder="Project inquiry, role opportunity…"
                        value={form.subject}
                        onChange={handleChange("subject")}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={errors.subject ? "error-subject" : undefined}
                      />
                      {errors.subject && (
                        <p id="error-subject" className="text-xs text-red-500" role="alert">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell me about your project, timeline, and goals…"
                        value={form.message}
                        onChange={handleChange("message")}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "error-message" : undefined}
                      />
                      {errors.message && (
                        <p id="error-message" className="text-xs text-red-500" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-500" role="alert">
                        Something went wrong sending your message. Please try again,
                        or email me directly at {SITE_CONFIG.email}.
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="animate-spin" aria-hidden />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send aria-hidden />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
