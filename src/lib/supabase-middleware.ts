// 导入Supabase服务端客户端和Next.js的响应类型
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// 更新用户会话的中间件函数 - 在每个请求时自动刷新用户登录状态
export async function updateSession(request: NextRequest) {
  // 创建响应对象，允许继续处理请求
  let supabaseResponse = NextResponse.next({
    request,
  })

  // 创建Supabase中间件客户端（专门用于中间件）
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,        // Supabase项目网址
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,    // Supabase公开密钥
    {
      cookies: {
        // 从请求中获取cookie
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        // 设置cookie到请求和响应中
        set(name: string, value: string, options: any) {
          // 设置到请求的cookies中
          request.cookies.set({
            name,
            value,
            ...options,
          })
          // 创建新的响应对象
          supabaseResponse = NextResponse.next({
            request,
          })
          // 设置到响应的cookies中
          supabaseResponse.cookies.set({
            name,
            value,
            ...options,
          })
        },
        // 删除cookie
        remove(name: string, options: any) {
          // 清空请求中的cookie
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          // 创建新的响应对象
          supabaseResponse = NextResponse.next({
            request,
          })
          // 清空响应中的cookie
          supabaseResponse.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // 重要：在createServerClient和supabase.auth.getUser()之间不要写任何逻辑
  // 简单的错误可能导致用户随机登出，很难调试

  // 仅进行Supabase会话cookie同步，不做未登录重定向
  // 统一改为在客户端页面内做鉴权与跳转
  await supabase.auth.getUser()

  // 重要：必须返回supabaseResponse对象
  // 如果创建新的响应对象，确保：
  // 1. 传递request参数：const myNewResponse = NextResponse.next({ request })
  // 2. 复制所有cookies：myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. 修改myNewResponse对象而不是supabaseResponse对象

  return supabaseResponse
}
