import { ArrowRight } from 'lucide-react'
import { profile, featuredProjects } from '@/data'
import ProjectCard from '@/components/cards/ProjectCard'
import Button from '@/components/ui/Button'
import SectionDivider from '@/components/ui/SectionDivider'
import { Link } from 'react-router-dom'

/** Home — 首屏 */
function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-16">
      <p className="text-sm text-text-secondary mb-4">{profile.title}</p>
      <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-text-primary leading-tight">
        {profile.name}
      </h1>
      <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl">{profile.tagline}</p>
      <div className="mt-10 flex items-center gap-4">
        <Link to="/product">
          <Button variant="primary" icon={ArrowRight} iconPosition="right">
            查看作品
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="secondary">关于我</Button>
        </Link>
      </div>
    </section>
  )
}

/** Home — 精选项目 */
function FeaturedProjects() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-text-primary">
            精选项目
          </h2>
          <p className="text-text-secondary text-sm mt-2">从产品设计到视觉创作</p>
        </div>
        <Link
          to="/product"
          className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
        >
          全部作品 <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-card-gap">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
      <SectionDivider className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16" />
      <FeaturedProjects />
    </div>
  )
}
