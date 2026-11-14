import { useSearchParams } from 'react-router-dom'
import { creator, CREATOR_CATEGORIES } from '@/data'
import NoteCard from '@/components/cards/NoteCard'
import SectionDivider from '@/components/ui/SectionDivider'
import { ExternalLink } from 'lucide-react'

const CATEGORY_KEYS = Object.keys(CREATOR_CATEGORIES) as (keyof typeof CREATOR_CATEGORIES)[]
const DEFAULT_CATEGORY = 'notes' as const

function getCreatorList(category: string) {
  switch (category) {
    case 'notes':
      return creator.notes
    case 'tutorials':
      return creator.tutorials
    case 'thoughts':
      return creator.thoughts
    default:
      return creator.notes
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
          {CREATOR_CATEGORIES[key]}
        </button>
      ))}
    </nav>
  )
}

/** Creator 账号卡片 */
function AccountSection() {
  const acc = creator.account
  return (
    <div className="bg-bg-subtle border border-border rounded-radius-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="w-16 h-16 rounded-radius-card bg-bg-muted flex items-center justify-center text-text-muted text-xs shrink-0">
        [头像]
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-lg text-text-primary">{acc.platform}</h3>
          <span className="text-text-muted text-sm">{acc.handle}</span>
        </div>
        <p className="text-text-secondary text-sm mt-1">{acc.description}</p>
        {acc.followers && (
          <p className="text-text-muted text-xs mt-2">粉丝 {acc.followers}</p>
        )}
      </div>
      <a
        href={acc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors shrink-0"
      >
        前往主页 <ExternalLink size={14} />
      </a>
    </div>
  )
}

export default function CreatorPage() {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category') ?? DEFAULT_CATEGORY
  const list = getCreatorList(currentCategory)

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <header className="mb-10">
        <h1 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight">
          Creator
        </h1>
        <p className="text-text-secondary mt-3 max-w-xl">
          设计之外的分享 — 小红书笔记、设计教程和一些关于设计的思考。
        </p>
      </header>

      <SectionDivider className="mb-10" />

      {/* 账号卡片 — 固定显示 */}
      <div className="mb-10">
        <AccountSection />
      </div>

      <CategoryTabs />

      {/* NoteList */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-space-card-gap">
        {list.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}
