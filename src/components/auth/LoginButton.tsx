'use client'  // 告诉Next.js这个组件需要在浏览器中运行

// 导入React状态管理和UI组件
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { signInWithGitHub, signInWithGoogle } from '@/lib/auth'
import { Github, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

// 定义组件的属性类型
interface LoginButtonProps {
  provider: 'github' | 'google'  // 登录方式：GitHub或Google
  children: React.ReactNode      // 按钮内的内容（图标+文字）
}

// 登录按钮组件 - 处理用户点击登录按钮的逻辑
export function LoginButton({ provider, children }: LoginButtonProps) {
  // 状态：是否正在登录中
  const [isLoading, setIsLoading] = useState(false)

  // 处理登录点击事件
  const handleLogin = async () => {
    setIsLoading(true)  // 开始登录，显示加载状态
    try {
      // 根据登录方式调用不同的登录函数
      if (provider === 'github') {
        await signInWithGitHub()  // 调用GitHub登录
      } else if (provider === 'google') {
        await signInWithGoogle()  // 调用Google登录
      }
    } catch (error) {
      console.error('Login failed:', error)  // 登录失败时打印错误
    } finally {
      setIsLoading(false)  // 无论成功失败，都结束加载状态
    }
  }

  // 根据登录方式选择对应的图标
  const Icon = provider === 'github' ? Github : Mail

  return (
    <Button
      onClick={handleLogin}
      disabled={isLoading}
      className="w-full flex items-center gap-3 h-12 text-base"
      variant="outline"
    >
      <Icon className="h-5 w-5" />
      {isLoading ? siteConfig.ui.common.loginLoading : children}
    </Button>
  )
}
