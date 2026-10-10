const products = [
  { name: 'Kunyit Asem', size: '100ml', type: 'THE SIGNATURE', copy: 'A bright, tangy turmeric and tamarind blend. A little introduction to jamu.', image: '/images/hero-botanical.jpg', tag: 'Meet the brew' },
  { name: 'Kunyit Asem', size: '230ml', type: 'YOUR EVERYDAY ROUTINE', copy: 'The same bold, earthy flavour in a bottle made to keep close at hand.', image: '/images/flatlay.jpg', tag: 'Small-batch goodness' },
  { name: 'Kunyit Asem', size: '500ml', type: 'MADE FOR SHARING', copy: 'A bigger bottle for home, the office, or sharing around the table.', image: '/images/bottles-outdoor.jpg', tag: 'Bring it to the table' },
];

const activations = [
  { n: '01', title: 'Sip', copy: 'Casual tasting sessions. Get to know Pink Jamu, one sip at a time.', image: '/images/p6-asset1.jpeg' },
  { n: '02', title: 'Discover', copy: 'Explore the roots, herbs and traditions behind every brew.', image: '/images/p6-asset2.jpeg' },
  { n: '03', title: 'Make', copy: 'Hands-on creative activities, from zine-making to collaborative workshops.', image: '/images/p6-asset3.jpeg' },
];

