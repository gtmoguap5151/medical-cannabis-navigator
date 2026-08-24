import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'What does the $49 purchase include?',
    a: 'Full access to the 10-module Medical Cannabis Navigator course — all lessons, interactive quizzes, progress tracking, the State Navigator, the Personal Cannabis Roadmap, the final assessment, a course-completion certificate, and educational reference material. It is a one-time purchase with no subscription.',
  },
  {
    q: 'Is this a subscription?',
    a: 'No. $49 is a one-time payment. There are no recurring charges and no hidden fees.',
  },
  {
    q: 'Is this a medical certification?',
    a: 'No. This is an educational course. The certificate you receive only documents completion of the course. It is not a medical cannabis certification, medical card, prescription, physician recommendation, or legal authorization of any kind.',
  },
  {
    q: 'Will this course get me a medical card?',
    a: 'No. We do not issue medical cards or participate in any state program. Medical cards are issued by state programs after evaluation by authorized healthcare professionals. This course helps you understand how that process generally works.',
  },
  {
    q: 'Does this course provide a medical recommendation?',
    a: 'No. We do not provide medical recommendations, evaluations, or advice. Only a licensed healthcare professional can do that. This course helps you prepare informed questions to bring to a clinician.',
  },
  {
    q: 'Does this course provide legal advice?',
    a: 'No. The course includes general educational information about the legal landscape, but it is not legal advice. For your specific situation, consult a qualified attorney and official government sources.',
  },
  {
    q: 'Does completing the course guarantee approval?',
    a: 'No. Requirements are set by states and evaluated by licensed professionals. No course, product, or service can guarantee approval or eligibility. Be cautious of anyone who promises otherwise.',
  },
  {
    q: 'How does the State Navigator work?',
    a: 'You select your state and receive a research checklist of what to verify — qualifying conditions, eligibility, fees, application steps, and more — along with direction toward official government sources. It is a research assistant, not a legal determination.',
  },
  {
    q: 'Are state requirements guaranteed to be current?',
    a: 'No. State cannabis laws and program requirements change frequently. The State Navigator directs you to official sources so you can verify the current rules yourself. Always confirm requirements close to when you plan to act.',
  },
  {
    q: 'What happens after I complete the course?',
    a: 'After passing all 10 modules including the final assessment, you can generate a course-completion certificate with your name on it. You can revisit any lesson or the State Navigator at any time.',
  },
  {
    q: 'How does the certificate work?',
    a: 'Once you pass all modules, you enter your name and generate a certificate of completion. It includes a certificate ID and completion date. You can print it or save it as a PDF. It only proves you completed this educational course.',
  },
  {
    q: 'Can I retake the assessment?',
    a: 'Yes. You can retake the final assessment — and any module quiz — as many times as you need. Your best score is kept.',
  },
  {
    q: 'Is the course medical advice?',
    a: 'No. The course provides general educational information. It does not diagnose conditions, recommend treatments, or replace care from a licensed healthcare professional. Always discuss health decisions with a clinician who knows your history.',
  },
  {
    q: 'How should I verify state requirements?',
    a: 'Find your state\'s official government program page (typically a .gov domain), read the current rules and patient information, note when the page was last updated, and re-verify close to when you act. The State Navigator gives you a checklist to guide this process.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-forest-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="border-t border-ink-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-ink-600 sm:px-6">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <>
      <Seo title="FAQ" description="Frequently asked questions about the Medical Cannabis Navigator educational course, pricing, certificate, and state requirements." path="/faq" />
      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Frequently Asked Questions</h1>
          <p className="mt-3 max-w-2xl text-ink-600">Clear, honest answers about what this course is — and what it is not.</p>
        </div>
      </section>
      <section className="container-page py-10 sm:py-12">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-forest-200 bg-forest-50 p-6 text-center">
          <p className="text-ink-700">Still have questions?</p>
          <Link to="/contact" className="btn-secondary mt-3">Contact us</Link>
        </div>
      </section>
    </>
  );
}
