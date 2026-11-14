import type { Project } from '@/types'

export const VISUAL_CATEGORIES = {
  'brand-identity': 'Brand Identity',
  'poster-design': 'Poster Design',
  'visual-experiments': 'Visual Experiments',
} as const

export type VisualCategory = keyof typeof VISUAL_CATEGORIES

export interface VisualData {
  brandIdentity: Project[]
  poster: Project[]
  experiments: Project[]
}

export const visuals: VisualData = {
  brandIdentity: [
    {
      id: 'bi-1',
      title: '个人品牌视觉升级',
      description: '从 Logo 到整体视觉语言，构建统一的个人品牌形象。',
      coverImage: '',
      tags: ['Branding', 'Identity'],
      year: 2024,
    },
    {
      id: 'bi-2',
      title: '独立书店品牌设计',
      description: '为一家独立书店打造的完整品牌识别系统。',
      coverImage: '',
      tags: ['Branding', 'Print'],
      year: 2024,
    },
  ],

  poster: [
    {
      id: 'poster-1',
      title: '系列海报 — 城市之光',
      description: '一组以城市夜间光影为主题的原创海报。',
      coverImage: '',
      tags: ['Poster', 'Series'],
      year: 2024,
    },
  ],

  experiments: [
    {
      id: 've-1',
      title: '3D 几何体探索',
      description: '在 Blender 中对基础几何体和材质的系列探索。',
      coverImage: '',
      tags: ['3D', 'Render'],
      year: 2025,
    },
  ],
}
