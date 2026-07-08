import { X, ChevronLeft, ChevronRight, FileText, Route, Share2 } from 'lucide-react';
import { CulturePoint } from '@/data/points';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

interface PointDetailProps {
  point: CulturePoint | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const categoryLabels: Record<string, string> = {
  ancient: '古代农耕遗址',
  modern: '现代农耕地标',
  red: '红色农耕旧址',
};

const categoryBgColors: Record<string, string> = {
  ancient: '#8B6914',
  modern: '#4A7C59',
  red: '#C41E3A',
};

export default function PointDetail({ point, onClose, onPrev, onNext }: PointDetailProps) {
  return (
    <AnimatePresence mode="wait">
      {point && (
        <motion.div
          key={point.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-4 right-4 z-[1001] w-[320px] glass-panel rounded-xl overflow-hidden max-h-[calc(100%-2rem)]"
          style={{ overflowY: 'auto' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gold/10 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
            <div className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="text-gold-dark">
                <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.3"/>
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <h3 className="text-[13px] font-semibold text-foreground font-serif">点位详情</h3>
            </div>
            <div className="flex items-center gap-0.5">
              <button onClick={onPrev} className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gold/10 transition-colors active:scale-95">
                <ChevronLeft size={15} className="text-muted-foreground" />
              </button>
              <button onClick={onNext} className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gold/10 transition-colors active:scale-95">
                <ChevronRight size={15} className="text-muted-foreground" />
              </button>
              <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-red/10 transition-colors ml-1 active:scale-95">
                <X size={15} className="text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Title and category */}
            <div>
              <h4 className="text-[15px] font-bold text-foreground font-serif leading-tight">{point.name}</h4>
              <span
                className="inline-block mt-1.5 px-2.5 py-0.5 text-[11px] rounded text-white font-medium"
                style={{ background: categoryBgColors[point.category] }}
              >
                {categoryLabels[point.category]}
              </span>
            </div>

            {/* Cover image */}
            <div className="rounded-lg overflow-hidden aspect-[16/10] bg-muted shadow-sm">
              <img
                src={point.coverImage}
                alt={point.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Summary */}
            <p className="text-xs leading-[1.8] text-foreground/80">{point.summary}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {point.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] bg-parchment border border-gold/15 rounded text-earth hover:border-gold/30 hover:bg-gold/5 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex border-t border-gold/10">
            <button
              onClick={() => toast('查看详情', { description: '功能即将上线' })}
              className="flex-1 flex flex-col items-center gap-1 py-3 text-xs text-earth hover:bg-gold/5 transition-colors border-r border-gold/10 active:scale-97"
            >
              <FileText size={16} className="text-gold-dark" />
              <span>查看详情</span>
            </button>
            <button
              onClick={() => toast('路线规划', { description: '功能即将上线' })}
              className="flex-1 flex flex-col items-center gap-1 py-3 text-xs text-earth hover:bg-gold/5 transition-colors border-r border-gold/10 active:scale-97"
            >
              <Route size={16} className="text-gold-dark" />
              <span>路线规划</span>
            </button>
            <button
              onClick={() => toast('一键分享', { description: '功能即将上线' })}
              className="flex-1 flex flex-col items-center gap-1 py-3 text-xs text-earth hover:bg-gold/5 transition-colors active:scale-97"
            >
              <Share2 size={16} className="text-gold-dark" />
              <span>一键分享</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
