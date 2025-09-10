// 导入登录按钮组件和图标
import { LoginButton } from '@/components/auth/LoginButton'
import { Shield, Github, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

// 登录页面组件 - 用户在这里选择登录方式
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* 整个页面的容器：全屏高度，居中显示，灰色背景 */}
      <div className="max-w-md w-full space-y-8">
        {/* 登录框：最大宽度，垂直排列，间距 */}
        <div className="text-center">
          {/* 页面头部：图标、标题、副标题 */}
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
            {/* 盾牌图标：表示安全登录 */}
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {/* 页面标题 */}
            {siteConfig.ui.login.title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {/* 页面副标题 */}
            {siteConfig.ui.login.subtitle}
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          {/* 登录按钮区域 */}
          {siteConfig.oauth.providers.includes('github') && (
            <LoginButton provider="github">
              {/* 如果配置了GitHub登录，显示GitHub登录按钮 */}
              <Github className="h-5 w-5" />
              {siteConfig.ui.login.githubButton}
            </LoginButton>
          )}
          
          {siteConfig.oauth.providers.includes('google') && (
            <LoginButton provider="google">
              {/* 如果配置了Google登录，显示Google登录按钮 */}
              <Mail className="h-5 w-5" />
              {siteConfig.ui.login.googleButton}
            </LoginButton>
          )}
        </div>
        
        <div className="mt-6 text-center">
          {/* 服务条款说明 */}
          <p className="text-xs text-gray-500">
            {siteConfig.ui.login.terms}
          </p>
        </div>
      </div>
    </div>
  )
}
