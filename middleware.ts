// 导入Supabase中间件函数和Next.js请求类型
import { updateSession } from '@/lib/supabase-middleware'
import { NextRequest } from 'next/server'

// Next.js中间件 - 在每个请求时自动执行
export async function middleware(request: NextRequest) {
  // 调用Supabase会话更新函数，保持用户登录状态
  return await updateSession(request)
}

// 中间件配置 - 指定哪些路径需要执行中间件
export const config = {
  matcher: [
    /*
     * 匹配所有请求路径，除了以下开头的：
     * - _next/static (静态文件)
     * - _next/image (图片优化文件)
     * - favicon.ico (网站图标文件)
     * 可以根据需要修改这个模式来包含更多路径
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
