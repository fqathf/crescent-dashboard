import { Compass, Moon } from "lucide-react";
import StatCards from "./components/StatCards";
import ArrivalsForecastChart from "./components/ArrivalsForecastChart";
import TopDestinations from "./components/TopDestinations";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-neutral)]">
      {/* ─── Hero Section with Primary Blue Background ────────────────────────────── */}
      <div className="bg-[var(--color-primary)] text-[var(--color-on-surface)] border-b border-[var(--color-brand-border)]">
        {/* Header */}
        <header className="border-b border-[rgba(255,255,255,0.15)]">
          <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[var(--color-surface-2)] flex items-center justify-center rounded-none">
                <Moon className="w-5 h-5 text-[var(--color-on-surface)]" />
              </div>
              <div>
                <h1 className="title-lg tracking-tight uppercase">
                  CrescentRating
                </h1>
                <p className="label-sm text-[var(--color-on-surface-muted)] mt-1">
                  Muslim Travel Intelligence
                </p>
              </div>
            </div>

            {/* Navigation / Badge */}
            <div className="flex items-center gap-6">
              <span className="hidden sm:inline-flex items-center gap-2 label-md text-[var(--color-on-surface)] bg-transparent border border-[var(--color-on-surface)] px-4 py-2">
                <span className="w-2 h-2 bg-[var(--color-tertiary)]" />
                GMTI 2025 · 10th Edition
              </span>
              <div className="w-10 h-10 border border-[var(--color-on-surface)] flex items-center justify-center rounded-none hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer">
                <Compass className="w-5 h-5 text-[var(--color-on-surface)]" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="max-w-[1400px] mx-auto px-8 py-16 animate-fade-up">
          <div className="max-w-3xl border-l-4 border-[var(--color-tertiary)] pl-6">
            <h2 className="headline-display text-[var(--color-on-surface)] mb-6">
              Global Muslim Travel Dashboard
            </h2>
            <p className="body-lg text-[var(--color-on-surface-muted)]">
              Key statistics and insights from the global Muslim travel market.
              Data sourced from the Mastercard-CrescentRating Global Muslim Travel
              Index (GMTI) 2024 &amp; 2025 reports.
            </p>
          </div>
        </div>
      </div>

      {/* ─── Dashboard Content ──────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-8 py-12 space-y-12">
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
        <footer className="pt-8 pb-8 border-t border-[var(--color-brand-border)] animate-fade-up-delay-4 mt-8">
          <div className="flex flex-col items-start gap-4">
            {/* Data source attribution */}
            <div className="flex items-center gap-3 body-sm text-[var(--color-on-surface-muted)]">
              <span className="w-2 h-2 bg-[var(--color-tertiary)]" />
              <span>
                Data sourced from the{' '}
                <span className="font-bold text-[var(--color-on-surface)]">
                  Mastercard-CrescentRating Global Muslim Travel Index (GMTI)
                </span>{' '}
                2024 &amp; 2025 Reports
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 caption-text text-[#888888] uppercase tracking-wider">
              <span>For internal use only</span>
              <span className="hidden sm:inline">|</span>
              <span>
                © {new Date().getFullYear()} CrescentRating. All rights reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
