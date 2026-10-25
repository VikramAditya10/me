import { useEffect, useState, type ReactNode } from 'react';
import { portfolio, type Project } from './content/portfolio';

const sections = ['about', 'work', 'journey', 'next'] as const;
type Section = typeof sections[number];
const projectHash = (id: string) => `#project-${id}`;

function Headline({ text }: { text: string }) {
  const phrase = 'real customer problems.';
  const index = text.indexOf(phrase);
  if (index < 0) return <>{text}</>;
  return <>{text.slice(0, index)}<span>{phrase}</span>{text.slice(index + phrase.length)}</>;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2></div>{children && <div className="section-intro">{children}</div>}</div>;
}

function BuilderSketch() {
  const [selected, setSelected] = useState(0);
  return <div className="builder-sketch">
    <div className="sketch-caption"><span className="eyebrow">A WAY OF THINKING</span><span className="pencil-note">start with people</span></div>
    <div className="sketch-board">
      <svg className="sketch-lines" viewBox="0 0 400 330" fill="none" aria-hidden="true"><path d="M113 76 C170 28 266 30 300 104 M305 124 C349 170 324 244 270 260 M241 265 C160 302 93 260 88 207 M76 185 C42 139 54 99 98 79" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 6"/><path d="m288 92 13 14 6-18 M278 247l-13 14 18 4 M98 213l-11-12-7 14 M85 76l16 1-6 15" stroke="currentColor" strokeWidth="1.4"/><path d="M120 98 187 158 M284 120 212 164 M243 243 207 188 M109 212 182 182" stroke="currentColor" strokeWidth="1" opacity=".4"/></svg>
      <div className="sketch-center" aria-hidden="true"><span>useful</span><strong>by design.</strong></div>
      {portfolio.illustration.map((item, index) => <button key={item.id} className={`sketch-node sketch-node-${index}`} aria-pressed={selected === index} aria-controls="sketch-explanation" onClick={() => setSelected(index)}><span>{item.symbol}</span>{item.label}</button>)}
    </div>
    <div className="sketch-description"><span className="eyebrow">SELECT A NOTE</span><p id="sketch-explanation" aria-live="polite">{portfolio.illustration[selected].text}</p></div><p className="figure-caption">A conceptual sketch of how I like to work.</p>
  </div>;
}

function SmartBuyDemo() {
  const [location, setLocation] = useState('0');
  return <div className="discovery-demo"><label htmlFor="sample-location">Explore a fictional neighbourhood</label><select id="sample-location" value={location} onChange={event => setLocation(event.target.value)}>{portfolio.samples.locations.map((item, index) => <option key={item.name} value={index}>{item.name}</option>)}</select><div className="map-sketch" aria-hidden="true"><div className="map-road road-one"/><div className="map-road road-two"/><span className={`map-pin pin-${location}`}>◎</span><span className="map-name">{portfolio.samples.locations[Number(location)].name}</span></div><div className="sample-results" aria-live="polite"><p className="eyebrow">SAMPLE SUGGESTIONS</p>{portfolio.samples.locations[Number(location)].items.map(item => <p key={item}><span aria-hidden="true">↗</span>{item}</p>)}</div><p className="figure-caption">Illustrative only. Fictional places and suggestions; no location collection or live service.</p></div>;
}

function CrewDemo() {
  const [created, setCreated] = useState(false);
  return <div className="crew-demo"><div className="flight-ticket"><span className="eyebrow">FICTIONAL FLIGHT ASSIGNMENT</span><strong>{portfolio.samples.flight}</strong><span>Upcoming flight · Assigned crew</span></div><div className="flow-arrow" aria-hidden="true">↓</div><button className="outline-button" aria-pressed={created} onClick={() => setCreated(value => !value)}>{created ? 'Reset illustration' : 'Create flight group'} <Arrow/></button><div className="crew-result" aria-live="polite">{created ? <><p className="eyebrow">DEMO 042 · CREW CONVERSATION</p><ul>{portfolio.samples.crew.map(person => <li key={person}>{person}</li>)}</ul><div className="chat-message"><strong>Alex</strong><p>Our flight group is ready. Let’s coordinate here.</p></div></> : <p>One flight assignment. The right people in one conversation.</p>}</div><p className="figure-caption">Illustrative workflow with fictional people and messages, not the client’s system.</p></div>;
}

