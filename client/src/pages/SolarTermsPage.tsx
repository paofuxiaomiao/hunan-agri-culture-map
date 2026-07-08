import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// 二十四节气完整数据
const solarTermsData = [
  { id: 's1', name: '立春', pinyin: 'Lìchūn', season: 'spring', month: '2月3-5日', meaning: '春季开始', farming: '备耕整地，检修农具', description: '立春标志着万物复苏，湖南农民开始准备春耕。此时要翻耕冬闲田，修整水利设施，为即将到来的春播做准备。' },
  { id: 's2', name: '雨水', pinyin: 'Yǔshuǐ', season: 'spring', month: '2月18-20日', meaning: '降雨开始', farming: '育秧准备，施基肥', description: '雨水节气后，湖南气温回升，降水增多。农民开始浸种催芽，准备水稻育秧。洞庭湖区的油菜花也开始绽放。' },
  { id: 's3', name: '惊蛰', pinyin: 'Jīngzhé', season: 'spring', month: '3月5-7日', meaning: '春雷惊醒蛰虫', farming: '早稻育秧，防治病虫', description: '惊蛰时节，春雷始鸣。湖南各地开始大规模育秧，同时要注意防治早春病虫害。传统上有"惊蛰不耙地，好比蒸馍走了气"的农谚。' },
  { id: 's4', name: '春分', pinyin: 'Chūnfēn', season: 'spring', month: '3月20-22日', meaning: '昼夜等长', farming: '早稻插秧，春耕高峰', description: '春分前后是湖南早稻插秧的关键时期。"春分麦起身，一刻值千金"，农民们争分夺秒抢插早稻。' },
  { id: 's5', name: '清明', pinyin: 'Qīngmíng', season: 'spring', month: '4月4-6日', meaning: '天清地明', farming: '早稻管理，茶叶采摘', description: '清明时节雨纷纷，是湖南春茶采摘的黄金期。君山银针、古丈毛尖等名茶此时品质最佳。同时要加强早稻田间管理。' },
  { id: 's6', name: '谷雨', pinyin: 'Gǔyǔ', season: 'spring', month: '4月19-21日', meaning: '雨生百谷', farming: '中稻播种，田间除草', description: '谷雨是春季最后一个节气，降水明显增多。湖南中稻开始播种，"谷雨前后，种瓜点豆"，各类蔬菜瓜果也进入播种期。' },
  { id: 's7', name: '立夏', pinyin: 'Lìxià', season: 'summer', month: '5月5-7日', meaning: '夏季开始', farming: '早稻分蘖，中稻插秧', description: '立夏后湖南进入高温多雨季节。早稻进入分蘖盛期，中稻开始大面积插秧。洞庭湖区的小龙虾也进入丰收季。' },
  { id: 's8', name: '小满', pinyin: 'Xiǎomǎn', season: 'summer', month: '5月20-22日', meaning: '麦类渐满', farming: '水稻追肥，防涝排水', description: '小满时节，湖南进入梅雨季前期。水稻需要追施分蘖肥，同时要做好防涝排水工作。"小满不满，干断田坎"提醒农民注意水分管理。' },
  { id: 's9', name: '芒种', pinyin: 'Mángzhòng', season: 'summer', month: '6月5-7日', meaning: '有芒作物成熟', farming: '早稻抽穗，晚稻育秧', description: '芒种是湖南农事最繁忙的节气。早稻开始抽穗扬花，晚稻育秧同时进行。"芒种忙忙栽"，农民们日夜劳作。' },
  { id: 's10', name: '夏至', pinyin: 'Xiàzhì', season: 'summer', month: '6月21-22日', meaning: '白昼最长', farming: '早稻灌浆，防治稻瘟', description: '夏至日照最长，湖南高温高湿。早稻进入灌浆期，要注意防治稻瘟病和稻飞虱。紫鹊界梯田此时一片翠绿，美不胜收。' },
  { id: 's11', name: '小暑', pinyin: 'Xiǎoshǔ', season: 'summer', month: '7月6-8日', meaning: '暑气渐盛', farming: '早稻收割，双抢开始', description: '小暑后湖南进入酷暑。早稻开始收割，紧接着要抢插晚稻，这就是著名的"双抢"——抢收抢种，是湖南农民最辛苦的时节。' },
  { id: 's12', name: '大暑', pinyin: 'Dàshǔ', season: 'summer', month: '7月22-24日', meaning: '一年最热', farming: '晚稻插秧，抗旱保苗', description: '大暑是一年中最热的时期。湖南晚稻插秧基本结束，要做好抗旱保苗工作。"大暑不暑，五谷不起"，高温对水稻灌浆有利。' },
  { id: 's13', name: '立秋', pinyin: 'Lìqiū', season: 'autumn', month: '8月7-9日', meaning: '秋季开始', farming: '晚稻管理，秋粮播种', description: '立秋后暑气未消，但湖南农民已开始为秋收做准备。晚稻进入拔节孕穗期，需要加强肥水管理。' },
  { id: 's14', name: '处暑', pinyin: 'Chǔshǔ', season: 'autumn', month: '8月22-24日', meaning: '暑气结束', farming: '晚稻抽穗，防治病虫', description: '处暑后湖南气温逐渐下降。晚稻进入抽穗扬花期，是产量形成的关键时期，要重点防治稻飞虱和纹枯病。' },
  { id: 's15', name: '白露', pinyin: 'Báilù', season: 'autumn', month: '9月7-9日', meaning: '露水凝白', farming: '晚稻灌浆，秋收准备', description: '白露时节，湖南早晚温差加大。晚稻进入灌浆期，"白露白迷迷，秋分稻秀齐"，预示着丰收在望。' },
  { id: 's16', name: '秋分', pinyin: 'Qiūfēn', season: 'autumn', month: '9月22-24日', meaning: '昼夜等长', farming: '晚稻成熟，开始秋收', description: '秋分是中国农民丰收节。湖南晚稻陆续成熟收割，金黄的稻浪铺满三湘大地。紫鹊界梯田此时层层金黄，蔚为壮观。' },
  { id: 's17', name: '寒露', pinyin: 'Hánlù', season: 'autumn', month: '10月8-9日', meaning: '露水寒冷', farming: '秋收扫尾，冬种准备', description: '寒露后湖南秋收基本结束。农民开始翻耕稻田，准备种植油菜和冬季蔬菜。"寒露种菜，霜降种麦"是湖南的传统农时。' },
  { id: 's18', name: '霜降', pinyin: 'Shuāngjiàng', season: 'autumn', month: '10月23-24日', meaning: '初霜出现', farming: '冬种油菜，晒谷入仓', description: '霜降是秋季最后一个节气。湖南各地抓紧种植油菜，同时将收获的稻谷晾晒入仓。"霜降见霜，米谷满仓"寄托着丰收的喜悦。' },
  { id: 's19', name: '立冬', pinyin: 'Lìdōng', season: 'winter', month: '11月7-8日', meaning: '冬季开始', farming: '冬闲整地，兴修水利', description: '立冬后湖南进入农闲季节。农民利用冬闲时间整修田埂、疏浚沟渠、兴修水利，为来年春耕打好基础。' },
  { id: 's20', name: '小雪', pinyin: 'Xiǎoxuě', season: 'winter', month: '11月22-23日', meaning: '开始降雪', farming: '冬季管理，腌制腊味', description: '小雪时节，湖南开始制作腊肉、腊鱼等传统腌制品。这是湖湘饮食文化中重要的农事活动，也是稻作文明衍生的食物保存智慧。' },
  { id: 's21', name: '大雪', pinyin: 'Dàxuě', season: 'winter', month: '12月6-8日', meaning: '降雪增多', farming: '积肥备料，修缮农具', description: '大雪时节湖南山区可能出现降雪。农民利用冬闲积肥备料，修缮农具。"瑞雪兆丰年"，适量降雪有利于杀灭越冬害虫。' },
  { id: 's22', name: '冬至', pinyin: 'Dōngzhì', season: 'winter', month: '12月21-23日', meaning: '白昼最短', farming: '冬季深翻，蓄水保墒', description: '冬至是一年中白天最短的一天。湖南农民进行冬季深翻，利用冻融交替改良土壤结构。同时要做好冬季蓄水保墒工作。' },
  { id: 's23', name: '小寒', pinyin: 'Xiǎohán', season: 'winter', month: '1月5-7日', meaning: '寒气渐重', farming: '温室育苗，计划来年', description: '小寒是一年中最冷的时期之一。现代湖南农民利用温室大棚进行蔬菜育苗，同时制定来年的种植计划。' },
  { id: 's24', name: '大寒', pinyin: 'Dàhán', season: 'winter', month: '1月20-21日', meaning: '一年最冷', farming: '备种选种，迎接新春', description: '大寒是冬季最后一个节气。农民开始选购优良稻种，为新一年的春耕做最后准备。"大寒不寒，春分不暖"，农谚中蕴含着千年的气象智慧。' },
];

