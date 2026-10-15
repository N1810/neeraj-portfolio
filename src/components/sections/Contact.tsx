'use client';

import React, { useState } from 'react';
import { Send, Check, Copy, MessageSquare, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { CardCornerBrackets } from '@/components/ui/CornerAccents';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const emailAddress = 'sharmaneeraj1810@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Your message has been sent successfully! Neeraj will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to send message. Please try again or email directly.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network connection error. Please email directly at sharmaneeraj1810@gmail.com.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Info & Copy Quick Action */}
          <div className="lg:col-span-5">
            <SectionHeading
              icon={<Mail size={13} className="text-[#B76E4F]" />}
              eyebrow="GET IN TOUCH"
              title="Have a project in mind?"
              description="Let's build something great together. I'm open to freelance projects, full-time opportunities, collaborations, and interesting technical challenges."
            />

            {/* Direct Email Card with One-Click Copy */}
            <div className="relative p-6 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-sm mb-6 overflow-hidden group">
              <CardCornerBrackets color="text-[#B76E4F]/25" size={14} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#965239]">
                Direct Contact
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base sm:text-lg font-serif font-bold text-[#29251F] hover:text-[#965239] transition-colors break-all"
                >
                  {emailAddress}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F8F1E8] text-[#29251F] hover:bg-[#EAD8C8] transition-colors border border-[#EAD8C8] shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-[#965239]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EAD8C8]/60 flex items-center justify-between">
                <span className="text-xs text-[#6E675F]">Response within 24 hours</span>
                <span className="text-xs font-semibold text-[#A6A58D] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#A6A58D]" />
                  Active &amp; Available
                </span>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="p-6 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#965239] block mb-3">
                Professional Networks
              </span>
              <SocialLinks variant="pill" />
            </div>
          </div>

          {/* Right Column: Functional Mailto Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFCF7] border border-[#EAD8C8] shadow-md relative overflow-hidden group">
              <CardCornerBrackets color="text-[#B76E4F]/25" size={16} />
              <div className="flex items-center gap-2 mb-6 text-[#965239]">
                <MessageSquare size={18} />
                <h3 className="font-serif font-bold text-xl text-[#29251F]">
                  Send a Direct Message
                </h3>
              </div>

              {/* Status Notifications */}
              {status === 'success' && (
                <div
                  className="mb-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs animate-in fade-in duration-300"
                  role="status"
                >
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{statusMessage}</p>
                    <p className="text-[11px] text-emerald-700 mt-0.5">
                      Thank you for reaching out. I usually reply within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div
                  className="mb-5 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs animate-in fade-in duration-300"
                  role="alert"
                >
                  <AlertCircle size={18} className="text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{statusMessage}</p>
                    <p className="text-[11px] text-rose-700 mt-0.5">
                      You can also email me directly at{' '}
                      <a href={`mailto:${emailAddress}`} className="underline font-semibold">
                        {emailAddress}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6E675F] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      disabled={status === 'submitting'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F1E8] border border-[#EAD8C8] text-[#29251F] text-sm focus:outline-none focus:border-[#B76E4F] transition-colors disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6E675F] mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      disabled={status === 'submitting'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F1E8] border border-[#EAD8C8] text-[#29251F] text-sm focus:outline-none focus:border-[#B76E4F] transition-colors disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6E675F] mb-1.5"
                  >
                    Your Message / Project Scope
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    disabled={status === 'submitting'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product, project timeline, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F1E8] border border-[#EAD8C8] text-[#29251F] text-sm focus:outline-none focus:border-[#B76E4F] transition-colors resize-y disabled:opacity-60"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#6E675F]">
                    Dispatched directly to Neeraj&apos;s inbox via secure SMTP.
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 bg-[#B76E4F] text-[#FFFCF7] hover:bg-[#965239] shadow-xs hover:shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shrink-0"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
