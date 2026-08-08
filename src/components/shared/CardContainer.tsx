import type { ProjectCardProps } from "../../types/types"

const projectLink = (href: string, text: string) => (
  <a
    key={href}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    {text} <span aria-hidden="true">→</span>
  </a>
)

const CardContainer = ({
  index,
  title,
  subtitle,
  description,
  url,
  urlText,
  url2,
  url2Text,
  badgeText,
  impactMetricBold,
  impactMetricStandard,
}: ProjectCardProps) => {
  const number = String(index + 1).padStart(2, "0")

  return (
    <div data-testid={`card-${title}`} className="project-card">
      <span className="project-number" aria-hidden="true">
        {number}
      </span>
      <h3 className="project-title">{title}</h3>
      <p className="project-subtitle">{subtitle}</p>
      <p className="project-description">{description}</p>
      {impactMetricBold != null && impactMetricStandard != null && (
        <p className="project-impact">
          <strong>{impactMetricBold}</strong> {impactMetricStandard}
        </p>
      )}
      <div
        className="project-badges"
        role="list"
        aria-label={`${title} technologies`}
      >
        {badgeText.map((text) => (
          <span key={text} className="tag" role="listitem">
            {text}
          </span>
        ))}
      </div>
      <div className="project-links">
        {projectLink(url, urlText)}
        {url2 != null && url2Text != null && projectLink(url2, url2Text)}
      </div>
    </div>
  )
}

export default CardContainer
