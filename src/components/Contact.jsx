import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/basel-embaby-948671227/' },
  { name: 'GitHub', href: 'https://github.com/engbasel' },
  { name: 'Twitter', href: 'https://twitter.com/embaby_basel' },
  { name: 'WhatsApp', href: 'https://wa.me/2001060417664' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mailtoLink = `mailto:basel.a.embaby@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('basel.a.embaby@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-label">Contact</span>
            <h2 className="section-title mb-6">Let's Work Together</h2>
            <p className="text-[var(--color-text-secondary)] mb-10 max-w-md">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something great.
            </p>

            {/* Email */}
            <div className="mb-8">
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                Email
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:basel.a.embaby@gmail.com"
                  className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  basel.a.embaby@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg hover:bg-[var(--color-surface)] transition-colors"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[var(--color-success)]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[var(--color-text-muted)]" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-10">
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                Phone
              </p>
              <a
                href="tel:+2001060417664"
                className="text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              >
                +20 010 6041 7664
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                Social
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] border border-[var(--color-border)] transition-colors group"
                  >
                    {social.name}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-sm text-[var(--color-text-secondary)]">
                Available for freelance projects
              </span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--color-text-secondary)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[var(--color-text-secondary)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[var(--color-text-secondary)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`btn btn-lg w-full justify-center ${
                  isSubmitted ? 'bg-[var(--color-success)] border-[var(--color-success)]' : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
