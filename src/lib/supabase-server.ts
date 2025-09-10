// 导入Supabase服务端客户端创建函数和Next.js的cookies工具
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// 创建服务端Supabase客户端 - 在服务器上运行的版本
export async function createClient() {
  // 获取服务器端的cookies（用来存储用户登录状态）
  const cookieStore = await cookies()

  // 创建Supabase服务端客户端
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,        // Supabase项目网址
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,    // Supabase公开密钥
    {
      cookies: {
        // 获取cookie值
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        // 设置cookie值
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set(name, value, options)
          } catch {
            // 如果在服务器组件中调用set方法会出错
            // 这可以忽略，因为中间件会刷新用户会话
          }
        },
        // 删除cookie
        remove(name: string, options: any) {
          try {
            cookieStore.set(name, '', { ...options, maxAge: 0 })
          } catch {
            // 如果在服务器组件中调用remove方法会出错
            // 这可以忽略，因为中间件会刷新用户会话
          }
        },
      },
    }
  )
}
