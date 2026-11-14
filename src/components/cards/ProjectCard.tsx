import type { Project } from '@/types'
import Tag from '@/components/ui/Tag'

interface ProjectCardProps {
  project: Project
  className?: string
}

/** 项目卡片 — Product / Visual 共用 */
export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <a
      href={project.link ?? '#'}
      className={`group block bg-bg border border-border rounded-radius-card overflow-hidden transition-all duration-normal hover:translate-y-[-2px] hover:shadow-sm ${className}`}
    >
      {/* 封面图 */}
      <div className="aspect-[4/3] bg-bg-muted overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted text-sm">
            [封面占位]
          </div>
        )}
      </div>

      {/* 文字区 */}
      <div className="p-5">
        <h3 className="font-display font-medium text-base text-text-primary group-hover:text-accent-hover transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary mt-1.5 line-clamp-2">{project.description}</p>

        {/* Tag */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} variant="outline" />
          ))}
        </div>

        {/* 年份 */}
        <p className="text-xs text-text-muted mt-3">{project.year}</p>
      </div>
    </a>
  )
}
