import { type LucideIcon, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils/cn";

// =============================================================================
// Types
// =============================================================================

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface IconProps extends Omit<LucideProps, "size"> {
  icon: LucideIcon;
  size?: IconSize;
}

// =============================================================================
// Styles
// =============================================================================

const sizeStyles: Record<IconSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

// =============================================================================
// Component
// =============================================================================

export function Icon({ icon: LucideIcon, size = "md", className, ...props }: IconProps) {
  return (
    <LucideIcon
      className={cn(sizeStyles[size], className)}
      aria-hidden="true"
      {...props}
    />
  );
}

// =============================================================================
// Icon Container (for styled icon backgrounds)
// =============================================================================

export type IconContainerVariant = "default" | "lagoon" | "coral" | "sand";

export interface IconContainerProps {
  icon: LucideIcon;
  variant?: IconContainerVariant;
  size?: IconSize;
  className?: string;
}

const containerVariantStyles: Record<IconContainerVariant, string> = {
  default: "bg-sand-100 text-sand-600",
  lagoon: "bg-lagoon-100 text-lagoon-600",
  coral: "bg-coral-100 text-coral-600",
  sand: "bg-sand-200 text-sand-700",
};

const containerSizeStyles: Record<IconSize, string> = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

export function IconContainer({
  icon,
  variant = "lagoon",
  size = "md",
  className,
}: IconContainerProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl",
        containerVariantStyles[variant],
        containerSizeStyles[size],
        className
      )}
    >
      <Icon icon={icon} size={size} />
    </div>
  );
}
