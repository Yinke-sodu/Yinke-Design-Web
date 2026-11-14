import { useSearchParams } from 'react-router-dom'
import { products, PRODUCT_CATEGORIES } from '@/data'
import ProjectCard from '@/components/cards/ProjectCard'
import SectionDivider from '@/components/ui/SectionDivider'

const CATEGORY_KEYS = Object.keys(PRODUCT_CATEGORIES) as (keyof typeof PRODUCT_CATEGORIES)[]
const DEFAULT_CATEGORY = 'ai-products' as const

/** 根据 category 获取对应数据 */
function getProductList(category: string) {
  switch (category) {
    case 'ai-products':
      return products.aiProducts
    case 'os-design-system':
      return products.osDesign
    case 'app-design-system':
      return products.appDesign
    case 'nas-products':
      return products.nasProducts
    default:
      return products.aiProducts
  }
}

/** Category Tabs — 用 URL Query 驱动 */
function CategoryTabs() {
  const [searchParams, setSearchParams] = useSearchParams()
  const current = searchParams.get('category') ?? DEFAULT_CATEGORY

  const selectCategory = (key: string) => {
    setSearchParams({ category: key })
  }

  return (
    <nav className="flex flex-wrap gap-2">
      {CATEGORY_KEYS.map((key) => (
        <button
          key={key}
          onClick={() => selectCategory(key)}
          className={`text-sm px-4 py-2 rounded-radius-sm transition-colors ${
            current === key
              ? 'bg-accent text-text-inverse'
              : 'bg-bg-muted text-text-secondary hover:text-text-primary'
          }`}
        >
          {PRODUCT_CATEGORIES[key]}
        </button>
      ))}
    </nav>
  )
}

/** Product 页面 */
export default function ProductPage() {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category') ?? DEFAULT_CATEGORY
  const list = getProductList(currentCategory)

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      {/* PageHeader */}
      <header className="mb-10">
        <h1 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight">
          Product
        </h1>
        <p className="text-text-secondary mt-3 max-w-xl">
          聚焦 AI 产品、操作系统设计、APP 设计系统和家庭存储设备的产品设计实践。
        </p>
      </header>

      <SectionDivider className="mb-10" />

      {/* CategoryTabs */}
      <CategoryTabs />

      {/* ProductList */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-card-gap">
        {list.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
