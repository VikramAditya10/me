export type Project = {
  id: string;
  number: string;
  name: string;
  theme: string;
  employer: string;
  role: string;
  problem: string;
  owned: string;
  built: string;
  proof: string;
  evidence: string;
  reflection: string;
  security?: string;
  editorial: { selection: 'suggested'; reflection: 'draft' };
};

// Owner-facing editorial metadata is deliberately not rendered in the portfolio.
const suggested = { selection: 'suggested', reflection: 'draft' } as const;

export const portfolio = {
  biography: {
    name: 'Vikram Aditya',
    role: 'Staff Engineer · Former founder',
    location: 'India',
    headline: 'I build teams and systems around real customer problems.',
    introduction: 'I’m a Staff Engineer and former founder working across fintech, applied AI and complex system integrations. I enjoy turning ambiguous requirements into useful products, bringing different systems together, and building teams that can own what they ship.',
    responsibility: 'I also bring experience handling security and compliance requirements, including engineering leadership through the completion of HDFC MyCards’ RBI audit.',
    background: '10+ years across software engineering, enterprise systems, fintech and applied AI.',
    evidence: ['25-person team leadership', 'Fintech platforms at scale', 'Security and compliance', 'Founder experience'],
  },
  illustration: [
    { id: 'customer', label: 'Customer problem', symbol: '01', text: 'I begin with what a customer is trying to do and where their experience breaks down.' },
    { id: 'product', label: 'Product', symbol: '02', text: 'I turn an ambiguous brief into a useful product that can improve through real usage.' },
    { id: 'systems', label: 'Systems', symbol: '03', text: 'I connect different systems around one coherent customer journey.' },
    { id: 'team', label: 'Team', symbol: '04', text: 'I build clear ownership so people can take responsibility for what they ship.' },
  ],
  interests: [
    { title: 'Building teams', kind: 'What I enjoy', text: 'I enjoy bringing people together, creating clear ownership, and helping a team turn a difficult brief into something it can deliver. I’ve owned hiring and delivery as a founder and led a cross-functional engineering team of 25.', project: 'mycards', link: 'Team ownership in MyCards' },
    { title: 'Solving complex customer problems', kind: 'What I enjoy', text: 'I like understanding what a customer is trying to achieve, where the experience breaks down, and what needs to change across the product and its underlying systems.', project: 'crew', link: 'A workflow for flight crews' },
    { title: 'Making different systems work together', kind: 'Where I’m strong', text: 'I’m good at connecting systems with different constraints and responsibilities. The interesting work is making the complete customer journey function reliably across those boundaries.', project: 'financing', link: 'Financing in the purchase journey' },
    { title: 'Applying AI to useful work', kind: 'What I enjoy', text: 'I’m interested in AI that makes a product more useful or an operation more effective, including recommendations, fraud detection, conversational systems and workflow automation.', project: 'smartbuy', link: 'More relevant discovery' },
    { title: 'Handling security and compliance', kind: 'Where I’m strong', text: 'I’m good at handling security and compliance requirements alongside architecture and delivery. On HDFC MyCards, the platform’s RBI audit was completed under my engineering leadership. I bring that experience to financial products where customer trust and engineering responsibility matter.', project: 'mycards', link: 'Engineering responsibility in MyCards' },
  ],
  projects: [
    {
      id: 'mycards', number: '01', name: 'HDFC MyCards', employer: 'Reward360',
      theme: 'Banking · Team leadership · Security & compliance',
      role: 'Architecture & engineering leadership',
      problem: 'Give bank customers a place to manage their cards, supported by reliable systems that can serve a large user base.',
      owned: 'I owned architecture and engineering delivery, designed distributed microservices, and led a 25-person cross-functional engineering team at Reward360.',
      built: 'Together, we built a card management platform supported by scalable services and coordinated work across backend, frontend, QA and DevOps.',
      proof: '6M+ monthly active users · 16M+ registered cards',
      evidence: 'The platform served 6M+ monthly active users and 16M+ registered cards. The platform’s RBI audit was completed under my engineering leadership.',
      security: 'I handled security and compliance requirements as part of architecture and engineering delivery. Completion of the platform’s RBI audit was a concrete milestone in that responsibility.',
      reflection: 'I enjoyed the combination of customer scale, technical responsibility and team leadership. It brought together the parts of engineering I care about: understanding the customer experience, making the systems work, and helping a team take ownership of delivery.',
      editorial: suggested,
    },
    {
      id: 'financing', number: '02', name: 'Apple India × TVS Credit', employer: 'Reward360',
      theme: 'Digital lending · System integration', role: 'Integration architecture',
      problem: 'Make financing available during an Apple purchase, bringing loan eligibility and approval into the purchase journey.',
      owned: 'I architected the instant financing integration, including real-time loan eligibility, credit orchestration and approval workflows.',
      built: 'We connected the commerce journey with TVS Credit’s lending workflow, bringing financing decisions into the purchase experience.',
      proof: 'Real-time eligibility & approval workflows',
      evidence: 'We delivered the instant financing integration and its loan eligibility, credit orchestration and approval workflows.',
      reflection: 'This is the kind of integration problem I enjoy: several systems with different responsibilities have to come together around one customer journey. The challenge is making the overall experience coherent while keeping the boundaries between systems clear.',
      editorial: suggested,
    },
    {
      id: 'smartbuy', number: '03', name: 'HDFC SmartBuy', employer: 'Reward360',
      theme: 'Applied AI · Customer relevance', role: 'Suggestion engine development',
      problem: 'Help customers discover relevant options using their location as useful context.',
      owned: 'I developed a location-based suggestion engine for HDFC SmartBuy.',
      built: 'We brought location-aware suggestions into personalised discovery, using location as context for the options a customer sees.',
      proof: 'Location-aware, personalised discovery',
      evidence: 'I delivered the location-based suggestion capability to support personalised recommendations and discovery.',
      reflection: 'I like work where the value of intelligence is visible in the customer experience. This project connected technical problem-solving with a simple question: how can we make the next option a customer sees more relevant?',
      editorial: suggested,
    },
    {
      id: 'crew', number: '04', name: 'SpiceJet crew coordination', employer: 'Surdtech',
      theme: 'Operational workflows · Real-time communication', role: 'Platform development',
      problem: 'Coordinate communication among crew members assigned to an upcoming flight.',
      owned: 'I built the crew coordination and messaging platform during my time at Surdtech.',
      built: 'The platform automatically created flight-based groups and supported real-time messaging for crew members assigned to a flight.',
      proof: 'Automatic flight groups & real-time messaging',
      evidence: 'The delivered workflow brought flight-based group creation and real-time crew communication together.',
      reflection: 'I enjoyed working on an operational problem with a clear human purpose: helping the right people communicate at the right time. It reflects why I like customer-centric engineering—the workflow matters as much as the implementation.',
      editorial: suggested,
    },
    {
      id: 'tea-board', number: '05', name: 'Tea Board India ERP', employer: 'Sumato Globaltech',
      theme: 'Enterprise workflows · Connected systems', role: 'ERP & application development',
      problem: 'Track tea production and sales across stakeholder groups with different reporting and operational needs.',
      owned: 'At Sumato Globaltech, I developed the ERP platform, stakeholder dashboards, reporting systems and four Android applications.',
      built: 'We connected workflows for Tea Board employees, tea growers, aggregators and factories, bringing their production, sales and reporting needs into one platform.',
      proof: 'Four Android applications · Connected ERP',
      evidence: 'The delivered scope included the ERP, stakeholder dashboards, reporting systems and four Android applications.',
      reflection: 'I enjoyed the challenge of understanding several different users and making their work fit together in one system. It strengthened the way I think about integrations: begin with people, responsibilities and information flow, then design the software around them.',
      editorial: suggested,
    },
  ] satisfies Project[],
  journey: [
    { id: 'shopclues', date: '2012–2013', company: 'ShopClues', role: 'Analyst', summary: 'Customer operations and logistics; NLP-based email sentiment analysis to support customer-service prioritisation.', note: 'The starting point: using software to understand customer signals and support operational decisions.', project: null },
    { id: 'software-ag', date: '2016–2017', company: 'Software AG', role: 'Software Engineer / Consultant', summary: 'Java and Selenium automation, AngularJS interfaces and Jenkins integration; research into ML and NLP for automated test generation.', note: 'My scope moved into engineering tools, test automation and the potential of ML and NLP in software delivery.', project: null },
    { id: 'sumato', date: '2017–2019', company: 'Sumato Globaltech', role: 'Software Engineer', summary: 'Tea Board India ERP, stakeholder applications, e-commerce platforms and a voice-enabled concierge using Amazon Transcribe.', note: 'I worked across enterprise workflows and the applications that different stakeholders needed to use them.', project: 'tea-board' },
    { id: 'surdtech', date: '2019–2022', company: 'Surdtech', role: 'Founder & Head of Technology', summary: 'Hiring, team building, architecture, enterprise delivery and infrastructure; airline systems, municipal ERP and Prophet-based demand forecasting.', note: 'As a founder, my responsibility grew from implementation to the people, architecture and delivery behind a business.', project: 'crew' },
    { id: 'reward360', date: '2022–present', company: 'Reward360', role: 'Staff Engineer', summary: 'Large-scale fintech systems, team leadership, MyCards, lending integrations and applied AI initiatives.', note: 'I bring architecture, security and compliance requirements, and cross-functional engineering delivery together around financial products.', project: 'mycards' },
  ],
  education: [
    { qualification: 'BCA', institution: 'Guwahati University', year: '2012' },
    { qualification: 'MCA', institution: 'Tezpur University', year: '2016' },
  ],
  next: {
    introduction: 'I want to work closely with founders and customers to build useful AI-enabled products, particularly in fintech. I’m most interested in work where I can help shape the problem, build the first useful version, connect the systems around it, and grow the engineering team as the product develops.',
    responsibility: 'I also want to bring security and compliance considerations into product and engineering decisions from the beginning.',
    focus: [
      { title: 'Build products from the beginning', text: 'Work from customer discovery through architecture, security and compliance requirements, implementation and production delivery.' },
      { title: 'Deepen applied AI work', text: 'Bring AI and agent systems into useful customer and operational workflows. This is a direction I want to explore and deepen.' },
      { title: 'Build a team with ownership', text: 'Stay close to implementation while helping people take responsibility for complete outcomes.' },
    ],
    approach: ['Understand the customer and constraints', 'Map existing systems', 'Build a focused first version', 'Agree ownership and measures of success', 'Improve from real usage'],
  },
  availability: {
    noticePeriod: null as string | null,
    earliestStartDate: null as string | null,
    relocationTiming: null as string | null,
  },
  contact: {
    closing: 'Building something that brings together customers, AI and complex systems? Let’s talk about the problem you’re trying to solve.',
    email: 'vikramaditya1025@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vikramaditya1025/',
    github: 'https://github.com/VikramAditya10',
    resume: 'Vikram_Aditya_AI_Fintech_Resume.pdf',
  },
  samples: {
    locations: [
      { name: 'Cedar Quarter', items: ['Cedar Café · Coffee & conversation', 'Paper House · Books & browsing'] },
      { name: 'Harbour District', items: ['Harbour Kitchen · Lunch by the water', 'North Gallery · An afternoon of art'] },
      { name: 'Orchard Square', items: ['Orchard Table · Seasonal dining', 'Green Walk · Time outdoors'] },
    ],
    flight: 'DEMO 042',
    crew: ['Alex · Flight crew', 'Sam · Cabin crew', 'Riya · Cabin crew'],
  },
};
