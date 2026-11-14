import type { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
  className?: string
}

const LEVEL_LABELS: Record<Skill['level'], string> = {
  Expert: '精通',
  Proficient: '熟练',
  Familiar: '了解',
}

const LEVEL_COLORS: Record<Skill['level'], string> = {
  Expert: 'text-text-primary',
  Proficient: 'text-text-secondary',
  Familiar: 'text-text-muted',
}

/** 技能卡片 */
export default function SkillCard({ skill, className = '' }: SkillCardProps) {
  return (
    <div
      className={`flex items-center justify-between p-4 bg-bg border border-border rounded-radius-sm ${className}`}
    >
      <div>
        <div className="text-sm font-medium text-text-primary">{skill.name}</div>
        <div className="text-xs text-text-muted mt-0.5">{skill.category}</div>
      </div>
      <div className={`text-xs ${LEVEL_COLORS[skill.level]}`}>{LEVEL_LABELS[skill.level]}</div>
    </div>
  )
}
