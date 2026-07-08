import { useState, useCallback, useMemo } from 'react';
import Header from '@/components/Header';
import HunanMap from '@/components/HunanMap';
import LayerPanel from '@/components/LayerPanel';
import PointDetail from '@/components/PointDetail';
import BottomModules from '@/components/BottomModules';
import Footer from '@/components/Footer';
import { culturePoints, CulturePoint } from '@/data/points';
import { toast } from 'sonner';

export default function Home() {
  const [activeNav, setActiveNav] = useState('map');
  const [selectedPoint, setSelectedPoint] = useState<CulturePoint | null>(null);
  const [visibleLayers, setVisibleLayers] = useState({
    ancient: true,
    modern: true,
    red: true,
  });

  const filteredPoints = useMemo(() => {
    return culturePoints.filter(p => visibleLayers[p.category]);
  }, [visibleLayers]);

  const handleLayerToggle = useCallback((layer: 'ancient' | 'modern' | 'red') => {
    setVisibleLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  }, []);

  const handlePointSelect = useCallback((point: CulturePoint) => {
    setSelectedPoint(point);
  }, []);

  const handleSearch = useCallback((query: string) => {
    if (!query.trim()) return;
    const found = culturePoints.find(p =>
      p.name.includes(query) || p.tags.some(t => t.includes(query))
    );
    if (found) {
      setSelectedPoint(found);
      setVisibleLayers(prev => ({ ...prev, [found.category]: true }));
    } else {
      toast('未找到匹配的点位', { description: '请尝试其他关键词' });
    }
  }, []);

  const handleClear = useCallback(() => {
    setVisibleLayers({ ancient: true, modern: true, red: true });
    setSelectedPoint(null);
  }, []);

  const handlePrevPoint = useCallback(() => {
    if (!selectedPoint) return;
    const currentIndex = filteredPoints.findIndex(p => p.id === selectedPoint.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredPoints.length - 1;
    setSelectedPoint(filteredPoints[prevIndex]);
  }, [selectedPoint, filteredPoints]);

  const handleNextPoint = useCallback(() => {
    if (!selectedPoint) return;
    const currentIndex = filteredPoints.findIndex(p => p.id === selectedPoint.id);
    const nextIndex = currentIndex < filteredPoints.length - 1 ? currentIndex + 1 : 0;
    setSelectedPoint(filteredPoints[nextIndex]);
  }, [selectedPoint, filteredPoints]);

  const handleNavChange = useCallback((nav: string) => {
    setActiveNav(nav);
    if (nav !== 'map') {
      toast('功能开发中', { description: `${nav === 'routes' ? '主题线路' : nav === 'timeline' ? '发展脉络' : nav === 'artifacts' ? '重要文物' : '节气日历'}页面即将上线` });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        activeNav={activeNav}
        onNavChange={handleNavChange}
        onSearch={handleSearch}
      />

      {/* Main map area */}
      <main className="relative" style={{ height: 'calc(100vh - 92px)', minHeight: '500px' }}>
        <HunanMap
          points={filteredPoints}
          selectedPoint={selectedPoint}
          onPointSelect={handlePointSelect}
          visibleLayers={visibleLayers}
        />

        <LayerPanel
          visibleLayers={visibleLayers}
          onLayerToggle={handleLayerToggle}
          onSearch={handleSearch}
          onClear={handleClear}
        />

        <PointDetail
          point={selectedPoint}
          onClose={() => setSelectedPoint(null)}
          onPrev={handlePrevPoint}
          onNext={handleNextPoint}
        />
      </main>

      {/* Bottom content modules */}
      <BottomModules />

      {/* Footer */}
      <Footer />
    </div>
  );
}
