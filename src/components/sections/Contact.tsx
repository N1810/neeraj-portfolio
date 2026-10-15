'use client';

import React, { useState } from 'react';
import { Send, Check, Copy, MessageSquare, Mail } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { CardCornerBrackets } from '@/components/ui/CornerAccents';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'sharmaneeraj1810@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Neeraj,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent via neerajkumar.dev`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F1E8] border border-[#EAD8C8] text-[#29251F] text-sm focus:outline-none focus:border-[#B76E4F] transition-colors"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F1E8] border border-[#EAD8C8] text-[#29251F] text-sm focus:outline-none focus:border-[#B76E4F] transition-colors"
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product, project timeline, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F1E8] border border-[#EAD8C8] text-[#29251F] text-sm focus:outline-none focus:border-[#B76E4F] transition-colors resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#6E675F]">
                    Opens your email client with pre-filled details.
                  </p>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={<Send size={15} />}
                  >
                    Send a Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
