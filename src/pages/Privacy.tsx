import { Seo } from '@/components/Seo';

const sections = [
  {
    h: 'Information we collect',
    p: 'If you create an account, we collect the email address you sign up with. As you use the course, we store your course progress, quiz and assessment results, State Navigator selections, and Personal Cannabis Roadmap progress so you can continue where you left off. If you submit the Contact form, we collect your name, email, subject (if provided), and message.',
  },
  {
    h: 'How we store data',
    p: 'Course progress and roadmap data are stored locally in your browser using local storage, so your learning activity stays on your device. Contact form submissions are stored securely in our database and are not displayed publicly or shared with other users.',
  },
  {
    h: 'Cookies and local storage',
    p: 'This application uses browser local storage to remember your course progress and selections. We do not use advertising cookies or third-party tracking cookies. Local storage data remains on your device and can be cleared by you at any time through your browser settings.',
  },
  {
    h: 'Analytics',
    p: 'We do not currently use third-party analytics services. If we add analytics in the future, we will update this policy to describe what is collected and how it is used.',
  },
  {
    h: 'Data security',
    p: 'We use Row Level Security and other database protections so that users cannot read another user\'s information. Contact submissions are write-only from the public website. We do not expose secret keys in frontend code. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    h: 'Data retention',
    p: 'We retain contact form submissions as needed to respond to your inquiry and for reasonable record-keeping. Your local course progress remains on your device until you clear it. If you have an account, you may request deletion of your account data by contacting us.',
  },
  {
    h: 'Your rights',
    p: 'You may access, correct, or request deletion of personal information you have provided to us by contacting us through the Contact page. You can clear locally stored course progress at any time through your browser settings or by using the reset option in the course dashboard.',
  },
  {
    h: 'Children\'s privacy',
    p: 'This course is intended for adults. We do not knowingly collect information from children. If you believe a child has provided us information, please contact us so we can delete it.',
  },
  {
    h: 'Changes to this policy',
    p: 'We may update this privacy policy from time to time. Any changes will be posted on this page.',
  },
  {
    h: 'Contact',
    p: 'If you have questions about this privacy policy or your data, please contact us through our Contact page.',
  },
];

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy" description="Privacy policy for the Leaf Compass educational course." path="/privacy" />
      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-ink-600">How we handle your information.</p>
        </div>
      </section>
      <section className="container-page py-10 sm:py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-xl font-semibold text-ink-900">{i + 1}. {s.h}</h2>
              <p className="mt-2 text-ink-700 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
