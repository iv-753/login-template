// 导入Supabase客户端（用来连接数据库和登录系统）
import { supabase } from './supabase'

// GitHub登录函数 - 当用户点击"用GitHub登录"按钮时调用
export async function signInWithGitHub() {
  // 调用Supabase的OAuth登录功能，选择GitHub作为登录方式
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',  // 指定使用GitHub登录
    options: {
      redirectTo: `${window.location.origin}/dashboard`  // 登录成功后跳转到用户主页
    }
  })
  
  // 如果登录出错，打印错误信息并抛出错误
  if (error) {
    console.error('GitHub login error:', error)
    throw error
  }
  
  // 登录成功，返回数据
  return data
}

// Google登录函数 - 当用户点击"用Google登录"按钮时调用
export async function signInWithGoogle() {
  // 调用Supabase的OAuth登录功能，选择Google作为登录方式
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',  // 指定使用Google登录
    options: {
      redirectTo: `${window.location.origin}/dashboard`  // 登录成功后跳转到用户主页
    }
  })
  
  // 如果登录出错，打印错误信息并抛出错误
  if (error) {
    console.error('Google login error:', error)
    throw error
  }
  
  // 登录成功，返回数据
  return data
}

// 登出函数 - 当用户点击"登出"按钮时调用
export async function signOut() {
  // 调用Supabase的登出功能
  const { error } = await supabase.auth.signOut()
  
  // 如果登出出错，打印错误信息并抛出错误
  if (error) {
    console.error('Sign out error:', error)
    throw error
  }
}
