/**
 * 网站配置
 * 集中管理所有网站相关的配置信息
 */

export const siteConfig = {
  // 基本信息
  name: "登录模板",
  description: "一个简单的 Next.js + Supabase 登录模板",
  url: "http://localhost:3000",
  
  // 国际化配置
  language: "zh-CN",
  defaultLocale: "zh-CN",
  
  // 主题配置
  theme: {
    primary: "blue",
    accent: "gray",
    mode: "light" as const, // light | dark | system
  },
  
  // OAuth 配置
  oauth: {
    providers: ["github", "google"] as const,
    redirectPath: "/auth/callback",
  },
  
  // 路由配置
  routes: {
    login: "/login",
    dashboard: "/dashboard",
    home: "/",
  },
  
  // 元数据配置
  metadata: {
    title: "登录模板",
    description: "一个简单的 Next.js + Supabase 登录模板",
    keywords: ["Next.js", "Supabase", "OAuth", "登录", "模板"],
    author: "Your Name",
    openGraph: {
      type: "website",
      locale: "zh_CN",
      url: "http://localhost:3000",
      siteName: "登录模板",
      title: "登录模板",
      description: "一个简单的 Next.js + Supabase 登录模板",
    },
  },
  
  // UI 文本配置
  ui: {
    login: {
      title: "登录到您的账户",
      subtitle: "选择以下方式登录",
      githubButton: "使用 GitHub 登录",
      googleButton: "使用 Google 登录",
      terms: "登录即表示您同意我们的服务条款和隐私政策",
    },
    dashboard: {
      title: "仪表板",
      subtitle: "欢迎回来！",
      status: "已成功登录",
      userInfo: "用户信息",
      loginMethod: "登录方式",
      accountStatus: "账户状态",
      userDetails: "用户详细信息",
      userDetailsSubtitle: "您的账户基本信息",
      email: "邮箱地址",
      userId: "用户ID",
      createdAt: "创建时间",
      lastLogin: "最后登录",
      active: "活跃",
    },
    common: {
      loading: "加载中...",
      loginLoading: "登录中...",
      logout: "登出",
      user: "用户",
      unknown: "未知",
    },
  },
} as const

// 导出类型
export type SiteConfig = typeof siteConfig
export type ThemeMode = typeof siteConfig.theme.mode
export type OAuthProvider = typeof siteConfig.oauth.providers[number]

