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

/* ------------------------------------------------------------------ */
/*  Data — Sourced from Mastercard-CrescentRating GMTI Reports         */
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
    <div className="bg-[var(--color-surface)] border border-[var(--color-brand-border)] p-4 rounded-none">
      <p className="label-sm text-[var(--color-on-surface-muted)] mb-2">YEAR {label}</p>
      <p className="title-lg text-white">
        ARRIVALS:{' '}
        <span className={entry.projected ? 'text-[var(--color-tertiary)]' : 'text-white'}>
          {entry.arrivals}M
        </span>
      </p>
      {entry.projected && (
        <span className="mt-3 inline-block label-sm text-[var(--color-neutral)] bg-[var(--color-tertiary)] px-2 py-1">
          PROJECTED
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
        y={y - (isProjected ? 26 : 10)}
        textAnchor="middle"
        className="label-md"
        fill={isProjected ? 'var(--color-tertiary)' : 'var(--color-on-surface)'}
      >
        {value}M
      </text>

      {/* Projected badge */}
      {isProjected && (
        <>
          <rect
            x={x + width / 2 - 32}
            y={y - 18}
            width={64}
            height={18}
            fill="var(--color-tertiary)"
            fillOpacity={0.1}
            stroke="var(--color-tertiary)"
            strokeOpacity={0.5}
            strokeWidth={1}
          />
          <text
            x={x + width / 2}
            y={y - 5}
            textAnchor="middle"
            fill="var(--color-tertiary)"
            className="label-sm"
          >
            PROJ.
          </text>
        </>
      )}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function ArrivalsForecastChart() {
  return (
    <div className="brand-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-brand-border)]">
        <div>
          <h2 className="headline-sm text-white mb-2 uppercase">
            Traveler Arrivals
          </h2>
          <p className="body-sm text-[var(--color-on-surface-muted)]">
            International arrivals (millions) · GMTI 2024–2025
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={data} barCategoryGap="20%" margin={{ top: 40, right: 10, left: 10, bottom: 10 }}>
            {/* ---- SVG Definitions ---- */}
            <defs>
              {/* Projected bar: amber stripe pattern */}
              <pattern id="projectedPattern" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="8" height="8" fill="#1B1B1B" />
                <line
                  x1="0"
                  y1="8"
                  x2="8"
                  y2="0"
                  stroke="#FFC300"
                  strokeOpacity={0.8}
                  strokeWidth={2}
                />
              </pattern>
            </defs>

            <CartesianGrid strokeDasharray="0" stroke="var(--color-brand-border)" vertical={false} />

            <XAxis
              dataKey="year"
              tick={{ fill: 'var(--color-on-surface-muted)', fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-sans)' }}
              axisLine={{ stroke: 'var(--color-brand-border)', strokeWidth: 2 }}
              tickLine={false}
              dy={10}
            />

            <YAxis
              tick={{ fill: 'var(--color-on-surface-muted)', fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-sans)' }}
              axisLine={{ stroke: 'var(--color-brand-border)', strokeWidth: 2 }}
              tickLine={false}
              tickFormatter={(v: number) => `${v}M`}
              domain={[0, 300]}
              width={45}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255,255,255,0.03)' }}
            />

            <Bar
              dataKey="arrivals"
              label={<BarLabel />}
              animationDuration={1200}
              animationEasing="ease-in-out"
              radius={[0, 0, 0, 0]} /* Square corners */
            >
              {data.map((entry, idx) => (
                <Cell
                  key={`cell-${idx}`}
                  fill={entry.projected ? 'url(#projectedPattern)' : 'var(--color-primary)'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-start gap-8 mt-6 pt-6 border-t border-[var(--color-brand-border)]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-4 h-4 bg-[var(--color-primary)]" />
          <span className="label-md text-[var(--color-on-surface-muted)]">ACTUAL</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-block w-4 h-4" style={{ background: 'url(#projectedPattern)' }} />
          <span className="label-md text-[var(--color-on-surface-muted)]">PROJECTED</span>
        </div>
      </div>
    </div>
  );
}
