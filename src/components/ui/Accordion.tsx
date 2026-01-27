"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

// =============================================================================
// Context
// =============================================================================

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

// =============================================================================
// Types
// =============================================================================

export interface AccordionProps {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export interface AccordionItemProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

export interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

// =============================================================================
// Accordion Root
// =============================================================================

export function Accordion({
  children,
  allowMultiple = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={cn("divide-y divide-sand-200", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

// =============================================================================
// Accordion Item Context
// =============================================================================

interface AccordionItemContextValue {
  id: string;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("AccordionItem components must be used within an AccordionItem");
  }
  return context;
}

// =============================================================================
// Accordion Item
// =============================================================================

export function AccordionItem({ id, children, className }: AccordionItemProps) {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.has(id);

  return (
    <AccordionItemContext.Provider value={{ id, isOpen }}>
      <div className={cn("", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

// =============================================================================
// Accordion Trigger
// =============================================================================

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { toggleItem } = useAccordionContext();
  const { id, isOpen } = useAccordionItemContext();

  return (
    <button
      type="button"
      onClick={() => toggleItem(id)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium text-sand-900 transition-colors hover:text-lagoon-600",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-500 focus-visible:ring-offset-2",
        className
      )}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${id}`}
    >
      <span className="pr-4">{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 flex-shrink-0 text-sand-400 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

// =============================================================================
// Accordion Content
// =============================================================================

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { id, isOpen } = useAccordionItemContext();

  return (
    <div
      id={`accordion-content-${id}`}
      role="region"
      aria-labelledby={`accordion-trigger-${id}`}
      className={cn(
        "grid transition-all duration-200 ease-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="overflow-hidden">
        <div className={cn("pb-4 text-sand-600", className)}>{children}</div>
      </div>
    </div>
  );
}
