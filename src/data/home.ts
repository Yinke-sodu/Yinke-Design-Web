import type { Project } from '@/types'

/** 首页精选项目（从 Product 和 Visual 中各选） */
export const featuredProjects: Project[] = [
  {
    id: 'home-1',
    title: 'NAS 家庭存储系统设计',
    description: '为家庭用户设计的 NAS 产品交互系统，重新思考本地存储的使用方式。',
    coverImage: '',
    tags: ['Product', 'IoT'],
    year: 2025,
  },
  {
    id: 'home-2',
    title: 'AI 笔记助手',
    description: '基于大模型的智能笔记产品，让整理知识变得更自然。',
    coverImage: '',
    tags: ['AI', 'APP'],
    year: 2025,
  },
  {
    id: 'home-3',
    title: '个人品牌视觉升级',
    description: '从 Logo 到整体视觉语言，构建统一的个人品牌形象。',
    coverImage: '',
    tags: ['Branding', 'Identity'],
    year: 2024,
  },
]
