import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <Link to={service.path} className="service-card">
      <div className="service-image-wrap">
        <img src={service.image} alt={service.imageAlt} className="service-image" />
      </div>
      <div className="service-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <span className="service-link">
          {service.cta} <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
