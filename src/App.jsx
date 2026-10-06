import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, BarChart3, BriefcaseBusiness, Building2, CheckCircle2,
  ChevronRight, Gauge, Globe2, Layers3, Menu, Route, Sparkles,
  Target, TrendingUp, Users, X, Zap
} from "lucide-react";

const sections = [
  ["opportunity", "Opportunity"], ["growth", "Growth engine"],
  ["market", "India expansion"], ["portfolio", "Portfolio plan"],
  ["roadmap", "90-day roadmap"], ["fit", "Why me"]
];

const growthPillars = [
  { icon: Target, title: "Win priority accounts", text: "Segment enterprise brands by business potential, mobility relevance, agency influence and readiness to test new media surfaces.", impact: "Sharper prospecting" },
  { icon: Layers3, title: "Expand product adoption", text: "Move clients from one-off campaigns to a planned portfolio of awareness, consideration and action-led solutions across Uber's mobility journey.", impact: "Higher account depth" },
  { icon: Users, title: "Activate agency influence", text: "Build repeatable narratives, planning tools and joint business reviews that make Uber Advertising easier for agencies to recommend.", impact: "More briefs and renewals" },
  { icon: BarChart3, title: "Prove commercial value", text: "Connect every proposal to a client objective, define a clear measurement story and turn campaign performance into the next growth conversation.", impact: "Stronger retention" }
];

