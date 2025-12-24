
import React, { useState } from 'react';
import { 
  Box, Coins, Wallet, Activity, ZapOff, TrendingUp, AlertOctagon, Target, Stethoscope, FileSignature, 
  History, UserCheck, TrendingDown, Zap, ShieldCheck, ChevronLeft, 
  Cpu, FileInput, Truck, CheckCircle, ExternalLink, Search, MapPin, Layers, Package,
  QrCode, ClipboardList, Building2, Wrench, Calendar, Tag, UserPlus, ArrowRightLeft,
  Warehouse, MoreHorizontal, Filter, Info, AlertTriangle, Thermometer
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, Radar, Cell, PieChart, Pie } from 'recharts';
import { ASSETS, MOCK_LOGS, generateEnergyData, RADAR_DATA } from '../utils/mockData';
import { Asset } from '../types';

/** 
 * 1. 资产概览 (Asset Overview)
 * Optimized with Efficiency Radar, Health Tree (TCO), and Status Distribution 
 */
export const AssetOverviewView = () => {
  const distributionData = [
    { name: '研发实验', using: 450, idle: 120, repair: 30 },
    { name: '辅助检测', using: 280, idle: 45, repair: 15 },
    { name: '基础设施', using: 850, idle: 10, repair: 30 },
    { name: '公共设施', using: 340, idle: 80, repair: 20 },
  ];

  const healthRanking = [
    { name: '超低温冰箱 D-01', score: 98, status: 'Perfect', color: '#10b981' },
    { name: 'PCR分析仪 B-05', score: 94, status: 'Good', color: '#3b82f6' },
    { name: '精密天平 A-12', score: 72, status: 'Warning', color: '#f59e0b' },
    { name: '离心机 V3 Pro', score: 45, status: 'Critical', color: '#ef4444' },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '资产总估值', value: '4.52', sub: '亿元', icon: <Coins />, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: '财务净残值', value: '3.18', sub: '亿元', icon: <Wallet />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: '平均健康指数', value: '86.4', sub: 'pts', icon: <Stethoscope />, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: '效能发挥率', value: '72.8', sub: '%', icon: <Activity />, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between transition-hover hover:border-blue-300">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
              <h3 className={`text-3xl font-black ${item.color}`}>{item.value}<span className="text-xs ml-1 font-bold text-slate-400">{item.sub}</span></h3>
            </div>
            <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shadow-inner`}>{item.icon}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Distribution & Status */}
        <div className="xl:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
             <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">资产类别与运营状态矩阵</h3>
                <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Category vs. Operational Status Matrix</p>
             </div>
             <div className="flex gap-4">
                <span className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 uppercase"><div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div> 使用中</span>
                <span className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 uppercase"><div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div> 闲置</span>
                <span className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 uppercase"><div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div> 维修</span>
             </div>
          </div>
          <div className="p-8 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={distributionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} />
                <YAxis hide />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="using" stackId="a" fill="#3b82f6" barSize={40} radius={[0, 0, 0, 0]} />
                <Bar dataKey="idle" stackId="a" fill="#e2e8f0" barSize={40} />
                <Bar dataKey="repair" stackId="a" fill="#ef4444" barSize={40} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Health Ranking */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl flex flex-col relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
           <h3 className="text-sm font-black uppercase tracking-widest mb-8 flex items-center gap-2">
             <Stethoscope size={18} className="text-blue-400" /> 资产健康度实时排行
           </h3>
           <div className="flex-1 space-y-6">
              {healthRanking.map((h, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-2">
                         <span className="text-[10px] bg-slate-800 w-5 h-5 flex items-center justify-center rounded-md font-black">{i+1}</span>
                         {h.name}
                      </span>
                      <span className="text-xs font-black" style={{ color: h.color }}>{h.score}%</span>
                   </div>
                   <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full transition-all duration-1000" style={{ width: `${h.score}%`, backgroundColor: h.color }}></div>
                   </div>
                </div>
              ))}
           </div>
           <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">平均得分: 77.4</p>
              <button className="text-[10px] font-black text-blue-400 uppercase hover:underline">查看预警台账</button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* 资产效能发挥情况 - Efficiency Radar & Insights */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8">
           <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">资产效能综合分析 (OEE)</h3>
                <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Overall Equipment Effectiveness</p>
              </div>
              <div className="flex gap-2">
                 <div className="px-3 py-1 bg-amber-50 border border-amber-100 rounded-full flex items-center gap-1.5">
                    <ZapOff size={12} className="text-amber-500"/>
                    <span className="text-[10px] font-black text-amber-600">闲置率预警: 22.4%</span>
                 </div>
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64">
                 <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                       <PolarGrid stroke="#e2e8f0" />
                       <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} />
                       <Radar name="Sinan-Sentinel" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.15} />
                    </RadarChart>
                 </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">效能评估专家建议</p>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed italic">
                      "当前研发类资产由于项目周期波动，导致周中闲置率偏高（26.6%）。建议引入<span className="text-blue-600">共享租赁模式</span>，面向园区初创企业开放预约，预计可提升效能 18%。"
                    </p>
                 </div>
                 <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                       <p className="text-[10px] font-black text-emerald-600">唤醒率</p>
                       <p className="text-xl font-black text-emerald-800">92.4%</p>
                    </div>
                    <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
                       <p className="text-[10px] font-black text-rose-600">负荷饱和度</p>
                       <p className="text-xl font-black text-rose-800">64.2%</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 运营成本健康树 (TCO Health Tree) */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8 flex flex-col">
           <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">运营成本健康树 (O&M TCO)</h3>
                <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Cost Hierarchy & Health Evaluation</p>
              </div>
              <div className="flex gap-2">
                 <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full border border-emerald-100">财务评分: 优</span>
              </div>
           </div>
           
           <div className="flex-1 flex flex-col justify-center items-center relative">
              {/* Tree Representation using high-fidelity CSS-styled components */}
              <div className="w-full space-y-4 relative z-10">
                 {/* Root: Total OpEx */}
                 <div className="flex justify-center">
                    <div className="bg-slate-900 text-white px-8 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Wallet size={16}/></div>
                       <div>
                          <p className="text-[9px] font-black text-slate-400 uppercase">总运营投入 (2024 YTD)</p>
                          <p className="text-lg font-black">¥ 1,245.2 万</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Branches */}
                 <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                       <div className="w-10 h-10 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2"><Zap size={18}/></div>
                       <p className="text-[9px] font-black text-slate-400 uppercase">能耗成本</p>
                       <p className="text-sm font-black text-slate-800">42%</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                       <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2"><Wrench size={18}/></div>
                       <p className="text-[9px] font-black text-slate-400 uppercase">维保人力</p>
                       <p className="text-sm font-black text-slate-800">38%</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                       <div className="w-10 h-10 mx-auto rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2"><Package size={18}/></div>
                       <p className="text-[9px] font-black text-slate-400 uppercase">备件耗材</p>
                       <p className="text-sm font-black text-slate-800">20%</p>
                    </div>
                 </div>

                 {/* Evaluation Leaf */}
                 <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200 flex items-center gap-4">
                    <AlertTriangle size={24} className="text-blue-200" />
                    <div>
                       <p className="text-xs font-black">成本健康预警：能耗占比处于合理区间</p>
                       <p className="text-[10px] text-blue-100 mt-0.5">D栋峰值电价支出略高，建议调整实验室恒温设备运行策略。</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

/** 
 * 2. 设备台账管理 (Asset Ledger & Holographic Profile)
 * Holographic Profile tracking from procurement to current maintenance.
 */
export const AssetProfileView = ({ assetId, onBack }: { assetId: string, onBack: () => void }) => {
  const asset = ASSETS.find(a => a.id === assetId) || ASSETS[0];
  const [activeSubTab, setActiveSubTab] = useState<'holographic' | 'spares' | 'costs'>('holographic');
  const energyData = generateEnergyData();

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-blue-600 font-black text-sm hover:underline group">
          <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" /> 返回台账清单
        </button>
        <div className="flex bg-slate-100 p-1 rounded-xl">
           {(['holographic', 'spares', 'costs'] as const).map(tab => (
             <button key={tab} onClick={() => setActiveSubTab(tab)} className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${activeSubTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
                {tab === 'holographic' ? '全息画像' : tab === 'spares' ? '备件关联' : '成本分析'}
             </button>
           ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex gap-6 items-center">
           <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center text-blue-600 border border-blue-100 shadow-inner relative">
              <Cpu size={48} />
              <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-1.5 rounded-lg border-2 border-white shadow-lg"><QrCode size={16}/></div>
           </div>
           <div>
              <div className="flex items-center gap-3">
                 <h2 className="text-3xl font-black text-slate-800">{asset.name}</h2>
                 <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${asset.status === '运营中' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                    {asset.status}
                 </span>
              </div>
              <p className="text-slate-400 font-mono text-xs mt-1">UUID: {asset.id} | 系统赋码: SINAN-AST-{asset.id.slice(-4)}</p>
              <div className="flex items-center gap-4 mt-3">
                 <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest"><UserCheck size={14}/> 责任人: {asset.manager}</span>
                 <span className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest"><MapPin size={14}/> 位置: {asset.location}</span>
              </div>
           </div>
        </div>
        <div className="flex gap-10">
           <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">健康指数</p>
              <p className={`text-3xl font-black ${asset.healthScore > 80 ? 'text-emerald-500' : 'text-amber-500'}`}>{asset.healthScore}<span className="text-xs ml-0.5">pts</span></p>
           </div>
           <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">生命周期</p>
              <p className="text-3xl font-black text-blue-600">{asset.life}</p>
           </div>
        </div>
      </div>

      {activeSubTab === 'holographic' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Static Info (At Birth) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
               <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSignature size={18} className="text-blue-600"/><h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">原始静态信息 (Handover DNA)</h3>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase">采购合同: SC-2023-08-012</span>
               </div>
               <div className="p-8 grid grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    { label: '货物型号', val: asset.model || 'V3 Pro Series', icon: <Layers size={14}/> },
                    { label: '生产厂家', val: asset.manufacturer || 'Thermo Scientific', icon: <Building2 size={14}/> },
                    { label: '采购价格', val: asset.value, icon: <Coins size={14}/> },
                    { label: '质保截止', val: asset.warrantyDate, icon: <Calendar size={14}/> },
                    { label: '入库时间', val: asset.inboundDate, icon: <Warehouse size={14}/> },
                    { label: '移交确认人', val: '陈主管 (资产部)', icon: <UserPlus size={14}/> },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-2">
                       <span className="text-xs text-slate-400 flex items-center gap-2">{item.icon} {item.label}</span>
                       <span className="text-xs font-bold text-slate-700">{item.val}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Turnover & Repair Logs */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
               <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
                  <History size={18} className="text-purple-600"/><h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">全生命周期运维过程 (Evolution)</h3>
               </div>
               <div className="p-8 space-y-8 pl-10 relative">
                  <div className="absolute left-[2.5rem] top-8 bottom-8 w-px bg-slate-100"></div>
                  {MOCK_LOGS.map((log, i) => (
                    <div key={i} className="relative">
                       <div className={`absolute -left-[1.35rem] top-1 w-3 h-3 rounded-full ${log.type === 'repair' ? 'bg-rose-500' : log.type === 'maintenance' ? 'bg-emerald-500' : 'bg-blue-500'} border-4 border-white`}></div>
                       <p className="text-[10px] font-black text-slate-400 mb-1">{log.time}</p>
                       <div className="flex items-center gap-3">
                          <p className="text-sm font-bold text-slate-800">{log.title}</p>
                          <span className={`text-[9px] font-black px-1.5 rounded uppercase ${log.type === 'repair' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>{log.type}</span>
                       </div>
                       <p className="text-xs text-slate-500 mt-1">{log.desc}</p>
                       <p className="text-[10px] font-bold text-slate-400 mt-1">处理人: {log.user}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column: Financials & Real-time Costs */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">财务与资产估值</p>
              <div className="space-y-4">
                 <div>
                    <p className="text-xs font-bold text-slate-400">当前折余残值</p>
                    <h4 className="text-4xl font-black">{asset.residualValue}</h4>
                 </div>
                 <div className="h-px bg-white/10"></div>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                       <span className="text-slate-400">累计能耗成本</span>
                       <span className="font-bold text-blue-400">¥ 2,842.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                       <span className="text-slate-400">累计维修支出</span>
                       <span className="font-bold text-rose-400">¥ 1,450.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                       <span className="text-slate-400">综运营总成本 (TCO)</span>
                       <span className="font-bold text-slate-100">¥ 129,292.00</span>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
               <div className="flex justify-between items-center">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">实时能耗画像 (kWh)</h4>
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 rounded">采样率: 5s</span>
               </div>
               <div className="h-44">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={energyData}>
                        <defs>
                          <linearGradient id="colorKwh" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="kwh" stroke="#3b82f6" fill="url(#colorKwh)" strokeWidth={2} />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'spares' && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 animate-fade-in">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">备件库管理与关联 (Spare Parts Ecology)</h3>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase shadow-lg shadow-blue-200">库房领用登记</button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: '离心机专用密封圈', stock: 12, code: 'SPR-X-01', link: 'Primary Unit', icon: <Package size={20}/> },
                { name: 'HEPA 过滤器 (备用)', stock: 4, code: 'SPR-X-02', link: 'Biological Safety Cabinet', icon: <Filter size={20}/> },
                { name: '温控传感器元件', stock: 8, code: 'SPR-X-03', link: 'Cooler Hub', icon: <Thermometer size={20}/> },
              ].map((spare, idx) => (
                <div key={idx} className="p-6 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all group">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform">{spare.icon}</div>
                      <div>
                         <p className="text-xs font-black text-slate-800">{spare.name}</p>
                         <p className="text-[10px] font-bold text-slate-400">{spare.code}</p>
                      </div>
                   </div>
                   <div className="flex justify-between items-center text-[10px] font-black uppercase">
                      <span className="text-slate-400">当前库存: <span className="text-blue-600">{spare.stock}</span></span>
                      <span className="text-emerald-600 flex items-center gap-1"><Layers size={12}/> 关联: {spare.link}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      )}
    </div>
  );
};

