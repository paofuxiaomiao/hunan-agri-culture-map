export default function Footer() {
  return (
    <footer className="w-full py-4 border-t-2 border-red/20" style={{ background: 'linear-gradient(180deg, #faf7f2 0%, #f5f0e8 100%)' }}>
      <div className="text-center space-y-1.5">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-earth/80">
          <span><strong className="text-earth">主办单位：</strong>湖南省文化和旅游厅</span>
          <span>湖南省农业农村厅</span>
          <span><strong className="text-earth">技术支持：</strong>湖南省地理信息院</span>
        </div>
        <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
              <path d="M6 3v3l2 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            湘ICP备 2024012345号-1
          </span>
          <span className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#C41E3A" strokeWidth="1" fill="#C41E3A" fillOpacity="0.1"/>
              <circle cx="6" cy="6" r="2" fill="#C41E3A" fillOpacity="0.5"/>
            </svg>
            湘公网安备 43011102000123号
          </span>
        </div>
      </div>
    </footer>
  );
}
