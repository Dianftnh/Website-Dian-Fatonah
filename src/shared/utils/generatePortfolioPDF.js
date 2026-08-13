import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { portfolioData } from '../data/portfolioData';

const PAGE_W = 794;
const PAGE_H = 1123;
const FILE_NAME = 'Dian_Fatonah_Portfolio.pdf';

const FONT_HEAD = "'Poppins', 'Open Sans', Arial, sans-serif";
const FONT_BODY = "'Open Sans', 'Inter', Arial, sans-serif";

const C = {
  navy: '#304050',
  dark: '#0f172a',
  accent: '#6070b0',
  accentDark: '#4d5c94',
  primary: '#34495e',
  secondary: '#64748b',
  slate: '#334155',
  muted: '#475569',
  lavender50: '#dcdce9',
  lavender100: '#c9c9db',
  lavender200: '#b6b6cc',
  light: '#f1f0f8',
  teal: '#16a085',
  white: '#ffffff',
};

const MARGIN = 60;
const CONTENT_W = PAGE_W - MARGIN * 2;
const CONTENT_Y = 130;

function elem(tag, style, children, attrs) {
  const node = document.createElement(tag);
  if (style) Object.assign(node.style, style);
  if (attrs) {
    Object.entries(attrs).forEach(([k, v]) => {
      if (v != null) node.setAttribute(k, v);
    });
  }
  (children || []).forEach((child) => {
    if (child == null) return;
    if (typeof child === 'string') node.appendChild(document.createTextNode(child));
    else node.appendChild(child);
  });
  return node;
}

function pageShell(children, background = '#ffffff') {
  return elem(
    'div',
    {
      width: `${PAGE_W}px`,
      height: `${PAGE_H}px`,
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      background,
      fontFamily: FONT_BODY,
      color: C.slate,
    },
    children
  );
}

function header(title, subtitle = '') {
  const bar = elem('div', {
    position: 'absolute',
    left: `${MARGIN}px`,
    top: '44px',
    width: '6px',
    height: '42px',
    borderRadius: '4px',
    backgroundColor: C.accent,
  });
  const titleNode = elem('div', {
    position: 'absolute',
    left: `${MARGIN + 18}px`,
    top: '40px',
    fontSize: '26px',
    fontWeight: '700',
    fontFamily: FONT_HEAD,
    color: C.dark,
    letterSpacing: '0.5px',
  }, [title]);
  const nodes = [bar, titleNode];
  if (subtitle) {
    nodes.push(
      elem('div', {
        position: 'absolute',
        left: `${MARGIN + 18}px`,
        top: '74px',
        fontSize: '13px',
        color: C.secondary,
      }, [subtitle])
    );
  }
  nodes.push(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      right: `${MARGIN}px`,
      top: '112px',
      height: '1px',
      backgroundColor: C.lavender100,
    })
  );
  return nodes;
}

function footer(pageNo, total) {
  const line = elem('div', {
    position: 'absolute',
    left: `${MARGIN}px`,
    right: `${MARGIN}px`,
    bottom: '52px',
    height: '1px',
    backgroundColor: C.lavender100,
  });
  const row = elem('div', {
    position: 'absolute',
    left: `${MARGIN}px`,
    right: `${MARGIN}px`,
    bottom: '26px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    color: C.secondary,
  });
  row.appendChild(document.createTextNode('Dian Fatonah · Portfolio'));
  row.appendChild(elem('span', {}, [`${pageNo} / ${total}`]));
  return [line, row];
}

function pill(text, bg = C.lavender100, color = C.accentDark, fontSize = 11, padding = '6px 14px') {
  return elem('span', {
    alignSelf: 'flex-start',
    backgroundColor: bg,
    color,
    fontSize: `${fontSize}px`,
    fontWeight: '600',
    padding,
    borderRadius: '999px',
    whiteSpace: 'nowrap',
  }, [text]);
}

