import { useEffect, useState } from 'react'
import { content, type Language } from './content'
import { certificateImages } from './certificateImages'
import { Arrow, Icon, ProjectIllustration, type IconName } from './Illustrations'
import amirPortrait from './assets/amir-ashraf.png'
import './App.css'

function readLanguage(): Language {
  try { return localStorage.getItem('amir-language') === 'ar' ? 'ar' : 'en' } catch { return 'en' }
}

function SectionHeading({ id, icon, eyebrow, title, intro }: {
  id: string
  icon: IconName
  eyebrow: string
  title: string
  intro: string
}) {
  return <div className="section-heading">
    <span className="section-icon"><Icon name={icon} /></span>
    <div><p className="eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2><p className="section-intro">{intro}</p></div>
  </div>
}

const milestoneIcons: IconName[] = ['tools', 'medal', 'bulb', 'trophy', 'graduate']

function App() {
  const [language, setLanguage] = useState<Language>(readLanguage)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [aboutExpanded, setAboutExpanded] = useState(false)
  const [certificatesExpanded, setCertificatesExpanded] = useState(false)
  const t = content[language]
  const navLinks = [
    ['#top', t.nav.home], ['#about', t.nav.about], ['#journey', t.nav.journey],
    ['#recognition', t.nav.awards], ['#work', t.nav.work],
  ]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.title = `${t.name} — ${t.role}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description)
    try { localStorage.setItem('amir-language', language) } catch { /* Switching works without storage. */ }
  }, [language, t])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header" id="top">
      <div className="header-inner container">
        <a className="brand" href="#top" aria-label={t.name} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">AA</span><span>{t.name}</span>
        </a>
        <nav id="primary-navigation" className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label={language === 'en' ? 'Main navigation' : 'التنقل الرئيسي'}>
          {navLinks.map(([href, label]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language-button" type="button" aria-label={t.language} onClick={() => { setLanguage(language === 'en' ? 'ar' : 'en'); setMenuOpen(false) }}>
            <svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true"><circle cx="10" cy="10" r="7" stroke="currentColor" /><ellipse cx="10" cy="10" rx="3" ry="7" stroke="currentColor" /><path d="M3 10h14" stroke="currentColor" /></svg>
            <span lang={language === 'en' ? 'ar' : 'en'}>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
          <button id="menu-toggle" className={`menu-toggle ${menuOpen ? 'is-open' : ''}`} type="button" aria-label={menuOpen ? t.closeMenu : t.menu} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        </div>
      </div>
    </header>

    <main id="main" tabIndex={-1}>
      <div className="hero-background">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title"><span>{t.nameParts[0]}</span> {t.nameParts[1]}</h1>
            <p className="hero-role"><span>{t.nickname}</span><span className="role-divider" aria-hidden="true"> / </span>{t.role}</p>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{t.explore}<Arrow /></a>
              <a className="button button-secondary" href="#about">{t.storyLink}<Arrow diagonal /></a>
            </div>
            <div className="hero-location"><Icon name="pin" />{t.location}<span className="location-divider" />{t.disciplines[0]} · {t.disciplines[1]}</div>
          </div>
          <figure className="hero-portrait">
            <img src={amirPortrait} alt={t.portraitAlt} width="1024" height="1024" fetchPriority="high" decoding="async" />
            <figcaption><span className="portrait-caption-label">{t.nickname}</span><strong>{t.name}</strong><span>{t.role}</span></figcaption>
          </figure>
        </section>
      </div>

      <section className="about-section section" id="about" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-portrait"><img src={amirPortrait} alt={t.portraitAlt} width="1024" height="1024" loading="lazy" decoding="async" /></div>
          <div className="about-copy">
            <div className="about-heading"><span className="section-icon"><Icon name="person" /></span><div><p className="eyebrow">{t.about.eyebrow}</p><h2 id="about-title">{t.about.title}</h2></div></div>
            <p className="about-paragraph">{t.about.summary}</p>
            <div id="about-details" hidden={!aboutExpanded}>
              {t.about.paragraphs.map(paragraph => <p className="about-paragraph" key={paragraph}>{paragraph}</p>)}
            </div>
            <button className="read-more-button" type="button" aria-expanded={aboutExpanded} aria-controls="about-details" aria-label={`${aboutExpanded ? t.readLess : t.readMore}: ${t.about.title}`} onClick={() => setAboutExpanded(!aboutExpanded)}>
              {aboutExpanded ? t.readLess : t.readMore}<span aria-hidden="true">{aboutExpanded ? '−' : '+'}</span>
            </button>
            <div className="about-facts">
              <div className="about-fact"><Icon name="graduate" /><div><p className="fact-label">{t.about.education}</p><h3>{t.about.degree}</h3></div></div>
              <div className="about-fact"><Icon name="pin" /><div><p className="fact-label">{language === 'en' ? 'LOCATION' : 'المكان'}</p><p>{t.location}</p></div></div>
            </div>
          </div>
          <aside className="about-notes">
            <blockquote><span aria-hidden="true">“</span><p>{t.about.quote}</p></blockquote>
            <div className="interests"><p className="fact-label"><Icon name="heart" />{t.about.interestsLabel}</p><p>{t.about.interests.join(' · ')}</p></div>
          </aside>
          <div className="press-note"><span>{language === 'en' ? 'FEATURED IN' : 'كتبت عني'}</span><p>{language === 'en' ? 'Al-Masry Al-Youm · Al-Dostor · Watani' : 'المصري اليوم · الدستور · وطني'}</p></div>
        </div>
      </section>

      <section className="section bordered-section" id="journey" aria-labelledby="journey-title">
        <div className="container">
          <SectionHeading id="journey-title" icon="trophy" eyebrow={t.journey.eyebrow} title={t.journey.title} intro={t.journey.intro} />
          <ol className="milestones-grid">
            {t.journey.entries.map((entry, index) => <li className="milestone-card" key={entry.year}>
              <span className="milestone-icon"><Icon name={milestoneIcons[index]} /></span>
              <h3>{entry.title}</h3><p>{entry.text}</p><span className="milestone-year">{entry.year}</span>
            </li>)}
          </ol>
        </div>
      </section>

      <section className="section bordered-section" id="recognition" aria-labelledby="awards-title">
        <div className="container">
          <SectionHeading id="awards-title" icon="medal" eyebrow={t.awards.eyebrow} title={t.awards.title} intro={t.awards.intro} />
          <div className="awards-grid" id="certificates-grid">
            {t.awards.entries.map((award, index) => {
              const image = certificateImages[award.file]
              const pdfUrl = `/awards/${award.file}.pdf?v=${image.pdfVersion}`
              return <article className="award-card" key={award.file} hidden={!certificatesExpanded && index >= 3}>
              <a className="certificate-image" style={{ aspectRatio: `${image.width} / ${image.height}` }} href={pdfUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.awards.view}: ${award.title}. ${t.awards.newTab}`}>
                <img src={`/awards/${award.file}.webp?v=${image.imageVersion}`} alt={`${award.title} — ${award.issuer}`} width={image.width} height={image.height} loading="lazy" />
                <span className="certificate-overlay"><span>{t.awards.view}<Arrow diagonal /></span></span>
              </a>
              <div className="award-meta"><span className="award-year">{award.year}</span><h3>{award.title}</h3><p>{award.issuer}</p><a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="certificate-link" aria-label={`${t.awards.view}: ${award.title}. ${t.awards.newTab}`}>{t.awards.view}<Arrow diagonal /></a></div>
            </article>})}
          </div>
          {t.awards.entries.length > 3 && <button className="read-more-button certificates-toggle" type="button" aria-expanded={certificatesExpanded} aria-controls="certificates-grid" onClick={() => setCertificatesExpanded(!certificatesExpanded)}>
            {certificatesExpanded ? t.awards.showFewer : t.awards.viewAll}<span aria-hidden="true">{certificatesExpanded ? '−' : '+'}</span>
          </button>}
        </div>
      </section>

      <section className="section bordered-section" id="work" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading id="work-title" icon="code" eyebrow={t.work.eyebrow} title={t.work.title} intro={t.work.intro} />
          <div className="projects-grid">
            {t.projects.map((project, index) => {
              const isExpanded = expandedProject === project.id
              return <article className={`project-card project-${project.id}`} key={project.id}>
                <div className="project-art"><span className="project-number" aria-hidden="true">0{index + 1}</span><span className="project-status"><span />{t.work.concept}</span><ProjectIllustration kind={project.id} label={`${project.title} — ${t.work.visual}`} language={language} /></div>
                <div className="project-body">
                  <p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <button type="button" className="project-toggle" aria-expanded={isExpanded} aria-controls={`details-${project.id}`} aria-label={`${isExpanded ? t.readLess : t.readMore}: ${project.title}`} onClick={() => setExpandedProject(isExpanded ? null : project.id)}>{isExpanded ? t.readLess : t.readMore}<span className="toggle-sign" aria-hidden="true">{isExpanded ? '−' : '+'}</span></button>
                  <div id={`details-${project.id}`} hidden={!isExpanded} className="project-detail"><p>{project.detail}</p></div>
                </div>
              </article>
            })}
          </div>
        </div>
      </section>

      <section className="next-section section" aria-labelledby="next-title"><div className="container next-inner"><span className="next-symbol" aria-hidden="true">+</span><div><p className="eyebrow">{t.next.eyebrow}</p><h2 id="next-title">{t.next.title}</h2><p className="next-description">{t.next.text}</p></div><a className="button button-secondary" href="#work">{t.next.link}<Arrow diagonal /></a></div></section>
    </main>

    <footer className="site-footer"><div className="container">
      <div className="footer-top"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">AA</span><span>{t.name}<span className="footer-tagline">{t.nickname}</span></span></a><nav className="footer-navigation" aria-label={language === 'en' ? 'Footer navigation' : 'التنقل في تذييل الصفحة'}>{navLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav><a className="back-to-top" href="#top" aria-label={t.backToTop}><span aria-hidden="true">↑</span></a></div>
      <p className="footer-copyright">© {new Date().getFullYear()} {t.name}<span aria-hidden="true"> · </span>{t.footer}</p>
    </div></footer>
  </>
}

export default App
