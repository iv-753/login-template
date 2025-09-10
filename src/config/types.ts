/**
 * 配置系统类型定义
 */

// 主题模式类型
export type ThemeMode = 'light' | 'dark' | 'system'

// OAuth 提供商类型
export type OAuthProvider = 'github' | 'google'

// 语言类型
export type Language = 'zh-CN' | 'en-US'

// 主题配置类型
export interface ThemeConfig {
  primary: string
  accent: string
  mode: ThemeMode
}

// OAuth 配置类型
export interface OAuthConfig {
  providers: readonly OAuthProvider[]
  redirectPath: string
}

// 路由配置类型
export interface RoutesConfig {
  login: string
  dashboard: string
  home: string
}

// 元数据配置类型
export interface MetadataConfig {
  title: string
  description: string
  keywords: string[]
  author: string
  openGraph: {
    type: string
    locale: string
    url: string
    siteName: string
    title: string
    description: string
  }
}

// UI 文本配置类型
export interface UIConfig {
  login: {
    title: string
    subtitle: string
    githubButton: string
    googleButton: string
    terms: string
  }
  dashboard: {
    title: string
    subtitle: string
    status: string
    userInfo: string
    loginMethod: string
    accountStatus: string
    userDetails: string
    userDetailsSubtitle: string
    email: string
    userId: string
    createdAt: string
    lastLogin: string
    active: string
  }
  common: {
    loading: string
    loginLoading: string
    logout: string
    user: string
    unknown: string
  }
}

// 完整配置类型
export interface SiteConfig {
  name: string
  description: string
  url: string
  language: Language
  defaultLocale: Language
  theme: ThemeConfig
  oauth: OAuthConfig
  routes: RoutesConfig
  metadata: MetadataConfig
  ui: UIConfig
}

// 环境变量配置类型
export interface EnvConfig {
  siteName?: string
  siteDescription?: string
  siteUrl?: string
  language?: Language
  themeMode?: ThemeMode
  primaryColor?: string
  accentColor?: string
}
