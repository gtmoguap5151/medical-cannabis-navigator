import { Seo } from '@/components/Seo';

const sections = [
  {
    h: 'Educational purpose',
    p: 'Leaf Compass provides general educational information about cannabis, state medical cannabis programs, products, safety, and the legal landscape. The course is designed to help you understand the system, know your options, and navigate the process of researching your own situation through official sources.',
  },
  {
    h: 'No medical advice',
    p: 'This course is not medical advice, a medical evaluation, a diagnosis, a prescription, a physician recommendation, or a medical cannabis certification. We do not provide medical cards. Always consult a qualified healthcare professional for medical questions and before making any health-related decision.',
  },
  {
    h: 'No legal advice',
    p: 'The legal information in this course is general educational information, not legal advice or legal representation. Laws vary by jurisdiction and change over time. Always consult a qualified attorney and official government sources for your specific legal situation.',
  },
  {
    h: 'No guaranteed outcomes',
    p: 'We do not guarantee eligibility, approval, access to any program, or any particular result. Requirements are set by states and evaluated by licensed professionals. No course or service can guarantee approval.',
  },
  {
    h: 'State-law variability and accuracy limitations',
    p: 'Cannabis laws and program requirements differ by state and change frequently. While we strive to provide accurate educational information, we cannot guarantee that any specific detail is current for your jurisdiction. You must verify current requirements through official government sources before taking action.',
  },
  {
    h: 'User responsibilities',
    p: 'You are responsible for how you use the information in this course. You agree to verify current requirements through official sources, consult appropriate professionals, and comply with all applicable laws. You agree not to use the course in any way that is unlawful or that could harm others.',
  },
  {
    h: 'Intellectual property',
    p: 'All course content, including lessons, quizzes, the State Navigator, the Personal Cannabis Roadmap, designs, and text, is owned by Leaf Compass and protected by intellectual property laws. You may use the course for your own personal education. You may not copy, redistribute, or resell the content without permission.',
  },
  {
    h: 'Account responsibilities',
    p: 'If account features are available, you are responsible for keeping your account credentials secure and for activity that occurs under your account. You agree to notify us of any unauthorized use.',
  },
  {
    h: 'Limitation of liability',
    p: 'The course is provided "as is" for educational purposes. To the fullest extent permitted by law, Leaf Compass is not liable for any damages arising from your use of, or reliance on, the course content, including any action taken or not taken based on the information provided. You use the course at your own risk.',
  },
  {
    h: 'Changes to these terms',
    p: 'We may update these terms from time to time. Continued use of the course after changes are posted constitutes acceptance of the updated terms.',
  },
  {
    h: 'Contact',
    p: 'If you have questions about these terms, please contact us through our Contact page.',
  },
];

export default function Terms() {
  return (
    <>
      <Seo title="Terms" description="Terms of use for the Leaf Compass educational course." path="/terms" />
      <section className="border-b border-ink-100 bg-gradient-to-b from-forest-50 to-sand-50">
        <div className="container-page py-10 sm:py-12">
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">Terms of Use</h1>
          <p className="mt-3 text-ink-600">Please read these terms carefully before using the course.</p>
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
