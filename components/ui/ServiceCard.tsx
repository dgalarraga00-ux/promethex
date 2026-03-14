interface ServiceCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export function ServiceCard({ icon, title, description, className = '' }: ServiceCardProps) {
  return (
    <div
      className={`group bg-[#1a1a1a] border border-brand/20 rounded-xl p-8 flex flex-col gap-3 transition-all duration-300 hover:border-brand hover:bg-brand/10 hover:shadow-lg hover:shadow-brand/20 ${className}`.trim()}
    >
      <span aria-hidden="true" className="text-4xl">
        {icon}
      </span>
      <h3 className="text-xl font-semibold text-text-main group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-text-main/65 leading-relaxed text-sm">{description}</p>
    </div>
  )
}

export default ServiceCard
