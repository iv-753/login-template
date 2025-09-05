import { LoginButton } from '@/components/auth/LoginButton'
import { Shield, Github, Mail } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            登录到您的账户
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            选择以下方式登录
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <LoginButton provider="github">
            <Github className="h-5 w-5" />
            使用 GitHub 登录
          </LoginButton>
          
          <LoginButton provider="google">
            <Mail className="h-5 w-5" />
            使用 Google 登录
          </LoginButton>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            登录即表示您同意我们的服务条款和隐私政策
          </p>
        </div>
      </div>
    </div>
  )
}
