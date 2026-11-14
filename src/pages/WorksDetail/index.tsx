import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft, Globe } from 'lucide-react'
import { findProjectById } from '@/data/home'

/** 详情页 Hero — 大标题 44px */
function WorksHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="max-w-[1440px] mx-auto px-20 pt-[100px] pb-[50px]">
      <h1
        className="font-bold text-[44px] leading-[100%] tracking-[-1px] text-text-primary"
        style={{ fontFamily: 'MiSans, system-ui, sans-serif' }}
      >
        {title}
      </h1>
      <p className="mt-6 text-base text-text-secondary max-w-[800px] leading-[150%]">
        {description}
      </p>
    </section>
  )
}

/** 图片合集 — 主图 + 展示图无缝拼接 */
function ImageStack({ cover, gallery }: { cover?: string; gallery?: string[] }) {
  const all: string[] = []
  if (cover) all.push(cover)
  if (gallery && gallery.length > 0) all.push(...gallery)
  if (all.length === 0) return null

  return (
    <section className="max-w-[1280px] mx-auto px-20">
      <div className="flex flex-col gap-0">
        {all.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full h-auto block" />
        ))}
      </div>
    </section>
  )
}

/** 外部链接卡片 — 参照 Creator 账号卡样式 */
function ExternalLinkCard({ url }: { url: string }) {
  return (
    <section className="max-w-[1280px] mx-auto px-20 mb-16">
      <div className="bg-bg-subtle border border-border rounded-radius-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* 图标区 */}
        <div className="w-16 h-16 rounded-radius-card bg-bg-muted flex items-center justify-center shrink-0">
          <Globe size={28} className="text-text-secondary" />
        </div>

        {/* 信息区 */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-lg text-text-primary">访问项目网站</h3>
          </div>
          <p className="text-text-secondary text-sm mt-1">点击链接可直接访问在线版本</p>
        </div>

        {/* 跳转按钮 */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors shrink-0"
        >
          前往访问 <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  )
}

/** 返回按钮 */
function BackButton() {
  return (
    <div className="max-w-[1440px] mx-auto px-20 pt-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        <ArrowLeft size={16} />
        返回首页
      </Link>
    </div>
  )
}

/** 详情页 */
export default function WorksDetailPage() {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className="max-w-[1280px] mx-auto px-20 py-20 text-center text-text-muted">
        项目不存在
      </div>
    )
  }

  const project = findProjectById(id)

  if (!project) {
    return (
      <div className="max-w-[1280px] mx-auto px-20 py-20 text-center">
        <p className="text-text-muted mb-4">未找到该项目</p>
        <Link to="/" className="text-accent hover:text-accent-hover">
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <div>
      <BackButton />
      <WorksHero title={project.title} description={project.longDescription ?? project.description} />
      {/* 外部链接卡片 — 紧跟在 Hero 下面 */}
      {project.externalLink && <ExternalLinkCard url={project.externalLink} />}
      <ImageStack cover={project.coverImage} gallery={project.gallery} />
    </div>
  )
}
