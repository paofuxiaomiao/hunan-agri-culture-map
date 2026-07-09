export default function Footer() {
  return (
    <footer className="w-full flex-shrink-0 relative overflow-hidden" style={{ background: '#2b4639' }}>
      {/* White Hunan traditional pattern overlay (回纹/云纹/如意纹) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.8' opacity='0.9'%3E%3Crect x='10' y='10' width='20' height='20' rx='0'/%3E%3Crect x='14' y='14' width='12' height='12' rx='0'/%3E%3Cpath d='M10 10h20v4h-16v12h-4z'/%3E%3Crect x='50' y='10' width='20' height='20' rx='0'/%3E%3Crect x='54' y='14' width='12' height='12' rx='0'/%3E%3Cpath d='M50 10h20v4h-16v12h-4z'/%3E%3Crect x='10' y='50' width='20' height='20' rx='0'/%3E%3Crect x='14' y='54' width='12' height='12' rx='0'/%3E%3Cpath d='M10 50h20v4h-16v12h-4z'/%3E%3Crect x='50' y='50' width='20' height='20' rx='0'/%3E%3Crect x='54' y='54' width='12' height='12' rx='0'/%3E%3Cpath d='M50 50h20v4h-16v12h-4z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3Cpath d='M34 40a6 6 0 0 1 6-6M46 40a6 6 0 0 1-6 6'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }} />
      
      <div className="py-3 text-center space-y-1 relative z-10">
        {/* Mountain/landscape icon */}
        <div className="flex items-center justify-center mb-1">
          <svg width="40" height="22" viewBox="0 0 40 22" fill="none" className="opacity-60">
            <path d="M0 22 L10 8 L15 14 L20 4 L28 16 L33 10 L40 22 Z" fill="#5a8a7a" opacity="0.5"/>
            <path d="M5 22 L15 10 L20 15 L27 6 L35 18 L40 22 Z" fill="#4a7a6a" opacity="0.4"/>
            <ellipse cx="20" cy="3" rx="6" ry="2" fill="#7aaa9a" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[12px] text-white/80">
          <span><strong className="text-white/95">主办单位：</strong>湖南省自然资源厅</span>
          <span><strong className="text-white/95">承办单位：</strong>湖南省第三测绘院</span>
        </div>
        <div className="flex items-center justify-center gap-5 text-[11px] text-white/55">
          <span>甲测资字43100424</span>
          <span>湘ICP备2021016353号-3</span>
        </div>
      </div>
    </footer>
  );
}
