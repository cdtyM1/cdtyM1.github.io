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

/* Certified projects added dynamically so older cards stay untouched. */
(function () {
  const copy = {
    id: {
      tata: 'Job simulation Forage tentang data cleaning, pemilihan visual, analisis revenue dan demand geografis, serta komunikasi insight untuk keputusan ekspansi.',
      label: 'Job simulation Forage yang mencakup batch labeling, PII awareness, review, quality control, dan iteration.'
    },
    en: {
      tata: 'Forage job simulation covering data cleaning, visual selection, revenue and geographic-demand analysis, and communicating insights for expansion decisions.',
      label: 'Forage job simulation covering batch labelling, PII awareness, review, quality control, and iteration.'
    }
  };

  function lang() {
    return document.documentElement.lang === 'en' || localStorage.getItem('lang') === 'en' ? 'en' : 'id';
  }

  function tataCard(l) {
    return `<article class="project injected-project show" data-injected-project="tata"><div class="visual analyticsMock"><div class="analyticsTitle">TATA · DATA VISUALISATION</div><div class="metric"><b>4</b><span>${l === 'en' ? 'business questions analysed' : 'pertanyaan bisnis dianalisis'}</span></div><div class="metric"><b>11 Sep</b><span>${l === 'en' ? 'certificate completed' : 'sertifikat selesai'}</span></div><div class="bars"><i></i><i></i><i></i><i></i></div></div><div class="body"><div class="topline"><span class="kicker">Data visualisation</span><span class="status">${l === 'en' ? 'COMPLETED · SEP 2026' : 'SELESAI · SEP 2026'}</span></div><h3>Tata Data Visualisation: Empowering Business with Effective Insights</h3><p>${copy[l].tata}</p><div class="tags"><span class="tag">Data Cleaning</span><span class="tag">Visualisation</span><span class="tag">Business Insights</span><span class="tag">Executive Communication</span></div><div class="projectActions"><a class="btn primary small" href="tata-data-visualisation.html">${l === 'en' ? 'View Case Study ↗' : 'Lihat Case Study ↗'}</a></div></div></article>`;
  }

  function labelCard(l) {
    return `<article class="project injected-project show" data-injected-project="label"><div class="visual analyticsMock"><div class="analyticsTitle">FORAGE ACADEMY · DATA LABELING</div><div class="metric"><b>PII</b><span>${l === 'en' ? 'privacy awareness' : 'kesadaran privasi'}</span></div><div class="metric"><b>QC</b><span>review & iteration</span></div><div class="bars"><i></i><i></i><i></i><i></i></div></div><div class="body"><div class="topline"><span class="kicker">Data quality</span><span class="status">${l === 'en' ? 'COMPLETED · SEP 2026' : 'SELESAI · SEP 2026'}</span></div><h3>Forage Academy Data Labeling Job Simulation</h3><p>${copy[l].label}</p><div class="tags"><span class="tag">Data Labeling</span><span class="tag">PII Awareness</span><span class="tag">Quality Control</span><span class="tag">Consistency Review</span></div><div class="projectActions"><a class="btn primary small" href="data-labeling.html">${l === 'en' ? 'View Case Study ↗' : 'Lihat Case Study ↗'}</a></div></div></article>`;
  }

  function renderRecentProjects() {
    const grid = document.querySelector('#projects .projects');
    if (!grid) return false;
    grid.querySelectorAll('.injected-project').forEach(el => el.remove());
    const l = lang();
    const holder = document.createElement('div');
    holder.innerHTML = tataCard(l) + labelCard(l);
    const cards = Array.from(holder.children);
    const firstOldCard = grid.firstElementChild;
    cards.forEach(card => grid.insertBefore(card, firstOldCard));

    const proof = document.querySelector('.proofs .proof:nth-child(3)');
    if (proof) {
      const value = proof.querySelector('b');
      const text = proof.querySelector('span');
      if (value) value.textContent = '4';
      if (text) text.textContent = l === 'en' ? 'certified Forage job simulations completed' : 'job simulation Forage bersertifikat selesai';
    }
    return true;
  }

  function boot() {
    if (!renderRecentProjects()) {
      let tries = 0;
      const timer = setInterval(() => {
        tries += 1;
        if (renderRecentProjects() || tries > 30) clearInterval(timer);
      }, 100);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
  window.addEventListener('load', renderRecentProjects, { once: true });

  const observer = new MutationObserver(mutations => {
    if (mutations.some(m => m.type === 'attributes' && m.attributeName === 'lang')) renderRecentProjects();
  });
  observer.observe(document.documentElement, { attributes: true });
})();
