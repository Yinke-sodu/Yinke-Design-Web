import { profile } from '@/data'

/** 底部信息 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle mt-space-section-sm">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* 品牌信息 */}
          <div>
            <div className="font-display font-semibold text-lg">{profile.name}</div>
            <p className="text-text-secondary text-sm mt-1">{profile.tagline}</p>
          </div>

          {/* 社交链接 */}
          <ul className="flex items-center gap-6">
            {profile.socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target={link.platform === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 版权 */}
        <div className="mt-10 pt-6 border-t border-border-subtle">
          <p className="text-text-muted text-xs">
            © {year} {profile.name} Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
