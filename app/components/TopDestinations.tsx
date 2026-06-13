'use client';

import { Trophy } from 'lucide-react';

interface Destination {
  rank: number;
  rankLabel: string;
  country: string;
  flag: string;
  tags: string[];
  highlight: string;
}

const destinations: Destination[] = [
  {
    rank: 1,
    rankLabel: '#1',
    country: 'Malaysia',
    flag: '🇲🇾',
    tags: ['Halal Dining', 'Prayer Facilities', 'Policy Support'],
    highlight: 'Top GMTI destination for multiple years',
  },
  {
    rank: 2,
    rankLabel: '#2',
    country: 'Türkiye',
    flag: '🇹🇷',
    tags: ['Cultural Heritage', 'Historic Mosques', 'Halal Hotels'],
    highlight: 'Joint 2nd — rich heritage + modern amenities',
  },
  {
    rank: 2,
    rankLabel: '#2',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    tags: ['Holy Sites', 'Halal Dining', 'Prayer Facilities'],
    highlight: 'Joint 2nd — world-class pilgrimage infra',
  },
  {
    rank: 2,
    rankLabel: '#2',
    country: 'UAE',
    flag: '🇦🇪',
    tags: ['Luxury Hospitality', 'Halal Dining', 'Inclusive Services'],
    highlight: 'Joint 2nd — premium inclusive experiences',
  },
  {
    rank: 5,
    rankLabel: '#5',
    country: 'Indonesia',
    flag: '🇮🇩',
    tags: ['Halal Dining', 'Cultural Diversity', 'Digital Hosp.'],
    highlight: '240M+ Muslim population, rising innovator',
  },
];

export default function TopDestinations() {
  return (
    <div className="brand-card flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[var(--color-brand-border)]">
        <div className="w-10 h-10 bg-[var(--color-tertiary)] flex items-center justify-center rounded-none shrink-0">
          <Trophy className="w-5 h-5 text-[var(--color-neutral)]" />
        </div>
        <div>
          <h2 className="headline-sm text-white uppercase tracking-tight">
            Top OIC Destinations
          </h2>
          <p className="body-sm text-[var(--color-on-surface-muted)]">
            GMTI 2025 Rankings
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {destinations.map((destination, idx) => (
          <div
            key={`${destination.country}-${idx}`}
            className="flex items-start gap-5 border border-[var(--color-brand-border)] p-5 rounded-none bg-[var(--color-neutral)] hover:border-[var(--color-primary)] transition-colors"
          >
            {/* Rank */}
            <div className={`w-12 h-12 flex items-center justify-center font-bold headline-sm shrink-0 rounded-none border ${
              destination.rank === 1
                ? 'bg-[var(--color-tertiary)] text-[var(--color-neutral)] border-[var(--color-tertiary)]'
                : 'bg-transparent text-[var(--color-on-surface)] border-[var(--color-brand-border)]'
            }`}>
              {destination.rank}
            </div>

            {/* Country Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xl leading-none">{destination.flag}</span>
                <span className="title-lg text-white truncate uppercase">
                  {destination.country}
                </span>
              </div>

              {/* Highlight */}
              <p className="body-sm text-[var(--color-on-surface-muted)] mb-3">{destination.highlight}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {destination.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label-sm text-[var(--color-on-surface)] bg-transparent border border-[var(--color-brand-border)] px-3 py-2 rounded-none uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
