import Image from "next/image";
import { cn } from "@/lib/utils/cn";

// =============================================================================
// Types
// =============================================================================

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: AvatarSize;
  fallback?: string;
  className?: string;
}

// =============================================================================
// Styles
// =============================================================================

const sizeStyles: Record<AvatarSize, { container: string; text: string }> = {
  xs: { container: "h-6 w-6", text: "text-xs" },
  sm: { container: "h-8 w-8", text: "text-sm" },
  md: { container: "h-10 w-10", text: "text-base" },
  lg: { container: "h-12 w-12", text: "text-lg" },
  xl: { container: "h-16 w-16", text: "text-xl" },
  "2xl": { container: "h-24 w-24", text: "text-3xl" },
};

// =============================================================================
// Component
// =============================================================================

export function Avatar({
  src,
  alt,
  size = "md",
  fallback,
  className,
}: AvatarProps) {
  const initials = fallback || getInitials(alt);
  const styles = sizeStyles[size];

  return (
    <div
      className={cn(
        "relative flex-shrink-0 overflow-hidden rounded-full bg-lagoon-100",
        styles.container,
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <span
          className={cn(
            "flex h-full w-full items-center justify-center font-semibold text-lagoon-600",
            styles.text
          )}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

// =============================================================================
// Helpers
// =============================================================================

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
}

// =============================================================================
// Avatar Group
// =============================================================================

export interface AvatarGroupProps {
  avatars: Array<{ src?: string; alt: string }>;
  size?: AvatarSize;
  max?: number;
  className?: string;
}

export function AvatarGroup({
  avatars,
  size = "md",
  max = 4,
  className,
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visible.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          size={size}
          className="ring-2 ring-white"
        />
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-sand-200 ring-2 ring-white",
            sizeStyles[size].container
          )}
        >
          <span className={cn("font-medium text-sand-700", sizeStyles[size].text)}>
            +{remaining}
          </span>
        </div>
      )}
    </div>
  );
}
