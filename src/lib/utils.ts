// 导入CSS类名处理工具
import { type ClassValue, clsx } from "clsx"        // clsx：合并CSS类名的工具
import { twMerge } from "tailwind-merge"           // twMerge：合并Tailwind CSS类名的工具

// CSS类名合并函数 - 用来智能合并多个CSS类名
export function cn(...inputs: ClassValue[]) {
  // 先用clsx合并所有类名，再用twMerge处理Tailwind冲突
  // 例如：cn("px-2", "px-4") 会返回 "px-4"（后面的覆盖前面的）
  return twMerge(clsx(inputs))
}
