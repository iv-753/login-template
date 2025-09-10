/**
 * 配置验证工具
 */

import { z } from 'zod'
import type { SiteConfig, EnvConfig } from './types'

// 环境变量验证模式
const envConfigSchema = z.object({
  siteName: z.string().optional(),
  siteDescription: z.string().optional(),
  siteUrl: z.string().url().optional(),
  language: z.enum(['zh-CN', 'en-US']).optional(),
  themeMode: z.enum(['light', 'dark', 'system']).optional(),
  primaryColor: z.string().optional(),
  accentColor: z.string().optional(),
})

// 配置验证模式
const siteConfigSchema = z.object({
  name: z.string().min(1, '网站名称不能为空'),
  description: z.string().min(1, '网站描述不能为空'),
  url: z.string().url('网站URL格式不正确'),
  language: z.enum(['zh-CN', 'en-US']),
  defaultLocale: z.enum(['zh-CN', 'en-US']),
  theme: z.object({
    primary: z.string().min(1),
    accent: z.string().min(1),
    mode: z.enum(['light', 'dark', 'system']),
  }),
  oauth: z.object({
    providers: z.array(z.enum(['github', 'google'])).min(1),
    redirectPath: z.string().startsWith('/'),
  }),
  routes: z.object({
    login: z.string().startsWith('/'),
    dashboard: z.string().startsWith('/'),
    home: z.string().startsWith('/'),
  }),
  metadata: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    keywords: z.array(z.string()),
    author: z.string().min(1),
    openGraph: z.object({
      type: z.string(),
      locale: z.string(),
      url: z.string().url(),
      siteName: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  }),
  ui: z.object({
    login: z.object({
      title: z.string(),
      subtitle: z.string(),
      githubButton: z.string(),
      googleButton: z.string(),
      terms: z.string(),
    }),
    dashboard: z.object({
      title: z.string(),
      subtitle: z.string(),
      status: z.string(),
      userInfo: z.string(),
      loginMethod: z.string(),
      accountStatus: z.string(),
      userDetails: z.string(),
      userDetailsSubtitle: z.string(),
      email: z.string(),
      userId: z.string(),
      createdAt: z.string(),
      lastLogin: z.string(),
      active: z.string(),
    }),
    common: z.object({
      loading: z.string(),
      loginLoading: z.string(),
      logout: z.string(),
      user: z.string(),
      unknown: z.string(),
    }),
  }),
})

/**
 * 验证环境变量配置
 */
export function validateEnvConfig(env: Record<string, string | undefined>): EnvConfig {
  try {
    return envConfigSchema.parse(env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('环境变量配置验证失败:', error.issues)
      throw new Error(`环境变量配置错误: ${error.issues.map(e => e.message).join(', ')}`)
    }
    throw error
  }
}

/**
 * 验证网站配置
 */
export function validateSiteConfig(config: unknown): SiteConfig {
  try {
    return siteConfigSchema.parse(config)
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('网站配置验证失败:', error.issues)
      throw new Error(`网站配置错误: ${error.issues.map(e => e.message).join(', ')}`)
    }
    throw error
  }
}

/**
 * 合并环境变量配置到网站配置
 */
export function mergeEnvConfig(siteConfig: SiteConfig, envConfig: EnvConfig): SiteConfig {
  return {
    ...siteConfig,
    name: envConfig.siteName || siteConfig.name,
    description: envConfig.siteDescription || siteConfig.description,
    url: envConfig.siteUrl || siteConfig.url,
    language: envConfig.language || siteConfig.language,
    theme: {
      ...siteConfig.theme,
      mode: envConfig.themeMode || siteConfig.theme.mode,
      primary: envConfig.primaryColor || siteConfig.theme.primary,
      accent: envConfig.accentColor || siteConfig.theme.accent,
    },
  }
}

/**
 * 检查必需的环境变量
 */
export function checkRequiredEnvVars(): void {
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  ]

  const missing = required.filter(key => !process.env[key])
  
  if (missing.length > 0) {
    throw new Error(`缺少必需的环境变量: ${missing.join(', ')}`)
  }
}

/**
 * 开发环境配置检查
 */
export function checkDevConfig(): void {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔧 开发环境配置检查:')
    console.log('  - Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅' : '❌')
    console.log('  - Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅' : '❌')
    console.log('  - GitHub OAuth:', process.env.GITHUB_CLIENT_ID ? '✅' : '❌')
    console.log('  - Google OAuth:', process.env.GOOGLE_CLIENT_ID ? '✅' : '❌')
  }
}
