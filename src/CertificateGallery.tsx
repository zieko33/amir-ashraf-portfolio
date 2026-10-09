import { content, type Language } from './content'
import { certificateImages } from './certificateImages'
import { Arrow } from './Illustrations'

export function CertificateGallery({ language, limit }: { language: Language; limit?: number }) {
  const t = content[language]
  return <div className="awards-grid">
    {t.awards.entries.slice(0, limit).map(award => {
      const image = certificateImages[award.file]
      const pdfUrl = `/awards/${award.file}.pdf?v=${image.pdfVersion}`
      return <article className="award-card" key={award.file}>
        <a className="certificate-image" style={{ aspectRatio: `${image.width} / ${image.height}` }} href={pdfUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.awards.view}: ${award.title}. ${t.awards.newTab}`}>
          <img src={`/awards/${award.file}.webp?v=${image.imageVersion}`} alt={`${award.title} — ${award.issuer}`} width={image.width} height={image.height} loading="lazy" />
          <span className="certificate-overlay"><span>{t.awards.view}<Arrow diagonal /></span></span>
        </a>
        <div className="award-meta"><span className="award-year">{award.year}</span><h3>{award.title}</h3><p>{award.issuer}</p><a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="certificate-link" aria-label={`${t.awards.view}: ${award.title}. ${t.awards.newTab}`}>{t.awards.view}<Arrow diagonal /></a></div>
      </article>
    })}
  </div>
}
