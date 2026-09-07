export default function PageHero({ eyebrow, title, subtitle, image, imageAlt }) {
  return (
    <header className="page-hero">
      <img src={image} alt={imageAlt} className="page-hero-bg" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="lead">{subtitle}</p> : null}
      </div>
    </header>
  )
}
