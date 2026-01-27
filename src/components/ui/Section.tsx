import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Container, type ContainerSize } from "./Container";

// =============================================================================
// Types
// =============================================================================

export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";
export type SectionBackground = "white" | "sand" | "lagoon" | "gradient";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  background?: SectionBackground;
  containerSize?: ContainerSize;
  noContainer?: boolean;
  children: ReactNode;
}

// =============================================================================
// Styles
// =============================================================================

const spacingStyles: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-white",
  sand: "bg-sand-50",
  lagoon: "bg-lagoon-50",
  gradient: "bg-gradient-to-b from-white to-sand-50",
};

// =============================================================================
// Component
// =============================================================================

export function Section({
  spacing = "lg",
  background = "white",
  containerSize = "xl",
  noContainer = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacingStyles[spacing],
        backgroundStyles[background],
        className
      )}
      {...props}
    >
      {noContainer ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
}

// =============================================================================
// Section Subcomponents
// =============================================================================

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
  children,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="mb-2 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-lagoon-600">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-sand-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg text-sand-600",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
