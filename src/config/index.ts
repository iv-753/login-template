/**
 * 配置系统入口文件
 * 统一导出所有配置相关的模块
 */

export { siteConfig } from './site'
export type { SiteConfig, ThemeMode, OAuthProvider } from './site'
export type { 
  Language, 
  ThemeConfig, 
  OAuthConfig, 
  RoutesConfig, 
  MetadataConfig, 
  UIConfig,
  EnvConfig 
} from './types'
export { 
  validateEnvConfig, 
  validateSiteConfig, 
  mergeEnvConfig, 
  checkRequiredEnvVars, 
  checkDevConfig 
} from './validate'

// 导入 siteConfig 用于默认导出
import { siteConfig } from './site'

// 默认导出网站配置
export default siteConfig
