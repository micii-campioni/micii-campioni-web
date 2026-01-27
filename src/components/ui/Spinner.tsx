import { cn } from "@/lib/utils/cn";

// =============================================================================
// Types
// =============================================================================

export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerVariant = "default" | "lagoon" | "coral" | "white";

export interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  className?: string;
}

// =============================================================================
// Styles
// =============================================================================

const sizeStyles: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
};

const variantStyles: Record<SpinnerVariant, string> = {
  default: "border-sand-200 border-t-sand-600",
  lagoon: "border-lagoon-200 border-t-lagoon-600",
  coral: "border-coral-200 border-t-coral-600",
  white: "border-white/30 border-t-white",
};

// =============================================================================
// Component
// =============================================================================

export function Spinner({
  size = "md",
  variant = "lagoon",
  className,
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin rounded-full",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// =============================================================================
// Full Page Loading
// =============================================================================

export interface LoadingScreenProps {
  message?: string;
}

export function LoadingScreen({ message = "Se incarca..." }: LoadingScreenProps) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <Spinner size="lg" />
      <p className="text-sand-600">{message}</p>
    </div>
  );
}
