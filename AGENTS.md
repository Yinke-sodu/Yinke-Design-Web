# AGENTS.md — 项目协作规范

## 项目概述
**Yinke Design Web** — Designer · Creator · Maker 个人作品集网站
技术栈：React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router v7 + Lucide React

## 核心开发约束（强制遵守）

### 1. 模块化
- 禁止将多个页面写在同一文件中（App.tsx 只做路由挂载）
- 禁止将项目数据硬编码在 UI 组件中，所有数据统一放在 `src/data/`
- 禁止重复创建功能相同的组件，优先在 `components/` 中复用

### 2. 目录分层
```
src/
├── components/     # 通用组件（跨页面复用）
│   ├── Layout/     # 页面骨架（Navbar、Footer）
│   ├── ui/         # 基础 UI（Button、Tag、SectionDivider）
│   └── cards/      # 卡片组件（ProjectCard、PhotoCard、NoteCard、SkillCard）
├── pages/          # 页面级组件（每个文件夹一个页面）
│   └── [Page]/     # 页面内部专属组件，不跨页面复用
├── data/           # 数据层（纯 object/array）
├── types/          # 全局 TypeScript 类型
├── router/         # 路由配置（React.lazy 懒加载）
├── hooks/          # 自定义 Hooks
└── assets/         # 静态资源
```

### 3. 组件边界
- **Layout** 组件：Nav + Footer + `<Outlet/>`，不包含页面内容
- **UI** 组件：无业务逻辑的纯视觉组件（Button、Tag 等）
- **Cards** 组件：通用卡片，props 接收数据
- **Pages** 组件：串联数据 + 通用组件 + 页面专属组件

### 4. 数据管理
- 所有数据放在 `src/data/` 下，按页面模块拆分
- `src/data/index.ts` 统一导出
- 组件中使用 `import { getXxx } from '@/data'` 获取数据
- 未来如需接入后端 API，只需替换 data 层实现，UI 无需改动

### 5. 路由规范
- 使用 React.lazy + Suspense 实现路由级代码分割
- 分类筛选使用 URL Query（`?category=xxx`），而非子路由
- 路由配置集中在 `src/router/index.tsx`

### 6. 样式规范
- 使用 Tailwind CSS v4 `@theme {}` 块统一维护设计 token
- 禁止硬编码颜色值（用 `text-primary` 而非 `text-[#0a0a0a]`）
- 全局样式只在 `src/index.css` 中定义

### 7. TypeScript
- 所有数据类型定义在 `src/types/index.ts`
- 组件必须显式声明 props 类型
- 关闭 `any` 使用，若必须使用需加注释说明原因

## 常用命令
```bash
npm run dev      # 启动开发服务器
npm run build    # 生产构建
npm run lint     # 代码检查
npm run preview  # 预览构建产物
```

## 禁止事项
- 禁止随意增加依赖（技术栈已锁定）
- 禁止删除已有功能或样式
- 禁止使用 class 组件
- 禁止在组件中直接 fetch 数据（统一走 data 层）
- 禁止在组件 props 中传递大段数据对象
