module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // 配置autoprefixer自动添加浏览器前缀
      flexbox: 'no-2009',
      grid: false, // 禁用grid自动布局，避免警告
      // 支持的浏览器版本 - 更全面的支持
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead',
        'iOS >= 7',
        'Android >= 4.4',
        'Chrome >= 54',
        'ChromeAndroid >= 54',
        'Firefox >= 52',
        'Safari >= 13',
        'Edge >= 79',
        'Opera >= 41',
        'Samsung >= 6',
        'UCAndroid >= 12'
      ],
      // 添加更多CSS属性支持
      cascade: true,
      add: true,
      remove: true,
      supports: true,
      flexbox: 'no-2009',
      // 确保处理所有需要的属性
      ignoreUnknownVersions: true
    }
  },
}
