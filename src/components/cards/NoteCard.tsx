import type { Note } from '@/types'

interface NoteCardProps {
  note: Note
  className?: string
}

/** 笔记/文章卡片 */
export default function NoteCard({ note, className = '' }: NoteCardProps) {
  return (
    <a
      href={note.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-bg border border-border rounded-radius-card overflow-hidden transition-all duration-normal hover:translate-y-[-2px] hover:shadow-sm ${className}`}
    >
      {/* 封面 */}
      <div className="aspect-[16/9] bg-bg-muted overflow-hidden">
        {note.coverImage ? (
          <img
            src={note.coverImage}
            alt={note.title}
            className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted text-sm">
            [封面占位]
          </div>
        )}
      </div>

      {/* 内容 */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
          <span>{note.source}</span>
          <span>·</span>
          <span>{note.publishDate}</span>
        </div>
        <h3 className="font-display font-medium text-base text-text-primary group-hover:text-accent-hover transition-colors">
          {note.title}
        </h3>
        <p className="text-sm text-text-secondary mt-1.5 line-clamp-2">{note.summary}</p>
      </div>
    </a>
  )
}
