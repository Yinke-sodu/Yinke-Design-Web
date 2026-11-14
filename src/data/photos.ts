import type { Photo } from '@/types'

export const PHOTO_CATEGORIES = {
  architecture: 'Architecture',
  city: 'City',
  nature: 'Nature',
  daily: 'Daily',
} as const

export type PhotoCategory = keyof typeof PHOTO_CATEGORIES

export interface PhotoData {
  architecture: Photo[]
  city: Photo[]
  nature: Photo[]
  daily: Photo[]
}

export const photos: PhotoData = {
  architecture: [
    { id: 'arch-1', title: '光之教堂', src: '', location: '日本·大阪', year: 2023 },
    { id: 'arch-2', title: '清水混凝土', src: '', location: '日本', year: 2023 },
    { id: 'arch-3', title: '现代美术馆', src: '', location: '上海', year: 2024 },
    { id: 'arch-4', title: '老巷新颜', src: '', location: '北京', year: 2024 },
  ],
  city: [
    { id: 'city-1', title: '霓虹都市', src: '', location: '东京', year: 2023 },
    { id: 'city-2', title: '晨雾中的外滩', src: '', location: '上海', year: 2024 },
  ],
  nature: [
    { id: 'nat-1', title: '山间晨雾', src: '', location: '黄山', year: 2024 },
    { id: 'nat-2', title: '海与天', src: '', location: '三亚', year: 2024 },
  ],
  daily: [
    { id: 'daily-1', title: '一杯手冲', src: '', location: '家', year: 2025 },
    { id: 'daily-2', title: '午后阅读', src: '', location: '咖啡馆', year: 2025 },
  ],
}
