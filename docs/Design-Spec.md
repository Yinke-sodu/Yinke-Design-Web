# Design Spec — 设计规范

> 所有设计 token 在 `src/index.css` 的 Tailwind v4 `@theme {}` 块中统一维护

## 1. 色彩系统

### 基础色板

| Token | 色值 | 用途 |
|-------|------|------|
| `bg` | `#ffffff` | 页面主背景 |
| `bg-subtle` | `#fafafa` | 卡片/区块背景（轻微对比） |
| `bg-muted` | `#f4f4f5` | 输入框/禁用背景 |
| `text-primary` | `#0a0a0a` | 主文本 |
| `text-secondary` | `#52525b` | 次要文本 |
| `text-muted` | `#a1a1aa` | 占位符/时间戳 |
| `text-inverse` | `#ffffff` | 深色背景上的文本 |
| `border` | `#e4e4e7` | 卡片边框/分割线 |
| `border-subtle` | `#f1f1f3` | 细分割线 |
| `accent` | `#0a0a0a` | 主按钮/强调元素（与 primary 同色，可替换） |
| `accent-hover` | `#18181b` | Hover 状态 |

### 使用规则

```jsx
// ✅ 正确：使用 Tailwind token
<div className="bg-bg text-text-primary border-border">

// ❌ 错误：硬编码颜色值
<div className="bg-white text-[#0a0a0a] border-[#e4e4e7]">
```

## 2. 字体

| Token | 字体栈 | 用途 |
|-------|--------|------|
| `font-sans` | Inter + PingFang SC + 系统字体 | 正文、段落 |
| `font-display` | Inter + 系统字体 | 标题、展示文字 |

## 3. 间距

| Token | 值 | 用途 |
|-------|-----|------|
| `space-section` | `8rem` | 大节间距（Home 首屏到下一个区块） |
| `space-section-sm` | `4rem` | 小节间距 |
| `space-card-gap` | `1.5rem` | 卡片网格间距 |

## 4. 圆角

| Token | 值 | 用途 |
|-------|-----|------|
| `radius-card` | `0.75rem` | 卡片、图片容器 |
| `radius-sm` | `0.5rem` | 标签、小按钮 |

## 5. 动效

| Token | 值 | 用途 |
|-------|-----|------|
| `duration-fast` | `150ms` | 微交互（hover 颜色变化） |
| `duration-normal` | `250ms` | 通用过渡 |
| `duration-slow` | `400ms` | 大元素过渡 |

## 6. 布局规范

### 页面容器
```
max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16
```

### 网格系统
- Product / Visual 卡片：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Photography 照片：`grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Note 卡片：`grid-cols-1 md:grid-cols-2`

### 响应式断点
| 断点 | 宽度 | 典型设备 |
|------|------|----------|
| 默认 | < 768px | 手机 |
| `md:` | ≥ 768px | 平板 |
| `lg:` | ≥ 1024px | 笔记本 |

## 7. 组件样式约定

### Navbar
- 固定顶部，背景半透明 `backdrop-blur`
- 当前路由下划线/高亮
- 移动端抽屉菜单

### SectionDivider
- 极简：顶部一条细线 + 中心小圆点或文字（标题可选）
- 用于 Home 页各区块之间

### Card
- 背景白色 + 边框 `border-border`
- 圆角 `radius-card`
- hover：轻微阴影 + 上移 2-4px（`translate-y-[-2px] shadow-sm`）

### Button
- Primary：实心填充
- Secondary：边框样式
- 统一圆角、padding 和过渡时间

## 8. 可访问性

- 所有可点击元素有 `aria-label`
- 图片有 `alt` 属性
- 颜色对比度满足 WCAG AA（4.5:1）
- 键盘 Tab 顺序符合视觉流程
