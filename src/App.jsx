import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, BarChart3, BriefcaseBusiness, Building2, CheckCircle2,
  ChevronRight, Gauge, Globe2, Layers3, Menu, Route, Sparkles,
  Target, TrendingUp, Users, X, Zap
} from "lucide-react";

const sections = [
  ["track-record", "Track record"], ["growth", "Growth engine"],
  ["concept", "Pitch concept"], ["roadmap", "90-day plan"],
  ["fit", "Why me"]
];

const proofPoints = [
  ["$3M+", "Revenue scaled"],
  ["50%+", "Revenue growth"],
  ["90%", "Client retention"],
  ["124%", "Target achieved"]
];

const experienceHighlights = [
  ["$100K+ Roblox activations", "Led Southeast Asia activations across CTV, playables and rewarded video."],
  ["15+ demand partnerships", "Developed demand-side relationships across agencies, advertisers and platform partners."],
  ["Global brand campaigns", "Led campaigns for Xbox, Lenovo and Uber across APAC."]
];

const roleStrengths = [
  ["Strategic account growth", "Build account plans around client objectives, pipeline whitespace, advertiser re-engagement and partnership expansion."],
  ["Client-led solutioning", "Shape recommendations around business goals, connecting audiences, formats and platform capabilities."],
  ["Cross-functional influence", "Align Sales, Product, Marketing, Operations and measurement partners around client needs."],
  ["Scalable storytelling", "Turn campaign learning and customer feedback into clear narratives and reusable pitch approaches."]
];

const growthPillars = [
  { icon: Target, title: "Win priority accounts", text: "Segment enterprise brands by business potential, mobility relevance, agency influence and readiness to test new media surfaces.", impact: "Sharper prospecting" },
  { icon: Layers3, title: "Expand product adoption", text: "Move clients from one-off campaigns to a planned portfolio of awareness, consideration and action-led solutions across Uber's mobility journey.", impact: "Higher account depth" },
  { icon: Users, title: "Activate agency influence", text: "Build repeatable narratives, planning tools and joint business reviews that make Uber Advertising easier for agencies to recommend.", impact: "More briefs and renewals" },
  { icon: BarChart3, title: "Prove commercial value", text: "Connect every proposal to a client objective, define a clear measurement story and turn campaign performance into the next growth conversation.", impact: "Stronger retention" }
];

const portfolioPlays = [
  { name: "Strategic enterprise", goal: "Protect and expand", text: "Annual partnership planning, executive mapping, cross-product adoption and quarterly growth reviews.", kpis: ["Share of wallet", "Product adoption", "Renewal pipeline"] },
  { name: "High-potential growth", goal: "Convert and scale", text: "Category-led pitches, fast test-and-learn packages and disciplined post-campaign expansion.", kpis: ["New revenue", "Repeat bookings", "Sales velocity"] },
  { name: "Agency multiplier", goal: "Influence demand", text: "Agency education, proactive brief creation, scalable narratives and co-selling into priority portfolios.", kpis: ["Qualified briefs", "Agency coverage", "Pipeline value"] }
];

const roadmap = [
  { days: "Days 1–30", title: "Learn, map, prioritise", items: ["Absorb the product and measurement suite", "Audit account whitespace and risk", "Map decision-makers and agencies", "Build a focused account action plan"] },
  { days: "Days 31–60", title: "Create demand", items: ["Launch category-specific narratives", "Run agency enablement sessions", "Build multi-solution proposals", "Create a disciplined operating cadence"] },
  { days: "Days 61–90", title: "Convert, learn, scale", items: ["Close priority opportunities", "Turn performance into renewals", "Share customer feedback internally", "Codify winning sales narratives"] }
];