interface SolarTermsPageProps {
  onBack: () => void;
}

export default function SolarTermsPage({ onBack }: SolarTermsPageProps) {
  const [activeSeason, setActiveSeason] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState<typeof solarTermsData[0] | null>(null);

  const seasons = [
    { id: 'all', label: '全部节气', color: '#8B6914' },
    { id: 'spring', label: '春', color: '#4A7C59' },
    { id: 'summer', label: '夏', color: '#B8860B' },
    { id: 'autumn', label: '秋', color: '#C67D2A' },
    { id: 'winter', label: '冬', color: '#6B7B8D' },
  ];

  const filteredTerms = activeSeason === 'all'
    ? solarTermsData
    : solarTermsData.filter(t => t.season === activeSeason);

  const getSeasonColor = (season: string) => {
    const colors: Record<string, string> = { spring: '#4A7C59', summer: '#B8860B', autumn: '#C67D2A', winter: '#6B7B8D' };
    return colors[season] || '#8B6914';
  };

  const getSeasonBg = (season: string) => {
    const bgs: Record<string, string> = {
      spring: 'rgba(74,124,89,0.06)',
      summer: 'rgba(184,134,11,0.06)',
      autumn: 'rgba(198,125,42,0.06)',
      winter: 'rgba(107,123,141,0.06)',
    };
    return bgs[season] || 'rgba(139,105,20,0.06)';
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #faf8f2 0%, #f3ede3 100%)' }}>
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl border-b border-gold/15" style={{ background: 'rgba(250,248,242,0.92)' }}>
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-earth hover:text-gold-dark transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">返回地图</span>
          </button>
          <h1 className="text-lg font-bold font-serif tracking-wider" style={{ color: '#3d2e0a' }}>
            节气日历
          </h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero */}
      <div className="py-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] text-gold-dark/70 uppercase mb-2">SOLAR TERMS CALENDAR</p>
          <h2 className="text-3xl font-bold font-serif mb-3" style={{ color: '#2a1f08' }}>二十四节气与农事</h2>
          <p className="text-sm text-earth/70 max-w-xl mx-auto leading-relaxed">
            天人合一的农耕智慧，千年传承的时令密码
          </p>
        </motion.div>
      </div>

      {/* Season Filter */}
      <div className="max-w-[1400px] mx-auto px-6 mb-6">
        <div className="flex items-center justify-center gap-3">
          {seasons.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSeason(s.id)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSeason === s.id
                  ? 'text-white shadow-md'
                  : 'bg-white/60 text-earth/70 hover:bg-white border border-gold/10'
              }`}
              style={activeSeason === s.id ? { background: s.color } : {}}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Solar Terms Grid */}
      <div className="max-w-[1400px] mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTerms.map((term, idx) => (
              <motion.div
                key={term.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="group cursor-pointer"
                onClick={() => setSelectedTerm(term)}
              >
                <div
                  className="relative rounded-xl p-4 border border-gold/10 hover:border-gold/25 hover:shadow-lg transition-all duration-300 text-center overflow-hidden"
                  style={{ background: getSeasonBg(term.season) }}
                >
                  {/* Decorative circle */}
                  <div className="relative mx-auto w-16 h-16 mb-3">
                    <div className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" style={{ background: `radial-gradient(circle, ${getSeasonColor(term.season)} 0%, transparent 70%)` }} />
                    <div className="absolute inset-2 rounded-full border-2 border-dashed group-hover:rotate-45 transition-transform duration-700" style={{ borderColor: `${getSeasonColor(term.season)}40` }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold font-serif" style={{ color: getSeasonColor(term.season) }}>
                        {term.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold font-serif mb-0.5" style={{ color: getSeasonColor(term.season) }}>
                    {term.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground italic mb-1">{term.pinyin}</p>
                  <p className="text-[10px] text-earth/60">{term.month}</p>

                  {/* Hover reveal */}
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] font-medium" style={{ color: getSeasonColor(term.season) }}>{term.farming}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedTerm(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Color bar */}
              <div className="h-2" style={{ background: getSeasonColor(selectedTerm.season) }} />

              <div className="p-6">
                {/* Close */}
                <button
                  onClick={() => setSelectedTerm(null)}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors text-xs"
                >
                  ✕
                </button>

                {/* Header */}
                <div className="text-center mb-5">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-3" style={{ background: `${getSeasonColor(selectedTerm.season)}10`, border: `2px solid ${getSeasonColor(selectedTerm.season)}30` }}>
                    <span className="text-3xl font-bold font-serif" style={{ color: getSeasonColor(selectedTerm.season) }}>
                      {selectedTerm.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground italic">{selectedTerm.pinyin} · {selectedTerm.month}</p>
                  <p className="text-sm font-medium mt-1" style={{ color: getSeasonColor(selectedTerm.season) }}>{selectedTerm.meaning}</p>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-earth mb-1.5 tracking-wider">节气释义</h4>
                    <p className="text-sm text-earth/80 leading-[1.8]">{selectedTerm.description}</p>
                  </div>

                  <div className="p-3 rounded-lg" style={{ background: getSeasonBg(selectedTerm.season) }}>
                    <h4 className="text-xs font-bold mb-1" style={{ color: getSeasonColor(selectedTerm.season) }}>农事活动</h4>
                    <p className="text-sm text-earth/80">{selectedTerm.farming}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
