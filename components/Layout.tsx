
import React from 'react';
import { 
  Monitor, Box, Users, Wrench, Shield, Siren, DollarSign, Settings, Microscope, User,
  ChevronDown, ChevronRight, MessageCircle, FileText, Search, Calendar, Briefcase
} from 'lucide-react';
import { MenuItem } from '../types';

export const MENU_STRUCTURE: MenuItem[] = [
  { id: 'cockpit', title: '园区驾驶舱', icon: <Monitor size={18} />, children: [{ id: 'dashboard', title: '园区综合态势' }] },
  { id: 'assets', title: '资产与设备', icon: <Box size={18} />, children: [
    { id: 'asset-overview', title: '资产全景概览' },
    { id: 'asset-list', title: '设备台账管理' },
    { id: 'asset-ops', title: '资产移交与入库' }
  ]},
  { id: 'service', title: '园区服务中心', icon: <Users size={18} />, children: [
    { id: 'service-control', title: '智能控制中心' }, 
    { id: 'service-meeting', title: '会议室预约' },
    { id: 'service-visitor', title: '访客预约管理' },
    { id: 'service-tenant', title: '租户与合同管理' }
  ]},
  { id: 'workorder', title: '运维工单系统', icon: <Wrench size={18} />, children: [
    { id: 'wo-overview', title: '工单运行概览' },
    { id: 'wo-repair', title: '故障报修受理' },
    { id: 'wo-list', title: '维修工单执行' },
    { id: 'wo-inspection', title: '智能巡检计划' }
  ]},
  { id: 'ai', title: '智能助手', icon: <MessageCircle size={18} />, children: [{ id: 'ai-assistant', title: 'SN 智能助手' }] },
];

export const Header = () => (
  <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 text-slate-800 shrink-0 z-20 sticky top-0 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
        <Microscope size={22} className="text-white" />
      </div>
      <div>
        <h1 className="text-lg font-black tracking-tight text-blue-800">浦江司南医疗智慧运维</h1>
        <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-none">Sinan Smart Park Operations</p>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <div className="hidden md:flex flex-col items-end text-[10px] font-black uppercase text-slate-400">
        <span>实时环境监测: D栋</span>
        <span className="text-emerald-500 flex items-center gap-1">22.5°C / 45% RH</span>
      </div>
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors">
        <User size={20} className="text-slate-500" />
      </div>
    </div>
  </header>
);

export const Sidebar = ({ activeTab, onTabChange, expandedMenus, onToggleMenu }: any) => (
  <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 h-full overflow-y-auto custom-scrollbar shadow-[4px_0_24px_rgba(0,0,0,0.01)]">
    <div className="p-6">
      <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 px-2">Operation System</p>
      <div className="space-y-1.5">
        {MENU_STRUCTURE.map((menu) => (
          <div key={menu.id}>
            <button 
              onClick={() => onToggleMenu(menu.id)} 
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${expandedMenus.includes(menu.id) ? 'text-blue-700 bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <div className="flex items-center gap-3">{menu.icon}<span>{menu.title}</span></div>
              {expandedMenus.includes(menu.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </button>
            {expandedMenus.includes(menu.id) && (
              <div className="mt-1 ml-4 pl-3 border-l border-slate-100 space-y-1">
                {menu.children.map((child) => (
                  <button 
                    key={child.id} 
                    onClick={() => onTabChange(child.id)} 
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-black transition-all ${activeTab === child.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400 hover:text-slate-800 hover:bg-slate-50'}`}
                  >
                    {child.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </aside>
);
