# Sitemap — 站点地图与信息架构

## 站点地图

```
┌─────────────────────────────────────────────────────────┐
│  Navbar: Home · Product · Visual · Photography · Creator · About │
└─────────────────────────────────────────────────────────┘

Home (/)
├── Hero — 姓名 / 一句话简介 / CTA
└── FeaturedProjects — 精选项目（从 Product 和 Visual 各取）

Product (/product)
├── CategoryTabs
│   ├── AI Products
│   ├── OS Design System
│   ├── APP Design System
│   └── NAS Products
└── ProductList（按分类筛选的项目卡片网格）

Visual (/visual)
├── CategoryTabs
│   ├── Brand Identity
│   ├── Poster Design
│   └── Visual Experiments
└── VisualList（按分类筛选的作品卡片网格）

Photography (/photography)
├── CategoryTabs
│   ├── Architecture
│   ├── City
│   ├── Nature
│   └── Daily
└── PhotoGrid（照片网格）

Creator (/creator)
├── CategoryTabs
│   ├── 小红书账号
│   ├── 精选笔记
│   ├── 设计教程
│   └── 设计思考
└── NoteList（笔记/内容卡片）

About (/about)
├── 个人介绍（长文 bio）
├── Skills（技能展示）
├── Experience（经历时间线）
└── Contact（联系方式）
```

## URL 规则

| 页面 | 路径 | 筛选方式 |
|------|------|----------|
| Home | `/` | — |
| Product | `/product?category=ai-products` | URL Query |
| Visual | `/visual?category=brand-identity` | URL Query |
| Photography | `/photography?category=architecture` | URL Query |
| Creator | `/creator?category=notes` | URL Query |
| About | `/about` | — |

## 统一的 Listing Page 骨架

Product / Visual / Photography / Creator 四个页面共享此骨架：

```
┌─────────────────────────────┐
│  PageHeader                  │  ← 页面标题 + 一句话介绍
│  "Product" · "AI Products..."│
├─────────────────────────────┤
│  SectionDivider              │  ← 装饰性分割线
├─────────────────────────────┤
│  CategoryTabs                │  ← 分类切换（URL Query 驱动）
├─────────────────────────────┤
│  [Card 网格容器]             │  ← 按卡片类型展示
│  • ProjectCard               │
│  • PhotoCard                 │
│  • NoteCard                  │
└─────────────────────────────┘
```

## 分类与数据映射

### Product
| Query 值 | 分类名 | 数据源 |
|----------|--------|--------|
| `ai-products` | AI Products | `products.aiProducts[]` |
| `os-design-system` | OS Design System | `products.osDesign[]` |
| `app-design-system` | APP Design System | `products.appDesign[]` |
| `nas-products` | NAS Products | `products.nasProducts[]` |

### Visual
| Query 值 | 分类名 | 数据源 |
|----------|--------|--------|
| `brand-identity` | Brand Identity | `visuals.brandIdentity[]` |
| `poster-design` | Poster Design | `visuals.poster[]` |
| `visual-experiments` | Visual Experiments | `visuals.experiments[]` |

### Photography
| Query 值 | 分类名 | 数据源 |
|----------|--------|--------|
| `architecture` | Architecture | `photos.architecture[]` |
| `city` | City | `photos.city[]` |
| `nature` | Nature | `photos.nature[]` |
| `daily` | Daily | `photos.daily[]` |

### Creator
| Query 值 | 分类名 | 数据源 |
|----------|--------|--------|
| `account` | 小红书账号 | `creator.account`（单个） |
| `notes` | 精选笔记 | `creator.notes[]` |
| `tutorials` | 设计教程 | `creator.tutorials[]` |
| `thoughts` | 设计思考 | `creator.thoughts[]` |

## Footer 内容

- 版权：`© 2026 Yinke Design. All rights reserved.`
- 社交链接：小红书、Twitter、GitHub、Email
- 导航快捷链接（与 Navbar 相同）