const marketPhases = [
  { n: "01", title: "Deepen core markets", cities: "Delhi NCR · Mumbai · Bengaluru", allocation: 45, colour: "#20d5a6", outcome: "Account expansion", goals: ["Increase share of wallet", "Drive multi-product adoption", "Map senior decision-makers"] },
  { n: "02", title: "Scale growth hubs", cities: "Hyderabad · Chennai · Kolkata", allocation: 35, colour: "#a8ff78", outcome: "New advertiser revenue", goals: ["Activate agency influence", "Build category narratives", "Create repeatable sales motions"] },
  { n: "03", title: "Unlock next-wave markets", cities: "Pune · Ahmedabad · Jaipur · Kochi", allocation: 20, colour: "#7faaff", outcome: "Market penetration", goals: ["Create regional packages", "Win challenger brands", "Run test-and-scale programmes"] }
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

const strengths = [
  ["Enterprise selling", "Own complex client and agency conversations from discovery to growth."],
  ["Adtech fluency", "Understand programmatic, measurement, creative formats and campaign delivery."],
  ["APAC market lens", "Adapt partnerships across varied advertisers, agencies and markets."],
  ["Creative storytelling", "Turn technical products into persuasive commercial narratives."],
  ["Cross-functional leadership", "Connect Sales, Product, Operations and Creative around outcomes."],
  ["Builder mindset", "Thrive where the playbook is still being shaped and speed matters."]
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
  const [investment, setInvestment] = useState(100);
  const [adoption, setAdoption] = useState(20);
  const [retention, setRetention] = useState(15);
  const growthIndex = useMemo(() => Math.round(investment * (1 + adoption / 100) * (1 + retention / 100)), [investment, adoption, retention]);
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
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}}><div className="badge"><Sparkles size={14}/> Sr. Account Executive, Uber Advertising</div><h1>Turning movement into <em>market momentum.</em></h1><p>My strategy to grow Uber Advertising revenue in India by winning priority enterprise accounts, deepening agency partnerships and building repeatable paths from first campaign to long-term partnership.</p><div className="actions"><Button onClick={() => scrollTo("growth")}>Explore the growth engine <ArrowRight size={16}/></Button><Button secondary onClick={() => scrollTo("fit")}>Why I fit this role</Button></div></motion.div>
        <div className="hero-card"><div className="card-head"><div><small>Commercial thesis</small><h3>The Revenue Flywheel</h3></div><span><TrendingUp/></span></div>{["Prioritise the right accounts","Create category-level demand","Expand product adoption","Prove value and renew"].map((x,i)=><div className="flywheel" key={x}><b>0{i+1}</b>{x}<ChevronRight size={17}/></div>)}<div className="metrics three"><Metric value="Acquire" label="Net-new logos"/><Metric value="Expand" label="More solutions"/><Metric value="Retain" label="Repeat growth"/></div></div>
      </section>

      <section id="opportunity" className="band"><div className="shell"><SectionTitle eyebrow="The opportunity" title="Build an ads business that clients plan for, not just test." copy="Connect enterprise selling, product adoption, executive relationships and customer-led feedback into one commercial system."/><div className="card-grid three">{[[Building2,"Enterprise depth","Map multiple stakeholders, objectives and use cases inside each advertiser."],[Globe2,"Market penetration","Use category narratives and agency influence to create demand across more brands."],[Zap,"Repeatable scale","Turn winning pitches and client feedback into reusable sales motions."]].map(([Icon,t,x])=><article className="info-card" key={t}><Icon/><h3>{t}</h3><p>{x}</p></article>)}</div></div></section>

      <section id="growth" className="shell section"><SectionTitle eyebrow="Growth engine" title="Four connected levers for durable ad revenue." copy="Select a lever to see how I would translate strategy into action."/><div className="growth-grid"><div className="pillar-list">{growthPillars.map((p,i)=>{const Icon=p.icon;return <button className={activePillar===i?"active":""} onClick={()=>setActivePillar(i)} key={p.title}><span><Icon size={19}/></span><div><b>{p.title}</b><small>{p.impact}</small></div><ChevronRight size={17}/></button>})}</div><AnimatePresence mode="wait"><motion.article key={activePillar} className="pillar-detail" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>{React.createElement(growthPillars[activePillar].icon,{size:34})}<small>Lever {activePillar+1}</small><h3>{growthPillars[activePillar].title}</h3><p>{growthPillars[activePillar].text}</p><div className="outcome"><Gauge size={15}/> Commercial outcome: {growthPillars[activePillar].impact}</div></motion.article></AnimatePresence></div>
        <div className="simulator"><div><small>Interactive growth simulator</small><h3>Uber Revenue Impact Engine</h3><p>Adjust the commercial levers to explore an illustrative portfolio growth scenario.</p><div className="metrics two"><Metric value={Math.round(investment/10)} label="New advertisers"/><Metric value={`${adoption}%`} label="Product adoption"/><Metric value={`${retention}%`} label="Renewal lift"/><Metric value={growthIndex} label="Revenue index"/></div></div><div className="controls">{[["New account acquisition",investment,setInvestment,50,200,""],["Cross-solution adoption",adoption,setAdoption,0,60,"%"],["Retention and renewals",retention,setRetention,0,40,"%"]].map(([l,v,s,min,max,suffix])=><label key={l}><span>{l}<b>{v}{suffix}</b></span><input type="range" min={min} max={max} value={v} onChange={e=>s(Number(e.target.value))}/></label>)}<div className="index"><span>Projected Revenue Index <TrendingUp/></span><strong>{growthIndex}</strong><i><b style={{width:`${Math.min(growthIndex/3,100)}%`}}/></i></div></div></div>
      </section>

      <section id="market" className="band"><div className="shell"><SectionTitle eyebrow="India market expansion" title="Scale from metro leadership to a broader advertiser growth network." copy="A focused allocation model that balances enterprise expansion, emerging hubs and regional market development."/>
        <div className="timeline"><div className="timeline-head"><div><small>Portfolio prioritisation</small><h3>Market Expansion Timeline</h3></div><b>Core → Scale → New</b></div><div className="line"/><div className="timeline-grid">{marketPhases.map((m,i)=><div className="timeline-step" key={m.n}><span style={{background:m.colour}}>{i+1}</span><h4>{m.title.replace("Deepen ","").replace("Scale ","").replace("Unlock ","")}</h4><p>{m.cities}</p><i><b style={{width:`${m.allocation}%`,background:m.colour}}/></i><strong style={{color:m.colour}}>{m.allocation}% focus</strong></div>)}</div></div>
        <div className="strategy-grid">{marketPhases.map(m=><article className="strategy-card" key={m.n} style={{"--accent":m.colour}}><div className="strategy-top"><span>{m.n}</span><b>{m.outcome}</b></div><h3>{m.title}</h3><small>{m.cities}</small><ul>{m.goals.map(g=><li key={g}><CheckCircle2 size={15}/>{g}</li>)}</ul><div className="allocation"><span>Recommended focus</span><strong>{m.allocation}%</strong></div></article>)}</div>
        <div className="expected"><Route/><div><small>Expected business impact</small><h3>A repeatable growth engine across enterprise expansion, category penetration and regional development.</h3></div></div>
      </div></section>

      <section id="portfolio" className="shell section"><SectionTitle eyebrow="Portfolio strategy" title="Different accounts need different growth motions." copy="A disciplined portfolio model keeps effort focused while creating coverage across enterprise clients and agency partners."/><div className="tabs">{portfolioPlays.map((p,i)=><button className={activePlay===i?"active":""} onClick={()=>setActivePlay(i)} key={p.name}>{p.name}</button>)}</div><motion.article className="portfolio-panel" key={activePlay} initial={{opacity:0,x:10}} animate={{opacity:1,x:0}}><div><small>{portfolioPlays[activePlay].goal}</small><h3>{portfolioPlays[activePlay].name}</h3></div><div><p>{portfolioPlays[activePlay].text}</p><div className="metrics three">{portfolioPlays[activePlay].kpis.map(k=><Metric value={<CheckCircle2 size={18}/>} label={k} key={k}/>)}</div></div></motion.article></section>

      <section id="roadmap" className="band"><div className="shell"><SectionTitle eyebrow="First 90 days" title="Learn quickly. Create momentum. Build for scale." copy="A practical entry plan balancing portfolio understanding, live revenue opportunities and long-term sales discipline."/><div className="card-grid three">{roadmap.map((r,i)=><article className="roadmap-card" key={r.days}><div><b>{r.days}</b><span>0{i+1}</span></div><h3>{r.title}</h3>{r.items.map(item=><p key={item}><CheckCircle2 size={15}/>{item}</p>)}</article>)}</div></div></section>

      <section id="fit" className="shell section"><div className="fit-grid"><div><SectionTitle eyebrow="Why me" title="A seller, strategist and builder." copy="My background sits at the intersection of enterprise relationships, emerging ad products, campaign strategy and cross-market growth."/><div className="fit-note"><BriefcaseBusiness/><p>I bring an agency-first perspective, strong adtech fluency and experience shaping client-ready narratives across gaming, programmatic and digital advertising.</p></div></div><div className="strengths">{strengths.map(([t,x],i)=><article key={t}><span>{i+1}</span><h3>{t}</h3><p>{x}</p></article>)}</div></div><div className="commit"><div><small>My commitment</small><h2>Build trusted partnerships that grow advertiser outcomes and Uber's ads business together.</h2></div><span><ArrowRight/></span></div></section>
    </main>
    <footer className="footer shell"><span>Pratik Mishra · Strategic perspective for Uber Advertising</span><a href="https://jobs.uber.com/en/jobs/303137/" target="_blank" rel="noreferrer">View role description <ArrowRight size={13}/></a></footer>
  </div>;
}
