'use client'  // 告诉Next.js这个组件需要在浏览器中运行

// 导入React钩子、Supabase类型和UI组件
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/auth'
import { LogOut, User as UserIcon } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

// 用户信息组件 - 显示用户头像、姓名和登出按钮
export function UserProfile() {
  // 状态管理：用户信息和加载状态
  const [user, setUser] = useState<User | null>(null)  // 当前用户信息
  const [isLoading, setIsLoading] = useState(true)       // 是否正在加载

  // 组件加载时获取用户信息
  useEffect(() => {
    const getUser = async () => {
      try {
        // 从Supabase获取当前用户信息
        const { data: { user } } = await import('@/lib/supabase').then(m => m.supabase.auth.getUser())
        setUser(user)  // 保存用户信息
      } catch (error) {
        console.error('获取用户信息失败:', error)
      } finally {
        setIsLoading(false)  // 结束加载状态
      }
    }

    getUser()  // 执行获取用户信息
  }, [])

  // 处理登出点击事件
  const handleSignOut = async () => {
    try {
      await signOut()  // 调用登出函数
      setUser(null)    // 清空用户信息
      // 跳转到登录页面
      window.location.href = siteConfig.routes.login
    } catch (error) {
      console.error('登出失败:', error)
    }
  }

  // 如果正在加载，显示加载动画
  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />  {/* 头像占位 */}
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />      {/* 文字占位 */}
      </div>
    )
  }

  // 如果没有用户信息，不显示任何内容
  if (!user) {
    return null
  }

  return (
    <div className="flex items-center gap-4">
      {/* 用户信息区域：头像和姓名 */}
      <div className="flex items-center gap-2">
        {/* 用户头像 */}
        {user.user_metadata?.avatar_url ? (
          <Image
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata.full_name || user.email || 'User'}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon className="h-4 w-4 text-gray-500" />
          </div>
        )}
        {/* 用户姓名和登录方式 */}
        <div>
          <p className="text-sm font-medium">
            {(() => {
              const providers = (user.app_metadata as any)?.providers as string[] | undefined
              const primary = (user.app_metadata as any)?.provider as string | undefined
              const current = primary || (Array.isArray(providers) ? providers[providers.length - 1] : undefined)
              
              if (current === 'google') {
                return user.user_metadata?.full_name || user.email
              }
              if (current === 'github') {
                return user.user_metadata?.user_name || user.email
              }
              return user.user_metadata?.user_name || user.user_metadata?.full_name || user.email
            })()}
          </p>
          <p className="text-xs text-gray-500">
            {user.user_metadata?.provider || siteConfig.ui.common.user}
          </p>
        </div>
      </div>
      
      {/* 登出按钮 */}
      <Button
        onClick={handleSignOut}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        {siteConfig.ui.common.logout}
      </Button>
    </div>
  )
}
