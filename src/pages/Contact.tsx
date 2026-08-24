import { useState, type FormEvent } from 'react';
import { Check, AlertCircle, Send } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || null,
        message: form.message.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again in a moment.');
    }
  }

  const inputClass =
    'w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 focus:border-forest-500 focus:outline-none focus:ring-1 focus:ring-forest-500';

  return (
    <>
      <Seo title="Contact" description="Get in touch with the Medical Cannabis Navigator team." path="/contact" />
      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-ink-600">Have a question about the course? Send us a message and we will get back to you.</p>
        </div>
      </section>

      <section className="container-page py-10 sm:py-12">
        <div className="mx-auto max-w-xl">
          {status === 'success' ? (
            <div className="card flex flex-col items-center p-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                <Check className="h-7 w-7" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-ink-900">Message sent</h2>
              <p className="mt-2 text-sm text-ink-600">Thank you for reaching out. We will respond by email.</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-5">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              {status === 'error' && (
                <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <p className="m-0">{errorMsg}</p>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink-700">Name</label>
                  <input id="name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} className={`${inputClass} mt-1.5`} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-700">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className={`${inputClass} mt-1.5`} placeholder="you@example.com" />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className="block text-sm font-medium text-ink-700">Subject <span className="text-ink-400">(optional)</span></label>
                <input id="subject" type="text" value={form.subject} onChange={(e) => update('subject', e.target.value)} className={`${inputClass} mt-1.5`} placeholder="What is this about?" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-medium text-ink-700">Message</label>
                <textarea id="message" required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} className={`${inputClass} mt-1.5 resize-y`} placeholder="Your message…" />
              </div>

              <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-6 w-full sm:w-auto">
                {status === 'submitting' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </button>

              <p className="mt-4 text-xs text-ink-400">
                Please do not include medical or legal details in your message. This form is for general questions
                about the course only.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
