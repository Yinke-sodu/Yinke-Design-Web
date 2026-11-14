import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/product', label: '产品' },
  { to: '/visual', label: '视觉' },
  { to: '/photography', label: '摄影' },
  { to: '/creator', label: '创作' },
  { to: '/about', label: '关于' },
]

/** 顶部导航 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/80 backdrop-blur-md">
      <nav className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo / 品牌名 */}
        <NavLink
          to="/"
          className="font-display font-semibold text-lg tracking-tight text-text-primary hover:text-accent-hover transition-colors"
        >
          Yinke
        </NavLink>

        {/* 桌面端导航 */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? 'text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 移动端占位 — 后续加抽屉菜单 */}
        <div className="md:hidden w-8" />
      </nav>
    </header>
  )
}
