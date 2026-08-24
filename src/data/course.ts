import type { LucideIcon } from 'lucide-react';
import {
  Sprout,
  HeartPulse,
  Landmark,
  ClipboardList,
  FlaskConical,
  ShieldCheck,
  Scale,
  Store,
  Map as MapIcon,
  GraduationCap,
} from 'lucide-react';

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string };

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  blocks: ContentBlock[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  overview: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
  isFinalAssessment?: boolean;
}

const disclaimerCallout =
  'Educational information only. This course does not provide medical advice, legal advice, or authorization of any kind. Always verify current rules through official government sources and licensed professionals.';

export const modules: Module[] = [
  {
    id: 'cannabis-101',
    number: 1,
    title: 'Cannabis 101',
    subtitle: 'The plant, its compounds, and the vocabulary you need',
    icon: Sprout,
    overview:
      'Build a clear, factual foundation. You will learn what the cannabis plant is, the difference between the major compounds people discuss, and the terms used across programs and dispensaries so the rest of the course makes sense.',
    lessons: [
      {
        id: 'what-is-cannabis',
        title: 'What cannabis is',
        minutes: 7,
        blocks: [
          { type: 'p', text: 'Cannabis is a flowering plant that contains a family of naturally occurring compounds. When people talk about "medical cannabis," they are usually referring to products made from the plant that are used within a state-regulated program for qualifying conditions.' },
          { type: 'h', text: 'Hemp vs. marijuana' },
          { type: 'p', text: 'Legally, the plant is often split into two categories based on how much THC it contains. "Hemp" is defined in U.S. federal law as cannabis with very low THC, while higher-THC cannabis is regulated differently. This distinction matters because it changes which laws apply to a given product.' },
          { type: 'ul', items: [
            'The same plant species can be grown to express very different chemical profiles.',
            'The legal category of a product depends on its measured THC content, not on marketing terms.',
            'Product legality is set by law, and it changes over time and by location.',
          ] },
          { type: 'callout', text: disclaimerCallout },
        ],
      },
      {
        id: 'cannabinoids',
        title: 'Cannabinoids: THC, CBD, and beyond',
        minutes: 8,
        blocks: [
          { type: 'p', text: 'Cannabinoids are the compounds most commonly discussed when people evaluate cannabis products. Two are widely known.' },
          { type: 'ul', items: [
            'THC is the compound most associated with the intoxicating "high." Its concentration strongly influences a product\'s effects.',
            'CBD is a non-intoxicating compound that many products feature. It does not produce a high on its own.',
            'Many other minor cannabinoids exist and are still being studied.',
          ] },
          { type: 'h', text: 'Terpenes' },
          { type: 'p', text: 'Terpenes are aromatic compounds found in cannabis and many other plants. They contribute to smell and flavor and are frequently discussed on product labels, though research into their effects is ongoing.' },
          { type: 'callout', text: 'Concentration matters. A "high-THC" product and a "high-CBD" product can look identical but behave very differently. Always read the lab label.' },
        ],
      },
      {
        id: 'vocabulary',
        title: 'Core vocabulary',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'These terms appear throughout state programs, product labels, and dispensary conversations.' },
          { type: 'ul', items: [
            'Potency: the amount of a compound (often THC or CBD) in a product, usually shown as a percentage or in milligrams.',
            'Certificate of Analysis (COA): a lab report showing a product\'s tested contents and safety screening.',
            'Dose: the amount of a product consumed at one time, typically measured in milligrams for edibles or tinctures.',
            'Onset: how long it takes to feel effects, which varies widely by product type.',
            'Qualifying condition: a health condition your state program lists as making a person potentially eligible.',
          ] },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'What primarily determines whether a cannabis product falls into the "hemp" legal category in U.S. federal law?',
        options: ['The color of the plant', 'Its measured THC content', 'The price of the product', 'The state it was grown in'],
        correctIndex: 1,
        explanation: 'Federal law distinguishes hemp from higher-THC cannabis based on measured THC content.',
      },
      {
        id: 'q2',
        prompt: 'Which statement about CBD is accurate?',
        options: ['It is the main intoxicating compound', 'It always contains high THC', 'It is non-intoxicating on its own', 'It is illegal everywhere'],
        correctIndex: 2,
        explanation: 'CBD is non-intoxicating and does not produce a high by itself.',
      },
      {
        id: 'q3',
        prompt: 'A Certificate of Analysis (COA) tells you:',
        options: ['A product\'s tested contents and safety screening', 'The store\'s hours', 'Your eligibility for a program', 'The weather'],
        correctIndex: 0,
        explanation: 'A COA is a lab report documenting tested contents and safety screening.',
      },
    ],
  },
  {
    id: 'medical-cannabis-health',
    number: 2,
    title: 'Medical Cannabis & Health',
    subtitle: 'How the topic is studied and discussed responsibly',
    icon: HeartPulse,
    overview:
      'Understand how medical cannabis is researched and discussed, why individual results vary, and why decisions about your health belong with a licensed clinician. This module models how to think critically, not what to take.',
    lessons: [
      {
        id: 'how-its-studied',
        title: 'How medical cannabis is studied',
        minutes: 7,
        blocks: [
          { type: 'p', text: 'Research on cannabis is active and evolving. Different conditions have different levels of evidence, and study quality varies. Being an informed learner means understanding that "some people report" is not the same as "clinically proven."' },
          { type: 'ul', items: [
            'Evidence differs by condition and by product type.',
            'Anecdotes and testimonials are not a substitute for clinical evidence.',
            'New research can change what experts recommend.',
          ] },
          { type: 'callout', text: 'This course does not diagnose conditions, recommend treatments, or claim health benefits. Discuss any health decision with a licensed clinician.' },
        ],
      },
      {
        id: 'why-results-vary',
        title: 'Why individual results vary',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'People respond to cannabis products differently. Factors include the product\'s composition, the amount used, an individual\'s health history, other medications, and the form of the product.' },
          { type: 'p', text: 'Because of this variability, general information you read online may not apply to you. A clinician can consider your specific situation, including interactions with other medications.' },
        ],
      },
      {
        id: 'talking-to-clinicians',
        title: 'Talking with a licensed clinician',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'A productive conversation with a healthcare professional is one of the most valuable steps a person can take. You can prepare by organizing your questions and your health history.' },
          { type: 'ol', items: [
            'Write down your goals and any symptoms you want to discuss.',
            'List all medications and supplements you currently take.',
            'Ask about potential interactions and side effects.',
            'Ask what monitoring or follow-up would be appropriate.',
          ] },
          { type: 'callout', text: 'We are an education company. We do not provide evaluations, recommendations, or medical cards. Only a licensed professional can advise you.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Which is the most reliable source for a personal health decision about cannabis?',
        options: ['A social media testimonial', 'A licensed clinician who knows your history', 'A product advertisement', 'A friend\'s experience'],
        correctIndex: 1,
        explanation: 'A licensed clinician can consider your specific health situation, including medication interactions.',
      },
      {
        id: 'q2',
        prompt: 'Individual results with cannabis products vary because of:',
        options: ['Only the price', 'Product composition, dose, health history, and other factors', 'The day of the week', 'Nothing; results are identical for everyone'],
        correctIndex: 1,
        explanation: 'Many factors influence how a person responds, so general information may not apply to you.',
      },
      {
        id: 'q3',
        prompt: 'An anecdote or testimonial is:',
        options: ['The same as clinical proof', 'Not a substitute for clinical evidence', 'Always accurate', 'A legal document'],
        correctIndex: 1,
        explanation: 'Personal stories are not a substitute for clinical evidence.',
      },
    ],
  },
  {
    id: 'understanding-your-state-program',
    number: 3,
    title: 'Understanding Your State Program',
    subtitle: 'How programs are structured and where the real rules live',
    icon: Landmark,
    overview:
      'Every state program is different and rules change frequently. This module teaches you how programs are generally structured and, most importantly, how to find and verify the current, official rules for your location.',
    lessons: [
      {
        id: 'how-programs-work',
        title: 'How state programs are structured',
        minutes: 7,
        blocks: [
          { type: 'p', text: 'Medical cannabis programs are run at the state level, so the details differ from place to place. Still, most programs share a similar shape.' },
          { type: 'ul', items: [
            'A list of qualifying conditions the program recognizes.',
            'A requirement to be evaluated by an authorized healthcare provider.',
            'An application or registration process, often with fees.',
            'Rules about where products can be purchased and how much can be possessed.',
          ] },
          { type: 'callout', text: 'Details like qualifying conditions, fees, and possession limits change often. Never rely on a course, blog, or forum for the current rule.' },
        ],
      },
      {
        id: 'official-sources',
        title: 'Finding official sources',
        minutes: 7,
        blocks: [
          { type: 'p', text: 'The only authoritative source for your state\'s rules is the government agency that operates the program. These are typically state health departments or dedicated cannabis regulatory agencies.' },
          { type: 'ol', items: [
            'Search for your state\'s official medical cannabis or health department program page.',
            'Confirm the website is an official government domain.',
            'Look for the "current rules," "patient information," or "how to apply" sections.',
            'Note the date the information was last updated.',
          ] },
          { type: 'p', text: 'The State Navigator tool in this course gives you a research checklist to guide exactly this process.' },
        ],
      },
      {
        id: 'verify-verify',
        title: 'Verify, then verify again',
        minutes: 5,
        blocks: [
          { type: 'p', text: 'Because rules change, a good habit is to verify information close to the time you act on it, and to confirm it against the official source rather than a summary.' },
          { type: 'callout', text: 'If two sources disagree, the official government source wins. When in doubt, contact the program directly.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Who runs medical cannabis programs in the United States?',
        options: ['Individual states', 'Private companies', 'This course', 'Dispensaries alone'],
        correctIndex: 0,
        explanation: 'Programs are operated at the state level, so rules vary by state.',
      },
      {
        id: 'q2',
        prompt: 'What is the most authoritative source for your state\'s current rules?',
        options: ['A cannabis forum', 'The official state government program page', 'A product label', 'A YouTube video'],
        correctIndex: 1,
        explanation: 'The government agency operating the program is the authoritative source.',
      },
      {
        id: 'q3',
        prompt: 'If a blog and an official government page disagree, you should trust:',
        options: ['The blog', 'Whichever is easier to read', 'The official government page', 'Neither, and give up'],
        correctIndex: 2,
        explanation: 'The official government source is authoritative.',
      },
    ],
  },
  {
    id: 'preparing-for-the-process',
    number: 4,
    title: 'Preparing for the Process',
    subtitle: 'Getting organized so nothing catches you off guard',
    icon: ClipboardList,
    overview:
      'Preparation reduces stress and mistakes. Learn how to organize documents, questions, and expectations before you engage with any official process, without us claiming to guarantee any outcome.',
    lessons: [
      {
        id: 'documents',
        title: 'Organizing your documents',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'Most official processes ask for identity and, in many cases, health-related documentation. Gathering these in advance saves time.' },
          { type: 'ul', items: [
            'A government-issued photo ID and proof of residency where required.',
            'Relevant medical records or a summary of your health history.',
            'A list of current medications and supplements.',
            'Any forms your state program specifies.',
          ] },
          { type: 'callout', text: 'We cannot tell you whether you qualify or guarantee approval. Requirements are set by your state and evaluated by licensed professionals.' },
        ],
      },
      {
        id: 'questions',
        title: 'Preparing your questions',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'Walking into any appointment with prepared questions helps you get clear answers and make informed decisions.' },
          { type: 'ol', items: [
            'What are the risks, benefits, and alternatives?',
            'How might this interact with my other medications?',
            'What follow-up or monitoring is recommended?',
            'What costs should I expect, and are they ongoing?',
          ] },
        ],
      },
      {
        id: 'expectations',
        title: 'Setting realistic expectations',
        minutes: 5,
        blocks: [
          { type: 'p', text: 'Timelines, fees, and steps vary. Approaching the process with realistic expectations, and confirming details with official sources, helps you avoid surprises.' },
          { type: 'callout', text: 'No course, product, or service can promise approval or a specific result. Be skeptical of anyone who does.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Which document is commonly requested in official processes?',
        options: ['A government-issued photo ID', 'A social media profile', 'A restaurant receipt', 'A course certificate'],
        correctIndex: 0,
        explanation: 'Identity documents like a photo ID are commonly required.',
      },
      {
        id: 'q2',
        prompt: 'Can this course guarantee you will be approved for a state program?',
        options: ['Yes, always', 'Yes, for an extra fee', 'No; requirements are set by states and evaluated by professionals', 'Only on weekends'],
        correctIndex: 2,
        explanation: 'No course can guarantee approval. States set requirements and licensed professionals evaluate eligibility.',
      },
      {
        id: 'q3',
        prompt: 'A good question to prepare for an appointment is:',
        options: ['What are the risks, benefits, and alternatives?', 'What is your favorite color?', 'How is the weather?', 'None; questions are unnecessary'],
        correctIndex: 0,
        explanation: 'Asking about risks, benefits, and alternatives supports informed decisions.',
      },
    ],
  },
  {
    id: 'understanding-products',
    number: 5,
    title: 'Understanding Products',
    subtitle: 'Product formats, labels, and how to read them',
    icon: FlaskConical,
    overview:
      'Product formats differ dramatically in how they are used and how quickly effects appear. Learn the main categories and, crucially, how to read a label and lab report so you can be an informed, cautious consumer.',
    lessons: [
      {
        id: 'formats',
        title: 'Common product formats',
        minutes: 7,
        blocks: [
          { type: 'p', text: 'Products come in several general formats. Each behaves differently, and none is inherently "best."' },
          { type: 'ul', items: [
            'Flower: the dried plant material.',
            'Edibles: foods and beverages containing cannabis compounds, which typically take longer to take effect.',
            'Tinctures and oils: liquids measured by the drop or milliliter.',
            'Topicals: products applied to the skin.',
            'Concentrates: highly potent extracts.',
          ] },
          { type: 'callout', text: 'Onset and duration differ widely by format. Edibles in particular can take much longer to be felt, which is why patience matters.' },
        ],
      },
      {
        id: 'reading-labels',
        title: 'Reading a label and COA',
        minutes: 8,
        blocks: [
          { type: 'p', text: 'A label and Certificate of Analysis tell you what is actually in a product. Learning to read them is one of the most practical safety skills.' },
          { type: 'ol', items: [
            'Check total THC and CBD content and how they are measured.',
            'Note the serving size and the number of servings.',
            'Confirm the product passed safety screening for contaminants.',
            'Check the batch or lot number and testing date.',
          ] },
          { type: 'callout', text: 'If a product has no lab information available, treat that as a reason for caution.' },
        ],
      },
      {
        id: 'dosing-basics',
        title: 'Understanding dosing information',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'Dosing information is usually expressed in milligrams. Because responses vary and formats differ, general phrases like "start low and go slow" are commonly used as a cautious principle, not a prescription.' },
          { type: 'callout', text: 'This is general education, not a dosing recommendation. Discuss any specific use with a licensed clinician.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Which format typically takes the longest to be felt?',
        options: ['Edibles', 'Nothing takes time', 'All are instant', 'Topicals always work fastest internally'],
        correctIndex: 0,
        explanation: 'Edibles commonly take longer to take effect than many other formats.',
      },
      {
        id: 'q2',
        prompt: 'What should you do if a product has no lab information available?',
        options: ['Assume it is fine', 'Treat it as a reason for caution', 'Buy more of it', 'Ignore labels entirely'],
        correctIndex: 1,
        explanation: 'Missing lab information is a reason to be cautious.',
      },
      {
        id: 'q3',
        prompt: 'Dosing information is typically expressed in:',
        options: ['Milligrams', 'Miles', 'Hours', 'Colors'],
        correctIndex: 0,
        explanation: 'Dosing is usually measured in milligrams.',
      },
    ],
  },
  {
    id: 'responsible-use-safety',
    number: 6,
    title: 'Responsible Use & Safety',
    subtitle: 'Harm-reduction principles and practical safety',
    icon: ShieldCheck,
    overview:
      'Safety is central to being informed. This module covers general harm-reduction principles, storage, situations to avoid, and when to seek professional help, framed as education rather than instruction to use anything.',
    lessons: [
      {
        id: 'harm-reduction',
        title: 'Harm-reduction principles',
        minutes: 7,
        blocks: [
          { type: 'p', text: 'Harm reduction is a public-health approach focused on reducing risk. Common principles are widely discussed in safety education.' },
          { type: 'ul', items: [
            'Understand a product before considering it, including its potency and format.',
            'Never combine substances without professional guidance, including alcohol or medications.',
            'Do not drive or operate machinery while impaired.',
            'Be aware of how a product may affect others in your household.',
          ] },
          { type: 'callout', text: 'Driving while impaired is dangerous and illegal. Impairment laws apply regardless of program participation.' },
        ],
      },
      {
        id: 'storage-safety',
        title: 'Storage and household safety',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'Safe storage protects children, pets, and others. Edibles can be especially risky if mistaken for ordinary food.' },
          { type: 'ol', items: [
            'Keep products in labeled, child-resistant containers.',
            'Store products out of reach of children and pets.',
            'Keep products separate from regular food.',
            'Know the number for poison control in case of accidental ingestion.',
          ] },
        ],
      },
      {
        id: 'when-to-seek-help',
        title: 'When to seek help',
        minutes: 5,
        blocks: [
          { type: 'p', text: 'Knowing when to seek professional help is an essential safety skill.' },
          { type: 'callout', text: 'If you or someone else experiences a medical emergency, contact emergency services immediately. This course is not a substitute for emergency care.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Which is a sound safety practice?',
        options: ['Driving while impaired', 'Storing products out of reach of children and pets', 'Mixing substances freely', 'Ignoring potency'],
        correctIndex: 1,
        explanation: 'Safe storage protects children, pets, and others.',
      },
      {
        id: 'q2',
        prompt: 'Combining cannabis with alcohol or medications should be done:',
        options: ['Freely', 'Only with professional guidance', 'Whenever convenient', 'To increase effects'],
        correctIndex: 1,
        explanation: 'Combining substances should only be considered with professional guidance.',
      },
      {
        id: 'q3',
        prompt: 'In a medical emergency, you should:',
        options: ['Wait it out', 'Contact emergency services immediately', 'Search a forum', 'Take more product'],
        correctIndex: 1,
        explanation: 'Always contact emergency services in an emergency.',
      },
    ],
  },
  {
    id: 'cannabis-and-the-law',
    number: 7,
    title: 'Cannabis & the Law',
    subtitle: 'How different layers of law can apply',
    icon: Scale,
    overview:
      'Cannabis law is complex because different layers of government treat it differently. This module explains the landscape at a high level so you understand why you must always verify the current law for your situation.',
    lessons: [
      {
        id: 'layers-of-law',
        title: 'Layers of law',
        minutes: 7,
        blocks: [
          { type: 'p', text: 'In the United States, federal, state, and local laws can each address cannabis differently. A product or activity legal under one layer may not be under another.' },
          { type: 'ul', items: [
            'Federal law and state law can differ significantly.',
            'Local rules may add further restrictions.',
            'Rules for travel, employment, and housing can each be different again.',
          ] },
          { type: 'callout', text: 'This module is general education, not legal advice. For your situation, consult a qualified attorney and official government sources.' },
        ],
      },
      {
        id: 'common-pitfalls',
        title: 'Common legal pitfalls',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'Certain situations commonly cause confusion. Being aware of them helps you ask the right questions.' },
          { type: 'ul', items: [
            'Traveling across state lines can change which laws apply.',
            'Employment policies may differ from state law.',
            'Possession limits and where products can be used are often restricted.',
          ] },
        ],
      },
      {
        id: 'staying-current',
        title: 'Staying current',
        minutes: 5,
        blocks: [
          { type: 'p', text: 'Laws change. The safest habit is to confirm current law through official sources and qualified professionals before you act.' },
          { type: 'callout', text: 'We do not provide legal advice or representation. Only a licensed attorney can advise you on your legal situation.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Why is cannabis law described as complex?',
        options: ['It never changes', 'Federal, state, and local laws can differ', 'Only one law applies everywhere', 'It is identical worldwide'],
        correctIndex: 1,
        explanation: 'Different layers of government can treat cannabis differently.',
      },
      {
        id: 'q2',
        prompt: 'Traveling across state lines can:',
        options: ['Never matter', 'Change which laws apply', 'Guarantee legality', 'Cancel all laws'],
        correctIndex: 1,
        explanation: 'Crossing state lines can change the applicable laws.',
      },
      {
        id: 'q3',
        prompt: 'For your specific legal situation, you should consult:',
        options: ['This course', 'A qualified attorney and official sources', 'A product label', 'A social media post'],
        correctIndex: 1,
        explanation: 'Only a licensed attorney can advise on your legal situation.',
      },
    ],
  },
  {
    id: 'dispensary-101',
    number: 8,
    title: 'Dispensary 101',
    subtitle: 'What to expect and how to prepare for a visit',
    icon: Store,
    overview:
      'Knowing what to expect makes a first dispensary visit far less intimidating. Learn how licensed dispensaries generally operate, what questions to ask, and how to keep the experience safe and informed.',
    lessons: [
      {
        id: 'what-to-expect',
        title: 'What to expect',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'Licensed dispensaries are regulated retail locations. Procedures vary, but many share common steps.' },
          { type: 'ul', items: [
            'You may need to show identification and program documentation.',
            'Staff can describe products, but they are not your clinician.',
            'Products should have labels and lab information available.',
          ] },
          { type: 'callout', text: 'Only purchase from licensed, legal sources permitted in your location. Verify a dispensary\'s license through official channels.' },
        ],
      },
      {
        id: 'questions-to-ask',
        title: 'Questions worth asking',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'Good questions help you make an informed choice and avoid surprises.' },
          { type: 'ol', items: [
            'Can I see the lab report for this product?',
            'What is the serving size and total potency?',
            'What is the return or exchange policy?',
            'How should this product be stored?',
          ] },
        ],
      },
      {
        id: 'staying-informed',
        title: 'Staying informed and safe',
        minutes: 5,
        blocks: [
          { type: 'p', text: 'Dispensary staff can share product information, but they cannot replace a licensed clinician for health decisions or an attorney for legal ones.' },
          { type: 'callout', text: 'Take your time, read labels, and never feel pressured. Informed decisions are better decisions.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'You should purchase only from:',
        options: ['Any available source', 'Licensed, legal sources permitted in your location', 'Online strangers', 'Unlabeled sellers'],
        correctIndex: 1,
        explanation: 'Only buy from licensed, legal sources permitted where you are.',
      },
      {
        id: 'q2',
        prompt: 'Dispensary staff can:',
        options: ['Replace your clinician', 'Give legal representation', 'Describe products but not replace a clinician', 'Guarantee results'],
        correctIndex: 2,
        explanation: 'Staff can describe products but are not a substitute for a clinician or attorney.',
      },
      {
        id: 'q3',
        prompt: 'A good question at a dispensary is:',
        options: ['Can I see the lab report for this product?', 'What is your favorite movie?', 'Can you guarantee approval?', 'None; asking is rude'],
        correctIndex: 0,
        explanation: 'Asking for the lab report supports an informed decision.',
      },
    ],
  },
  {
    id: 'personal-cannabis-roadmap',
    number: 9,
    title: 'Personal Cannabis Roadmap',
    subtitle: 'Turning knowledge into your own organized plan',
    icon: MapIcon,
    overview:
      'Bring everything together into a personal, organized roadmap for research and decision-making. This module helps you structure your next steps around official sources and licensed professionals.',
    lessons: [
      {
        id: 'build-your-roadmap',
        title: 'Building your roadmap',
        minutes: 7,
        blocks: [
          { type: 'p', text: 'A roadmap is simply an organized plan of the steps you intend to research and the questions you intend to ask. It keeps you focused on official sources rather than rumor.' },
          { type: 'ol', items: [
            'Identify your state program\'s official page using the State Navigator.',
            'List the current requirements you need to verify.',
            'Prepare your documents and questions.',
            'Schedule conversations with licensed professionals as appropriate.',
            'Record where and when you verified each piece of information.',
          ] },
          { type: 'callout', text: 'Your roadmap is a research and organization tool. It is not approval, authorization, or advice.' },
        ],
      },
      {
        id: 'staying-organized',
        title: 'Staying organized over time',
        minutes: 6,
        blocks: [
          { type: 'p', text: 'Because rules change, keeping notes about what you verified and when helps you stay current and avoid relying on outdated information.' },
          { type: 'ul', items: [
            'Keep a dated log of sources you checked.',
            'Re-verify key facts close to when you act on them.',
            'Store documents securely and privately.',
          ] },
        ],
      },
      {
        id: 'know-your-limits',
        title: 'Knowing your limits',
        minutes: 5,
        blocks: [
          { type: 'p', text: 'A good roadmap recognizes where your research ends and professional guidance begins.' },
          { type: 'callout', text: 'For medical questions, see a clinician. For legal questions, see an attorney. For program rules, see the official government source.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'A personal cannabis roadmap is best described as:',
        options: ['A guarantee of approval', 'An organized plan for research and decisions', 'A legal authorization', 'A prescription'],
        correctIndex: 1,
        explanation: 'It is an organization and research tool, not approval or advice.',
      },
      {
        id: 'q2',
        prompt: 'Why keep a dated log of the sources you check?',
        options: ['To impress friends', 'Because rules change and you may need to re-verify', 'It is required by law', 'There is no reason'],
        correctIndex: 1,
        explanation: 'Dated notes help you stay current as rules change.',
      },
      {
        id: 'q3',
        prompt: 'For questions about program rules, the right source is:',
        options: ['A rumor', 'The official government source', 'A guess', 'An advertisement'],
        correctIndex: 1,
        explanation: 'Program rules should come from the official government source.',
      },
    ],
  },
  {
    id: 'final-assessment',
    number: 10,
    title: 'Final Assessment',
    subtitle: 'Confirm your understanding across the course',
    icon: GraduationCap,
    isFinalAssessment: true,
    overview:
      'The final assessment reviews the key ideas from all nine modules. Passing confirms you completed the educational course. It is not a medical or legal credential of any kind.',
    lessons: [
      {
        id: 'before-you-begin',
        title: 'Before you begin',
        minutes: 4,
        blocks: [
          { type: 'p', text: 'This final assessment brings together the most important, compliance-focused ideas from the course. You need to answer at least 80% correctly to complete the course and unlock your certificate of completion.' },
          { type: 'ul', items: [
            'You can retake the assessment as many times as you need.',
            'Each question links back to ideas covered in the modules.',
            'Take your time and read each question carefully.',
          ] },
          { type: 'callout', text: 'Completing this assessment proves you finished an educational course. It is NOT a medical cannabis certification, medical card, prescription, recommendation, or legal authorization.' },
        ],
      },
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'The most authoritative source for your state\'s current cannabis program rules is:',
        options: ['A forum', 'The official state government program page', 'This course', 'A product ad'],
        correctIndex: 1,
        explanation: 'State programs are run by government agencies, which are the authoritative source.',
      },
      {
        id: 'q2',
        prompt: 'For a personal health decision, you should rely on:',
        options: ['A testimonial', 'A licensed clinician', 'A dispensary ad', 'A guess'],
        correctIndex: 1,
        explanation: 'Only a licensed clinician can advise on your health situation.',
      },
      {
        id: 'q3',
        prompt: 'This course\'s certificate of completion proves:',
        options: ['You are approved for a medical card', 'You completed an educational course', 'You have a prescription', 'You are legally authorized to use cannabis'],
        correctIndex: 1,
        explanation: 'The certificate only proves completion of the educational course.',
      },
      {
        id: 'q4',
        prompt: 'A Certificate of Analysis (COA) documents:',
        options: ['Store hours', 'A product\'s tested contents and safety screening', 'Your eligibility', 'Legal advice'],
        correctIndex: 1,
        explanation: 'A COA is a lab report on tested contents and safety.',
      },
      {
        id: 'q5',
        prompt: 'Which is a sound safety practice?',
        options: ['Driving while impaired', 'Storing products away from children and pets', 'Mixing substances freely', 'Ignoring labels'],
        correctIndex: 1,
        explanation: 'Safe storage protects children, pets, and others.',
      },
      {
        id: 'q6',
        prompt: 'Cannabis law is complex primarily because:',
        options: ['It never changes', 'Federal, state, and local laws can differ', 'Only one law applies', 'It is the same everywhere'],
        correctIndex: 1,
        explanation: 'Different layers of government treat cannabis differently.',
      },
      {
        id: 'q7',
        prompt: 'Can any course or service guarantee approval for a state program?',
        options: ['Yes', 'No', 'Only for a fee', 'Only in some states'],
        correctIndex: 1,
        explanation: 'No one can guarantee approval; states set requirements and professionals evaluate eligibility.',
      },
      {
        id: 'q8',
        prompt: 'You should purchase cannabis products only from:',
        options: ['Any source', 'Licensed, legal sources permitted in your location', 'Unlabeled sellers', 'Strangers online'],
        correctIndex: 1,
        explanation: 'Only licensed, legal sources should be used.',
      },
      {
        id: 'q9',
        prompt: 'If a blog and an official government page disagree, trust:',
        options: ['The blog', 'The official government page', 'Neither', 'The one with more ads'],
        correctIndex: 1,
        explanation: 'Official government sources are authoritative.',
      },
      {
        id: 'q10',
        prompt: 'A personal cannabis roadmap is:',
        options: ['A legal authorization', 'An organized research and decision plan', 'A prescription', 'A medical card'],
        correctIndex: 1,
        explanation: 'It is an organizational tool, not any form of authorization.',
      },
    ],
  },
];

export const PASS_THRESHOLD = 0.8;

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