function ProjectVisual({ id }: { id: string }) {
  if (id === 'mycards') return <div className="mycards-visual"><div className="card-stack" aria-hidden="true"><div className="abstract-card card-back"/><div className="abstract-card card-front"><span>CARD MANAGEMENT</span><div className="card-chip"/><strong>Everyday banking.</strong><div className="card-line"/></div></div><div className="scale-facts"><div><strong>6M+</strong><span>monthly active users</span></div><div><strong>16M+</strong><span>registered cards</span></div></div><div className="team-sketch"><span className="eyebrow">25 PEOPLE · SHARED DELIVERY</span><div><span>Backend</span><span>Frontend</span><span>QA</span><span>DevOps</span></div></div><p className="figure-caption">Conceptual card and team sketch. Supplied experience figures.</p></div>;
  if (id === 'financing') return <div className="finance-visual"><p className="pencil-note">one customer journey</p><ol>{['Product selection', 'Eligibility check', 'Financing decision'].map((step, index) => <li key={step}><span className="step-number">0{index + 1}</span><strong>{step}</strong>{index < 2 && <span className="step-arrow" aria-hidden="true">↓</span>}</li>)}</ol><p className="figure-caption">Illustrative customer journey, not an internal architecture diagram.</p></div>;
  if (id === 'smartbuy') return <SmartBuyDemo/>;
  if (id === 'crew') return <CrewDemo/>;
  return <div className="tea-visual"><p className="pencil-note">different people, connected work</p><div className="stakeholders">{['Tea growers', 'Aggregators', 'Factories', 'Tea Board employees'].map(label => <div key={label}>{label}<span aria-hidden="true">↕</span></div>)}</div><div className="erp-core"><span className="eyebrow">SHARED INFORMATION</span><strong>Production · Sales · Reporting</strong></div><p className="app-count"><strong>4</strong> Android applications</p><p className="figure-caption">Conceptual stakeholder and information flow.</p></div>;
}

function StoryBlock({ label, children, accent = false }: { label: string; children: ReactNode; accent?: boolean }) {
  return <div className={accent ? 'story-block story-accent' : 'story-block'}><h4>{label}</h4><p>{children}</p></div>;
}

function ProjectStory({ project, open }: { project: Project; open: boolean }) {
  const toggle = () => {
    if (open) document.querySelector<HTMLButtonElement>(`#project-${project.id} h3 button`)?.focus({ preventScroll: true });
    window.location.hash = open ? 'work' : `project-${project.id}`;
  };
  return <article className={`project-story ${open ? 'is-open' : ''}`} id={`project-${project.id}`}>
    <div className="project-summary"><span className="project-number">{project.number}<span>/ 05</span></span><div className="project-overview"><p className="eyebrow project-theme">{project.theme}</p><h3><button onClick={toggle} aria-expanded={open} aria-controls={`story-${project.id}`} aria-label={`${open ? 'Close' : 'Read'} ${project.name} case study`}>{project.name}<span className="expand-icon" aria-hidden="true">{open ? '−' : '+'}</span></button></h3><p className="project-problem">{project.problem}</p><div className="project-byline"><span>{project.role}</span><span>{project.employer}</span></div></div><div className="project-proof"><span className="eyebrow">IN PRACTICE</span><p>{project.proof}</p><a href={projectHash(project.id)} onClick={open ? event => { event.preventDefault(); document.getElementById(`story-${project.id}`)?.scrollIntoView({ behavior: 'auto', block: 'start' }); } : undefined}>Read field note <Arrow diagonal/></a></div></div>
    <div className="project-body" id={`story-${project.id}`} hidden={!open}><div className="project-writing"><StoryBlock label="Customer problem">{project.problem}</StoryBlock><StoryBlock label="What I owned">{project.owned}</StoryBlock><StoryBlock label="What we built">{project.built}</StoryBlock><StoryBlock label="Evidence">{project.evidence}</StoryBlock>{project.security && <StoryBlock label="Security and compliance" accent>{project.security}</StoryBlock>}<div className="reflection"><h4>Why I enjoyed it</h4><blockquote>{project.reflection}</blockquote></div><div className="story-actions"><a className="text-link" href={projectHash(project.id)}>Link to this story <span aria-hidden="true">#</span></a><button className="text-button" onClick={toggle}>Close field note <span aria-hidden="true">−</span></button></div></div><aside className={`project-visual visual-${project.id}`} aria-label={`${project.name} illustration`}><ProjectVisual id={project.id}/></aside></div>
  </article>;
}

