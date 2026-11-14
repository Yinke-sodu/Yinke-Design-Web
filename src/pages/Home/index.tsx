import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { featuredProjects, heroContent } from '@/data'

/** 主按钮 — 蓝色胶囊 */
function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="/product"
      className="inline-flex items-center justify-center text-white text-base font-medium rounded-full bg-accent hover:bg-accent-hover transition-colors px-[26px] py-[14px]"
    >
      {children}
    </Link>
  )
}

/** 次按钮 — 边框胶囊 */
function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="/about"
      className="inline-flex items-center justify-center text-text-primary text-base font-medium rounded-full border-[1.5px] border-[#E5E7EB] hover:bg-bg-muted transition-colors px-[26px] py-[14px]"
    >
      {children}
    </Link>
  )
}

/** Hero 右侧插图占位 */
function HeroIllustration() {
  return (
    <div className="w-full max-w-[640px] aspect-[16/10] rounded-xl bg-black/20 flex items-center justify-center">
      <span className="text-white/60 text-sm">插图占位</span>
    </div>
  )
}

/** Hero Section */
function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-20 pt-[88px] pb-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* 左侧文案 */}
        <div className="flex-1 flex flex-col gap-6 max-w-[592px]">
          <h1
            className="font-semibold text-[52px] leading-[132%] tracking-[-1.5px] text-text-primary"
            style={{ fontFamily: 'MiSans, system-ui, sans-serif' }}
          >
            {heroContent.title}
          </h1>
          <p className="text-lg text-[#666666] leading-[150%]">
            {heroContent.subtitle}
          </p>
          <div className="flex items-center gap-[15px]">
            <PrimaryButton>查看作品</PrimaryButton>
            <SecondaryButton>关于我</SecondaryButton>
          </div>
        </div>

        {/* 右侧插图 */}
        <div className="flex-1 flex justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

/** 精选作品卡片 */
function ProjectCard({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) {
  return (
    <Link
      to={`/works/${id}`}
      className="group block w-full overflow-hidden rounded-lg border border-[#E2E2E2] bg-white transition-all hover:shadow-sm"
    >
      {/* 图片区 */}
      <div className="aspect-[630/354] bg-[#D9D9D9] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-[#999] text-sm">
          封面图占位
        </div>
      </div>

      {/* 信息卡 — 底部圆角 */}
      <div className="px-4 pt-4 pb-5 -mt-px bg-white rounded-b-xl border-t border-[#E2E2E2]">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl text-text-primary">{title}</h3>
          <div className="w-8 h-8 rounded bg-[#D9D9D9] flex items-center justify-center">
            <ArrowUpRight size={18} className="text-[#666]" />
          </div>
        </div>
        <p className="text-lg text-text-primary opacity-60 leading-[133%]">{description}</p>
      </div>
    </Link>
  )
}

/** 精选作品 Section */
function FeaturedProjects() {
  return (
    <section className="max-w-[1440px] mx-auto px-20 py-16">
      {/* 标题区 — 居中 */}
      <div className="flex flex-col items-center gap-3 mb-12">
        <h2 className="font-semibold text-3xl text-text-primary">精选作品</h2>
        <p className="text-base text-[#666666]">
          专注于 AI 产品、桌面端体验与可扩展设计系统的 UI/UX 设计师。
        </p>
      </div>

      {/* 2 列卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}

/** Home 页面 */
export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
    </div>
  )
}
