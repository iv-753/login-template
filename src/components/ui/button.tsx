// 导入React和工具函数
import * as React from "react"
import { cn } from "@/lib/utils"

// 按钮组件的属性类型定义
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"  // 按钮样式变体
  size?: "default" | "sm" | "lg" | "icon"  // 按钮大小
}

// 按钮组件 - 可复用的按钮UI组件
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          // 基础样式：内联弹性布局、居中、圆角、字体、过渡效果、焦点样式、禁用样式
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // 不同样式的按钮颜色
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",        // 默认样式：主色调
            "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive",  // 危险样式：红色
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",  // 边框样式：透明背景
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",  // 次要样式：灰色
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",  // 幽灵样式：无背景
            "text-primary underline-offset-4 hover:underline": variant === "link",  // 链接样式：下划线
          },
          {
            // 不同大小的按钮尺寸
            "h-10 px-4 py-2": size === "default",  // 默认大小
            "h-9 rounded-md px-3": size === "sm",  // 小号
            "h-11 rounded-md px-8": size === "lg",  // 大号
            "h-10 w-10": size === "icon",           // 图标按钮：正方形
          },
          className  // 允许传入额外的CSS类名
        )}
        ref={ref}      // 转发ref引用
        {...props}     // 转发其他所有属性
      />
    )
  }
)
Button.displayName = "Button"  // 设置组件显示名称（用于调试）

export { Button }
