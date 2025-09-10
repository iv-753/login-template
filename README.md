# 登录模板

一个基于 Next.js 15 + Supabase 的最简化登录模板，支持 GitHub 和 Google OAuth 登录。

## 功能特性

- ✅ GitHub OAuth 登录
- ✅ Google OAuth 登录
- ✅ 自动用户注册
- ✅ 会话管理
- ✅ 路由保护
- ✅ 响应式设计
- ✅ TypeScript 支持
- ✅ Tailwind CSS 样式

## 技术栈

- **前端框架**: Next.js 15 (App Router)
- **数据库**: Supabase PostgreSQL
- **认证**: Supabase Auth
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **图标**: Lucide React

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 Supabase

1. 访问 [Supabase](https://supabase.com) 创建新项目
2. 在项目设置中获取以下信息：
   - Project URL
   - Anon public key

### 3. 配置 OAuth 应用

#### GitHub OAuth
1. 访问 GitHub Settings > Developer settings > OAuth Apps
2. 创建新的 OAuth App
3. 设置 Authorization callback URL: `http://localhost:3000/auth/callback`

#### Google OAuth
1. 访问 [Google Cloud Console](https://console.cloud.google.com)
2. 创建新项目或选择现有项目
3. 启用 Google+ API
4. 创建 OAuth 2.0 客户端 ID
5. 设置授权重定向 URI: `http://localhost:3000/auth/callback`

### 4. 配置环境变量

复制 `env.example` 文件为 `.env.local` 并填入相应配置：

```bash
cp env.example .env.local
```

编辑 `.env.local` 文件：

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# GitHub OAuth 配置
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Google OAuth 配置
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 5. 配置 Supabase Auth

在 Supabase 项目设置中：

1. 进入 Authentication > Providers
2. 启用 GitHub 和 Google 提供商
3. 填入相应的 Client ID 和 Client Secret
4. 设置 Site URL: `http://localhost:3000`
5. 设置 Redirect URLs: `http://localhost:3000/auth/callback`

### 6. 运行项目

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

**注意**: 如果没有配置环境变量，项目会显示错误页面。请按照上述步骤配置 Supabase 和环境变量后再运行。

## 项目结构

```
├── config/                 # 配置系统
│   ├── site.ts            # 网站配置
│   ├── types.ts           # 类型定义
│   ├── validate.ts        # 配置验证
│   └── index.ts           # 配置入口
├── src/
│   ├── app/               # Next.js App Router 页面
│   │   ├── auth/
│   │   │   └── callback/  # OAuth 回调处理
│   │   ├── dashboard/     # 受保护的仪表板页面
│   │   ├── login/         # 登录页面
│   │   ├── globals.css    # 全局样式
│   │   ├── layout.tsx     # 根布局
│   │   └── page.tsx       # 首页
│   ├── components/
│   │   ├── auth/          # 认证相关组件
│   │   │   ├── LoginButton.tsx # 登录按钮
│   │   │   └── UserProfile.tsx # 用户信息组件
│   │   └── ui/            # 基础 UI 组件
│   │       └── button.tsx # 按钮组件
│   └── lib/               # 工具库
│       ├── auth.ts        # 认证工具函数
│       ├── supabase.ts    # Supabase 客户端
│       ├── supabase-server.ts # 服务端 Supabase 客户端
│       ├── supabase-middleware.ts # 中间件 Supabase 客户端
│       └── utils.ts       # 通用工具函数
├── middleware.ts          # Next.js 中间件
├── tailwind.config.ts     # Tailwind CSS 配置
└── package.json           # 项目依赖
```

## 部署

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置环境变量
4. 更新 Supabase 的 Site URL 和 Redirect URLs 为生产域名

### 其他平台

项目可以部署到任何支持 Next.js 的平台，如 Netlify、Railway 等。

## 自定义

### 网站配置

项目使用集中配置系统，所有网站相关的配置都在 `config/site.ts` 文件中：

```typescript
// config/site.ts
export const siteConfig = {
  // 基本信息
  name: "登录模板",
  description: "一个简单的 Next.js + Supabase 登录模板",
  url: "http://localhost:3000",
  
  // 主题配置
  theme: {
    primary: "blue",
    accent: "gray",
    mode: "light", // light | dark | system
  },
  
  // OAuth 配置
  oauth: {
    providers: ["github", "google"],
    redirectPath: "/auth/callback",
  },
  
  // 路由配置
  routes: {
    login: "/login",
    dashboard: "/dashboard",
    home: "/",
  },
  
  // UI 文本配置
  ui: {
    login: {
      title: "登录到您的账户",
      subtitle: "选择以下方式登录",
      // ... 更多配置
    },
    // ... 更多配置
  },
}
```

### 快速定制

1. **修改网站信息**：编辑 `config/site.ts` 中的基本信息
2. **修改主题**：调整 `theme` 配置
3. **修改文本**：更新 `ui` 配置中的文本内容
4. **修改路由**：调整 `routes` 配置

### 添加新的 OAuth 提供商

1. 在 `config/site.ts` 的 `oauth.providers` 中添加新的提供商
2. 在 `src/lib/auth.ts` 中添加新的登录函数
3. 在 `src/components/auth/LoginButton.tsx` 中添加新的提供商选项
4. 在 Supabase 中配置新的提供商

### 修改样式

项目使用 Tailwind CSS + CSS 变量系统：

1. **主题色**：修改 `config/site.ts` 中的 `theme` 配置
2. **CSS 变量**：编辑 `src/app/globals.css` 中的 CSS 变量
3. **组件样式**：直接修改组件的 Tailwind 类名

### 添加新页面

1. 在 `src/app/` 下创建新的页面目录
2. 使用 `createClient` 获取用户信息进行权限控制
3. 页面会自动受到中间件保护
4. 使用 `siteConfig.routes` 中的路由配置

## 常见问题

### Q: 登录后重定向到错误页面
A: 检查 Supabase 中的 Redirect URLs 配置是否正确。

### Q: OAuth 登录失败
A: 检查 Client ID 和 Client Secret 是否正确，以及回调 URL 是否匹配。

### Q: 用户信息不显示
A: 确保在 Supabase 中正确配置了 OAuth 提供商的用户信息映射。

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
