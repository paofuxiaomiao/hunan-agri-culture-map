import { ChevronRight } from 'lucide-react';
import { themeRoutes, timelineEvents, solarTerms, artifacts } from '@/data/points';

interface BottomModulesProps {
  onNavigate?: (nav: string) => void;
}

export default function BottomModules({ onNavigate }: BottomModulesProps) {
  return (
    <div className="w-full border-t border-gold/20 flex-shrink-0" style={{ background: 'linear-gradient(180deg, #faf8f2 0%, #f5f0e6 100%)', maxHeight: '200px' }}>
      {/* Gold thread divider */}
      <div className="gold-thread" />
      <div className="grid grid-cols-12 gap-0" style={{ height: '190px' }}>
        
        {/* Theme Routes - 3 cols: horizontal cards */}
        <div className="col-span-3 px-3 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold font-serif flex items-center gap-1.5" style={{ color: '#3d2e0a' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13c3-4 7-6 10-10" stroke="#8B6914" strokeWidth="1.3" strokeLinecap="round"/><circle cx="3" cy="13" r="1.5" fill="#8B6914" fillOpacity="0.4"/><circle cx="13" cy="3" r="1.5" fill="#8B6914" fillOpacity="0.4"/></svg>
              主题线路
            </h3>
            <button onClick={() => onNavigate?.('routes')} className="text-xs text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              更多线路 <ChevronRight size={12} />
            </button>
          </div>
          {/* Horizontal 3-card layout like reference */}
          <div className="flex gap-2">
            {themeRoutes.slice(0, 3).map((route) => (
              <div key={route.id} className="flex-1 group cursor-pointer">
                <div className="aspect-[16/10] rounded overflow-hidden bg-muted mb-1 shadow-sm border border-gold/10">
                  <img src={route.coverImage} alt={route.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xs font-semibold text-foreground truncate group-hover:text-gold-dark transition-colors leading-tight">{route.name}</h4>
                <p className="text-[10px] text-muted-foreground line-clamp-2 leading-tight mt-0.5">{route.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - 3 cols: horizontal icon row */}
        <div className="col-span-3 px-3 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold font-serif flex items-center gap-1.5" style={{ color: '#3d2e0a' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="1.5" stroke="#8B6914" strokeWidth="1.2" fill="none"/><path d="M5 5.5h6M5 8h5M5 10.5h3" stroke="#8B6914" strokeWidth="0.9" strokeLinecap="round"/></svg>
              湖湘农耕文化发展脉络
            </h3>
            <button onClick={() => onNavigate?.('timeline')} className="text-xs text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              查看完整脉络 <ChevronRight size={12} />
            </button>
          </div>
          {/* Horizontal timeline icons like reference */}
          <div className="flex items-start justify-between gap-1">
            {timelineEvents.map((event) => (
              <div key={event.id} className="flex flex-col items-center text-center group cursor-pointer flex-1">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/12 to-gold/5 border border-gold/20 flex items-center justify-center mb-1 group-hover:border-gold/40 group-hover:shadow-sm transition-all">
                  <span className="text-sm">{event.icon}</span>
                </div>
                <span className="text-[10px] font-medium text-foreground leading-tight block">{event.title}</span>
                <span className="text-[9px] text-muted-foreground leading-tight">{event.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Solar Terms - 3 cols: 2-row grid */}
        <div className="col-span-2 px-3 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold font-serif flex items-center gap-1.5" style={{ color: '#3d2e0a' }}>
              二十四节气
            </h3>
            <button onClick={() => onNavigate?.('solar')} className="text-xs text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              查看全部 <ChevronRight size={12} />
            </button>
          </div>
          {/* 2 rows x 4 cols grid */}
          <div className="grid grid-cols-4 gap-x-2 gap-y-2">
            {solarTerms.slice(0, 8).map((term) => (
              <div key={term.id} className="flex flex-col items-center gap-0.5 cursor-pointer group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:shadow-sm transition-all" style={{ background: `linear-gradient(135deg, ${getSeasonGradient(term.season)})`, border: '1px solid rgba(139,105,20,0.12)' }}>
                  <SolarTermIcon season={term.season} size={16} />
                </div>
                <span className="text-[10px] text-foreground/75 group-hover:text-gold-dark transition-colors">{term.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Artifacts - 4 cols: 2-row image grid */}
        <div className="col-span-4 px-3 py-2.5 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold font-serif flex items-center gap-1.5" style={{ color: '#3d2e0a' }}>
              重要文物
            </h3>
            <button onClick={() => onNavigate?.('artifacts')} className="text-xs text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              查看更多 <ChevronRight size={12} />
            </button>
          </div>
          {/* 2 rows x 4 cols image grid like reference */}
          <div className="grid grid-cols-4 gap-1.5">
            {artifacts.slice(0, 8).map((artifact) => (
              <div key={artifact.id} className="group cursor-pointer">
                <div className="aspect-square rounded overflow-hidden bg-muted border border-gold/10 group-hover:border-gold/30 group-hover:shadow-md transition-all duration-200">
                  <img src={artifact.image} alt={artifact.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-[9px] text-foreground/65 mt-0.5 truncate text-center group-hover:text-gold-dark transition-colors">{artifact.name}</p>
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

function SolarTermIcon({ season, size = 18 }: { season: string; size?: number }) {
  const colors: Record<string, string> = {
    spring: '#4A7C59',
    summer: '#8B6914',
    autumn: '#B8860B',
    winter: '#6B7B8D',
  };
  const color = colors[season] || '#8B6914';
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="4" fill={color} opacity="0.25" />
      <circle cx="11" cy="11" r="2" fill={color} opacity="0.5" />
      <path d="M11 3v3M11 16v3M3 11h3M16 11h3M5.5 5.5l2 2M14.5 14.5l2 2M5.5 16.5l2-2M14.5 7.5l2-2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
