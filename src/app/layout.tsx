import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '登录模板',
  description: '一个简单的 Next.js + Supabase 登录模板',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
