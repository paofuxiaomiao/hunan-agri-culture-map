import { ChevronRight } from 'lucide-react';
import { themeRoutes, timelineEvents, solarTerms, artifacts } from '@/data/points';

interface BottomModulesProps {
  onNavigate?: (nav: string) => void;
}

export default function BottomModules({ onNavigate }: BottomModulesProps) {
  return (
    <div className="w-full border-t border-gold/15 flex-shrink-0" style={{ background: 'linear-gradient(180deg, #faf8f2 0%, #f6f1e8 100%)' }}>
      {/* Gold thread divider */}
      <div className="gold-thread" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Theme Routes - 3 cols */}
        <div className="lg:col-span-3 px-3 py-2.5 border-r border-gold/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1.5 tracking-wide" style={{ color: '#3d2e0a' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11c2-3 6-5 8-8" stroke="#8B6914" strokeWidth="1.2" strokeLinecap="round"/><circle cx="3" cy="11" r="1.2" fill="#8B6914" fillOpacity="0.4"/><circle cx="11" cy="3" r="1.2" fill="#8B6914" fillOpacity="0.4"/></svg>
              主题线路
            </h3>
            <button onClick={() => onNavigate?.('routes')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors font-serif">
              更多线路 <ChevronRight size={11} />
            </button>
          </div>
          <div className="space-y-1.5">
            {themeRoutes.map((route) => (
              <div key={route.id} className="group cursor-pointer">
                <div className="flex gap-2">
                  <div className="w-[64px] h-[44px] rounded overflow-hidden flex-shrink-0 bg-muted shadow-sm">
                    <img src={route.coverImage} alt={route.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[11px] font-semibold text-foreground truncate group-hover:text-gold-dark transition-colors">{route.name}</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">{route.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - 3 cols */}
        <div className="lg:col-span-3 px-3 py-2.5 border-r border-gold/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1.5 tracking-wide" style={{ color: '#3d2e0a' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="2" width="10" height="10" rx="1" stroke="#8B6914" strokeWidth="1.1" fill="none"/><path d="M5 5h4M5 7h3M5 9h2" stroke="#8B6914" strokeWidth="0.9" strokeLinecap="round"/></svg>
              湖湘农耕文化发展脉络
            </h3>
            <button onClick={() => onNavigate?.('timeline')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors font-serif">
              查看完整脉络 <ChevronRight size={11} />
            </button>
          </div>
          <div className="space-y-1">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="flex items-start gap-2 group cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/25 flex items-center justify-center text-[10px] group-hover:border-gold/50 group-hover:shadow-sm transition-all">
                    {event.icon}
                  </div>
                  {index < timelineEvents.length - 1 && (
                    <div className="w-px h-2 bg-gold/20 mt-0.5" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-[11px] font-medium text-foreground group-hover:text-gold-dark transition-colors leading-tight">{event.title}</h4>
                  <p className="text-[11px] text-muted-foreground">{event.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solar Terms - 3 cols */}
        <div className="lg:col-span-3 px-3 py-2.5 border-r border-gold/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1.5 tracking-wide" style={{ color: '#3d2e0a' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 12V6M4 8c0-3 1.5-5 3-6 1.5 1 3 3 3 6-1.5 1-4.5 1-6 0z" stroke="#4A7C59" strokeWidth="1.1" fill="#4A7C59" fillOpacity="0.1"/></svg>
              二十四节气
            </h3>
            <button onClick={() => onNavigate?.('solar')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors font-serif">
              查看全部 <ChevronRight size={11} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-x-2 gap-y-2">
            {solarTerms.slice(0, 8).map((term) => (
              <div key={term.id} className="flex flex-col items-center gap-1 cursor-pointer group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:shadow-md transition-all duration-200" style={{ background: `linear-gradient(135deg, ${getSeasonGradient(term.season)})`, border: '1px solid rgba(139,105,20,0.15)' }}>
                  <SolarTermIcon season={term.season} />
                </div>
                <span className="text-[11px] text-foreground/80 group-hover:text-gold-dark transition-colors font-medium">{term.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Artifacts - 3 cols */}
        <div className="lg:col-span-3 px-3 py-2.5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1.5 tracking-wide" style={{ color: '#3d2e0a' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 12h6M5 12V8c0-1 .5-2 2-2s2 1 2 2v4M4 4c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5c0 1-1 1.5-3 1.5S4 5 4 4z" stroke="#8B6914" strokeWidth="1" fill="none"/></svg>
              重要文物
            </h3>
            <button onClick={() => onNavigate?.('artifacts')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors font-serif">
              查看更多 <ChevronRight size={11} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {artifacts.slice(0, 6).map((artifact) => (
              <div key={artifact.id} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded overflow-hidden bg-muted border border-gold/10 group-hover:border-gold/30 group-hover:shadow-md transition-all duration-200">
                  <img src={artifact.image} alt={artifact.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-[10px] text-foreground/70 mt-0.5 truncate group-hover:text-gold-dark transition-colors">{artifact.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getSeasonGradient(season: string): string {
  const gradients: Record<string, string> = {
    spring: 'rgba(74,124,89,0.12) 0%, rgba(74,124,89,0.05) 100%',
    summer: 'rgba(139,105,20,0.12) 0%, rgba(139,105,20,0.05) 100%',
    autumn: 'rgba(184,134,11,0.12) 0%, rgba(184,134,11,0.05) 100%',
    winter: 'rgba(107,123,141,0.12) 0%, rgba(107,123,141,0.05) 100%',
  };
  return gradients[season] || gradients.spring;
}

function SolarTermIcon({ season }: { season: string }) {
  const colors: Record<string, string> = {
    spring: '#4A7C59',
    summer: '#8B6914',
    autumn: '#B8860B',
    winter: '#6B7B8D',
  };
  const color = colors[season] || '#8B6914';
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="4" fill={color} opacity="0.25" />
      <circle cx="11" cy="11" r="2" fill={color} opacity="0.5" />
      <path d="M11 3v3M11 16v3M3 11h3M16 11h3M5.5 5.5l2 2M14.5 14.5l2 2M5.5 16.5l2-2M14.5 7.5l2-2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
