import type { LucideIcon } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  className?: string
  onClick?: () => void
  href?: string
  /** 作为按钮时的 type */
  type?: 'button' | 'submit'
}

/** 通用按钮 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  href,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-radius-sm font-medium transition-colors duration-fast'

  const sizeStyles = size === 'sm' ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-accent text-text-inverse hover:bg-accent-hover',
    secondary: 'border border-border text-text-primary hover:bg-bg-muted',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-muted',
  }

  const styles = `${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${className}`

  const content = Icon ? (
    <>
      {iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : 16} />}
      {children}
      {iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : 16} />}
    </>
  ) : (
    children
  )

  if (href) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {content}
    </button>
  )
}
