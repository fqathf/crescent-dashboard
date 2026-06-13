'use client';

import { Trophy, MapPin, UtensilsCrossed, Building, Droplets, Star, Crown } from 'lucide-react';

/**
 * GMTI 2025 OIC Destination Rankings — Mastercard-CrescentRating
 *
 * 1. Malaysia          — #1 (sustained leadership, mature halal ecosystem)
 * 2. Türkiye           — #2 tie (rich cultural heritage + modern amenities)
 * 2. Saudi Arabia      — #2 tie (holy sites + world-class infrastructure)
 * 2. UAE               — #2 tie (luxury hospitality + inclusive services)
 * 5. Indonesia         — #5 (vast diversity, 240M+ domestic Muslim pop.)
 */

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
    tags: ['Halal-Certified Dining', 'Prayer Facilities', 'Government Policy Support'],
    highlight: 'Top GMTI destination for multiple years',
  },
  {
    rank: 2,
    rankLabel: '#2',
    country: 'Türkiye',
    flag: '🇹🇷',
    tags: ['Cultural Heritage', 'Historical Mosques', 'Halal-Friendly Hotels'],
    highlight: 'Joint 2nd — rich heritage + modern amenities',
  },
  {
    rank: 2,
    rankLabel: '#2',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    tags: ['Holy Sites', 'Halal-Certified Dining', 'Prayer Facilities'],
    highlight: 'Joint 2nd — world-class pilgrimage infra',
  },
  {
    rank: 2,
    rankLabel: '#2',
    country: 'UAE',
    flag: '🇦🇪',
    tags: ['Luxury Hospitality', 'Halal-Certified Dining', 'Inclusive Services'],
    highlight: 'Joint 2nd — premium inclusive experiences',
  },
  {
    rank: 5,
    rankLabel: '#5',
    country: 'Indonesia',
    flag: '🇮🇩',
    tags: ['Halal-Certified Dining', 'Cultural Diversity', 'Digital Hospitality'],
    highlight: '240M+ Muslim population, rising innovator',
  },
];

function getTagStyle(tag: string): string {
  const t = tag.toLowerCase();
  if (t.includes('halal')) {
    return 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20';
  }
  if (t.includes('prayer') || t.includes('mosque')) {
    return 'bg-blue-500/15 text-blue-400 border border-blue-500/20';
  }
  if (t.includes('holy') || t.includes('pilgrimage')) {
    return 'bg-amber-500/15 text-amber-400 border border-amber-500/20';
  }
  if (t.includes('luxury') || t.includes('hospitality') || t.includes('hotel')) {
    return 'bg-pink-500/15 text-pink-400 border border-pink-500/20';
  }
  return 'bg-purple-500/15 text-purple-400 border border-purple-500/20';
}

function getTagIcon(tag: string) {
  const t = tag.toLowerCase();
  if (t.includes('halal') || t.includes('dining')) {
    return <UtensilsCrossed className="w-3 h-3 mr-1 inline-block" />;
  }
  if (t.includes('prayer') || t.includes('mosque')) {
    return <Building className="w-3 h-3 mr-1 inline-block" />;
  }
  if (t.includes('holy') || t.includes('heritage')) {
    return <Star className="w-3 h-3 mr-1 inline-block" />;
  }
  if (t.includes('washroom') || t.includes('inclusive')) {
    return <Droplets className="w-3 h-3 mr-1 inline-block" />;
  }
  if (t.includes('luxury') || t.includes('government') || t.includes('policy')) {
    return <Crown className="w-3 h-3 mr-1 inline-block" />;
  }
  return null;
}

export default function TopDestinations() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
          <Trophy className="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">
            Top OIC Destinations
          </h2>
          <p className="text-xs text-gray-500">
            GMTI 2025 Rankings · Mastercard-CrescentRating
          </p>
        </div>
      </div>

      {/* Tie note */}
      <p className="text-xs text-gray-600 mb-4 ml-[52px]">
        Türkiye, Saudi Arabia &amp; UAE share joint 2nd place
      </p>

      {/* Destination List */}
      <div className="space-y-1">
        {destinations.map((destination, idx) => (
          <div
            key={`${destination.country}-${idx}`}
            className="group flex items-start gap-4 hover:bg-white/5 transition-all duration-200 rounded-xl p-3 md:p-4 border-l-2 border-transparent hover:border-emerald-400 cursor-default"
          >
            {/* Rank */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
              destination.rank === 1
                ? 'bg-amber-500/25 text-amber-400'
                : 'bg-emerald-500/20 text-emerald-400'
            }`}>
              {destination.rankLabel}
            </div>

            {/* Country Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-lg leading-none">{destination.flag}</span>
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-lg font-semibold text-white truncate">
                  {destination.country}
                </span>
              </div>

              {/* Highlight */}
              <p className="text-xs text-gray-500 mb-1.5 ml-0.5">{destination.highlight}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {destination.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-0.5 rounded-full inline-flex items-center ${getTagStyle(tag)}`}
                  >
                    {getTagIcon(tag)}
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
