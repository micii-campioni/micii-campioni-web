"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import type { TimelineEvent } from "@/types/contentful";

// =============================================================================
// Types
// =============================================================================

export interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

export function Timeline({ events, className }: TimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!events || events.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-lagoon-400 via-lagoon-500 to-lagoon-600 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-8 md:space-y-12">
        {events.map((event, index) => (
          <TimelineItem
            key={`${event.year}-${index}`}
            event={event}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// Timeline Item
// =============================================================================

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function TimelineItem({ event, index, isExpanded, onToggle }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={cn(
        "relative flex items-start gap-4 md:gap-8",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Year badge */}
      <div
        className={cn(
          "relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-lagoon-500 font-heading text-sm font-bold text-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2"
        )}
      >
        {event.year}
      </div>

      {/* Content card */}
      <div
        className={cn(
          "flex-1 md:w-[calc(50%-3rem)]",
          isEven ? "md:pr-16" : "md:pl-16"
        )}
      >
        <button
          onClick={onToggle}
          className={cn(
            "w-full rounded-2xl bg-white p-6 text-left shadow-soft transition-all duration-300 hover:shadow-medium",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-500 focus-visible:ring-offset-2",
            isExpanded && "ring-2 ring-lagoon-200"
          )}
        >
          {/* Title */}
          {event.title && (
            <h3 className="mb-2 font-heading text-lg font-semibold text-sand-900">
              {event.title}
            </h3>
          )}

          {/* Description - truncated or full */}
          <p
            className={cn(
              "text-sand-600 transition-all duration-300",
              !isExpanded && "line-clamp-3"
            )}
          >
            {event.description}
          </p>

          {/* Image */}
          {event.image && isExpanded && (
            <div className="mt-4 overflow-hidden rounded-xl">
              <Image
                src={event.image.url}
                alt={event.image.title || event.title || event.year}
                width={event.image.width}
                height={event.image.height}
                className="h-auto w-full"
              />
            </div>
          )}

          {/* Expand indicator */}
          <span className="mt-3 inline-block text-sm font-medium text-lagoon-600">
            {isExpanded ? "Arată mai puțin" : "Citește mai mult"}
          </span>
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// Compact Timeline (for sidebars)
// =============================================================================

interface CompactTimelineProps {
  events: TimelineEvent[];
  limit?: number;
  className?: string;
}

export function CompactTimeline({
  events,
  limit = 5,
  className,
}: CompactTimelineProps) {
  const displayedEvents = events.slice(0, limit);

  return (
    <div className={cn("relative pl-6", className)}>
      {/* Vertical line */}
      <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-0.5 bg-lagoon-200" />

      <div className="space-y-4">
        {displayedEvents.map((event, index) => (
          <div key={`${event.year}-${index}`} className="relative">
            {/* Dot */}
            <div className="absolute -left-6 top-1.5 h-4 w-4 rounded-full border-2 border-lagoon-500 bg-white" />

            {/* Content */}
            <div>
              <span className="font-heading text-sm font-semibold text-lagoon-600">
                {event.year}
              </span>
              {event.title && (
                <h4 className="font-medium text-sand-900">{event.title}</h4>
              )}
              <p className="line-clamp-2 text-sm text-sand-600">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
