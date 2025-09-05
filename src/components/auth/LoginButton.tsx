'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { signInWithGitHub, signInWithGoogle } from '@/lib/auth'
import { Github, Mail } from 'lucide-react'

interface LoginButtonProps {
  provider: 'github' | 'google'
  children: React.ReactNode
}

export function LoginButton({ provider, children }: LoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      if (provider === 'github') {
        await signInWithGitHub()
      } else if (provider === 'google') {
        await signInWithGoogle()
      }
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const Icon = provider === 'github' ? Github : Mail

  return (
    <Button
      onClick={handleLogin}
      disabled={isLoading}
      className="w-full flex items-center gap-3 h-12 text-base"
      variant="outline"
    >
      <Icon className="h-5 w-5" />
      {isLoading ? '登录中...' : children}
    </Button>
  )
}