export function Availability({ values }: { values: typeof portfolio.availability }) {
  const labels = { noticePeriod: 'Notice period', earliestStartDate: 'Earliest start date', relocationTiming: 'Relocation timing' };
  const entries = Object.entries(values).filter(([, value]) => value?.trim());
  if (!entries.length) return null;
  return <aside className="availability" aria-label="Availability"><h3>Availability</h3><dl>{entries.map(([key, value]) => <div key={key}><dt>{labels[key as keyof typeof labels]}</dt><dd>{value}</dd></div>)}</dl></aside>;
}

export default function App() {
  const [active, setActive] = useState<Section>('about');
  const [openProject, setOpenProject] = useState<string | null>(null);
  useEffect(() => {
    let frame = 0;
    const readHash = () => {
      const hash = window.location.hash.slice(1);
      const project = portfolio.projects.find(item => `project-${item.id}` === hash);
      setOpenProject(project?.id ?? null);
      if (project) setActive('work');
      else if (sections.includes(hash as Section)) setActive(hash as Section);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'auto', block: 'start' }));
    };
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => { window.removeEventListener('hashchange', readHash); cancelAnimationFrame(frame); };
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      let current: Section = 'about';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= Math.min(window.innerHeight * .3, 240)) current = section;
      }
      setActive(current);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); };
  }, []);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#about" aria-label="Vikram Aditya, about">va<span>.</span></a><span className="header-caption">BUILDER’S FIELD NOTES</span><nav aria-label="Main navigation">{sections.map((section, index) => <a key={section} href={`#${section}`} aria-current={active === section ? 'location' : undefined}><span className="nav-number">0{index + 1}</span>{section[0].toUpperCase() + section.slice(1)}</a>)}</nav></header>
    <main id="main">
      <section id="about" className="about section-wrap" aria-labelledby="hero-title">
        <div className="hero"><div className="hero-copy"><p className="eyebrow">{portfolio.biography.name} <span className="label-dash"/> {portfolio.biography.location}</p><h1 id="hero-title"><Headline text={portfolio.biography.headline}/></h1><p className="role-line">{portfolio.biography.role}</p><p className="hero-intro">{portfolio.biography.introduction}</p><p className="hero-responsibility">{portfolio.biography.responsibility}</p><div className="hero-actions"><a className="button" href="#work">Explore five projects <Arrow diagonal/></a><a className="text-link" href="#next">What I want to build next <Arrow/></a></div></div><BuilderSketch/></div>
        <div className="evidence-strip" aria-label="Experience at a glance">{portfolio.biography.evidence.map((item, index) => <div key={item}><span aria-hidden="true">0{index + 1}</span><p>{item}</p></div>)}</div>
        <div className="interests"><div className="interests-intro"><p className="eyebrow">NOTES ON THE WORK</p><h2>What pulls<br/>me into a problem.</h2><p>{portfolio.biography.background}</p><span className="pencil-note">the thread running through it all ↘</span></div><div className="interest-list">{portfolio.interests.map((interest, index) => <article key={interest.title}><span className="interest-number">0{index + 1}</span><div><p className="eyebrow">{interest.kind}</p><h3>{interest.title}</h3><p>{interest.text}</p><a className="text-link" href={projectHash(interest.project)}>{interest.link} <Arrow diagonal/></a></div></article>)}</div></div>
      </section>
      <section id="work" className="work section-wrap" aria-labelledby="work-heading"><div className="section-heading"><div><p className="eyebrow"><span>02</span> / WORK</p><h2 id="work-heading">Five projects I’ve built<span className="accent-period">.</span></h2></div><div className="section-intro"><p>Different customers. Different constraints.<br/>One thread: making the whole experience work.</p><span className="pencil-note">open a story to look closer ↓</span></div></div><div className="project-list">{portfolio.projects.map(project => <ProjectStory key={project.id} project={project} open={openProject === project.id}/>)}</div></section>
      <section id="journey" className="journey" aria-label="Career journey"><div className="section-wrap"><SectionHeading number="03" label="JOURNEY" title="The scope grew. The curiosity stayed."><p>From customer operations to enterprise systems, founding a company, and building financial platforms.</p></SectionHeading><div className="journey-layout"><aside className="journey-margin"><p className="pencil-note">A timeline of responsibilities,<br/>not just job titles.</p><p>My career so far</p><span className="journey-years">2012<br/><span aria-hidden="true">↓</span><br/>Today</span><div className="education"><p className="eyebrow">EDUCATION</p>{portfolio.education.map(item => <div key={item.qualification}><strong>{item.qualification} <span> / {item.year}</span></strong><p>{item.institution}</p></div>)}</div></aside><div className="timeline">{portfolio.journey.map(item => <details className="milestone" key={item.id}><summary><span className="timeline-date">{item.date}</span><span className="milestone-title"><strong>{item.company}</strong><span className="milestone-plus" aria-hidden="true">+</span></span><span className="milestone-role">{item.role}</span><span className="milestone-description">{item.summary}</span><span className="milestone-hint">Read the field note <Arrow diagonal/></span></summary><div className="milestone-note"><p>{item.note}</p>{item.project && <a className="text-link" href={projectHash(item.project)}>Explore the work <Arrow/></a>}</div></details>)}</div></div></div></section>
      <section id="next" className="next section-wrap" aria-label="What I want to build next"><SectionHeading number="04" label="NEXT" title="Closer to the problem. In from the beginning."><span className="pencil-note">the next chapter is a building chapter</span></SectionHeading><div className="next-intro"><p>{portfolio.next.introduction}</p><p>{portfolio.next.responsibility}</p></div><div className="focus-grid">{portfolio.next.focus.map((focus, index) => <article key={focus.title}><span className="focus-number">0{index + 1}</span><h3>{focus.title}</h3><p>{focus.text}</p></article>)}</div><div className="approach"><div><p className="eyebrow">LOOKING FORWARD</p><h3>How I would approach<br/>a new problem</h3></div><ol>{portfolio.next.approach.map(step => <li key={step}>{step}</li>)}</ol></div><Availability values={portfolio.availability}/></section>
      <section className="contact" aria-labelledby="contact-title"><div className="section-wrap"><p className="eyebrow">LET’S START WITH A CONVERSATION</p><div className="contact-main"><h2 id="contact-title">What are you<br/>trying to <span>solve?</span></h2><p>{portfolio.contact.closing}</p></div><div className="contact-links"><a className="email-link" href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email} <Arrow diagonal/></a><div className="social-links"><a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal/></a><a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal/></a>{__RESUME_AVAILABLE__ && <a href={`${import.meta.env.BASE_URL}${portfolio.contact.resume}`} download>Resume <span aria-hidden="true">↓</span></a>}</div></div></div></section>
    </main><footer className="site-footer section-wrap"><a href="#about" className="wordmark" aria-label="Back to about">va<span>.</span></a><p>Vikram Aditya <span> / </span> Builder’s field notes</p><a href="#about">Back to top ↑</a></footer>
  </>;
}
