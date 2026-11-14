import type { Photo } from '@/types'

interface PhotoCardProps {
  photo: Photo
  className?: string
}

/** 照片卡片 — 纯视觉展示 */
export default function PhotoCard({ photo, className = '' }: PhotoCardProps) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-radius-card bg-bg-muted cursor-pointer ${className}`}
    >
      {/* 图片 */}
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
        />
      ) : (
        <div className="aspect-square flex items-center justify-center text-text-muted text-xs">
          [照片占位]
        </div>
      )}

      {/* hover 覆盖层 */}
      <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal flex flex-col justify-end p-4">
        <div className="text-white text-sm font-medium">{photo.title}</div>
        {photo.location && (
          <div className="text-white/70 text-xs mt-0.5">
            {photo.location} · {photo.year}
          </div>
        )}
      </figcaption>
    </figure>
  )
}