function Button({ children, onClick, secondary = false }) {
  return <button onClick={onClick} className={`button ${secondary ? "secondary" : "primary"}`}>{children}</button>;
}
function Metric({ value, label }) { return <div className="metric"><strong>{value}</strong><span>{label}</span></div>; }
function SectionTitle({ eyebrow, title, copy }) { return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
  const [activePlay, setActivePlay] = useState(0);
  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return <div className="app">
    <header className="nav"><button className="brand" onClick={() => scrollTo("home")}><span><Route size={17}/></span><div><b>Pratik Mishra</b><small>Growth perspective</small></div></button>
      <nav>{sections.map(([id,label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</nav>
      <Button onClick={() => scrollTo("roadmap")}>View my plan <ArrowRight size={15}/></Button>
      <button className="menu" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X/> : <Menu/>}</button>
      <AnimatePresence>{menuOpen && <motion.div className="mobile-nav" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>{sections.map(([id,label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</motion.div>}</AnimatePresence>
    </header>

    <main>
      <section id="home" className="hero shell">
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}>
          <div className="badge"><Sparkles size={14}/> Industry Lead, Media &amp; Entertainment</div>
          <p className="hero-eyebrow">10+ years across AdTech &amp; client solutions</p>
          <h1>Turning advertiser objectives into <em>measurable growth.</em></h1>
          <p>I scale strategic accounts, build agency and platform partnerships, and turn advertising capabilities into measurable client outcomes across APAC.</p>
          <div className="actions">
            <Button onClick={() => scrollTo("track-record")}>Explore my track record <ArrowRight size={16}/></Button>
            <a className="button secondary" href="/Pratik-Mishra-CV.pdf" download="Pratik-Mishra-CV.pdf">Download CV <ArrowRight size={15}/></a>
            <a className="text-link" href="https://www.linkedin.com/in/pratikmishra/" target="_blank" rel="noreferrer">View LinkedIn <ArrowRight size={14}/></a>
          </div>
        </motion.div>
        <div className="hero-card proof-card">
          <div className="card-head"><div><small>Selected career outcomes</small><h3>Commercial impact</h3></div><span><TrendingUp/></span></div>
          <div className="proof-metrics">{proofPoints.map(([value,label])=><Metric value={value} label={label} key={label}/>)}</div>
          <p className="proof-note">Career highlights from prior roles; scope and attribution vary by engagement.</p>
        </div>
      </section>

      <section id="track-record" className="band"><div className="shell"><SectionTitle eyebrow="Selected experience" title="Built across markets, partners and emerging media." copy="A commercial profile shaped by APAC partnerships, cross-functional execution and making complex advertising opportunities easy for clients to understand and buy."/><div className="card-grid three">{experienceHighlights.map(([title,copy],i)=><article className="info-card experience-card" key={title}><span className="experience-number">0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="section-note">Examples reflect work across prior roles. Client names and campaign details are shared at a high level.</p></div></section>

      <section id="opportunity" className="shell section"><SectionTitle eyebrow="The opportunity" title="Build an ads business that clients plan for, not just test." copy="Connect enterprise selling, product adoption, executive relationships and customer-led feedback into one commercial system."/><div className="card-grid three">{[[Building2,"Enterprise depth","Map multiple stakeholders, objectives and use cases inside each advertiser."],[Globe2,"Market penetration","Use category narratives and agency influence to create demand across more brands."],[Zap,"Repeatable scale","Turn winning pitches and client feedback into reusable sales motions."]].map(([Icon,t,x])=><article className="info-card" key={t}><Icon/><h3>{t}</h3><p>{x}</p></article>)}</div></section>

      <section id="growth" className="shell section"><SectionTitle eyebrow="Growth engine" title="Four connected levers for durable ad revenue." copy="Select a lever to see how I would translate strategy into action."/><div className="growth-grid"><div className="pillar-list">{growthPillars.map((p,i)=>{const Icon=p.icon;return <button className={activePillar===i?"active":""} onClick={()=>setActivePillar(i)} key={p.title}><span><Icon size={19}/></span><div><b>{p.title}</b><small>{p.impact}</small></div><ChevronRight size={17}/></button>})}</div><AnimatePresence mode="wait"><motion.article key={activePillar} className="pillar-detail" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>{React.createElement(growthPillars[activePillar].icon,{size:34})}<small>Lever {activePillar+1}</small><h3>{growthPillars[activePillar].title}</h3><p>{growthPillars[activePillar].text}</p><div className="outcome"><Gauge size={15}/> Commercial outcome: {growthPillars[activePillar].impact}</div></motion.article></AnimatePresence></div>
      </section>

      <section id="portfolio" className="shell section"><SectionTitle eyebrow="Portfolio strategy" title="Different accounts need different growth motions." copy="A disciplined portfolio model keeps effort focused while creating coverage across enterprise clients and agency partners."/><div className="tabs">{portfolioPlays.map((p,i)=><button className={activePlay===i?"active":""} onClick={()=>setActivePlay(i)} key={p.name}>{p.name}</button>)}</div><motion.article className="portfolio-panel" key={activePlay} initial={{opacity:0,x:10}} animate={{opacity:1,x:0}}><div><small>{portfolioPlays[activePlay].goal}</small><h3>{portfolioPlays[activePlay].name}</h3></div><div><p>{portfolioPlays[activePlay].text}</p><div className="metrics three">{portfolioPlays[activePlay].kpis.map(k=><Metric value={<CheckCircle2 size={18}/>} label={k} key={k}/>)}</div></div></motion.article></section>

      <section id="concept" className="band"><div className="shell"><SectionTitle eyebrow="Sample pitch concept · not a past campaign" title="Bring a film discovery moment into the ride journey." copy="An illustrative in-app placement concept for a media-and-entertainment advertiser. The mock interface and artwork below are original placeholders—not an actual Uber app placement, official film creative or approved campaign."/><div className="campaign-concept">
        <div className="concept-intro"><span>Illustrative campaign</span><h3>Ramayana, in the moment between here and there.</h3><p>After a rider books, a sponsored entertainment card could introduce the film and link interested audiences to ticketing.</p><div className="concept-steps"><article><b>01</b><div><h4>Ride booked</h4><p>Confirmation screen creates a natural, low-friction discovery moment.</p></div></article><article><b>02</b><div><h4>Film thumbnail appears</h4><p>A clearly labeled sponsored card features the title and an illustrative visual.</p></div></article><article><b>03</b><div><h4>Buy tickets</h4><p>Interested riders continue to the film listing on BookMyShow.</p></div></article></div></div>
        <div className="phone-stage"><div className="phone-frame" aria-label="Illustrative rideshare app screen with a Ramayana sponsored card">
          <div className="phone-status"><span>9:41</span><span>●●● &nbsp; ◖</span></div>
          <div className="phone-appbar"><b>Uber</b><span>☰</span></div>
          <div className="ride-map"><span className="map-road road-one"/><span className="map-road road-two"/><span className="map-road road-three"/><span className="map-route"/><span className="map-pin pickup-pin">A</span><span className="map-pin dropoff-pin">B</span><span className="map-label">Your ride</span></div>
          <div className="ride-confirmation"><div className="ride-confirmation-top"><span className="ride-check">✓</span><div><b>Your ride is confirmed</b><small>Your driver is on the way</small></div></div><div className="ride-details"><span><small>Pickup</small><b>Current location</b></span><i/><span><small>Drop-off</small><b>Destination</b></span></div><div className="ride-eta"><span>Ride arriving in</span><b>4 min</b></div></div>
          <div className="sponsored-card"><div className="sponsored-label"><span>Sponsored</span><span>Entertainment</span></div><div className="film-thumbnail" role="img" aria-label="Original abstract placeholder artwork for the Ramayana campaign concept"><span className="film-orbit orbit-one"/><span className="film-orbit orbit-two"/><span className="film-sun"/><span className="film-art-label">A STORY<br/>BEYOND TIME</span><span className="film-title">RAMAYANA</span><span className="film-art-caption">ILLUSTRATIVE ARTWORK</span></div><div className="film-info"><div><b>Ramayana</b><span>Experience the epic on the big screen</span></div><span className="film-rating">FILM</span></div><a className="ticket-button" href="https://in.bookmyshow.com/movies/mumbai/ramayana/ET00451914" target="_blank" rel="noreferrer">Buy Tickets <ArrowRight size={15}/></a></div>
          <div className="phone-bottom"><span>⌂<small>Home</small></span><span>▤<small>Activity</small></span><span>◉<small>Account</small></span></div>
        </div><p className="phone-caption">Concept visualization · placeholder artwork · not an official Uber interface</p></div>
      </div></div></section>

      <section id="roadmap" className="band"><div className="shell"><SectionTitle eyebrow="First 90 days" title="Learn quickly. Create momentum. Build for scale." copy="An initial plan to validate with the team and account portfolio—balancing discovery, live opportunities and a disciplined path to quarterly growth."/><div className="card-grid three">{roadmap.map((r,i)=><article className="roadmap-card" key={r.days}><div><b>{r.days}</b><span>0{i+1}</span></div><h3>{r.title}</h3>{r.items.map(item=><p key={item}><CheckCircle2 size={15}/>{item}</p>)}</article>)}</div></div></section>

      <section id="fit" className="shell section"><div className="fit-grid"><div><SectionTitle eyebrow="Why me" title="A seller, strategist and builder." copy="My background spans media, client growth and strategic account development—bringing together commercial thinking, client solutioning and cross-functional execution."/><div className="fit-note"><BriefcaseBusiness/><p>10+ years across AdTech and client solutions, with experience across APAC partnerships, strategic accounts and emerging media.</p></div></div><div className="strengths">{roleStrengths.map(([t,x],i)=><article key={t}><span>{i+1}</span><h3>{t}</h3><p>{x}</p></article>)}</div></div><div className="commit"><div><small>My commitment</small><h2>Build trusted partnerships that grow advertiser outcomes and Uber's ads business together.</h2></div><span><ArrowRight/></span></div></section>
    </main>
    <footer className="footer shell"><span>Pratik Mishra · Strategic perspective for Uber Advertising</span><div><a href="https://www.linkedin.com/in/pratikmishra/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://jobs.uber.com/en/jobs/304409/" target="_blank" rel="noreferrer">View role description <ArrowRight size={13}/></a></div></footer>
  </div>;
}
