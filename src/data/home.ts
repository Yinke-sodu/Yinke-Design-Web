import type { Project } from '@/types'

/** 首页精选项目（包含详情页完整数据） */
export const featuredProjects: Project[] = [
  {
    id: 'home-1',
    title: 'AI Chat',
    description: '一个探索 AI 对话、知识管理与智能工作流的个人产品项目',
    longDescription:
      '以清晰、系统和目的性设计 AI 产品、桌面应用和设计系统。通过对对话式交互的深入探索，结合知识图谱与自动化工作流，打造一款真正能提升思考效率的 AI 助手。',
    coverImage: '/works/img-01.webp',
    tags: ['AI', 'Product'],
    year: 2025,
    externalLink: 'https://example.com/ai-chat',
    gallery: ['/works/img-02.webp', '/works/img-03.webp', '/works/img-04.webp', '/works/img-05.webp', '/works/img-06.webp'],
  },
  {
    id: 'home-2',
    title: 'NAS 家庭存储系统',
    description: '为家庭用户设计的 NAS 产品交互系统，重新思考本地存储的使用方式',
    longDescription:
      '以家庭场景为核心，设计一套简单直观的本地存储交互系统。从硬件到软件，让普通用户也能轻松管理照片、视频和重要文件。',
    coverImage: '',
    tags: ['IoT', 'Home'],
    year: 2025,
    externalLink: 'https://example.com/nas',
    gallery: [],
  },
  {
    id: 'home-3',
    title: 'OS 系统设计探索',
    description: '对桌面操作系统的现代化设计语言与交互模式探索',
    longDescription:
      '重新审视传统桌面操作系统的视觉语言和交互范式，在经典与现代之间寻找平衡，探索更高效、更优雅的桌面体验。',
    coverImage: '',
    tags: ['OS', 'System'],
    year: 2024,
    externalLink: 'https://example.com/os-explore',
    gallery: [],
  },
  {
    id: 'home-4',
    title: '个人品牌视觉升级',
    description: '从 Logo 到整体视觉语言，构建统一的个人品牌形象',
    longDescription:
      '一次完整的个人品牌升级项目，涵盖 Logo 设计、视觉语言提炼、字体系统搭建以及跨场景的应用规范。',
    coverImage: '',
    tags: ['Branding', 'Identity'],
    year: 2024,
    externalLink: 'https://example.com/branding',
    gallery: [],
  },
]

/** Hero 文案 */
export const heroContent = {
  title: '以清晰的逻辑、系统化思维与 AI 设计数字产品。',
  subtitle: '专注于 AI 产品、桌面端体验与可扩展设计系统的 UI/UX 设计师。',
}

/** 根据 id 查找项目（详情页 + 卡片跳转共用） */
export function findProjectById(id: string): Project | undefined {
  // 先搜首页精选
  const found = featuredProjects.find((p) => p.id === id)
  if (found) return found

  // 再搜 Product / Visual 等其他模块（未来扩展）
  return undefined
}
