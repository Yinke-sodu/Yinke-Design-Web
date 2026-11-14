import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/product', label: '产品设计' },
  { to: '/visual', label: '视觉设计' },
  { to: '/creator', label: '个人品牌' },
  { to: '/about', label: '关于' },
]

/** 顶部导航 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg">
      <nav className="max-w-[1440px] mx-auto px-20 h-[72px] flex items-center justify-between">
        {/* 品牌名 */}
        <NavLink
          to="/"
          className="font-display font-bold text-2xl tracking-[1px] text-text-primary hover:text-accent transition-colors"
          style={{ fontFamily: 'MiSans, system-ui, sans-serif' }}
        >
          Yinke Design
        </NavLink>

        {/* 桌面端导航 */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? 'text-text-primary font-medium'
                      : 'text-[#666666] hover:text-text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 移动端占位 */}
        <div className="md:hidden w-8" />
      </nav>
    </header>
  )
}
