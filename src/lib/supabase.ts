// 导入Supabase客户端创建函数
import { createClient } from '@supabase/supabase-js'

// 从环境变量中获取Supabase的配置信息
// 这些信息在.env.local文件中设置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!        // Supabase项目的网址
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!  // Supabase的公开密钥

// 创建Supabase客户端实例
// 这个客户端用来连接Supabase数据库和登录系统
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
