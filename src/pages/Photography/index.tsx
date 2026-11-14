import { useSearchParams } from 'react-router-dom'
import { photos, PHOTO_CATEGORIES } from '@/data'
import PhotoCard from '@/components/cards/PhotoCard'
import SectionDivider from '@/components/ui/SectionDivider'

const CATEGORY_KEYS = Object.keys(PHOTO_CATEGORIES) as (keyof typeof PHOTO_CATEGORIES)[]
const DEFAULT_CATEGORY = 'architecture' as const

function getPhotoList(category: string) {
  switch (category) {
    case 'architecture':
      return photos.architecture
    case 'city':
      return photos.city
    case 'nature':
      return photos.nature
    case 'daily':
      return photos.daily
    default:
      return photos.architecture
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
          {PHOTO_CATEGORIES[key]}
        </button>
      ))}
    </nav>
  )
}

export default function PhotographyPage() {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category') ?? DEFAULT_CATEGORY
  const list = getPhotoList(currentCategory)

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <header className="mb-10">
        <h1 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight">
          Photography
        </h1>
        <p className="text-text-secondary mt-3 max-w-xl">
          用镜头记录建筑的秩序、城市的节奏、自然的光影和日常的温度。
        </p>
      </header>

      <SectionDivider className="mb-10" />

      <CategoryTabs />

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  )
}
