
import React, { useEffect, useState } from 'react';
import { 
  Users, Building2, FlaskConical, Award, Briefcase, LayoutGrid, Calendar, 
  Dna, Microscope, Activity, Siren, Wind, Thermometer, Droplets, Volume2, 
  MapPin, Clock, ScreenShare, Sparkles, ChevronRight
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  INCUBATOR_STATS, VISITOR_STATS, INSTRUMENT_INVENTORY, 
  SERVICE_CENTERS, RECENT_ENTERPRISES, ENV_MONITORING, ALERT_MESSAGES 
} from '../utils/mockData';

const Dashboard: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#000814] min-h-screen text-slate-100 p-6 font-sans overflow-x-hidden animate-fade-in relative">
      {/* Top Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Header Area */}
      <header className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
        <div className="flex items-center gap-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/20">
            <Microscope size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white uppercase italic">司南生命科技专业孵化器</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-bold mt-1">Sinan Life Science Professional Incubator</p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-6 text-[11px] font-black uppercase text-slate-400">
             <div className="flex items-center gap-2">
                <Thermometer size={14} className="text-blue-400"/>
                <span>23°C</span>
             </div>
             <div className="flex items-center gap-2">
                <Droplets size={14} className="text-cyan-400"/>
                <span>60% RH</span>
             </div>
             <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <ScreenShare size={14} className="text-emerald-400"/>
                <span className="text-emerald-400">投屏码: X0YJLL</span>
             </div>
          </div>
          <div className="text-right">
             <p className="text-xl font-black font-mono tracking-widest text-blue-400">{time}</p>
             <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">2024年 05月 20日 星期一</p>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column: Stats & Inventory */}
        <div className="lg:col-span-3 space-y-6">
          {/* 在孵企业情况 */}
          <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm">
             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-6 flex items-center gap-2">
                <Building2 size={16}/> 在孵企业情况
             </h3>
             <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {[
                  { label: '在孵企业数量', value: INCUBATOR_STATS.enterprises, unit: '家', icon: <Building2 size={14}/> },
                  { label: '共享实验室', value: INCUBATOR_STATS.sharedLabs, unit: '个', icon: <FlaskConical size={14}/> },
                  { label: '专利总数', value: INCUBATOR_STATS.patents, unit: '件', icon: <Award size={14}/> },
                  { label: '员工总数', value: INCUBATOR_STATS.employees, unit: '人', icon: <Users size={14}/> },
                  { label: '高端人才总数', value: INCUBATOR_STATS.talents, unit: '人', icon: <Sparkles size={14}/> },
                  { label: '商标总数', value: INCUBATOR_STATS.trademarks, unit: '件', icon: <Award size={14}/> },
                  { label: '共享工位', value: INCUBATOR_STATS.workstations, unit: '个', icon: <LayoutGrid size={14}/> },
                  { label: '共享会议室', value: INCUBATOR_STATS.meetingRooms, unit: '间', icon: <Calendar size={14}/> },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                     <p className="text-[9px] text-slate-500 font-bold uppercase flex items-center gap-1.5">{stat.icon} {stat.label}</p>
                     <p className="text-xl font-black text-slate-100">{stat.value}<span className="text-[10px] ml-1 text-slate-500">{stat.unit}</span></p>
                  </div>
                ))}
                <div className="col-span-2 pt-4 border-t border-white/5">
                   <p className="text-[9px] text-slate-500 font-bold uppercase">孵化面积</p>
                   <p className="text-2xl font-black text-blue-400">{INCUBATOR_STATS.area.toLocaleString()}<span className="text-xs ml-1">m²</span></p>
                </div>
             </div>
          </section>

          {/* 来访信息 */}
          <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm">
             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-6 flex items-center gap-2">
                <Users size={16}/> 来访信息
             </h3>
             <div className="space-y-4 mb-6">
                <div className="flex justify-between items-end">
                   <p className="text-[9px] text-slate-500 font-bold uppercase">总访客人数</p>
                   <p className="text-2xl font-black">{VISITOR_STATS.total.toLocaleString()}<span className="text-xs ml-1 font-bold text-slate-600">人</span></p>
                </div>
                <div className="flex justify-between items-end">
                   <p className="text-[9px] text-slate-500 font-bold uppercase">今年访客人数</p>
                   <p className="text-xl font-black text-slate-300">{VISITOR_STATS.thisYear.toLocaleString()}<span className="text-xs ml-1 font-bold text-slate-600">人</span></p>
                </div>
                <div className="flex justify-between items-end">
                   <p className="text-[9px] text-slate-500 font-bold uppercase">当月访客人数</p>
                   <p className="text-xl font-black text-emerald-400">{VISITOR_STATS.thisMonth.toLocaleString()}<span className="text-xs ml-1 font-bold text-slate-600">人</span></p>
                </div>
             </div>
             <div className="flex gap-1.5 flex-wrap">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className={`w-2 h-4 rounded-full ${i < 8 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-white/5'}`}></div>
                ))}
             </div>
          </section>

          {/* 仪器信息 */}
          <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm">
             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-2">
                <Dna size={16}/> 核心仪器信息
             </h3>
             <div className="space-y-3">
                {INSTRUMENT_INVENTORY.map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                     <span className="text-xs font-bold text-slate-300">{item.name}</span>
                     <span className="text-xs font-black text-indigo-400">{item.count} <span className="text-[9px] text-slate-600">台</span></span>
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* Center Column: Calendar & Service Centers */}
        <div className="lg:col-span-6 space-y-6">
          {/* 活动日历 Module */}
          <section className="bg-gradient-to-b from-blue-900/20 to-transparent border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md relative overflow-hidden h-[500px] flex flex-col justify-center items-center">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             
             {/* Main Graphic - Abstract Sphere/Atom */}
             <div className="relative mb-8">
                <div className="w-40 h-40 bg-blue-600/20 rounded-full blur-3xl absolute -inset-4 animate-pulse"></div>
                <Dna size={80} className="text-blue-500 relative z-10 animate-spin-slow opacity-80" />
             </div>

             <div className="text-center mb-10 relative z-10">
                <p className="text-[10px] font-black tracking-[0.5em] text-blue-400 uppercase mb-2">Sinan Super Incubator</p>
                <h2 className="text-5xl font-black italic tracking-tighter text-white uppercase">活动日历</h2>
                <p className="text-sm font-bold text-slate-400 mt-4 uppercase tracking-widest italic opacity-60">期待您的参与 (Looking forward to your visit)</p>
             </div>

             {/* Simple Calendar Strip */}
             <div className="grid grid-cols-7 gap-6 relative z-10">
                {['一', '二', '三', '四', '五', '六', '日'].map(d => (
                   <div key={d} className="text-[10px] font-black text-slate-600 text-center uppercase">{d}</div>
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                   <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border ${i === 2 ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 border-blue-500' : 'bg-white/5 text-slate-500 border-white/5'}`}>
                      {20 + i}
                   </div>
                ))}
             </div>

             {/* Date Banner */}
             <div className="absolute top-8 right-8 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-2xl flex items-center gap-3">
                <Calendar size={18} className="text-blue-400"/>
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-100">—— 05月周历 ——</span>
             </div>
          </section>

          {/* 三大服务中心 */}
          <section className="grid grid-cols-3 gap-6">
             {SERVICE_CENTERS.map((center, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center backdrop-blur-sm group hover:bg-blue-600/10 transition-all cursor-pointer">
                   <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6 shadow-2xl relative">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                      <span className="text-3xl relative z-10">{center.icon}</span>
                   </div>
                   <h4 className="text-xs font-black text-slate-200 mb-2 uppercase tracking-widest">{center.name}</h4>
                   <p className="text-2xl font-black text-blue-400">{center.services}<span className="text-[10px] ml-1 text-slate-600 font-bold uppercase">项服务</span></p>
                </div>
             ))}
          </section>
        </div>

        {/* Right Column: Resident List, Env, Alerts */}
        <div className="lg:col-span-3 space-y-6">
          {/* 入孵企业 List */}
          <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm overflow-hidden h-[300px] flex flex-col">
             <div className="flex justify-between items-center mb-6 shrink-0">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 flex items-center gap-2">
                   <Users size={16}/> 入孵企业
                </h3>
                <div className="flex bg-white/5 p-1 rounded-lg">
                   <span className="px-2 py-0.5 text-[8px] font-black uppercase text-slate-300 bg-white/10 rounded">名单中</span>
                   <span className="px-2 py-0.5 text-[8px] font-black uppercase text-slate-600">历史名单</span>
                </div>
             </div>
             <div className="flex-1 space-y-3 overflow-hidden">
                <div className="animate-marquee-vertical space-y-3">
                   {RECENT_ENTERPRISES.concat(RECENT_ENTERPRISES).map((ent, i) => (
                     <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-4 group hover:bg-white/10 transition-all">
                        <span className="text-[8px] font-mono text-slate-500 font-black shrink-0">{ent.date}</span>
                        <span className="text-[10px] font-bold text-slate-300 truncate group-hover:text-white transition-colors">{ent.name}</span>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* 环境监测 */}
          <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 flex items-center gap-2">
                   <Activity size={16}/> 环境监测
                </h3>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                   <div className="text-center leading-none">
                      <p className="text-[14px] font-black text-emerald-400">{ENV_MONITORING.airQuality}</p>
                      <p className="text-[8px] font-black text-emerald-600 uppercase">良</p>
                   </div>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-y-6">
                {[
                  { label: '新风量', value: ENV_MONITORING.freshAir, unit: 'm³/min', icon: <Wind size={12}/>, color: 'text-blue-400' },
                  { label: '甲醛', value: ENV_MONITORING.formaldehyde, unit: 'mg/m³', icon: <Droplets size={12}/>, color: 'text-cyan-400' },
                  { label: '噪声', value: ENV_MONITORING.noise, unit: 'dB', icon: <Volume2 size={12}/>, color: 'text-amber-400' },
                  { label: '环境温度', value: ENV_MONITORING.temperature, unit: '℃', icon: <Thermometer size={12}/>, color: 'text-rose-400' },
                  { label: '环境湿度', value: ENV_MONITORING.humidity, unit: '%', icon: <Droplets size={12}/>, color: 'text-blue-400' },
                ].map((env, i) => (
                  <div key={i} className="space-y-1">
                     <p className="text-[9px] text-slate-500 font-bold uppercase flex items-center gap-1.5">{env.icon} {env.label}</p>
                     <p className={`text-sm font-black ${env.color}`}>{env.value}<span className="text-[9px] ml-1 text-slate-600 font-bold">{env.unit}</span></p>
                  </div>
                ))}
             </div>
          </section>

          {/* 警示信息 */}
          <section className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm">
             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-rose-500 mb-6 flex items-center gap-2">
                <Siren size={16}/> 警示信息 (Alert Messages)
             </h3>
             <div className="space-y-3">
                {ALERT_MESSAGES.map((alert, i) => (
                  <div key={i} className="flex gap-4 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-rose-900/10 transition-all cursor-pointer">
                     <span className="text-[8px] font-mono text-slate-500 font-black shrink-0">{alert.date}</span>
                     <p className="text-[10px] font-bold text-slate-400 truncate leading-tight">{alert.msg}</p>
                  </div>
                ))}
             </div>
             <button className="w-full mt-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase text-slate-600 hover:text-rose-400 transition-colors">
                View All Incident Logs <ChevronRight size={12}/>
             </button>
          </section>
        </div>
      </div>

      <style>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 20s linear infinite;
        }
        .animate-marquee-vertical:hover {
          animation-play-state: paused;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      `}</style>
    </div>
  );
};

export default Dashboard;
