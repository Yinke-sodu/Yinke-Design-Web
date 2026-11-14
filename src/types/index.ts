// ============================================
// 全局类型定义
// 所有数据 Interface 集中在这里维护
// ============================================

/** 基础项目类型（Product / Visual 共用） */
export interface Project {
  id: string
  title: string
  description: string
  coverImage: string
  tags: string[]
  year: number
  link?: string
}

/** 照片类型 */
export interface Photo {
  id: string
  title: string
  src: string
  location?: string
  year: number
}

/** 笔记/文章类型 */
export interface Note {
  id: string
  title: string
  summary: string
  coverImage: string
  publishDate: string
  source: '小红书' | '公众号' | '个人博客' | '其他'
  url: string
}

/** 技能类型 */
export type SkillLevel = 'Expert' | 'Proficient' | 'Familiar'
export type SkillCategory = 'Design' | 'Code' | 'Tool'

export interface Skill {
  name: string
  level: SkillLevel
  category: SkillCategory
}

/** 经历类型 */
export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
}

/** 个人信息 */
export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string
  avatar: string
  email: string
  socialLinks: SocialLink[]
}

/** 社交链接 */
export interface SocialLink {
  platform: string
  handle?: string
  url: string
  icon: string // Lucide icon name
}

/** Creator 账号（小红书等） */
export interface CreatorAccount {
  platform: string
  handle: string
  description: string
  followers?: string
  url: string
  avatar?: string
}
