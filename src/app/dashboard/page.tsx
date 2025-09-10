'use client'  // 告诉Next.js这个组件需要在浏览器中运行

// 导入React钩子、Supabase类型和UI组件
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { UserProfile } from '@/components/auth/UserProfile'
import { useRouter } from 'next/navigation'
import { CheckCircle, Users, Settings, BarChart3 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { supabase } from '@/lib/supabase'

// 用户主页组件 - 登录成功后显示的页面
export default function DashboardPage() {
  // 状态管理：用户信息和加载状态
  const [user, setUser] = useState<User | null>(null)  // 当前登录的用户
  const [isLoading, setIsLoading] = useState(true)    // 是否正在加载
  const router = useRouter()  // 页面跳转工具

  // 页面加载时检查用户登录状态
  useEffect(() => {
    const getUser = async () => {
      try {
        // 从Supabase获取当前用户信息
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)  // 保存用户信息
        
        // 如果没有用户信息，说明未登录，跳转到登录页面
        if (!user) {
          router.push(siteConfig.routes.login)
        }
      } catch (error) {
        console.error('获取用户信息失败:', error)
        router.push(siteConfig.routes.login)  // 出错也跳转到登录页面
      } finally {
        setIsLoading(false)  // 结束加载状态
      }
    }

    getUser()  // 执行获取用户信息
  }, [router])

  // 如果正在加载，显示加载动画
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{siteConfig.ui.common.loading}</p>
        </div>
      </div>
    )
  }

  // 如果没有用户信息，不显示任何内容（会跳转到登录页面）
  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部：标题和用户信息 */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{siteConfig.ui.dashboard.title}</h1>
              <p className="text-gray-600">{siteConfig.ui.dashboard.subtitle}</p>
            </div>
            <UserProfile />
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* 欢迎卡片：显示登录成功状态 */}
          <div className="bg-white overflow-hidden shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {siteConfig.ui.dashboard.status}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {siteConfig.ui.dashboard.status}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* 统计信息网格：显示用户的基本信息 */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* 用户信息卡片 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {siteConfig.ui.dashboard.userInfo}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {user.user_metadata?.full_name || user.email}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* 登录方式卡片 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Settings className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {siteConfig.ui.dashboard.loginMethod}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {user.user_metadata?.provider || 'OAuth'}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* 账户状态卡片 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {siteConfig.ui.dashboard.accountStatus}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {siteConfig.ui.dashboard.active}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 用户详细信息表格 */}
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {siteConfig.ui.dashboard.userDetails}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {siteConfig.ui.dashboard.userDetailsSubtitle}
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                {/* 邮箱地址行 */}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">{siteConfig.ui.dashboard.email}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.email}
                  </dd>
                </div>
                {/* 用户ID行 */}
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">{siteConfig.ui.dashboard.userId}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.id}
                  </dd>
                </div>
                {/* 创建时间行 */}
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">{siteConfig.ui.dashboard.createdAt}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {new Date(user.created_at).toLocaleString('zh-CN')}
                  </dd>
                </div>
                {/* 最后登录时间行 */}
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">{siteConfig.ui.dashboard.lastLogin}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString('zh-CN') : siteConfig.ui.common.unknown}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
