import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

// =============================================================================
// Types
// =============================================================================

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: "div" | "section" | "article" | "main";
  children: ReactNode;
}

// =============================================================================
// Styles
// =============================================================================

const baseStyles = "mx-auto w-full px-4 sm:px-6 lg:px-8";

const sizeStyles: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

// =============================================================================
// Component
// =============================================================================

export function Container({
  size = "xl",
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(baseStyles, sizeStyles[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
