'use client'  // 告诉Next.js这个组件需要在浏览器中运行（不是服务器）

// 导入React的钩子函数和Supabase相关模块
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { supabase } from '@/lib/supabase'

// 首页组件 - 这是网站的入口页面
export default function HomePage() {
  // 状态管理：存储用户信息和加载状态
  const [user, setUser] = useState<User | null>(null)  // 当前登录的用户信息
  const [isLoading, setIsLoading] = useState(true)   // 是否正在加载
  const router = useRouter()  // 用于页面跳转的工具

  // 页面加载时自动执行（检查用户是否已登录）
  useEffect(() => {
    const getUser = async () => {
      try {
        // 从Supabase获取当前用户信息
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)  // 保存用户信息到状态中
        
        // 根据用户登录状态决定跳转到哪个页面
        if (user) {
          router.push(siteConfig.routes.dashboard)  // 已登录：跳转到用户主页
        } else {
          router.push(siteConfig.routes.login)     // 未登录：跳转到登录页面
        }
      } catch (error) {
        console.error('获取用户信息失败:', error)
        router.push(siteConfig.routes.login)  // 出错时也跳转到登录页面
      } finally {
        setIsLoading(false)  // 无论成功失败，都结束加载状态
      }
    }

    getUser()  // 执行获取用户信息的函数
  }, [router])  // 依赖项：当router变化时重新执行

  // 如果正在加载，显示加载动画
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          {/* 旋转的加载动画 */}
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{siteConfig.ui.common.loading}</p>
        </div>
      </div>
    )
  }

  // 正常情况下不显示任何内容（因为会跳转到其他页面）
  return null
}
