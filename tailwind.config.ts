import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      // 添加CSS兼容性支持
      screens: {
        // 确保响应式断点兼容性
        'xs': '475px',
      },
      // 添加更好的字体渲染支持
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
  // 添加CSS兼容性配置
  future: {
    hoverOnlyWhenSupported: true,
  },
  // 启用Autoprefixer支持
  corePlugins: {
    // 确保所有核心插件都启用，包括兼容性相关的
    backdropBlur: true,
    backdropBrightness: true,
    backdropContrast: true,
    backdropGrayscale: true,
    backdropHueRotate: true,
    backdropInvert: true,
    backdropOpacity: true,
    backdropSaturate: true,
    backdropSepia: true,
    // 启用更多兼容性相关的插件
    userSelect: true,
    appearance: true,
    backgroundClip: true,
    // 注意：某些插件在Tailwind中可能不存在，我们通过CSS覆盖来处理
  },
}
export default config
