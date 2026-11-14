import { useSearchParams } from 'react-router-dom'
import { visuals, VISUAL_CATEGORIES } from '@/data'
import ProjectCard from '@/components/cards/ProjectCard'
import SectionDivider from '@/components/ui/SectionDivider'

const CATEGORY_KEYS = Object.keys(VISUAL_CATEGORIES) as (keyof typeof VISUAL_CATEGORIES)[]
const DEFAULT_CATEGORY = 'brand-identity' as const

function getVisualList(category: string) {
  switch (category) {
    case 'brand-identity':
      return visuals.brandIdentity
    case 'poster-design':
      return visuals.poster
    case 'visual-experiments':
      return visuals.experiments
    default:
      return visuals.brandIdentity
  }
}

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
          {VISUAL_CATEGORIES[key]}
        </button>
      ))}
    </nav>
  )
}

export default function VisualPage() {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category') ?? DEFAULT_CATEGORY
  const list = getVisualList(currentCategory)

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <header className="mb-10">
        <h1 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight">
          Visual
        </h1>
        <p className="text-text-secondary mt-3 max-w-xl">
          品牌识别、海报设计和视觉实验 — 在平面与 3D 之间探索形式与表达。
        </p>
      </header>

      <SectionDivider className="mb-10" />

      <CategoryTabs />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-card-gap">
        {list.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
