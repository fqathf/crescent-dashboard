'use client';

import { Users, DollarSign, Globe } from 'lucide-react';

const stats = [
  {
    label: 'Muslim Travelers (2024)',
    value: '176',
    unit: 'Million',
    trend: '↑ 25% vs 2023',
    icon: Users,
    hero: true,
  },
  {
    label: 'Market Value (2030 Proj.)',
    value: '$230',
    unit: 'Billion',
    trend: '↑ 10% above pre-pandemic',
    icon: DollarSign,
    hero: false,
  },
  {
    label: 'Top Region',
    value: 'Southeast',
    unit: 'Asia',
    trend: 'Malaysia #1 GMTI 2025',
    icon: Globe,
    hero: false,
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="brand-card relative"
          >
            {/* Top border accent line if hero */}
            {stat.hero && (
               <div className="absolute top-0 left-0 right-0 h-[3px] bg-tertiary rounded-t-md" />
            )}

            {/* Icon + Label Row */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-[#2A2A6E] rounded-none">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="label-md text-[var(--color-on-surface-muted)]">
                {stat.label}
              </span>
            </div>

            {/* Value */}
            <div className="mb-4">
              {stat.hero ? (
                <div className="flex items-baseline gap-2">
                  <span className="headline-lg text-tertiary">
                    {stat.value}
                  </span>
                  <span className="headline-sm text-[var(--color-on-surface-muted)]">
                    {stat.unit}
                  </span>
                </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="headline-md text-white">
                    {stat.value}
                  </span>
                  <span className="title-lg text-[var(--color-on-surface-muted)]">
                    {stat.unit}
                  </span>
                </div>
              )}
            </div>

            {/* Trend Indicator */}
            <div>
              <span className="label-sm text-white border border-[var(--color-border-strong)] px-2.5 py-1 rounded-none inline-flex items-center">
                {stat.trend}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
