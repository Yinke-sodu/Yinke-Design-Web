// ============================================
// 数据层统一导出
// 组件通过 import { xxx } from '@/data' 获取
// ============================================

export { profile, skills, experiences } from './profile'
export { featuredProjects } from './home'
export { products, PRODUCT_CATEGORIES } from './products'
export { visuals, VISUAL_CATEGORIES } from './visuals'
export { photos, PHOTO_CATEGORIES } from './photos'
export { creator, CREATOR_CATEGORIES } from './creator'

// 类型 re-export（每个分类类型从各自模块导出）
export type { ProductCategory } from './products'
export type { VisualCategory } from './visuals'
export type { PhotoCategory } from './photos'
export type { CreatorCategory } from './creator'
