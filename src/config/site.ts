/**
 * 网站配置 - 就像网站的"设置面板"
 * 这里存放了网站的所有重要信息，比如网站名称、颜色、登录方式等
 * 好处：想改网站外观或功能时，只需要改这一个文件
 */

export const siteConfig = {
  // 网站的基本信息（就像身份证）
  name: "登录模板",                                    // 网站名称
  description: "一个简单的 Next.js + Supabase 登录模板", // 网站描述
  url: "http://localhost:3000",                        // 网站地址
  
  // 语言设置
  language: "zh-CN",        // 网站语言：中文
  defaultLocale: "zh-CN",   // 默认语言：中文
  
  // 网站外观设置（就像装修房子）
  theme: {
    primary: "blue",        // 主色调：蓝色
    accent: "gray",         // 辅助色：灰色
    mode: "light" as const, // 主题模式：浅色（还有深色、自动）
  },
  
  // 登录方式设置（用户可以用什么账号登录）
  oauth: {
    providers: ["github", "google"] as const, // 支持的登录方式：GitHub和Google
    redirectPath: "/auth/callback",            // 登录成功后跳转的页面
  },
  
  // 网站页面地址设置（就像门牌号）
  routes: {
    login: "/login",        // 登录页面地址
    dashboard: "/dashboard", // 用户主页地址
    home: "/",              // 网站首页地址
  },
  
  // 搜索引擎优化设置（让Google等搜索引擎更好地找到网站）
  metadata: {
    title: "登录模板",                                    // 网页标题
    description: "一个简单的 Next.js + Supabase 登录模板", // 网页描述
    keywords: ["Next.js", "Supabase", "OAuth", "登录", "模板"], // 关键词
    author: "Your Name",                                  // 作者
    openGraph: {                                          // 社交媒体分享时的信息
      type: "website",
      locale: "zh_CN",
      url: "http://localhost:3000",
      siteName: "登录模板",
      title: "登录模板",
      description: "一个简单的 Next.js + Supabase 登录模板",
    },
  },
  
  // 网站上的所有文字（想改网站上的字就改这里）
  ui: {
    login: {                                    // 登录页面的文字
      title: "登录到您的账户",                   // 登录页面标题
      subtitle: "选择以下方式登录",              // 登录页面副标题
      githubButton: "使用 GitHub 登录",         // GitHub登录按钮文字
      googleButton: "使用 Google 登录",         // Google登录按钮文字
      terms: "登录即表示您同意我们的服务条款和隐私政策", // 服务条款文字
    },
    dashboard: {                                // 用户主页的文字
      title: "仪表板",                          // 主页标题
      subtitle: "欢迎回来！",                    // 主页副标题
      status: "已成功登录",                      // 登录状态文字
      userInfo: "用户信息",                      // 用户信息标题
      loginMethod: "登录方式",                  // 登录方式标题
      accountStatus: "账户状态",                 // 账户状态标题
      userDetails: "用户详细信息",               // 用户详情标题
      userDetailsSubtitle: "您的账户基本信息",    // 用户详情副标题
      email: "邮箱地址",                         // 邮箱标签
      userId: "用户ID",                         // 用户ID标签
      createdAt: "创建时间",                     // 创建时间标签
      lastLogin: "最后登录",                     // 最后登录标签
      active: "活跃",                           // 活跃状态文字
    },
    common: {                                   // 通用文字（多个页面都会用到的）
      loading: "加载中...",                      // 加载中文字
      loginLoading: "登录中...",                // 登录中文字
      logout: "登出",                           // 登出按钮文字
      user: "用户",                             // 用户标签
      unknown: "未知",                          // 未知状态文字
    },
  },
} as const

// 导出类型
export type SiteConfig = typeof siteConfig
export type ThemeMode = typeof siteConfig.theme.mode
export type OAuthProvider = typeof siteConfig.oauth.providers[number]
