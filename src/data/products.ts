import type { Project } from '@/types'

export const PRODUCT_CATEGORIES = {
  'ai-products': 'AI Products',
  'os-design-system': 'OS Design System',
  'app-design-system': 'APP Design System',
  'nas-products': 'NAS Products',
} as const

export type ProductCategory = keyof typeof PRODUCT_CATEGORIES

export interface ProductData {
  aiProducts: Project[]
  osDesign: Project[]
  appDesign: Project[]
  nasProducts: Project[]
}

export const products: ProductData = {
  aiProducts: [
    {
      id: 'ai-1',
      title: 'AI 笔记助手',
      description: '基于大模型的智能笔记产品，让整理知识变得更自然。',
      coverImage: '',
      tags: ['AI', 'APP', 'Product'],
      year: 2025,
    },
    {
      id: 'ai-2',
      title: 'AI 图像生成工具',
      description: '面向设计师的 AI 图像探索工具，聚焦创意发散场景。',
      coverImage: '',
      tags: ['AI', 'Creative Tool'],
      year: 2024,
    },
  ],

  osDesign: [
    {
      id: 'os-1',
      title: '桌面 OS 重设计',
      description: '对传统桌面操作系统的现代化设计探索。',
      coverImage: '',
      tags: ['OS', 'System'],
      year: 2024,
    },
  ],

  appDesign: [
    {
      id: 'app-1',
      title: '音乐 APP 设计',
      description: '聚焦发现与收藏的音乐流媒体应用设计。',
      coverImage: '',
      tags: ['APP', 'Music'],
      year: 2024,
    },
  ],

  nasProducts: [
    {
      id: 'nas-1',
      title: 'NAS 家庭存储系统',
      description: '为家庭用户设计的 NAS 产品交互系统，重新思考本地存储的使用方式。',
      coverImage: '',
      tags: ['IoT', 'Home'],
      year: 2025,
    },
    {
      id: 'nas-2',
      title: 'NAS 移动客户端',
      description: '与 NAS 硬件配套的移动端应用设计。',
      coverImage: '',
      tags: ['APP', 'IoT'],
      year: 2025,
    },
  ],
}