function linkText(label, href) {
  const suffix = /\b↗\b/.test(label) ? '' : '  ↗';
  return elem('span', {
    display: 'inline-block',
    color: C.accentDark,
    fontSize: '12.5px',
    fontWeight: '700',
    textDecoration: 'underline',
    textDecorationColor: C.accentDark,
    margin: '0 14px 8px 0',
  }, [clean(label) + suffix], { 'data-link-url': href });
}

function truncate(text, max) {
  const t = String(text ?? '').trim();
  return t.length > max ? `${t.slice(0, max - 1)}…` : t;
}

function clean(text) {
  return String(text ?? '').trim();
}

/* ---------------------------------- COVER ---------------------------------- */

function buildCover(profile, contact) {
  const page = pageShell([], 'linear-gradient(150deg, #1f4068 0%, #2c3e67 55%, #4d5c94 100%)');

  const deco = [
    { x: -110, y: -110, s: 300, bg: 'rgba(96,112,176,0.35)' },
    { x: 620, y: 380, s: 300, bg: 'rgba(22,160,133,0.30)' },
    { x: 680, y: -80, s: 120, bg: 'rgba(255,255,255,0.06)' },
  ];
  deco.forEach((d) => {
    page.appendChild(
      elem('div', {
        position: 'absolute',
        left: `${d.x}px`,
        top: `${d.y}px`,
        width: `${d.s}px`,
        height: `${d.s}px`,
        borderRadius: '50%',
        backgroundColor: d.bg,
      })
    );
  });

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '52px',
      fontSize: '13px',
      fontWeight: '700',
      letterSpacing: '6px',
      color: C.teal,
      fontFamily: FONT_HEAD,
    }, ['PORTFOLIO'])
  );

  const imgBox = elem('div', {
    position: 'absolute',
    right: `${MARGIN}px`,
    top: '150px',
    width: '228px',
    height: '228px',
    borderRadius: '50%',
    border: '3px solid rgba(22,160,133,0.85)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
    overflow: 'hidden',
    backgroundColor: C.white,
  });
  imgBox.appendChild(
    elem('img', {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }, [], { src: profile.image, alt: 'Foto Dian Fatonah' })
  );
  page.appendChild(imgBox);

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '196px',
      fontSize: '46px',
      fontWeight: '700',
      fontFamily: FONT_HEAD,
      color: C.white,
      lineHeight: '54px',
    }, [profile.name])
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN + 2}px`,
      top: '266px',
      width: '170px',
      height: '4px',
      borderRadius: '4px',
      backgroundColor: C.teal,
    })
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '292px',
      fontSize: '21px',
      fontWeight: '600',
      color: C.white,
      fontFamily: FONT_HEAD,
    }, [profile.title])
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '336px',
      fontSize: '15px',
      color: '#c7d0e0',
    }, [profile.university])
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '382px',
      fontSize: '15px',
      fontStyle: 'italic',
      color: '#cdd5e5',
    }, [`“${profile.motto}”`])
  );

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '434px',
      fontSize: '15px',
      fontWeight: '600',
      color: C.white,
    }, [
      linkText(contact.email, `mailto:${contact.email}`),
    ])
  );

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      right: `${MARGIN}px`,
      top: '486px',
      maxWidth: '430px',
      fontSize: '14px',
      lineHeight: '24px',
      color: '#dfe4ef',
    }, [
      'Saya adalah mahasiswa Teknik Informatika Universitas Lampung dengan fokus pada ',
      elem('span', { color: '#8fd6c4', fontWeight: '600' }, [
        'data analysis, machine learning, dan NLP',
      ]),
      ', serta aktif sebagai AR Developer, UI Designer, dan Content Creator.',
    ])
  );

  return page;
}

/* ---------------------------------- ABOUT ---------------------------------- */

function buildAbout(profile, skills) {
  const page = pageShell([]);
  header('TENTANG SAYA', 'Profil ringkas · Universitas Lampung').forEach((n) => page.appendChild(n));

  const competencies = skills
    .flatMap((g) => g.items.map(clean))
    .filter(Boolean)
    .slice(0, 12);

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '140px',
      fontSize: '27px',
      fontWeight: '700',
      fontFamily: FONT_HEAD,
      color: C.navy,
    }, [profile.name])
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '178px',
      fontSize: '15px',
      color: C.secondary,
    }, [
      elem('span', { fontWeight: '600', color: C.slate }, [profile.title]),
    ])
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '202px',
      fontSize: '14px',
      color: C.accentDark,
      fontWeight: '600',
    }, [profile.university])
  );

  const descCard = elem('div', {
    position: 'absolute',
    left: `${MARGIN}px`,
    right: `${MARGIN}px`,
    top: '240px',
    height: '212px',
    borderRadius: '16px',
    backgroundColor: C.light,
    boxSizing: 'border-box',
    padding: '24px 28px',
    display: 'flex',
    alignItems: 'center',
  });
  descCard.appendChild(
    elem('p', {
      fontSize: '14px',
      lineHeight: '22px',
      color: C.slate,
      textAlign: 'justify',
      margin: '0',
    }, [profile.description])
  );
  page.appendChild(descCard);

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '478px',
      fontSize: '18px',
      fontWeight: '700',
      fontFamily: FONT_HEAD,
      color: C.dark,
    }, ['Kompetensi Utama'])
  );

  const chipsWrap = elem('div', {
    position: 'absolute',
    left: `${MARGIN}px`,
    right: `${MARGIN}px`,
    top: '512px',
    display: 'flex',
    flexWrap: 'wrap',
  });
  competencies.forEach((skill) => {
    chipsWrap.appendChild(
      elem('span', {
        backgroundColor: C.navy,
        color: C.white,
        fontSize: '12px',
        fontWeight: '600',
        padding: '8px 16px',
        borderRadius: '999px',
        margin: '0 10px 10px 0',
      }, [skill])
    );
  });
  page.appendChild(chipsWrap);

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      right: `${MARGIN}px`,
      top: '612px',
      height: '1px',
      backgroundColor: C.lavender100,
    })
  );

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '652px',
      fontSize: '22px',
      fontWeight: '700',
      fontFamily: FONT_HEAD,
      color: C.dark,
    }, ['Yuk, Kenal Lebih Jauh!'])
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '694px',
      fontSize: '14px',
      color: C.secondary,
    }, ['Mari kunjungi sosial media saya untuk melihat hasil karya dan aktivitas lainnya.'])
  );

  const socials = [
    { name: 'GitHub', handle: 'Dianftnh', url: 'https://github.com/Dianftnh' },
    { name: 'LinkedIn', handle: 'dianfatonah', url: 'https://www.linkedin.com/in/dianfatonah/' },
    { name: 'Instagram', handle: 'dianftnh_', url: 'https://www.instagram.com/dianftnh_' },
    { name: 'YouTube', handle: 'dianfatonah999', url: 'https://www.youtube.com/@dianfatonah999' },
    { name: 'TikTok', handle: '4theiannnn', url: 'https://www.tiktok.com/@4theiannnn' },
  ];
  const socialWrap = elem('div', {
    position: 'absolute',
    left: `${MARGIN}px`,
    right: `${MARGIN}px`,
    top: '738px',
    display: 'flex',
    flexWrap: 'wrap',
  });
  socials.forEach((s) => {
    socialWrap.appendChild(
      elem('div', {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: C.lavender50,
        border: `1px solid ${C.lavender100}`,
        borderRadius: '12px',
        padding: '12px 18px',
        margin: '0 12px 12px 0',
      }, [
        elem('span', { fontWeight: '700', fontSize: '13px', color: C.accentDark, marginRight: '8px' }, [s.name]),
        elem('span', {
          fontSize: '13px',
          color: C.secondary,
          textDecoration: 'underline',
          textDecorationColor: C.secondary,
        }, [s.handle], { 'data-link-url': s.url }),
      ])
    );
  });
  page.appendChild(socialWrap);

  return page;
}

/* ---------------------------------- SKILLS ---------------------------------- */

function buildSkills(skillsGroups) {
  const page = pageShell([]);
  header('SKILLS', 'Kompetensi & keahlian utama').forEach((n) => page.appendChild(n));

  const cardW = Math.floor((CONTENT_W - 2 * 20) / 3);
  const gap = 20;
  const x0 = MARGIN;
  const yCard = 150;
  const cardH = 856;

  skillsGroups.forEach((group, i) => {
    const x = x0 + i * (cardW + gap);
    const card = elem('div', {
      position: 'absolute',
      left: `${x}px`,
      top: `${yCard}px`,
      width: `${cardW}px`,
      height: `${cardH}px`,
      borderRadius: '16px',
      backgroundColor: C.light,
      border: `1px solid ${C.lavender50}`,
      boxShadow: '0 8px 24px rgba(48,64,80,0.08)',
      boxSizing: 'border-box',
      overflow: 'hidden',
      padding: '0',
    });
    card.appendChild(elem('div', { height: '8px', backgroundColor: C.accent, width: '100%' }));

    const num = elem('div', {
      position: 'absolute',
      top: '34px',
      left: '50%',
      marginLeft: '-22px',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      backgroundColor: C.white,
      color: C.accentDark,
      fontFamily: FONT_HEAD,
      fontWeight: '700',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(48,64,80,0.12)',
    }, [String(i + 1).padStart(2, '0')]);
    card.appendChild(num);

    card.appendChild(
      elem('div', {
        position: 'absolute',
        top: '100px',
        left: '0',
        right: '0',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: '700',
        fontFamily: FONT_HEAD,
        color: C.navy,
      }, [group.group])
    );
    card.appendChild(
      elem('div', {
        position: 'absolute',
        top: '132px',
        left: '20px',
        right: '20px',
        height: '1px',
        borderTop: `1px dashed ${C.lavender200}`,
      })
    );

    const list = elem('div', {
      position: 'absolute',
      top: '150px',
      left: '14px',
      right: '14px',
    });
    group.items.forEach((item) => {
      list.appendChild(
        elem('div', {
          display: 'flex',
          alignItems: 'center',
          backgroundColor: C.white,
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(48,64,80,0.06)',
          padding: '12px 14px',
          marginBottom: '12px',
          fontSize: '13px',
          color: C.slate,
          lineHeight: '20px',
        }, [
          elem('span', {
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: C.teal,
            flex: '0 0 auto',
            marginRight: '10px',
          }, []),
          elem('span', {}, [item]),
        ])
      );
    });
    card.appendChild(list);
    page.appendChild(card);
  });

  return page;
}

/* -------------------------------- PROJECTS -------------------------------- */

function projectCard(project, cardH) {
  const card = elem('div', {
    width: `${CONTENT_W}px`,
    height: `${cardH}px`,
    boxSizing: 'border-box',
    borderRadius: '16px',
    backgroundColor: C.white,
    border: `1px solid ${C.lavender50}`,
    boxShadow: '0 8px 24px rgba(48,64,80,0.08)',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '24px',
  });

  const body = elem('div', {
    flex: '1 1 auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
  });

  const topRow = elem('div', { display: 'flex', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' });
  topRow.appendChild(pill(project.category));
  if (project.subtitle && project.subtitle !== project.category) {
    topRow.appendChild(
      elem('span', { fontSize: '13px', color: C.secondary, marginLeft: '12px', fontWeight: '600' }, [
        project.subtitle,
      ])
    );
  }
  body.appendChild(topRow);

  body.appendChild(
    elem('div', {
      fontSize: '19px',
      fontWeight: '700',
      fontFamily: FONT_HEAD,
      color: C.navy,
      lineHeight: '25px',
      marginBottom: '10px',
    }, [project.name])
  );

  body.appendChild(
    elem('p', {
      margin: '0 0 12px 0',
      fontSize: '13px',
      lineHeight: '20px',
      color: C.slate,
      textAlign: 'justify',
    }, [project.description])
  );

  const bullets = (project.items || []).map((b) => clean(b.label)).filter(Boolean);
  if (bullets.length > 0) {
    const bulletWrap = elem('div', { marginBottom: '10px' });
    bullets.slice(0, 3).forEach((b) => {
      bulletWrap.appendChild(
        elem('div', {
          display: 'flex',
          alignItems: 'flex-start',
          fontSize: '12.5px',
          lineHeight: '19px',
          color: C.muted,
          marginBottom: '4px',
        }, [
          elem('span', { marginRight: '8px', color: C.teal }, ['▪']),
          elem('span', {}, [truncate(b, 180)]),
        ])
      );
    });
    body.appendChild(bulletWrap);
  }

  const links = (project.links || []).filter((l) => l && l.label && l.href);
  if (links.length > 0) {
    const linkWrap = elem('div', {
      marginTop: 'auto',
      paddingTop: '8px',
      display: 'flex',
      flexWrap: 'wrap',
    });
    links.forEach((l) => linkWrap.appendChild(linkText(l.label, l.href)));
    body.appendChild(linkWrap);
  }

  card.appendChild(body);

  const image = project.images && project.images[0] ? project.images[0].src : null;
  const imgPanel = elem('div', {
    width: '246px',
    height: '170px',
    flex: '0 0 auto',
    marginLeft: '24px',
    borderRadius: '12px',
    backgroundColor: C.light,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });
  if (image) {
    imgPanel.appendChild(
      elem('img', {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }, [], { src: image, alt: (project.images[0] && project.images[0].alt) || project.name })
    );
  } else {
    imgPanel.appendChild(
      elem('div', {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: C.lavender200,
        fontSize: '34px',
        fontFamily: FONT_HEAD,
        fontWeight: '700',
      }, ['DF'])
    );
  }
  card.appendChild(imgPanel);

  return card;
}

function buildProjectsPages(projects) {
  const pages = [];
  const cardH = 452;
  const gapY = 20;
  const startY = CONTENT_Y;
  for (let i = 0; i < projects.length; i += 2) {
    const page = pageShell([]);
    header('PORTOFOLIO', 'Proyek & karya pilihan').forEach((n) => page.appendChild(n));
    projects.slice(i, i + 2).forEach((project, idx) => {
      const c = projectCard(project, cardH);
      c.style.position = 'absolute';
      c.style.left = `${MARGIN}px`;
      c.style.top = `${startY + idx * (cardH + gapY)}px`;
      page.appendChild(c);
    });
    pages.push(page);
  }
  return pages;
}

/* ------------------------------- ACHIEVEMENTS ------------------------------ */

function buildAchievementCard(ach, cardH) {
  const card = elem('div', {
    width: `${CONTENT_W}px`,
    height: `${cardH}px`,
    boxSizing: 'border-box',
    borderRadius: '16px',
    background: 'linear-gradient(145deg, #304050 0%, #3d5170 100%)',
    boxShadow: '0 10px 28px rgba(48,64,80,0.25)',
    display: 'flex',
    alignItems: 'center',
    padding: '24px 26px',
  });

  const imgBox = elem('div', {
    width: '236px',
    height: '150px',
    flex: '0 0 auto',
    borderRadius: '12px',
    backgroundColor: C.white,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
  });
  imgBox.appendChild(
    elem('img', {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
    }, [], { src: ach.image, alt: ach.alt || ach.title })
  );
  card.appendChild(imgBox);

  const body = elem('div', {
    flex: '1 1 auto',
    marginLeft: '26px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    minWidth: '0',
  });

  body.appendChild(
    elem('div', {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      backgroundColor: C.teal,
      color: C.white,
      fontFamily: FONT_HEAD,
      fontWeight: '700',
      fontSize: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '14px',
    }, [String(ach.id).padStart(2, '0')])
  );

  body.appendChild(
    elem('div', {
      fontSize: '16px',
      fontWeight: '700',
      fontFamily: FONT_HEAD,
      color: C.white,
      lineHeight: '24px',
      marginBottom: '12px',
    }, [ach.title])
  );
  body.appendChild(
    elem('p', {
      margin: '0',
      fontSize: '12.5px',
      lineHeight: '21px',
      color: '#d7deea',
      textAlign: 'justify',
    }, [ach.description])
  );

  card.appendChild(body);
  return card;
}

function buildAchievementsPages(achievements) {
  const pages = [];
  const cardH = 428;
  const gapY = 20;
  const startY = CONTENT_Y;
  for (let i = 0; i < achievements.length; i += 2) {
    const page = pageShell([]);
    header('PRESTASI', 'Penghargaan & pengalaman').forEach((n) => page.appendChild(n));
    achievements.slice(i, i + 2).forEach((ach, idx) => {
      const c = buildAchievementCard(ach, cardH);
      c.style.position = 'absolute';
      c.style.left = `${MARGIN}px`;
      c.style.top = `${startY + idx * (cardH + gapY)}px`;
      page.appendChild(c);
    });
    pages.push(page);
  }
  return pages;
}

/* --------------------------------- CONTACT --------------------------------- */

function buildContact(contact) {
  const page = pageShell([], 'linear-gradient(150deg, #0f172a 0%, #304050 70%, #4d5c94 100%)');

  const deco = [
    { x: 640, y: 60, s: 180, bg: 'rgba(22,160,133,0.20)' },
    { x: -80, y: 820, s: 260, bg: 'rgba(96,112,176,0.25)' },
    { x: 660, y: 900, s: 140, bg: 'rgba(255,255,255,0.05)' },
  ];
  deco.forEach((d) => {
    page.appendChild(
      elem('div', {
        position: 'absolute',
        left: `${d.x}px`,
        top: `${d.y}px`,
        width: `${d.s}px`,
        height: `${d.s}px`,
        borderRadius: '50%',
        backgroundColor: d.bg,
      })
    );
  });

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '58px',
      fontSize: '13px',
      fontWeight: '700',
      letterSpacing: '6px',
      color: C.teal,
      fontFamily: FONT_HEAD,
    }, ['KONTAK'])
  );

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN - 2}px`,
      top: '96px',
      width: '6px',
      height: '52px',
      borderRadius: '4px',
      backgroundColor: C.teal,
    })
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN + 20}px`,
      top: '84px',
      fontSize: '34px',
      fontWeight: '700',
      fontFamily: FONT_HEAD,
      color: C.white,
    }, ["Let's Connect"])
  );

  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      top: '166px',
      fontSize: '19px',
      fontWeight: '700',
      fontFamily: FONT_HEAD,
      color: C.teal,
    }, ['Dian Fatonah'])
  );

  const rows = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    ...contact.socials
      .filter((s) => ['GitHub', 'LinkedIn', 'YouTube', 'Instagram', 'TikTok'].includes(s.name))
      .map((s) => ({ label: s.name, value: s.href, href: s.href })),
  ];

  const listWrap = elem('div', {
    position: 'absolute',
    left: `${MARGIN}px`,
    right: `${MARGIN}px`,
    top: '246px',
    height: `${rows.length * 62}px`,
  });
  rows.forEach((row, i) => {
    const rowEl = elem('div', {
      position: 'absolute',
      top: `${i * 62}px`,
      left: '0',
      right: '0',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '12px',
      backgroundColor: 'rgba(255,255,255,0.06)',
      padding: '0 18px',
      boxSizing: 'border-box',
    });
    rowEl.appendChild(
      elem('span', {
        width: '120px',
        flex: '0 0 auto',
        fontSize: '14px',
        fontWeight: '700',
        color: '#c7d0e0',
      }, [row.label])
    );
    rowEl.appendChild(
      elem('span', {
        fontSize: '14px',
        color: C.white,
        textDecoration: 'underline',
        textDecorationColor: '#9fd8c8',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontWeight: '600',
      }, [row.value], { 'data-link-url': row.href })
    );
    listWrap.appendChild(rowEl);
  });
  page.appendChild(listWrap);

  if (contact.address && contact.address.length) {
    page.appendChild(
      elem('div', {
        position: 'absolute',
        left: `${MARGIN}px`,
        bottom: '72px',
        fontSize: '13px',
        color: '#9fb2cc',
      }, [contact.address.join(' · ')])
    );
  }
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      right: `${MARGIN}px`,
      bottom: '44px',
      height: '1px',
      backgroundColor: 'rgba(255,255,255,0.15)',
    })
  );
  page.appendChild(
    elem('div', {
      position: 'absolute',
      left: `${MARGIN}px`,
      right: `${MARGIN}px`,
      bottom: '22px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '11px',
      color: '#9fb2cc',
    }, ['Dian Fatonah · Portfolio', 'Terima kasih telah berkunjung'])
  );

  return page;
}

/* --------------------------------- GENERATE -------------------------------- */

function waitForImages(root) {
  const imgs = Array.from(root.querySelectorAll('img'));
  return Promise.all(
    imgs.map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });
    })
  );
}

function gatherLinks(pages) {
  return pages.map((pageEl) => {
    const pageRect = pageEl.getBoundingClientRect();
    return Array.from(pageEl.querySelectorAll('[data-link-url]'))
      .map((el) => {
        const r = el.getBoundingClientRect();
        return {
          url: el.getAttribute('data-link-url'),
          x: r.left - pageRect.left,
          y: r.top - pageRect.top,
          w: r.width,
          h: r.height,
        };
      })
      .filter((l) => l.url && l.w > 0 && l.h > 0);
  });
}

function renderPage(pageEl) {
  return html2canvas(pageEl, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
  });
}

export async function generatePortfolioPDF() {
  const { profile, skills, projects, achievements, contact } = portfolioData;

  const pages = [];
  pages.push(buildCover(profile, contact));
  pages.push(buildAbout(profile, skills));
  pages.push(buildSkills(skills));
  buildProjectsPages(projects).forEach((p) => pages.push(p));
  buildAchievementsPages(achievements).forEach((p) => pages.push(p));
  pages.push(buildContact(contact));

  const total = pages.length;
  pages.forEach((pageEl, index) => {
    if (index === 0 || index === total - 1) return;
    footer(index + 1, total).forEach((n) => pageEl.appendChild(n));
  });

  const host = document.createElement('div');
  Object.assign(host.style, {
    position: 'absolute',
    top: '0',
    left: '-20000px',
    width: `${PAGE_W}px`,
    zIndex: '-1',
    pointerEvents: 'none',
  });
  pages.forEach((p) => host.appendChild(p));
  document.body.appendChild(host);

  try {
    await document.fonts.ready;
    await waitForImages(host);

    const linksPerPage = gatherLinks(pages);
    const sx = 210 / PAGE_W;
    const sy = 297 / PAGE_H;

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
    for (let i = 0; i < pages.length; i++) {
      const canvas = await renderPage(pages[i]);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.93);
      if (i > 0) pdf.addPage();
      pdf.addImage(dataUrl, 'JPEG', 0, 0, 210, 297);
      (linksPerPage[i] || []).forEach((l) => {
        pdf.link(l.x * sx, l.y * sy, l.w * sx, l.h * sy, { url: l.url });
      });
    }
    pdf.save(FILE_NAME);
  } finally {
    document.body.removeChild(host);
  }
}
