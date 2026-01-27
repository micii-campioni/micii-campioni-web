"use client";

import { type ReactNode } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  return <AnimateOnScroll delay={delay}>{children}</AnimateOnScroll>;
}
