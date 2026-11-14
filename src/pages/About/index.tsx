import { profile, skills, experiences } from '@/data'
import SkillCard from '@/components/cards/SkillCard'
import SectionDivider from '@/components/ui/SectionDivider'
import { Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

/** 关于 — 个人介绍 */
function Bio() {
  return (
    <section>
      <h2 className="font-display font-semibold text-xl text-text-primary mb-4">关于我</h2>
      <p className="text-text-secondary leading-relaxed whitespace-pre-line">{profile.bio}</p>
    </section>
  )
}

/** 技能 */
function Skills() {
  const grouped: Record<string, typeof skills> = {
    Design: skills.filter((s) => s.category === 'Design'),
    Code: skills.filter((s) => s.category === 'Code'),
    Tool: skills.filter((s) => s.category === 'Tool'),
  }

  return (
    <section>
      <h2 className="font-display font-semibold text-xl text-text-primary mb-6">技能</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(grouped).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-xs text-text-muted uppercase tracking-wider mb-3">{category}</h3>
            <div className="flex flex-col gap-2">
              {list.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/** 经历时间线 */
function Experience() {
  return (
    <section>
      <h2 className="font-display font-semibold text-xl text-text-primary mb-6">经历</h2>
      <div className="relative pl-6">
        {/* 时间线竖线 */}
        <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pb-8 last:pb-0">
            {/* 节点圆点 */}
            <div className="absolute -left-[14px] top-1.5 w-2.5 h-2.5 rounded-full bg-text-primary" />
            <div className="text-sm text-text-muted">{exp.period}</div>
            <h3 className="font-medium text-text-primary mt-1">
              {exp.role} · <span className="text-text-secondary">{exp.company}</span>
            </h3>
            <p className="text-sm text-text-secondary mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/** 联系方式 */
function Contact() {
  return (
    <section>
      <h2 className="font-display font-semibold text-xl text-text-primary mb-4">联系我</h2>
      <div className="bg-bg-subtle border border-border rounded-radius-card p-6">
        <p className="text-text-secondary text-sm mb-4">有项目想聊聊，或者只是打个招呼？随时联系。</p>
        <Button variant="primary" icon={Mail} href={`mailto:${profile.email}`}>
          {profile.email}
        </Button>

        <div className="mt-6 pt-6 border-t border-border-subtle">
          <p className="text-xs text-text-muted mb-3">社交平台</p>
          <div className="flex flex-wrap gap-3">
            {profile.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
      {/* PageHeader */}
      <header className="mb-10">
        <h1 className="font-display font-bold text-3xl md:text-5xl text-text-primary tracking-tight">
          About
        </h1>
        <p className="text-text-secondary mt-3">{profile.name} · {profile.title}</p>
      </header>

      <SectionDivider className="mb-10" />

      <div className="space-y-16">
        <Bio />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}
