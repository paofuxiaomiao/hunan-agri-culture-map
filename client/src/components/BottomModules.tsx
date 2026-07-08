import { ChevronRight } from 'lucide-react';
import { themeRoutes, timelineEvents, solarTerms, artifacts } from '@/data/points';

interface BottomModulesProps {
  onNavigate?: (nav: string) => void;
}

export default function BottomModules({ onNavigate }: BottomModulesProps) {
  return (
    <div className="w-full flex-shrink-0 relative" style={{ background: 'linear-gradient(180deg, #faf8f2 0%, #f3ead6 100%)' }}>
      {/* Top gold thread divider */}
      <div className="gold-thread" />
      
      {/* Decorative wheat/grain background overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
        <svg className="absolute right-0 bottom-0 w-[400px] h-[180px]" viewBox="0 0 400 180" fill="none">
          <path d="M350 170 C320 130, 280 110, 250 90 C220 70, 200 55, 180 45" stroke="#8B6914" strokeWidth="2" fill="none"/>
          <ellipse cx="238" cy="60" rx="4" ry="8" fill="#8B6914" opacity="0.4"/>
          <ellipse cx="265" cy="65" rx="4" ry="8" fill="#8B6914" opacity="0.4"/>
          <path d="M380 175 C360 150, 340 130, 310 110" stroke="#8B6914" strokeWidth="1.5" fill="none"/>
          <ellipse cx="310" cy="105" rx="3" ry="7" fill="#8B6914" opacity="0.3"/>
        </svg>
        <svg className="absolute left-0 bottom-0 w-[250px] h-[150px]" viewBox="0 0 250 150" fill="none">
          <path d="M20 140 C40 110, 60 95, 90 80" stroke="#8B6914" strokeWidth="1.5" fill="none"/>
          <ellipse cx="90" cy="75" rx="3" ry="7" fill="#8B6914" opacity="0.3"/>
        </svg>
      </div>

      <div className="grid grid-cols-12 gap-0 relative z-10" style={{ height: '175px' }}>
        
        {/* Theme Routes - 3 cols */}
        <div className="col-span-3 px-3 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1.5" style={{ color: '#3d2e0a' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13c3-4 7-6 10-10" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="3" cy="13" r="1.8" fill="#8B6914" fillOpacity="0.5"/>
                <circle cx="13" cy="3" r="1.8" fill="#8B6914" fillOpacity="0.5"/>
              </svg>
              主题线路
            </h3>
            <button onClick={() => onNavigate?.('routes')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              更多线路 <ChevronRight size={11} />
            </button>
          </div>
          <div className="flex gap-2">
            {themeRoutes.slice(0, 3).map((route) => (
              <div key={route.id} className="flex-1 group cursor-pointer">
                <div className="aspect-[16/10] rounded overflow-hidden bg-muted mb-1 shadow-sm border border-gold/10 group-hover:shadow-md group-hover:border-gold/25 transition-all duration-200">
                  <img src={route.coverImage} alt={route.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="text-[11px] font-bold text-foreground truncate group-hover:text-gold-dark transition-colors leading-tight">{route.name}</h4>
                <p className="text-[9px] text-muted-foreground line-clamp-2 leading-snug mt-0.5">{route.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - 3 cols */}
        <div className="col-span-3 px-3 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1.5" style={{ color: '#3d2e0a' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="#8B6914" strokeWidth="1.2" fill="none"/>
                <path d="M5 5.5h6M5 8h5M5 10.5h3" stroke="#8B6914" strokeWidth="0.9" strokeLinecap="round"/>
              </svg>
              湖湘农耕文化发展脉络
            </h3>
            <button onClick={() => onNavigate?.('timeline')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              查看完整脉络 <ChevronRight size={11} />
            </button>
          </div>
          {/* Large icons row */}
          <div className="flex items-start justify-between gap-0.5">
            {timelineEvents.map((event) => (
              <div key={event.id} className="flex flex-col items-center text-center group cursor-pointer flex-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-all duration-200 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(139,105,20,0.08) 0%, rgba(139,105,20,0.03) 100%)', border: '1.5px solid rgba(139,105,20,0.15)' }}>
                  <span className="text-lg">{event.icon}</span>
                </div>
                <span className="text-[9px] font-semibold text-foreground leading-tight block">{event.title}</span>
                <span className="text-[8px] text-muted-foreground leading-tight mt-0.5">{event.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Solar Terms - 2 cols: 2 rows x 4 cols compact */}
        <div className="col-span-2 px-2.5 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif" style={{ color: '#3d2e0a' }}>
              二十四节气
            </h3>
            <button onClick={() => onNavigate?.('solar')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              查看全部 <ChevronRight size={11} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-x-2 gap-y-2">
            {solarTerms.slice(0, 8).map((term) => (
              <div key={term.id} className="flex flex-col items-center gap-0.5 cursor-pointer group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:shadow-sm transition-all duration-200" style={{ background: `linear-gradient(135deg, ${getSeasonGradient(term.season)})`, border: '1px solid rgba(139,105,20,0.12)' }}>
                  <SolarTermIcon season={term.season} size={16} />
                </div>
                <span className="text-[9px] text-foreground/75 group-hover:text-gold-dark transition-colors">{term.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Artifacts - 4 cols: single row of larger images */}
        <div className="col-span-4 px-3 py-2.5 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif" style={{ color: '#3d2e0a' }}>
              重要文物
            </h3>
            <button onClick={() => onNavigate?.('artifacts')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              查看更多 <ChevronRight size={11} />
            </button>
          </div>
          {/* Single row of 5 larger artifact images */}
          <div className="grid grid-cols-5 gap-2">
            {artifacts.slice(0, 5).map((artifact) => (
              <div key={artifact.id} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded overflow-hidden bg-muted border border-gold/10 group-hover:border-gold/30 group-hover:shadow-md transition-all duration-200">
                  <img src={artifact.image} alt={artifact.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-[8px] text-foreground/65 mt-0.5 truncate text-center group-hover:text-gold-dark transition-colors">{artifact.name}</p>
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

function SolarTermIcon({ season, size = 16 }: { season: string; size?: number }) {
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
