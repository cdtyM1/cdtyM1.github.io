/*
 * Central skill data for Angga Aditya portfolio.
 * To add a skill in the future, add ONE object to this array.
 * Existing skills do not need to be rewritten or removed.
 * Keep both id and en values so the language switch stays complete.
 */
window.PORTFOLIO_SKILLS = [
  {
    id: 'hardware-os',
    title: { id: 'Hardware & OS', en: 'Hardware & OS' },
    items: {
      id: ['Windows', 'Linux', 'Android', 'PC', 'laptop', 'printer'],
      en: ['Windows', 'Linux', 'Android', 'PCs', 'laptops', 'printers']
    }
  },
  {
    id: 'network',
    title: { id: 'Network', en: 'Network' },
    items: {
      id: ['LAN/WAN', 'Wi-Fi', 'VPN', 'remote support'],
      en: ['LAN/WAN', 'Wi-Fi', 'VPN', 'remote support']
    }
  },
  {
    id: 'service-operations',
    title: { id: 'Service Operations', en: 'Service Operations' },
    items: {
      id: ['Ticketing', 'SLA', 'escalation', 'CRM'],
      en: ['Ticketing', 'SLA', 'escalation', 'CRM']
    }
  },
  {
    id: 'documentation',
    title: { id: 'Documentation', en: 'Documentation' },
    items: {
      id: ['Inventaris', 'panduan', 'backup', 'security basics'],
      en: ['Inventory', 'guides', 'backups', 'security basics']
    }
  },
  {
    id: 'data-spreadsheet',
    title: { id: 'Data & Spreadsheet', en: 'Data & Spreadsheet' },
    items: {
      id: ['Python', 'JSON', 'LibreOffice Calc', 'analisis data', 'visualisasi', 'anonimisasi', 'data privacy', 'database design'],
      en: ['Python', 'JSON', 'LibreOffice Calc', 'data analysis', 'visualisation', 'anonymisation', 'data privacy', 'database design']
    }
  },
  {
    id: 'data-quality-visualisation',
    title: { id: 'Data Quality & Visualisation', en: 'Data Quality & Visualisation' },
    items: {
      id: ['data cleaning', 'data labeling', 'quality control', 'PII awareness', 'pemilihan chart', 'business insights', 'executive communication'],
      en: ['data cleaning', 'data labelling', 'quality control', 'PII awareness', 'chart selection', 'business insights', 'executive communication']
    }
  },
  {
    id: 'automation-ai',
    title: { id: 'Automation & AI', en: 'Automation & AI' },
    items: {
      id: ['Bash', 'prompting', 'workflow automation', 'AI-assisted work'],
      en: ['Bash', 'prompting', 'workflow automation', 'AI-assisted work']
    }
  }
];

/*
 * Recent certified projects are injected here so new portfolio evidence can be
 * added without deleting or rewriting older project cards in index.html.
 */
(function () {
  const projectCopy = {
    id: {
      tataDesc: 'Job simulation Forage tentang data cleaning, pemilihan visual, analisis revenue dan demand geografis, serta komunikasi insight untuk keputusan ekspansi.',
      labelDesc: 'Job simulation Forage yang mencakup batch labeling, PII awareness, review, quality control, dan iteration.'
    },
    en: {
      tataDesc: 'Forage job simulation covering data cleaning, visual selection, revenue and geographic-demand analysis, and communicating insights for expansion decisions.',
      labelDesc: 'Forage job simulation covering batch labelling, PII awareness, review, quality control, and iteration.'
    }
  };

  function language() {
    return document.documentElement.lang === 'en' || localStorage.getItem('lang') === 'en' ? 'en' : 'id';
  }

  function projectCard(kind) {
    const lang = language();
    const c = projectCopy[lang];
    if (kind === 'tata') {
      return `<article class="project reveal injected-project" data-injected-project="tata"><div class="visual analyticsMock"><div class="analyticsTitle">TATA · DATA VISUALISATION</div><div class="metric"><b>4</b><span>${lang === 'en' ? 'business questions analysed' : 'pertanyaan bisnis dianalisis'}</span></div><div class="metric"><b>11 Sep</b><span>${lang === 'en' ? 'certificate completed' : 'sertifikat selesai'}</span></div><div class="bars"><i></i><i></i><i></i><i></i></div></div><div class="body"><div class="topline"><span class="kicker">Data visualisation</span><span class="status">${lang === 'en' ? 'COMPLETED · SEP 2026' : 'SELESAI · SEP 2026'}</span></div><h3>Tata Data Visualisation: Empowering Business with Effective Insights</h3><p>${c.tataDesc}</p><div class="tags"><span class="tag">Data Cleaning</span><span class="tag">Visualisation</span><span class="tag">Business Insights</span><span class="tag">Executive Communication</span></div><div class="projectActions"><a class="btn primary small" href="tata-data-visualisation.html">${lang === 'en' ? 'View Case Study ↗' : 'Lihat Case Study ↗'}</a></div></div></article>`;
    }
    return `<article class="project reveal injected-project" data-injected-project="label"><div class="visual analyticsMock"><div class="analyticsTitle">FORAGE ACADEMY · DATA LABELING</div><div class="metric"><b>PII</b><span>${lang === 'en' ? 'privacy awareness' : 'kesadaran privasi'}</span></div><div class="metric"><b>QC</b><span>${lang === 'en' ? 'review & iteration' : 'review & iteration'}</span></div><div class="bars"><i></i><i></i><i></i><i></i></div></div><div class="body"><div class="topline"><span class="kicker">Data quality</span><span class="status">${lang === 'en' ? 'COMPLETED · SEP 2026' : 'SELESAI · SEP 2026'}</span></div><h3>Forage Academy Data Labeling Job Simulation</h3><p>${c.labelDesc}</p><div class="tags"><span class="tag">Data Labeling</span><span class="tag">PII Awareness</span><span class="tag">Quality Control</span><span class="tag">Consistency Review</span></div><div class="projectActions"><a class="btn primary small" href="data-labeling.html">${lang === 'en' ? 'View Case Study ↗' : 'Lihat Case Study ↗'}</a></div></div></article>`;
  }

  function renderRecentProjects() {
    const grid = document.querySelector('#projects .projects');
    if (!grid) return;
    grid.querySelectorAll('.injected-project').forEach(el => el.remove());
    const holder = document.createElement('div');
    holder.innerHTML = projectCard('label') + projectCard('tata');
    const cards = Array.from(holder.children);
    cards.reverse().forEach(card => grid.prepend(card));

    const forageProof = document.querySelector('.proofs .proof:nth-child(3)');
    if (forageProof) {
      const b = forageProof.querySelector('b');
      const span = forageProof.querySelector('span');
      if (b) b.textContent = '4';
      if (span) span.textContent = language() === 'en' ? 'certified Forage job simulations completed' : 'job simulation Forage bersertifikat selesai';
    }
  }

  renderRecentProjects();
  const observer = new MutationObserver(mutations => {
    if (mutations.some(m => m.type === 'attributes' && m.attributeName === 'lang')) renderRecentProjects();
  });
  observer.observe(document.documentElement, { attributes: true });
})();
