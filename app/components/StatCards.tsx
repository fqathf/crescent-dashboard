'use client';

import { Users, DollarSign, Globe } from 'lucide-react';

/**
 * Real data sourced from:
 * - Mastercard-CrescentRating GMTI 2025 Report
 * - 2024 arrivals: 176M (25% increase from 2023, 10% above pre-pandemic 2019 levels)
 * - Market value projection: USD $230B by 2030
 * - Top region: Southeast Asia (Malaysia ranked #1 OIC destination in GMTI 2025)
 */
const stats = [
  {
    label: 'Muslim Travelers (2024)',
    value: '176',
    unit: 'Million',
    trend: '↑ 25% vs 2023',
    icon: Users,
    accentColor: '#10B981',
    hero: true,
  },
  {
    label: 'Market Value (2030 Proj.)',
    value: '$230',
    unit: 'Billion',
    trend: '↑ 10% above pre-pandemic',
    icon: DollarSign,
    accentColor: '#F59E0B',
    hero: false,
  },
  {
    label: 'Top Region',
    value: 'Southeast',
    unit: 'Asia',
    trend: 'Malaysia #1 GMTI 2025',
    icon: Globe,
    accentColor: '#0D9488',
    hero: false,
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:border-white/20 overflow-hidden"
            style={{ borderTopWidth: '2px', borderTopColor: stat.accentColor }}
          >
            {/* Animated background glow for hero card */}
            {stat.hero && (
              <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-emerald-500/15 blur-3xl animate-pulse pointer-events-none" />
            )}

            {/* Icon + Label Row */}
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5"
                style={{ color: stat.accentColor }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </div>

            {/* Value */}
            <div className="relative z-10">
              {stat.hero ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-none">
                    {stat.value}
                  </span>
                  <span className="text-2xl md:text-3xl font-semibold text-white/70">
                    {stat.unit}
                  </span>
                </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xl md:text-2xl font-medium text-white/60">
                    {stat.unit}
                  </span>
                </div>
              )}
            </div>

            {/* Trend Indicator */}
            <div className="mt-4 relative z-10">
              <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
