
import React, { useState } from 'react';
import { Header, Sidebar } from './components/Layout';
import { AssetOverviewView, AssetListView, AssetProfileView, AssetOperationsView } from './views/AssetModule';
import { ServiceControlView, ServiceMeetingView, ServiceVisitorView, ServiceTenantView } from './views/ServiceModule';
import { WorkOrderOverviewView, WorkOrderRepairView, WorkOrderListView, WorkOrderInspectionView } from './views/WorkOrderModule';
import DashboardView from './components/Dashboard';
import AIAssistant from './components/AIAssistant';
import { Cpu } from 'lucide-react';

export default function SinanParkOpsPlatform() {
  const [activeTab, setActiveTab] = useState('asset-overview');
  const [expandedMenus, setExpandedMenus] = useState(['assets', 'cockpit', 'service', 'workorder']);
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => prev.includes(menuId) ? prev.filter(id => id !== menuId) : [...prev, menuId]);
  };

  const renderContent = () => {
    if (selectedAssetId) return <AssetProfileView assetId={selectedAssetId} onBack={() => setSelectedAssetId(null)} />;

    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'asset-overview': return <AssetOverviewView />;
      case 'asset-list': return <AssetListView onSelect={setSelectedAssetId} />;
      case 'asset-ops': return <AssetOperationsView />;
      case 'ai-assistant': return <AIAssistant />;
      
      // 服务中心子模块
      case 'service-control': return <ServiceControlView />;
      case 'service-meeting': return <ServiceMeetingView />;
      case 'service-visitor': return <ServiceVisitorView />;
      case 'service-tenant': return <ServiceTenantView />;

      // 运维工单系统子模块
      case 'wo-overview': return <WorkOrderOverviewView />;
      case 'wo-repair': return <WorkOrderRepairView />;
      case 'wo-list': return <WorkOrderListView />;
      case 'wo-inspection': return <WorkOrderInspectionView />;
      
      default: return (
        <div className="p-20 text-center bg-white rounded-[2.5rem] border border-slate-100 shadow-sm border-dashed">
          <Cpu size={48} className="mx-auto text-slate-200 mb-4 animate-spin-slow" />
          <h2 className="text-xl font-bold text-slate-400 tracking-tight">模块建设中</h2>
          <p className="text-sm text-slate-300 mt-2">正在同步物理园区孪生数据，功能即将上线。</p>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#F8FAFC] text-slate-600 font-sans overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={(tab: string) => { setActiveTab(tab); setSelectedAssetId(null); }} 
          expandedMenus={expandedMenus} 
          onToggleMenu={toggleMenu} 
        />
        <main className="flex-1 overflow-y-auto custom-scrollbar p-8 relative">
           <div className="relative z-10 max-w-7xl mx-auto">
             <div className="flex items-center gap-2 text-[10px] text-slate-300 mb-6 font-black uppercase tracking-widest">
                <span>园区管理</span><span className="text-slate-200">/</span><span className="text-blue-600">运维中心</span>
             </div>
             {renderContent()}
           </div>
        </main>
      </div>
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
}