/** 
 * 资产列表 (Equipment Ledger List) 
 */
export const AssetListView = ({ onSelect }: { onSelect: (id: string) => void }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between mb-2">
       <div className="flex items-center gap-4">
          <div className="relative">
             <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
             <input type="text" placeholder="搜索资产ID、名称、责任人..." className="bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs w-64 focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:border-blue-500" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-50">
             <Filter size={14}/> 筛选分类
          </button>
       </div>
       <div className="flex items-center gap-4">
          <p className="text-[10px] font-black text-slate-400 uppercase">当前共 <span className="text-blue-600">1,245</span> 件资产</p>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-black uppercase shadow-lg">导出报表</button>
       </div>
    </div>
    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm animate-fade-in">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">
          <tr>
            <th className="p-5">资产识别码</th>
            <th className="p-5">资产名称</th>
            <th className="p-5">状态</th>
            <th className="p-5">健康度</th>
            <th className="p-5">财务净值</th>
            <th className="p-5">责任人</th>
            <th className="p-5 text-right">全息画像</th>
          </tr>
        </thead>
        <tbody>
          {ASSETS.map(a => (
            <tr key={a.id} className="border-b hover:bg-slate-50 transition-colors group">
              <td className="p-5">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50 transition-colors"><QrCode size={16} className="text-slate-400 group-hover:text-blue-500"/></div>
                    <span className="font-mono text-xs font-bold text-slate-600">{a.id}</span>
                 </div>
              </td>
              <td className="p-5 font-bold text-slate-700">{a.name}</td>
              <td className="p-5">
                 <span className={`px-2 py-0.5 rounded text-[10px] font-black border ${a.status === '运营中' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                    {a.status}
                 </span>
              </td>
              <td className="p-5">
                 <div className="flex items-center gap-2">
                    <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className={`h-full ${a.healthScore > 80 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{width: `${a.healthScore}%`}}></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">{a.healthScore}</span>
                 </div>
              </td>
              <td className="p-5 font-bold text-slate-500">{a.residualValue}</td>
              <td className="p-5 text-xs text-slate-600 font-medium">{a.manager}</td>
              <td className="p-5 text-right">
                <button onClick={() => onSelect(a.id)} className="text-blue-600 text-xs font-black uppercase hover:underline flex items-center gap-1 ml-auto">
                   <Info size={14}/> 画像详情
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/** 
 * 3. 资产移交与入库/出库管理 
 * Optimized with Procurement Handover, QR Tagging, Inbound/Outbound metadata.
 */
export const AssetOperationsView = () => {
  const [activeTab, setActiveTab] = useState<'inbound' | 'outbound'>('inbound');

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
        <button 
          onClick={() => setActiveTab('inbound')}
          className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === 'inbound' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
        >
          资产移交与入库 Inbound Handover
        </button>
        <button 
          onClick={() => setActiveTab('outbound')}
          className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === 'outbound' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
        >
          资产出库与启用 Outbound Activation
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        {activeTab === 'inbound' ? (
          <div className="p-8 space-y-10">
            {/* 采购与移交合同核对 */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><ClipboardList size={20}/></div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">第一步：移交与采购合同核对 (Procurement Link)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: '参考采购合同号', placeholder: 'SC-2024-XXXX', icon: <FileSignature size={14}/> },
                  { label: '货物名称 (资产名称)', placeholder: 'e.g. 超低温冰箱', icon: <Box size={14}/> },
                  { label: '型号规格', placeholder: 'Model / Specification', icon: <Layers size={14}/> },
                  { label: '生产厂家', placeholder: 'Manufacturer Name', icon: <Building2 size={14}/> },
                  { label: '供应商', placeholder: 'Vendor Company', icon: <Truck size={14}/> },
                  { label: '采购单价 (CNY)', placeholder: '0.00', icon: <Coins size={14}/> },
                  { label: '移交数量', placeholder: '1', icon: <Package size={14}/> },
                  { label: '质保截止日期', placeholder: 'YYYY-MM-DD', icon: <Calendar size={14}/> },
                ].map((field, i) => (
                  <div key={i} className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      {field.icon} {field.label}
                    </label>
                    <input type="text" placeholder={field.placeholder} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:border-blue-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* 系统赋码与关联标识 */}
            <section className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><QrCode size={20}/></div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">第二步：系统赋码与资产标识 (Inbound Tagging)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-slate-900 rounded-[2rem] text-white flex items-center gap-6 shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                   <div className="w-20 h-20 bg-white p-2 rounded-xl flex items-center justify-center">
                      <QrCode size={64} className="text-slate-900" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">自动生成识别码</p>
                      <h4 className="text-lg font-black">SN-AST-20240901-X</h4>
                      <p className="text-[8px] text-slate-500 mt-1 uppercase font-bold italic">Wait for scanning...</p>
                   </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <label className="flex-1 flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <div>
                        <p className="text-xs font-black text-slate-800">标记为备件 (Spare)</p>
                        <p className="text-[9px] text-slate-400">将归属于备件管理模块</p>
                      </div>
                    </label>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase flex items-center gap-1.5"><Layers size={14}/> 关联父级资产 (Associated Asset)</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500">
                       <option>独立运行资产 (Root Asset)</option>
                       {ASSETS.map(a => <option key={a.id}>关联: {a.name} ({a.id})</option>)}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase">入库仓库</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs"><option>中央 A1 库房</option><option>危化品库房</option></select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase">具体货位 (Rack)</label>
                      <input type="text" placeholder="L1-A-05" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase">保养前置要求 (Initial Maint.)</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs">
                       <option>无需保养直接入库</option>
                       <option>需进行首检保养后入库</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <div className="pt-6 flex justify-end gap-4">
               <button className="px-8 py-3 rounded-2xl border border-slate-200 text-slate-400 font-black text-[10px] uppercase hover:bg-slate-50 transition-colors">清空重置</button>
               <button className="px-10 py-3 rounded-2xl bg-blue-600 text-white font-black text-[10px] uppercase shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2">
                 <CheckCircle size={16}/> 确认核对并系统入库
               </button>
            </div>
          </div>
        ) : (
          /* 出库与启用模块 */
          <div className="p-8 space-y-10 animate-fade-in">
            {/* 领用部署定义 */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><ArrowRightLeft size={20}/></div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">领用出库与部署启用 (Deployment Strategy)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: '启用日期', type: 'date', icon: <Calendar size={14}/> },
                  { label: '领用责任人', placeholder: '搜索姓名', icon: <UserPlus size={14}/> },
                  { label: '所属部门', placeholder: 'e.g. 研发二组', icon: <Building2 size={14}/> },
                  { label: '归属项目', placeholder: 'Project ID', icon: <Target size={14}/> },
                  { label: '具体部署楼栋/房间', placeholder: 'D栋 304室', icon: <MapPin size={14}/> },
                ].map((field, i) => (
                  <div key={i} className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      {field.icon} {field.label}
                    </label>
                    <input type={field.type || 'text'} placeholder={field.placeholder} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* 保养与维保机制 */}
            <section className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Wrench size={20}/></div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">后续保养与响应策略 (Maintenance Plan)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase">具体保养技术要求</label>
                      <textarea placeholder="e.g. 每月清洗冷凝器，校准传感器..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs h-28 focus:outline-none focus:border-blue-500"></textarea>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase">定期保养频率</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs">
                           <option>月度 (Monthly)</option>
                           <option>季度 (Quarterly)</option>
                           <option>半年度 (Semi-Annually)</option>
                           <option>年度 (Annually)</option>
                        </select>
                      </div>
                   </div>
                </div>

                <div className="space-y-6 bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">维保响应机制定义</p>
                   <div className="space-y-4">
                      <label className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 cursor-pointer hover:border-blue-300 group transition-all">
                        <input type="radio" name="maint-route" className="w-4 h-4 text-blue-600" defaultChecked />
                        <div className="flex-1">
                           <p className="text-xs font-black text-slate-800">故障后进入园区智慧工单池</p>
                           <p className="text-[9px] text-slate-400 mt-1 uppercase">Automatic Routing to Sinan Ops Pool</p>
                        </div>
                        <ShieldCheck size={20} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"/>
                      </label>
                      <label className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 cursor-pointer hover:border-blue-300 group transition-all">
                        <input type="radio" name="maint-route" className="w-4 h-4 text-blue-600" />
                        <div className="flex-1">
                           <p className="text-xs font-black text-slate-800">关联外部专业维保单位</p>
                           <input type="text" placeholder="输入维保单位(SLA)名称" className="mt-2 w-full text-[9px] border-b border-slate-100 focus:outline-none focus:border-blue-500" />
                        </div>
                        <ExternalLink size={20} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"/>
                      </label>
                   </div>
                </div>
              </div>
            </section>

            <div className="pt-6 flex justify-end gap-4">
               <button className="px-10 py-3 rounded-2xl bg-slate-900 text-white font-black text-[10px] uppercase shadow-xl hover:bg-slate-950 transition-all flex items-center gap-2">
                 <Truck size={16}/> 确认并完成资产出库启用
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
