'use client'

import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/auth'
import { LogOut, User as UserIcon } from 'lucide-react'
import Image from 'next/image'

export function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 从 localStorage 获取用户信息（简化版本）
    const getUser = async () => {
      try {
        const { data: { user } } = await import('@/lib/supabase').then(m => m.supabase.auth.getUser())
        setUser(user)
      } catch (error) {
        console.error('获取用户信息失败:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getUser()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
      setUser(null)
      window.location.href = '/login'
    } catch (error) {
      console.error('登出失败:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {user.user_metadata?.avatar_url ? (
          <Image
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata.full_name || user.email || 'User'}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon className="h-4 w-4 text-gray-500" />
          </div>
        )}
        <div>
          <p className="text-sm font-medium">
            {user.user_metadata?.full_name || user.email}
          </p>
          <p className="text-xs text-gray-500">
            {user.user_metadata?.provider || '用户'}
          </p>
        </div>
      </div>
      <Button
        onClick={handleSignOut}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        登出
      </Button>
    </div>
  )
}
