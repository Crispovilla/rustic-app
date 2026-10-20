import { TreePine } from 'lucide-react'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`section__head section__head--${align}`}>
      {eyebrow ? (
        <p className="section__eyebrow">
          <TreePine size={15} aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section__title">{title}</h2>
      {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
    </div>
  )
}
