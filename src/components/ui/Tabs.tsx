"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

// =============================================================================
// Context
// =============================================================================

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs");
  }
  return context;
}

// =============================================================================
// Types
// =============================================================================

export interface TabsProps {
  children: ReactNode;
  defaultTab: string;
  className?: string;
}

export interface TabListProps {
  children: ReactNode;
  className?: string;
}

export interface TabTriggerProps {
  id: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export interface TabContentProps {
  id: string;
  children: ReactNode;
  className?: string;
}

// =============================================================================
// Tabs Root
// =============================================================================

export function Tabs({ children, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

// =============================================================================
// Tab List
// =============================================================================

export function TabList({ children, className }: TabListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex flex-wrap gap-1 rounded-xl bg-sand-100 p-1",
        className
      )}
    >
      {children}
    </div>
  );
}

// =============================================================================
// Tab Trigger
// =============================================================================

export function TabTrigger({ id, children, className, icon }: TabTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === id;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${id}`}
      id={`tab-${id}`}
      onClick={() => setActiveTab(id)}
      className={cn(
        "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-500 focus-visible:ring-offset-2",
        isActive
          ? "bg-white text-lagoon-600 shadow-soft"
          : "text-sand-600 hover:bg-sand-50 hover:text-sand-900",
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
}

// =============================================================================
// Tab Content
// =============================================================================

export function TabContent({ id, children, className }: TabContentProps) {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      tabIndex={0}
      className={cn("mt-6 focus-visible:outline-none", className)}
    >
      {children}
    </div>
  );
}

// =============================================================================
// Vertical Tabs Variant
// =============================================================================

export interface VerticalTabsProps {
  tabs: Array<{
    id: string;
    label: string;
    icon?: ReactNode;
    content: ReactNode;
  }>;
  defaultTab?: string;
  className?: string;
}

export function VerticalTabs({ tabs, defaultTab, className }: VerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "");

  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:gap-8", className)}>
      {/* Tab list */}
      <div
        role="tablist"
        aria-orientation="vertical"
        className="flex flex-row gap-2 overflow-x-auto md:w-64 md:flex-shrink-0 md:flex-col"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-medium transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-500 focus-visible:ring-offset-2",
                isActive
                  ? "bg-lagoon-50 text-lagoon-700"
                  : "text-sand-600 hover:bg-sand-50 hover:text-sand-900"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      <div className="flex-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          if (!isActive) return null;

          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`tabpanel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              tabIndex={0}
              className="focus-visible:outline-none"
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
