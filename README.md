# Yinke Design Web

**Designer · Creator · Maker — 个人作品集网站**

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 8 |
| 样式 | Tailwind CSS v4 |
| 路由 | React Router v7 |
| 图标 | Lucide React |

## 页面结构

| 路由 | 页面 | 内容 |
|------|------|------|
| `/` | Home | 个人介绍、精选项目 |
| `/product` | Product | AI Products / OS Design / APP Design / NAS Products |
| `/visual` | Visual | Brand Identity / Poster Design / Visual Experiments |
| `/photography` | Photography | Architecture / City / Nature / Daily |
| `/creator` | Creator | 小红书账号 / 精选笔记 / 设计教程 / 设计思考 |
| `/about` | About | 个人介绍、技能、经历、联系方式 |

> 分类筛选使用 URL Query 参数，例如 `/product?category=ai-products`

## 项目结构

```
src/
├── components/       # 通用组件
│   ├── Layout/       # Navbar、Footer
│   ├── ui/           # Button、Tag、SectionDivider
│   └── cards/        # ProjectCard、PhotoCard、NoteCard、SkillCard
├── pages/            # 页面（每个文件夹一个页面）
├── data/             # 项目数据（纯对象，不硬编码在 UI 中）
├── types/            # 全局 TypeScript 类型
├── router/           # 路由配置
├── hooks/            # 自定义 Hooks
├── assets/           # 静态资源
├── App.tsx           # 根组件（仅挂载 Router）
├── main.tsx          # Vite 入口
└── index.css         # 全局样式 + Tailwind v4 主题变量
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 数据维护

所有展示数据集中在 `src/data/` 目录，按页面模块拆分：

- `src/data/profile.ts` — 个人信息、技能、经历、联系方式
- `src/data/home.ts` — 首页精选项目
- `src/data/products.ts` — Product 页面项目列表
- `src/data/visuals.ts` — Visual 页面作品列表
- `src/data/photos.ts` — Photography 页面照片列表
- `src/data/creator.ts` — Creator 页面内容

> **设计原则**：组件不直接硬编码数据，通过 `src/data/index.ts` 统一导出获取。未来如需接入后端 API，只需替换 data 层实现。

## 设计规范

详见 [docs/Design-Spec.md](./docs/Design-Spec.md) 和 [docs/Sitemap.md](./docs/Sitemap.md)
