'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { TrendingUp } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data — Sourced from Mastercard-CrescentRating GMTI Reports         */
/*                                                                     */
/*  2019: ~160M (pre-pandemic baseline)   — GMTI 2024 Report           */
/*  2022:  110M (68% of 2019 levels)      — GMTI 2024 Report           */
/*  2023:  140M (87% of 2019 levels)      — GMTI 2024 Report           */
/*  2024:  176M (10% above 2019)          — GMTI 2025 Report           */
/*  2025:  186M (projected)               — GMTI 2025 Report           */
/*  2028:  230M (projected)               — GMTI 2025 Report           */
/*  2030:  245M (projected)               — GMTI 2025 Report           */
/* ------------------------------------------------------------------ */

interface DataPoint {
  year: string;
  arrivals: number;
  projected: boolean;
}

const data: DataPoint[] = [
  { year: '2019', arrivals: 160, projected: false },
  { year: '2022', arrivals: 110, projected: false },
  { year: '2023', arrivals: 140, projected: false },
  { year: '2024', arrivals: 176, projected: false },
  { year: '2025', arrivals: 186, projected: true },
  { year: '2028', arrivals: 230, projected: true },
  { year: '2030', arrivals: 245, projected: true },
];

/* ------------------------------------------------------------------ */
/*  Custom Tooltip                                                     */
/* ------------------------------------------------------------------ */

interface TooltipPayloadItem {
  payload: DataPoint;
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  const entry = payload[0].payload;

  return (
    <div className="bg-gray-900/90 backdrop-blur border border-white/10 rounded-xl p-4 shadow-2xl">
      <p className="text-sm text-gray-400 mb-1">Year: {label}</p>
      <p className="text-lg font-bold text-white">
        Arrivals:{' '}
        <span className={entry.projected ? 'text-amber-400' : 'text-emerald-400'}>
          {entry.arrivals}M
        </span>
      </p>
      {entry.projected && (
        <span className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-2 py-0.5">
          Projected
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Custom Bar Label                                                   */
/* ------------------------------------------------------------------ */

interface BarLabelProps {
  x?: number;
  y?: number;
  width?: number;
  value?: number;
  index?: number;
}

function BarLabel({ x = 0, y = 0, width = 0, value = 0, index = 0 }: BarLabelProps) {
  const entry = data[index];
  const isProjected = entry?.projected;

  return (
    <g>
      {/* Value label */}
      <text
        x={x + width / 2}
        y={y - (isProjected ? 24 : 10)}
        textAnchor="middle"
        className="text-xs font-semibold"
        fill={isProjected ? '#F59E0B' : '#10B981'}
      >
        {value}M
      </text>

      {/* Projected badge */}
      {isProjected && (
        <>
          <rect
            x={x + width / 2 - 30}
            y={y - 18}
            width={60}
            height={16}
            rx={8}
            fill="#F59E0B"
            fillOpacity={0.15}
            stroke="#F59E0B"
            strokeOpacity={0.3}
            strokeWidth={1}
          />
          <text
            x={x + width / 2}
            y={y - 7}
            textAnchor="middle"
            fill="#F59E0B"
            className="text-[9px] font-bold uppercase"
          >
            Projected
          </text>
        </>
      )}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Custom Bar Shape (hover animation)                                 */
/* ------------------------------------------------------------------ */

interface BarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  fill?: string;
}

function AnimatedBar({ x = 0, y = 0, width = 0, height = 0, index = 0 }: BarShapeProps) {
  const entry = data[index];
  const isProjected = entry?.projected;
  const fillId = isProjected ? 'url(#projectedPattern)' : 'url(#barGradient)';

  return (
    <g className="transition-transform duration-200 origin-bottom hover:scale-y-[1.02]">
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        ry={6}
        fill={fillId}
        className="transition-all duration-300"
        style={{ filter: 'drop-shadow(0 4px 12px rgba(16, 185, 129, 0.15))' }}
      />

      {/* Glossy top highlight */}
      <rect
        x={x + 2}
        y={y}
        width={width - 4}
        height={Math.min(height * 0.3, 30)}
        rx={5}
        ry={5}
        fill="url(#glossHighlight)"
      />
    </g>
  );
}

/* Active (hovered) bar shape */
function ActiveBar({ x = 0, y = 0, width = 0, height = 0, index = 0 }: BarShapeProps) {
  const entry = data[index];
  const isProjected = entry?.projected;
  const fillId = isProjected ? 'url(#projectedPattern)' : 'url(#barGradient)';
  const glowColor = isProjected ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)';

  return (
    <g>
      {/* Outer glow */}
      <rect
        x={x - 3}
        y={y - 3}
        width={width + 6}
        height={height + 3}
        rx={8}
        ry={8}
        fill="none"
        stroke={isProjected ? '#F59E0B' : '#10B981'}
        strokeOpacity={0.35}
        strokeWidth={2}
      />

      {/* Main bar – slightly scaled up via padding */}
      <rect
        x={x - 1}
        y={y - 2}
        width={width + 2}
        height={height + 2}
        rx={6}
        ry={6}
        fill={fillId}
        style={{ filter: `drop-shadow(0 8px 24px ${glowColor})` }}
      />

      {/* Glossy highlight */}
      <rect
        x={x + 1}
        y={y - 2}
        width={width - 2}
        height={Math.min(height * 0.3, 30)}
        rx={5}
        ry={5}
        fill="url(#glossHighlight)"
      />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function ArrivalsForecastChart() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">
            Muslim Traveler Arrivals
          </h2>
          <p className="text-xs text-gray-500">
            International arrivals (millions) · Source: GMTI 2024–2025 Reports
          </p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} barCategoryGap="15%" margin={{ top: 40, right: 10, left: -10, bottom: 10 }}>
          {/* ---- SVG Definitions ---- */}
          <defs>
            {/* Actual bar gradient: emerald → teal */}
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>

            {/* Projected bar: amber stripe pattern */}
            <pattern id="projectedPattern" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="#F59E0B" fillOpacity={0.45} />
              <line
                x1="0"
                y1="8"
                x2="8"
                y2="0"
                stroke="#F59E0B"
                strokeOpacity={0.7}
                strokeWidth={2}
              />
            </pattern>

            {/* Glossy top highlight */}
            <linearGradient id="glossHighlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />

          <XAxis
            dataKey="year"
            tick={{ fill: '#9CA3AF', fontSize: 13, fontWeight: 500 }}
            axisLine={{ stroke: '#374151' }}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            axisLine={{ stroke: '#374151' }}
            tickLine={false}
            tickFormatter={(v: number) => `${v}M`}
            domain={[0, 300]}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(255,255,255,0.03)', radius: 6 }}
          />

          <Bar
            dataKey="arrivals"
            shape={<AnimatedBar />}
            activeBar={<ActiveBar />}
            label={<BarLabel />}
            animationDuration={1200}
            animationEasing="ease-in-out"
          >
            {data.map((entry, idx) => (
              <Cell
                key={`cell-${idx}`}
                fill={entry.projected ? 'url(#projectedPattern)' : 'url(#barGradient)'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-3.5 h-3.5 rounded-sm bg-gradient-to-b from-emerald-500 to-teal-600" />
          <span className="text-sm text-gray-400 font-medium">Actual</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-3.5 h-3.5 rounded-sm bg-amber-500/50 border border-amber-500/40" />
          <span className="text-sm text-gray-400 font-medium">Projected</span>
        </div>
      </div>
    </div>
  );
}
