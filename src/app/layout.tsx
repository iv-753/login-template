// 导入Next.js的类型定义和样式文件
import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site'

// 网站的基本信息（搜索引擎会看到这些信息）
export const metadata: Metadata = {
  title: siteConfig.metadata.title,                    // 网页标题
  description: siteConfig.metadata.description,       // 网页描述
  keywords: [...siteConfig.metadata.keywords],         // 关键词
  authors: [{ name: siteConfig.metadata.author }],     // 作者信息
  openGraph: {                                          // 社交媒体分享时的信息
    type: siteConfig.metadata.openGraph.type as any,
    locale: siteConfig.metadata.openGraph.locale,
    url: siteConfig.metadata.openGraph.url,
    siteName: siteConfig.metadata.openGraph.siteName,
    title: siteConfig.metadata.openGraph.title,
    description: siteConfig.metadata.openGraph.description,
  },
}

// 根布局组件 - 这是网站的"外壳"，所有页面都会套在这个外壳里
export default function RootLayout({
  children,  // children是所有页面的内容
}: {
  children: React.ReactNode  // 告诉TypeScript children是React组件
}) {
  return (
    <html lang={siteConfig.language}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
