/** 标签 — 胶囊形状小标签 */
interface TagProps {
  label: string
  variant?: 'default' | 'outline'
  className?: string
}

export default function Tag({ label, variant = 'default', className = '' }: TagProps) {
  const styles =
    variant === 'outline'
      ? 'border border-border text-text-secondary'
      : 'bg-bg-muted text-text-secondary'

  return (
    <span
      className={`inline-block text-xs px-2.5 py-1 rounded-radius-sm transition-colors ${styles} ${className}`}
    >
      {label}
    </span>
  )
}
