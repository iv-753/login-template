# 📦 依赖包详细说明

这个文件详细解释了项目中每个依赖包的作用，帮助新手理解项目的技术栈。

## 🏗️ 项目基本信息

- **name**: "login-template" - 项目名称
- **version**: "0.1.0" - 项目版本号
- **private**: true - 私有项目，不会发布到npm

## 🚀 运行命令 (scripts)

| 命令 | 作用 | 说明 |
|------|------|------|
| `npm run dev` | 启动开发服务器 | 在本地开发时使用，支持热重载 |
| `npm run build` | 构建生产版本 | 将代码编译成生产环境可用的版本 |
| `npm run start` | 启动生产服务器 | 运行构建后的生产版本 |
| `npm run lint` | 检查代码错误 | 使用ESLint检查代码质量和错误 |

## 📚 生产环境依赖 (dependencies)

这些包在用户访问网站时会被使用：

### 核心框架
- **next**: "15.5.2" - Next.js框架，让网站能运行的核心
- **react**: "^18.3.1" - React库，制作网页界面的基础
- **react-dom**: "^18.3.1" - React在浏览器中运行的支持

### 数据库和认证
- **@supabase/supabase-js**: "^2.45.4" - Supabase数据库和登录功能
- **@supabase/ssr**: "^0.5.1" - Supabase服务端渲染支持（让登录在服务器上也能工作）

### UI和样式
- **lucide-react**: "^0.460.0" - 图标库（那些小图标）
- **clsx**: "^2.1.1" - 合并CSS类名的工具
- **tailwind-merge**: "^2.5.4" - 合并Tailwind样式的工具

### 数据验证
- **zod**: "^4.1.5" - 数据验证工具（检查数据是否正确）

## 🛠️ 开发环境依赖 (devDependencies)

这些包只有程序员写代码时需要，用户访问网站时不需要：

### TypeScript支持
- **typescript**: "^5.6.3" - TypeScript语言（让JavaScript更安全）
- **@types/node**: "^22.10.2" - Node.js的类型定义（让TypeScript知道Node.js的用法）
- **@types/react**: "^18.3.17" - React的类型定义
- **@types/react-dom**: "^18.3.5" - React DOM的类型定义

### 代码质量
- **eslint**: "^9.17.0" - 代码检查工具（找代码错误）
- **eslint-config-next**: "15.5.2" - Next.js的代码检查规则

### CSS处理
- **tailwindcss**: "^3.4.17" - Tailwind CSS框架（快速制作漂亮界面）
- **postcss**: "^8.4.49" - CSS处理工具
- **autoprefixer**: "^10.4.20" - 自动添加浏览器兼容性前缀

## 🎯 技术栈总结

这个项目使用了现代Web开发的最佳实践：

1. **前端框架**: Next.js + React
2. **数据库**: Supabase (PostgreSQL)
3. **认证**: Supabase Auth
4. **样式**: Tailwind CSS
5. **语言**: TypeScript
6. **图标**: Lucide React

## 💡 新手建议

1. **先理解核心**: 重点理解 Next.js、React、Supabase 这三个核心
2. **逐步学习**: 不要一次性学完所有包，按需学习
3. **实践为主**: 通过修改代码来理解每个包的作用
4. **查阅文档**: 遇到问题时查阅官方文档

## 🔗 相关链接

- [Next.js 官方文档](https://nextjs.org/docs)
- [React 官方文档](https://react.dev/)
- [Supabase 官方文档](https://supabase.com/docs)
- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
