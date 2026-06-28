/**
 * @file StatCard.tsx
 * @description A reusable React component that displays a statistic with a label, value, icon, and optional trend information. It is designed to be used in dashboards or analytics pages to present key metrics in a visually appealing way. The component also supports showing raw values as tooltips on hover for more detailed information.
 * @author Son Nguyen <hoangson091104@gmail.com>
 */

import type { LucideIcon } from "lucide-react";
import { Tip } from "./Tip";
import { StatValueSkeleton } from "./Skeleton";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  accentColor?: string;
  /** Raw value shown as custom tooltip on hover */
  raw?: string;
  /** When true, render skeletons in place of value/trend so the UI never
   *  flashes "-" or "0" before real data arrives. */
  loading?: boolean;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  accentColor = "text-accent",
  raw,
  loading = false,
}: StatCardProps) {
  return (
    <div className="data-cell">
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <span className="label-caps">{label}</span>
        <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${accentColor} opacity-70`} />
      </div>
      <div className="flex items-baseline gap-2 min-w-0">
        {loading ? (
          <StatValueSkeleton />
        ) : (
          <Tip raw={raw}>
            <span className="text-xl font-display font-semibold text-ink tabular-nums truncate">
              {value}
            </span>
          </Tip>
        )}
        {!loading && trend && <span className="text-xs text-ink-faint flex-shrink-0">{trend}</span>}
      </div>
    </div>
  );
}
