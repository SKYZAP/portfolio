"use client";

import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  showDescription?: boolean;
  className?: string;
}

export function AvailabilityBadge({ showDescription = false, className }: AvailabilityBadgeProps) {
  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
        </span>
        <span className="text-sm font-medium">{personalInfo.availability.label}</span>
      </div>
      {showDescription && (
        <p className="text-sm text-muted-foreground mt-2">
          {personalInfo.availability.description}
        </p>
      )}
    </div>
  );
}
