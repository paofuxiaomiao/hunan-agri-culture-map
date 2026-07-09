export default function Footer() {
  return (
    <footer className="w-full flex-shrink-0 footer-pattern-shell relative overflow-hidden">
      <div className="footer-xiangxi-pattern" />

      <div className="py-2.5 text-center space-y-1 relative z-10">
        <div className="footer-crest" aria-hidden="true" />
        
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[12px] text-[#2e5847]/90">
          <span><strong className="text-[#213f34]">主办单位：</strong>湖南省自然资源厅</span>
          <span><strong className="text-[#213f34]">承办单位：</strong>湖南省第三测绘院</span>
        </div>
        <div className="flex items-center justify-center gap-5 text-[11px] text-[#705a1a]/70">
          <span>甲测资字43100424</span>
          <span>湘ICP备2021016353号-3</span>
        </div>
      </div>
    </footer>
  );
}
