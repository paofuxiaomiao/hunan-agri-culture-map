export default function Footer() {
  return (
    <footer className="w-full flex-shrink-0 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0e8d4 0%, #e8dcc4 100%)' }}>
      {/* Mountain silhouette decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/manus-storage/bottom-mountain-decor_f399058f.png" 
          alt="" 
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom opacity-[0.18]"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      
      {/* Red decorative top border */}
      <div className="w-full h-[3px] relative z-10" style={{ background: 'linear-gradient(90deg, transparent 5%, #C41E3A 20%, #C41E3A 80%, transparent 95%)' }} />
      
      <div className="py-3 text-center space-y-1.5 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[12px] text-earth/90">
          <span><strong className="text-earth">主办单位：</strong>湖南省文化和旅游厅</span>
          <span>湖南省农业农村厅</span>
          <span><strong className="text-earth">技术支持：</strong>湖南省地理信息院</span>
        </div>
        <div className="flex items-center justify-center gap-5 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
              <path d="M6 3v3l2 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            湘ICP备 2024012345号-1
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#C41E3A" strokeWidth="1" fill="#C41E3A" fillOpacity="0.15"/>
              <circle cx="6" cy="6" r="2" fill="#C41E3A" fillOpacity="0.6"/>
            </svg>
            湘公网安备 43011102000123号
          </span>
        </div>
      </div>
    </footer>
  );
}
