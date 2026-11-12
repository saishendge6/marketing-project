import './index.css'

const KPICard = ({ label, value, subtitle, trend = 'up', target }: { label: string; value: string | number; subtitle: string; trend?: string; target?: string }) => {
  const trendClass = trend === 'up'
    ? 'bg-green-100 text-green-800'
    : trend === 'down'
      ? 'bg-red-100 text-red-800'
      : 'bg-neutral-100 text-neutral-800'
  const trendArrow = trend === 'up' ? '▲' : trend === 'down' ? '▼' : ''

  return (
    <div className="bg-white border border-black/[0.04] rounded-2xl p-6 flex flex-col items-start shadow-sm hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]">
      <div className="w-full flex flex-col gap-2 mt-2">
        <p className="text-sm text-[#86868B] uppercase tracking-wider">{label}</p>
        <h3 className="text-2xl font-medium text-[#1D1D1F]">{typeof value === 'number' ? value.toLocaleString() : String(value)}</h3>
      </div>
      <div className="w-full flex items-center justify-between text-xs text-[#86868B]">
        <span>{subtitle || ''}</span>
        <span className={trendClass}><span className="px-2 py-0.5 rounded">{trendArrow}</span> {target || ''}</span>
      </div>
    </div>
  )
}

const ExecutiveKPIs = () => {
  const cards = [
    { label: 'Total Spend', value: 677564, subtitle: 'Apr–Sep 2024', trend: 'up', target: '+10% vs Q3' },
    { label: 'Total Revenue', value: 1814100, subtitle: 'Apr–Sep 2024', trend: 'up', target: '+15% vs Q3' },
    { label: 'Blended ROAS', value: 2.68, subtitle: 'Overall performance', trend: 'neutral', target: '>= 2.5x' },
    { label: 'Conversions', value: 721, subtitle: 'Total acquisitions', trend: 'up', target: '>= 800' },
    { label: 'Blended CPA', value: 939.76, subtitle: 'Cost per acquisition', trend: 'down', target: '<= 1000' },
    { label: 'CTR', value: 1.41, subtitle: 'Click-through rate', trend: 'up', target: '>= 1.5%' },
    { label: 'Blended CPC', value: 33.46, subtitle: 'Cost per click', trend: 'down', target: '<= 35' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {cards.map((card, i) => (
          <KPICard key={i} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-black/[0.04] rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-[#86868B] uppercase tracking-wider">Sparkline Trend</p>
          <div className="h-24 w-full rounded-2xl bg-[#F5F5F7] overflow-hidden mt-2">
            <div className="h-full w-1/4 bg-gradient-to-r from-emerald-500 to-emerald-400 animate-bounce" />
          </div>
        </div>
        <div className="bg-white border border-black/[0.04] rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-[#86868B] uppercase tracking-wider">Benchmark</p>
          <div className="h-24 w-full rounded-2xl bg-[#F5F5F7] overflow-hidden mt-2">
            <div className="h-full w-1/2 bg-amber-500 to-amber-400 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}

const PlatformComparison = () => {
  const meta = { spend: 370148, revenue: 1069700, roas: 2.89, cpc: 29.12, cpa: 827.09, ctr: 1.52 }
  const google = { spend: 307416, revenue: 744400, roas: 2.42, cpc: 38.12, cpa: 1097.42, ctr: 1.28 }
  const metaWinner = meta.roas > google.roas

  return (
    <div className="bg-white border border-black/[0.04] rounded-2xl p-6 shadow-sm">
      <p className="text-sm text-[#86868B] uppercase tracking-wider">Platform Comparison</p>
      <h2 className="text-xl font-medium text-[#1D1D1F] mb-4">Meta Ads vs Google Ads</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-2xl bg-[#E7F0FD] border-l-4 border-[#0064E0]">
          <p className="text-xl font-bold text-[#1B4332]">Meta Ads</p>
          <p className="text-2xl font-semibold text-[#1D1D1F]">{meta.roas.toFixed(2)}x ROAS</p>
          <p className="text-sm text-[#86868B]">Spend: ₹{meta.spend.toLocaleString()}</p>
          <p className="text-sm text-[#86868B]">Revenue: ₹{meta.revenue.toLocaleString()}</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#FEF3C7] border-l-4 border-[#D97706]">
          <p className="text-xl font-bold text-[#B45309]">Google Ads</p>
          <p className="text-2xl font-semibold text-[#1D1D1F]">{google.roas.toFixed(2)}x ROAS</p>
          <p className="text-sm text-[#86868B]">Spend: ₹{google.spend.toLocaleString()}</p>
          <p className="text-sm text-[#86868B]">Revenue: ₹{google.revenue.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className={`p-3 rounded-xl ${metaWinner ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
          <span className="font-medium">Meta Wins (+18.7%)</span>
        </div>
      </div>
    </div>
  )
}

const CreativeLeaderboard = () => {
  const formats = [
    { name: 'Video', roas: 2.99, cpa: 863.1, cvr: 1010.0, campaigns: 10, spendPct: 11 },
    { name: 'Carousel', roas: 2.46, cpa: 1060.3, cvr: 770.37, campaigns: 27, spendPct: 30 },
    { name: 'Stories', roas: 2.58, cpa: 942.18, cvr: 820.0, campaigns: 15, spendPct: 17 },
    { name: 'UGC', roas: 2.52, cpa: 1086.5, cvr: 450.0, campaigns: 4, spendPct: 4 },
    { name: 'Static Image', roas: 2.45, cpa: 1063.26, cvr: 797.06, campaigns: 34, spendPct: 38 },
  ]

  return (
    <div className="bg-white border border-black/[0.04] rounded-2xl p-6 shadow-sm">
      <p className="text-sm text-[#86868B] uppercase tracking-wider">Creative Format Efficiency Leaderboard</p>
      <h2 className="text-xl font-medium text-[#1D1D1F] mb-6">ROAS by Creative Format</h2>

      <div className="space-y-4">
        {formats.map((fmt, i) => {
          const roASPercentage = (fmt.roas / 3) * 100
          const keyClass = i === 0 ? 'bg-emerald-100 text-emerald-600' : i === 1 ? 'bg-amber-100 text-amber-600' : i === 2 ? 'bg-amber-100 text-amber-600' : 'bg-white text-[var(--text)]'

          return (
            <div key={i} className={`flex items-start gap-4 bg-[#F5F5F7] rounded-2xl p-5 transition-colors hover:bg-white/50`}>
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium ${keyClass}`}>
                {i + 1}
              </span>

              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#1D1D1F]">{fmt.name}</p>
                <p className="text-xs text-[#86868B]">{fmt.campaigns} campaigns • {fmt.spendPct}% of spend</p>
              </div>

              <div className="w-48 flex-shrink-0">
                <div className="h-2.5 rounded-full bg-[#E5E5E5] overflow-hidden mb-2">
                  <div className={`h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 transform transition-all duration-500`} style={{ width: `${roASPercentage}%` }} />
                </div>
                <p className="text-right text-xs font-medium text-[#86868B]">{fmt.roas.toFixed(2)}x</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const DailyTrajectory = () => {
  return (
    <div className="bg-white border border-black/[0.04] rounded-2xl p-6 shadow-sm">
      <p className="text-sm text-[#86868B] uppercase tracking-wider">Daily Trajectory & Anomaly Timeline</p>
      <h2 className="text-xl font-medium text-[#1D1D1F] mb-6">Spend vs Revenue & ROAS Trajectory</h2>

      <div className="h-64 w-full rounded-2xl bg-[#F5F5F7] overflow-hidden mt-4">
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="#E5E5E5" />
          <polyline fill="none" stroke="#1B4332" strokeWidth={2} points="10,90 30,30 50,30 70,90" />
          <line x1="10" y1="90" x2="70" y2="90" stroke="#E5E5E5" />
        </svg>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-start gap-2">
          <div className="w-3 h-3 rounded bg-[#1B4332]" />
          <span className="font-medium text-[#1D1D1F]">Spend Trend (₹)</span>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-3 h-3 rounded bg-[#E8F5E9]" />
          <span className="font-medium text-[#1D1D1F]">ROAS Line</span>
        </div>
      </div>
    </div>
  )
}

const CampaignTable = () => {
  const topWinners = [
    { name: 'VITALROOT Meta Ads Retargeting Jan31', roas: 5.63, platform: 'Meta Ads', cpa: '516', cvr: '1700.0%' },
  ]

  const underperformers = [
    { name: 'VITALROOT Google Ads Search Jan01', roas: 1.27, cpa: '1403', cvr: '450.0%' },
    { name: 'VITALROOT Google Ads Shopping Feb10', roas: 0.90, cpa: '1856', cvr: '380.0%' },
  ]

  return (
    <div className="bg-white border border-black/[0.04] rounded-2xl p-6 shadow-sm">
      <p className="text-sm text-[#86868B] uppercase tracking-wider">Campaign Diagnostic Table & Strategic Actions</p>
      <h2 className="text-xl font-medium text-[#1D1D1F] mb-6">Top Performers & Underperformers</h2>

      <div className="mb-6">
        <h3 className="font-medium text-[#1D1D1F] mb-3">Top Winning Campaigns</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {topWinners.map((camp, i) => (
            <div key={i} className="bg-[#F5F5F7] rounded-2xl p-4 flex items-start gap-3">
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium bg-emerald-100 text-emerald-600`}>
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#1D1D1F] truncate">{camp.name}</p>
                <p className="text-xs text-[#86868B]">ROAS: {camp.roas}x • CPA: {camp.cpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-[#1D1D1F] mb-3">Underperforming Campaigns</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {underperformers.map((camp, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 flex items-start gap-3 border-yellow-500/20">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium text-red-600">⚠️</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#1D1D1F] truncate">{camp.name}</p>
                <p className="text-xs text-[#86868B]">ROAS: {camp.roas}x • CPA: {camp.cpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const App = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <ExecutiveKPIs />
      <PlatformComparison />
      <CreativeLeaderboard />
      <DailyTrajectory />
      <CampaignTable />
    </div>
  )
}