export interface StateInfo {
  name: string;
  abbr: string;
  // A likely starting point for the official agency. Users are always told to verify.
  agency: string;
}

export const states: StateInfo[] = [
  { name: 'Alabama', abbr: 'AL', agency: 'Alabama Medical Cannabis Commission' },
  { name: 'Alaska', abbr: 'AK', agency: 'Alaska Department of Health' },
  { name: 'Arizona', abbr: 'AZ', agency: 'Arizona Department of Health Services' },
  { name: 'Arkansas', abbr: 'AR', agency: 'Arkansas Department of Health' },
  { name: 'California', abbr: 'CA', agency: 'California Department of Public Health' },
  { name: 'Colorado', abbr: 'CO', agency: 'Colorado Department of Public Health & Environment' },
  { name: 'Connecticut', abbr: 'CT', agency: 'Connecticut Department of Consumer Protection' },
  { name: 'Delaware', abbr: 'DE', agency: 'Delaware Division of Public Health' },
  { name: 'District of Columbia', abbr: 'DC', agency: 'DC Alcoholic Beverage and Cannabis Administration' },
  { name: 'Florida', abbr: 'FL', agency: 'Florida Office of Medical Marijuana Use' },
  { name: 'Georgia', abbr: 'GA', agency: 'Georgia Access to Medical Cannabis Commission' },
  { name: 'Hawaii', abbr: 'HI', agency: 'Hawaii Department of Health' },
  { name: 'Idaho', abbr: 'ID', agency: 'Idaho Office of Drug Policy' },
  { name: 'Illinois', abbr: 'IL', agency: 'Illinois Department of Public Health' },
  { name: 'Indiana', abbr: 'IN', agency: 'Indiana State Department of Health' },
  { name: 'Iowa', abbr: 'IA', agency: 'Iowa Department of Health and Human Services' },
  { name: 'Kansas', abbr: 'KS', agency: 'Kansas Department of Health and Environment' },
  { name: 'Kentucky', abbr: 'KY', agency: 'Kentucky Cabinet for Health and Family Services' },
  { name: 'Louisiana', abbr: 'LA', agency: 'Louisiana Department of Health' },
  { name: 'Maine', abbr: 'ME', agency: 'Maine Office of Cannabis Policy' },
  { name: 'Maryland', abbr: 'MD', agency: 'Maryland Cannabis Administration' },
  { name: 'Massachusetts', abbr: 'MA', agency: 'Massachusetts Cannabis Control Commission' },
  { name: 'Michigan', abbr: 'MI', agency: 'Michigan Cannabis Regulatory Agency' },
  { name: 'Minnesota', abbr: 'MN', agency: 'Minnesota Office of Cannabis Management' },
  { name: 'Mississippi', abbr: 'MS', agency: 'Mississippi State Department of Health' },
  { name: 'Missouri', abbr: 'MO', agency: 'Missouri Department of Health and Senior Services' },
  { name: 'Montana', abbr: 'MT', agency: 'Montana Department of Revenue' },
  { name: 'Nebraska', abbr: 'NE', agency: 'Nebraska Department of Health and Human Services' },
  { name: 'Nevada', abbr: 'NV', agency: 'Nevada Cannabis Compliance Board' },
  { name: 'New Hampshire', abbr: 'NH', agency: 'New Hampshire Department of Health and Human Services' },
  { name: 'New Jersey', abbr: 'NJ', agency: 'New Jersey Cannabis Regulatory Commission' },
  { name: 'New Mexico', abbr: 'NM', agency: 'New Mexico Regulation & Licensing Department' },
  { name: 'New York', abbr: 'NY', agency: 'New York Office of Cannabis Management' },
  { name: 'North Carolina', abbr: 'NC', agency: 'North Carolina Department of Health and Human Services' },
  { name: 'North Dakota', abbr: 'ND', agency: 'North Dakota Department of Health and Human Services' },
  { name: 'Ohio', abbr: 'OH', agency: 'Ohio Division of Cannabis Control' },
  { name: 'Oklahoma', abbr: 'OK', agency: 'Oklahoma Medical Marijuana Authority' },
  { name: 'Oregon', abbr: 'OR', agency: 'Oregon Health Authority' },
  { name: 'Pennsylvania', abbr: 'PA', agency: 'Pennsylvania Department of Health' },
  { name: 'Rhode Island', abbr: 'RI', agency: 'Rhode Island Cannabis Control Commission' },
  { name: 'South Carolina', abbr: 'SC', agency: 'South Carolina Department of Health and Environmental Control' },
  { name: 'South Dakota', abbr: 'SD', agency: 'South Dakota Department of Health' },
  { name: 'Tennessee', abbr: 'TN', agency: 'Tennessee Department of Health' },
  { name: 'Texas', abbr: 'TX', agency: 'Texas Department of Public Safety (Compassionate Use Program)' },
  { name: 'Utah', abbr: 'UT', agency: 'Utah Department of Health and Human Services' },
  { name: 'Vermont', abbr: 'VT', agency: 'Vermont Cannabis Control Board' },
  { name: 'Virginia', abbr: 'VA', agency: 'Virginia Cannabis Control Authority' },
  { name: 'Washington', abbr: 'WA', agency: 'Washington State Department of Health' },
  { name: 'West Virginia', abbr: 'WV', agency: 'West Virginia Office of Medical Cannabis' },
  { name: 'Wisconsin', abbr: 'WI', agency: 'Wisconsin Department of Health Services' },
  { name: 'Wyoming', abbr: 'WY', agency: 'Wyoming Department of Health' },
];

export function checklistFor(state: StateInfo): string[] {
  return [
    `Find the official ${state.agency} website (confirm the address ends in .gov).`,
    `Search online for "${state.name} medical cannabis program official site" and open only government (.gov) results.`,
    'Read the current list of qualifying conditions the program recognizes.',
    'Confirm the eligibility and residency requirements that apply today.',
    'Review the exact application or registration steps and any fees.',
    'Check what documentation you must provide and how it is submitted.',
    'Note current possession limits and where products may be purchased and used.',
    'Find out which healthcare providers are authorized to evaluate patients.',
    'Look for the date the page was last updated, and re-check close to when you act.',
    'Save the official contact details so you can confirm anything unclear directly.',
  ];
}

export function officialSearchUrl(state: StateInfo): string {
  const query = `${state.name} medical cannabis program official government site`;
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}
