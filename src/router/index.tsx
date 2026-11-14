import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'

// 路由级懒加载 — 每个页面独立 chunk
const HomePage = lazy(() => import('@/pages/Home'))
const ProductPage = lazy(() => import('@/pages/Product'))
const VisualPage = lazy(() => import('@/pages/Visual'))
const PhotographyPage = lazy(() => import('@/pages/Photography'))
const CreatorPage = lazy(() => import('@/pages/Creator'))
const AboutPage = lazy(() => import('@/pages/About'))
const WorksDetailPage = lazy(() => import('@/pages/WorksDetail'))

/** 轻量 fallback，不使用全屏遮挡 */
function PageLoading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-text-muted text-sm">加载中…</div>
    </div>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<PageLoading />}>
                <ProductPage />
              </Suspense>
            }
          />
          <Route
            path="/visual"
            element={
              <Suspense fallback={<PageLoading />}>
                <VisualPage />
              </Suspense>
            }
          />
          <Route
            path="/photography"
            element={
              <Suspense fallback={<PageLoading />}>
                <PhotographyPage />
              </Suspense>
            }
          />
          <Route
            path="/creator"
            element={
              <Suspense fallback={<PageLoading />}>
                <CreatorPage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageLoading />}>
                <AboutPage />
              </Suspense>
            }
          />
          {/* 项目详情页（动态路由） */}
          <Route
            path="/works/:id"
            element={
              <Suspense fallback={<PageLoading />}>
                <WorksDetailPage />
              </Suspense>
            }
          />
          {/* 兜底重定向到 Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
