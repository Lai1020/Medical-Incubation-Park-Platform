
import React from 'react';
import { NavigationTab } from '../types';

interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: NavigationTab.DASHBOARD, icon: '📊', label: 'Dashboard' },
    { id: NavigationTab.INCIDENTS, icon: '🚨', label: 'Incidents' },
    { id: NavigationTab.METRICS, icon: '📈', label: 'Metrics' },
    { id: NavigationTab.AI_ASSISTANT, icon: '🤖', label: 'SN AI Assistant' },
    { id: NavigationTab.SETTINGS, icon: '⚙️', label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
          SN
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white">Sentinel</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              activeTab === item.id
                ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
          <p className="text-xs text-slate-500 mb-1">Signed in as</p>
          <p className="text-sm font-medium text-slate-200 truncate">admin@sn-project.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
