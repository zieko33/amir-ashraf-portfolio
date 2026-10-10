import { Link } from 'react-router-dom'
import { content, type Language } from './content'
import { Arrow } from './Illustrations'
import amirPortrait from './assets/amir-ashraf.png'
import arabicBiography from './biography/ar.txt?raw'
import englishBiography from './biography/en.txt?raw'

const headings: Record<Language, string[]> = {
  ar: ['أمير أشرف', 'النشأة والتعليم', 'الجوائز والإنجازات', 'مشاريعه واختراعاته', 'الطموحات المستقبلية', 'قصة حياته'],
  en: ['Amir Ashraf', 'Early life and education', 'Awards and achievements', 'Projects and inventions', 'Future ambitions', 'Life story'],
}

export function AboutPage({ language }: { language: Language }) {
  const t = content[language]
  const lines = (language === 'ar' ? arabicBiography : englishBiography).replace(/\r\n/g, '\n').split('\n')
  const sections: { title: string; lines: string[] }[] = []
  for (const line of lines) {
    if (headings[language].includes(line.trim())) sections.push({ title: line.trim(), lines: [] })
    else sections.at(-1)?.lines.push(line)
  }

  return <article className="section biography-page" aria-labelledby="biography-title">
    <div className="container">
      <Link className="read-more-button" to="/">{t.nav.home}<Arrow /></Link>
      <header className="biography-header">
        <div><p className="eyebrow">{t.about.eyebrow}</p><h1 id="biography-title">{t.about.title}</h1><p className="hero-role"><span>{t.nickname}</span> · {t.role}</p></div>
        <img src={amirPortrait} alt={t.portraitAlt} width="1024" height="1024" />
      </header>
      <div className="biography-layout">
        <nav className="biography-navigation" aria-label={language === 'ar' ? 'أقسام السيرة الذاتية' : 'Biography sections'}>
          {sections.map((section, index) => <Link key={section.title} to={`/about#biography-${index}`}>{section.title}</Link>)}
          <Link className="certificate-link" to="/certificates">{t.awards.viewAll}<Arrow /></Link>
        </nav>
        <div className="biography-content" lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {sections.map((section, index) => <section className="biography-section" key={section.title} aria-labelledby={`biography-${index}`}>
            <h2 id={`biography-${index}`}>{section.title}</h2>
            <p className="biography-text">{section.lines.join('\n')}</p>
          </section>)}
        </div>
      </div>
    </div>
  </article>
}
