import { ChevronRight } from 'lucide-react';
import { themeRoutes, timelineEvents, solarTerms, artifacts } from '@/data/points';

interface BottomModulesProps {
  onNavigate?: (nav: string) => void;
}

// AI-generated refined timeline icons
const timelineIcons: Record<string, string> = {
  't001': '/manus-storage/timeline-icon-1-prehistoric_3379bb57.png',
  't002': '/manus-storage/timeline-icon-2-neolithic_6e01d013.png',
  't003': '/manus-storage/timeline-icon-3-bronze-age_c97c1161.png',
  't004': '/manus-storage/timeline-icon-4-imperial_bdb2a1eb.png',
  't005': '/manus-storage/timeline-icon-5-modern_d7285c54.png',
  't006': '/manus-storage/timeline-icon-6-hybrid-rice_0e565d92.png',
};

// AI-generated refined solar term icons
const solarTermIcons: Record<string, string> = {
  'st01': '/manus-storage/solar-icon-lichun_4379b7d8.png',
  'st02': '/manus-storage/solar-icon-yushui_5b2b120f.png',
  'st03': '/manus-storage/solar-icon-jingzhe_6b23818f.png',
  'st04': '/manus-storage/solar-icon-chunfen_a20b1b6b.png',
  'st05': '/manus-storage/solar-icon-qingming_d73f8de0.png',
  'st06': '/manus-storage/solar-icon-guyu_c87e62a3.png',
  'st07': '/manus-storage/solar-icon-lixia_dc7035cc.png',
  'st08': '/manus-storage/solar-icon-xiaoman_34e4cc05.png',
};

// Rice icon for headlines
const RICE_ICON = '/manus-storage/rice-icon-headline_5ef18957.png';

export default function BottomModules({ onNavigate }: BottomModulesProps) {
  return (
    <div className="w-full flex-shrink-0 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #faf8f2 0%, #f0e8d4 100%)' }}>
      {/* Top gold thread divider */}
      <div className="gold-thread" />
      
      {/* Mountain/field decorative background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/manus-storage/bottom-field-decor_de0c4d2f.png" 
          alt="" 
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom opacity-[0.12]"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="grid grid-cols-12 gap-0 relative z-10" style={{ height: '175px' }}>
        
        {/* Theme Routes - 3 cols */}
        <div className="col-span-3 px-3 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1" style={{ color: '#3d2e0a' }}>
              <img src={RICE_ICON} alt="" className="w-4 h-4 object-contain opacity-80" />
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

        {/* Timeline - 3 cols: AI-generated refined icons */}
        <div className="col-span-3 px-3 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1" style={{ color: '#3d2e0a' }}>
              <img src={RICE_ICON} alt="" className="w-4 h-4 object-contain opacity-80" />
              湖湘农耕文化发展脉络
            </h3>
            <button onClick={() => onNavigate?.('timeline')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              查看完整脉络 <ChevronRight size={11} />
            </button>
          </div>
          {/* AI-generated refined icons */}
          <div className="flex items-start justify-between gap-0.5">
            {timelineEvents.map((event) => (
              <div key={event.id} className="flex flex-col items-center text-center group cursor-pointer flex-1">
                <div className="w-11 h-11 rounded-full overflow-hidden mb-1 transition-all duration-200 group-hover:scale-110 group-hover:shadow-md border border-gold/15">
                  <img 
                    src={timelineIcons[event.id] || ''} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[9px] font-semibold text-foreground leading-tight block">{event.title}</span>
                <span className="text-[8px] text-muted-foreground leading-tight mt-0.5">{event.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Solar Terms - 2 cols: AI-generated refined icons */}
        <div className="col-span-2 px-2.5 py-2.5 border-r border-gold/15 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1" style={{ color: '#3d2e0a' }}>
              <img src={RICE_ICON} alt="" className="w-4 h-4 object-contain opacity-80" />
              二十四节气
            </h3>
            <button onClick={() => onNavigate?.('solar')} className="text-[11px] text-[#8a7a5a] hover:text-gold-dark flex items-center gap-0.5 transition-colors">
              查看全部 <ChevronRight size={11} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-x-2 gap-y-2">
            {solarTerms.slice(0, 8).map((term) => (
              <div key={term.id} className="flex flex-col items-center gap-0.5 cursor-pointer group">
                <div className="w-9 h-9 rounded-full overflow-hidden group-hover:shadow-md transition-all duration-200 border border-gold/12">
                  <img 
                    src={solarTermIcons[term.id] || ''} 
                    alt={term.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[9px] text-foreground/75 group-hover:text-gold-dark transition-colors">{term.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Artifacts - 4 cols: single row of larger images */}
        <div className="col-span-4 px-3 py-2.5 overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold font-serif flex items-center gap-1" style={{ color: '#3d2e0a' }}>
              <img src={RICE_ICON} alt="" className="w-4 h-4 object-contain opacity-80" />
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