export default function Home() {
  return <main>
    <div className="topline"><span>THE URBAN HERBALIST</span><span>KUALA LUMPUR + KLANG VALLEY</span></div>
    <header className="nav wrap">
      <a className="wordmark" href="#top" aria-label="Pink Jamu home">PINK<span>JAMU</span><i>✳</i></a>
      <nav><a href="#story">Our story</a><a href="#brews">The brews</a><a href="#partnerships">Partnerships</a><a className="nav-cta" href="#contact">Let's talk <span>↗</span></a></nav>
    </header>

    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="spark">✳</span> TRADITIONAL ROOTS. CITY PULSE.</p>
        <h1>A little root<br/><em>magic</em> for your menu.</h1>
        <p className="intro">Traditional herbal drinks.<br/>Contemporary little rituals.</p>
        <p className="body-copy">Meet Pink Jamu: small-batch herbal drinks inspired by Southeast Asian jamu culture, made for people who like their menus with a little more character.</p>
        <div className="hero-actions"><a className="button pink-button" href="#partnerships">Explore partnerships <span>↘</span></a><a className="text-link" href="#brews">Meet the brew <span>→</span></a></div>
        <div className="hero-stamp"><span>GOOD ROOTS</span><strong>GOOD<br/>RITUALS</strong><span>MADE FOR THE CITY</span></div>
      </div>
      <div className="hero-art">
        <div className="sunburst">A LITTLE<br/>CULTURE<br/>WITH YOUR<br/>COFFEE.</div>
        <div className="hero-photo"><img src="/images/hero-botanical.jpg" alt="Pink Jamu bottle with traditional ingredients" /></div>
        <div className="checker checker-one"/><div className="checker checker-two"/>
        <span className="side-note">SMALL BATCH · BIG CHARACTER</span>
      </div>
    </section>

    <section className="ticker" aria-label="Brand values"><div>REAL HERBS <b>✳</b> REAL GOOD <b>✳</b> MADE FOR EVERYDAY YOU <b>✳</b> A LITTLE ROOT MAGIC <b>✳</b> REAL HERBS <b>✳</b> REAL GOOD <b>✳</b></div></section>

    <section className="story section wrap" id="story">
      <div className="section-label">01 / WHAT'S THE JUICE?</div>
      <div className="story-grid"><div><h2>Same roots.<br/><em>Brighter days.</em></h2><p className="lead">Pink Jamu brings familiar Southeast Asian herbal traditions into contemporary city life — one bottle, one café table at a time.</p><p>Inspired by traditional Malay jamu recipes and made with familiar ingredients like kunyit and asam. No shortcuts, just good things from the earth.</p><a className="text-link" href="#brews">Get to know the brews <span>→</span></a></div>
        <div className="story-visual"><img src="/images/hero-botanical.jpg" alt="Pink Jamu bottle surrounded by turmeric roots"/><div className="story-note"><span>NOT ANOTHER MATCHA.</span><span>NOT ANOTHER LATTE.</span><strong>A NEW LOCAL RITUAL.</strong></div><span className="doodle">✳</span></div></div>
      <div className="values"><div><span className="value-icon">✿</span><b>Traditional</b><p>Rooted in heritage, herbs & recipes.</p></div><div><span className="value-icon">☻</span><b>Vibrant</b><p>Bright, fun and full of life.</p></div><div><span className="value-icon">✦</span><b>Natural</b><p>Real ingredients, nothing to hide.</p></div><div><span className="value-icon">ϟ</span><b>Approachable</b><p>Easy to enjoy, made for all.</p></div></div>
    </section>

    <section className="brews section" id="brews"><div className="wrap"><div className="section-label">02 / MEET THE BREWS</div><div className="section-heading"><h2>Meet the brew.<br/><em>Know the roots.</em></h2><p>Three ways to bring the same bright, earthy Kunyit Asem goodness to your fridge, menu or retail shelf.</p></div>
      <div className="product-grid">{products.map((p, i) => <article className={`product-card product-${i+1}`} key={p.size}><div className="product-image">{p.image ? <img src={p.image} alt={`${p.name} ${p.size} Pink Jamu product`} /> : null}<span className="size-pill">{p.size}</span>{i===0 && <span className="product-seal">THE<br/>SIGNATURE</span>}</div><div className="product-info"><span className="product-tag">{p.tag}</span><h3>{p.name}</h3><p className="product-type">{p.type}</p><p>{p.copy}</p></div></article>)}</div>
    </div></section>

    <section className="why section wrap"><div className="section-label">03 / WHY PUT US ON YOUR SHELF?</div><div className="why-head"><h2>Your fridge deserves<br/>a <em>plot twist.</em></h2><p>A little more flavour. A little more story.<br/>Something worth asking about.</p></div><div className="benefit-grid"><article><span>✳</span><h3>For your customers</h3><ul><li><b>A new taste to discover</b><small>An approachable introduction to herbal drinks.</small></li><li><b>A story worth sharing</b><small>Rooted in Southeast Asian ingredients and rituals.</small></li><li><b>A little everyday pause</b><small>A drink that fits naturally into city life.</small></li></ul></article><article className="benefit-hot"><span>✦</span><h3>For your café</h3><ul><li><b>Menu differentiation</b><small>Offer something beyond the usual café line-up.</small></li><li><b>A conversation starter</b><small>Give regulars a new local product to ask about.</small></li><li><b>Room to collaborate</b><small>Explore tastings, workshops and creative gatherings.</small></li></ul></article></div></section>

    <section className="partnerships section" id="partnerships"><div className="wrap"><div className="section-label">04 / LET'S TALK BOTTLES & BUSINESS</div><div className="section-heading"><h2>Good drinks.<br/><em>Clear terms.</em></h2><p>Two ways to explore a partnership.<br/>Let's find the right fit for your space.</p></div><div className="partnership-grid"><article><div className="option">OPTION A</div><h3>Wholesale</h3><p>For cafés purchasing stock to sell through their menu or retail shelf.</p><div className="card-foot"><span>Direct stock purchase</span><span>↗</span></div></article><article><div className="option">OPTION B</div><h3>Consignment</h3><p>For an agreed stock arrangement, with sales reporting and restocking terms set in advance.</p><div className="card-foot"><span>Agreed stock & sales terms</span><span>↗</span></div></article></div><p className="fineprint">Pricing, minimum quantities, delivery and payment terms can be discussed directly and agreed before onboarding.</p></div></section>

    <section className="activation section wrap"><div className="section-label">05 / BEYOND THE BOTTLE</div><div className="section-heading"><h2>Beyond the<br/><em>bottle.</em></h2><p>We bring Pink Jamu to life through small, hands-on experiences that connect people with traditional ingredients, creative expression and each other.</p></div><div className="activation-grid">{activations.map(a=><article key={a.n}><div className="activation-image"><img src={a.image} alt={`${a.title}: ${a.copy}`}/><span>{a.n}</span><div className="activation-overlay"><strong>{a.title}</strong><small>{a.title === 'Sip' ? 'Meet the brew' : a.title === 'Discover' ? 'Explore the roots' : 'Create together'}</small></div></div><h3>{a.title}</h3><p>{a.copy}</p></article>)}</div></section>

    <section className="tour section"><div className="wrap tour-inner"><div><div className="section-label">06 / ON THE ROAD</div><h2>A touring<br/><em>tradition.</em></h2><p className="lead">One city. Different cafés. One shared experience.</p><p>A café series bringing Pink Jamu to independent cafés and creative spaces across Kuala Lumpur and the Klang Valley. Sip the brew, discover its roots, and make something together.</p><a className="button dark-button" href="#contact">Host a stop <span>↗</span></a></div><div className="tour-visual"><img src="/images/pour-market.jpg" alt="Pink Jamu being poured in a traditional market kitchen"/><img src="/images/kitchen-pour.jpg" alt="A close-up of Pink Jamu being poured into a glass"/></div><div className="tour-steps"><div><span>01</span><b>SIP</b><small>Meet the brew</small></div><i>→</i><div><span>02</span><b>DISCOVER</b><small>Explore the roots</small></div><i>→</i><div><span>03</span><b>MAKE</b><small>Create together</small></div></div></div></section>

    <section className="contact section wrap" id="contact"><div className="contact-copy"><div className="section-label">07 / SHALL WE MAKE SOMETHING HAPPEN?</div><h2>Let's ground<br/>some roots on<br/><em>your menu.</em></h2><p>Interested in stocking Pink Jamu or creating something together?</p><p className="contact-punch">Let's talk.</p><a className="button pink-button" href="mailto:pinkjamu4life@gmail.com?subject=Pink%20Jamu%20Cafe%20Partnership">Start a conversation <span>↗</span></a></div><div className="contact-visual"><img src="/images/p8-asset2.jpeg" alt="Pink Jamu bottles ready for café partners"/><div className="contact-burst">A LITTLE<br/>ROOT MAGIC<br/>FOR YOUR<br/>MENU!</div></div><div className="contact-details"><div><small>CONTACT</small><b>Aishah</b></div><a href="tel:+601128580281">+60 11-2858 0281</a><a href="mailto:pinkjamu4life@gmail.com">pinkjamu4life@gmail.com</a><a href="https://pinkjamu.my" target="_blank" rel="noreferrer">pinkjamu.my ↗</a></div></section>

    <footer><div className="wrap footer-inner"><a className="wordmark" href="#top">PINK<span>JAMU</span><i>✳</i></a><p>Traditional roots. City pulse.</p><a href="#top">Back to top ↑</a><small>© 2026 Pink Jamu · Café Partnerships</small></div></footer>
  </main>;
}
