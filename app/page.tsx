import { Compass, Moon } from "lucide-react";
import StatCards from "./components/StatCards";
import ArrivalsForecastChart from "./components/ArrivalsForecastChart";
import TopDestinations from "./components/TopDestinations";

export default function Home() {
  return (
    <main className="dashboard-bg min-h-screen">
      {/* ─── Header ─────────────────────────────────────────────── */}
      <header className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight leading-none">
                CrescentRating
              </h1>
              <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                Muslim Travel Intelligence
              </p>
            </div>
          </div>

          {/* Navigation / Badge */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              GMTI 2025 · 10th Edition
            </span>
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Compass className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* ─── Dashboard Content ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Page Title */}
        <div className="animate-fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Global Muslim Travel Dashboard
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-2xl">
            Key statistics and insights from the global Muslim travel market.
            Data sourced from the Mastercard-CrescentRating Global Muslim Travel
            Index (GMTI) 2024 &amp; 2025 reports.
          </p>
        </div>

        {/* ─── Stat Cards ───────────────────────────────────────── */}
        <section className="animate-fade-up-delay-1">
          <StatCards />
        </section>

        {/* ─── Chart + Destinations Grid ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Chart — takes 3 of 5 columns on large screens */}
          <section className="lg:col-span-3 animate-fade-up-delay-2">
            <ArrivalsForecastChart />
          </section>

          {/* Destinations — takes 2 of 5 columns */}
          <section className="lg:col-span-2 animate-fade-up-delay-3">
            <TopDestinations />
          </section>
        </div>

        {/* ─── Footer ───────────────────────────────────────────── */}
        <footer className="pt-6 pb-4 border-t border-white/5 animate-fade-up-delay-4">
          <div className="flex flex-col items-center gap-3">
            {/* Data source attribution */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
              <span>
                Data sourced from the{' '}
                <span className="text-gray-400 font-medium">
                  Mastercard-CrescentRating Global Muslim Travel Index (GMTI)
                </span>{' '}
                2024 &amp; 2025 Reports
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-gray-600">
              <span>For internal use only</span>
              <span className="hidden sm:inline">·</span>
              <span>
                © {new Date().getFullYear()} CrescentRating. All rights
                reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
