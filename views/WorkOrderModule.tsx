
import React, { useState } from 'react';
import { 
  Wrench, FileText, Timer, CheckCircle, AlertCircle, TrendingUp, TrendingDown, Search, 
  Plus, MoreHorizontal, ListTodo, Package, Clock, Calculator, ThumbsUp, X, Save, 
  CalendarDays, Sparkles, Siren, BarChart3, PieChart, Activity, Users, Filter,
  Phone, QrCode, BellRing, Gauge, History, ArrowUpRight, Zap
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, CartesianGrid } from 'recharts';
import { WORK_ORDERS, THRESHOLD_ALERTS, CONSUMABLE_REMINDERS } from '../utils/mockData';
import { WorkOrder } from '../types';

/** 1. 工单概览 (保持不变) */
export const WorkOrderOverviewView = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '今日新增工单', value: '28', trend: '+12%', isUp: true, icon: <FileText />, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: '平均修复时长', value: '3.5h', trend: '-15%', isUp: false, icon: <Timer />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: '工单完成率', value: '96.4%', trend: '+2.1%', isUp: true, icon: <CheckCircle />, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: '当前积压工单', value: '5', trend: '+2', isUp: true, bad: true, icon: <AlertCircle />, color: 'text-rose-600', bg: 'bg-rose-50' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between transition-hover">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
              <h3 className={`text-3xl font-black ${item.color}`}>{item.value}</h3>
              <div className={`flex items-center text-[10px] font-black mt-1 ${item.bad ? 'text-rose-500' : (item.isUp ? 'text-emerald-500' : 'text-slate-400')}`}>
                {item.isUp ? <TrendingUp size={12} className="mr-1"/> : <TrendingDown size={12} className="mr-1"/>}
                {item.trend} <span className="text-slate-400 font-bold ml-1">较昨日</span>
              </div>
            </div>
            <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shadow-inner`}>{item.icon}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-2"><BarChart3 className="text-blue-600" size={18}/> 近7日工单处理趋势</h3>
              <div className="flex gap-4">
                 <span className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 uppercase"><div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div> 新增</span>
                 <span className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 uppercase"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> 完成</span>
              </div>
           </div>
           <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={[{day:'Mon',a:20,b:18},{day:'Tue',a:25,b:22},{day:'Wed',a:30,b:25},{day:'Thu',a:15,b:14},{day:'Fri',a:28,b:26},{day:'Sat',a:10,b:12},{day:'Sun',a:8,b:10}]}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 800 }} />
                    <Bar dataKey="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="b" fill="#10b981" radius={[4, 4, 0, 0]} />
                 </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl flex flex-col justify-between">
           <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2"><Users className="text-blue-400" size={18}/> 运维之星榜单</h3>
           <div className="space-y-5">
              {[
                { name: '李强', count: 142, role: '高级技师', score: 98 },
                { name: '王建国', count: 128, role: '暖通专家', score: 95 },
                { name: '陈主管', count: 115, role: '资产部', score: 92 },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black text-xs border border-white/5">{i+1}</div>
                      <div>
                         <p className="text-xs font-black">{user.name}</p>
                         <p className="text-[10px] text-slate-500 uppercase">{user.role}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-xs font-black text-blue-400">{user.count} 单</p>
                      <p className="text-[10px] text-emerald-400 font-bold">{user.score} pts</p>
                   </div>
                </div>
              ))}
           </div>
           <button className="mt-8 w-full py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">查看全部绩效</button>
        </div>
      </div>
    </div>
  );
};

/** 2. 报修管理 (保持不变) */
export const WorkOrderRepairView = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-10 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-inner"><Wrench size={40}/></div>
        <h3 className="text-2xl font-black text-slate-800 mb-2">欢迎来到报修受理中心</h3>
        <p className="text-sm text-slate-400 mb-10 leading-relaxed font-medium italic">此处为园区原始报修记录的第一个触点，提交后将进入工单池由 AI 或人工进行智能派发。</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
           <button className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:border-blue-500 hover:bg-blue-50 transition-all group">
              <Phone className="mx-auto mb-4 text-slate-400 group-hover:text-blue-600 transition-colors" size={32} />
              <p className="text-sm font-black text-slate-800">人工填报 / 内部热线</p>
              <p className="text-[10px] text-slate-400 mt-2 uppercase">Manual / Hotline Input</p>
           </button>
           <button className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <QrCode className="mx-auto mb-4 text-slate-400 group-hover:text-emerald-600 transition-colors" size={32} />
              <p className="text-sm font-black text-slate-800">补录扫码报修</p>
              <p className="text-[10px] text-slate-400 mt-2 uppercase">Scan QR Code Capture</p>
           </button>
        </div>

        <div className="text-left space-y-6 pt-8 border-t border-slate-100">
           <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">报修资产对象 (Asset Target)</label>
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16}/>
                 <input type="text" placeholder="输入资产 ID 或名称 (留空则代表设施类故障)" className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-xs focus:ring-2 focus:ring-blue-500/20 focus:outline-none" />
              </div>
           </div>
           <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">故障详细描述 (Issue Detail)</label>
              <textarea placeholder="请详细描述故障现象、发生位置及紧急程度..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs h-32 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"></textarea>
           </div>
           <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">确认并提交至工单池</button>
        </div>
      </div>
    </div>
  );
};

/** 3. 工单处理弹窗 (保持不变) */
const ProcessingModal = ({ wo, onClose }: { wo: WorkOrder, onClose: () => void }) => {
  const [step, setStep] = useState<'process' | 'parts' | 'review'>('process');
  
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
       <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden relative border border-white/20">
          <div className="p-8 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100"><Wrench size={24}/></div>
                <div>
                   <h3 className="text-lg font-black text-slate-800">{wo.title}</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{wo.id} | {wo.assignee || '待派发'}</p>
                </div>
             </div>
             <button onClick={onClose} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-colors"><X size={20}/></button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-10">
             <div className="flex bg-slate-100 p-1 rounded-2xl w-fit mx-auto mb-10">
                {[
                  { id: 'process', label: '作业执行', icon: <ListTodo size={14}/> },
                  { id: 'parts', label: '备件申请', icon: <Package size={14}/> },
                  { id: 'review', label: '核算与评价', icon: <ThumbsUp size={14}/> }
                ].map(s => (
                  <button key={s.id} onClick={() => setStep(s.id as any)} className={`flex items-center gap-2 px-8 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${step === s.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
                     {s.icon} {s.label}
                  </button>
                ))}
             </div>

             {step === 'process' && (
                <div className="space-y-6 animate-fade-in">
                   <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2"><ListTodo className="text-blue-500" size={18}/> 现场作业 Checklist</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['身份及安全确认', '故障现象复核', '断电/挂牌操作', '核心组件更换', '通电压力测试', '清理作业现场'].map((item, i) => (
                        <label key={i} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl cursor-pointer hover:bg-white hover:border-blue-300 transition-all group">
                           <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-300 text-blue-600 focus:ring-blue-500" />
                           <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600">{item}</span>
                        </label>
                      ))}
                   </div>
                </div>
             )}

             {step === 'parts' && (
                <div className="space-y-6 animate-fade-in">
                   <div className="flex justify-between items-center">
                      <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2"><Package className="text-emerald-500" size={18}/> 备件申领清单</h4>
                      <button className="text-[10px] font-black text-blue-600 border border-blue-200 px-4 py-2 rounded-xl hover:bg-blue-50 transition-colors">+ 添加备件关联</button>
                   </div>
                   <div className="bg-slate-50 border border-dashed border-slate-300 rounded-[2rem] p-12 text-center text-slate-400">
                      <Package size={48} className="mx-auto mb-4 opacity-20" />
                      <p className="text-xs font-bold">暂无备件申领记录，点击右上角添加。</p>
                   </div>
                </div>
             )}

             {step === 'review' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in">
                   <div className="space-y-6">
                      <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2"><Calculator className="text-indigo-500" size={18}/> 维修成本核算</h4>
                      <div className="space-y-4">
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase">实际人工耗时 (h)</label>
                            <input type="number" defaultValue={2.5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs" />
                         </div>
                         <div className="p-5 bg-indigo-50 border border-indigo-100 rounded-2xl">
                            <div className="flex justify-between text-xs font-black text-indigo-900 mb-2"><span>人工成本 (¥150/h)</span><span>¥ 375.00</span></div>
                            <div className="flex justify-between text-xs font-black text-indigo-900"><span>材料消耗总计</span><span>¥ 0.00</span></div>
                            <div className="mt-4 pt-4 border-t border-indigo-200 flex justify-between items-baseline">
                               <span className="text-[10px] uppercase font-black text-indigo-400">总计支出 (TCO Impact)</span>
                               <span className="text-xl font-black text-indigo-600">¥ 375.00</span>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="space-y-6">
                      <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2"><ThumbsUp className="text-emerald-500" size={18}/> 完工评价与沉淀</h4>
                      <div className="space-y-4">
                         <div className="flex gap-2">
                            {['非常满意', '满意', '一般'].map(r => (
                              <button key={r} className="flex-1 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-black uppercase hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all">{r}</button>
                            ))}
                         </div>
                         <div className="p-5 bg-purple-50 border border-purple-100 rounded-2xl flex items-center gap-4 group cursor-pointer">
                            <div className="w-5 h-5 rounded-md border-2 border-purple-200 group-hover:bg-purple-600 group-hover:border-purple-600 transition-all flex items-center justify-center text-white"><CheckCircle size={14}/></div>
                            <div>
                               <p className="text-xs font-black text-purple-900">纳入企业知识库</p>
                               <p className="text-[9px] text-purple-500 uppercase mt-0.5">Sync to Sinan Knowledge Base</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             )}
          </div>

          <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
             <button onClick={onClose} className="px-8 py-3 rounded-2xl border border-slate-200 text-slate-400 font-black text-[10px] uppercase hover:bg-white">取消</button>
             <button className="px-10 py-3 rounded-2xl bg-blue-600 text-white font-black text-[10px] uppercase shadow-xl shadow-blue-200 flex items-center gap-2 hover:bg-blue-700">
                <Save size={16}/> 确认完工并自动归档
             </button>
          </div>
       </div>
    </div>
  );
};

/** 4. 工单列表 (保持不变) */
export const WorkOrderListView = () => {
  const [selectedWO, setSelectedWO] = useState<WorkOrder | null>(null);

  const STATUS_MAP = {
    pool: { label: '工单池', color: 'bg-slate-100 text-slate-600' },
    repairing: { label: '维修中', color: 'bg-blue-100 text-blue-600' },
    waiting_parts: { label: '备件申请', color: 'bg-amber-100 text-amber-600' },
    knowledge_base: { label: '知识库', color: 'bg-purple-100 text-purple-600' }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-4">
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest flex items-center gap-3"><ListTodo size={24} className="text-blue-600"/> 运维工单总览</h2>
            <div className="flex bg-slate-100 p-1 rounded-xl">
               {['全部', '紧急', '工单池', '我负责的'].map(f => (
                 <button key={f} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${f === '全部' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'}`}>{f}</button>
               ))}
            </div>
         </div>
         <div className="flex gap-4">
            <div className="relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16}/>
               <input type="text" placeholder="搜索工单号或关键词..." className="bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-2 text-xs w-64 focus:outline-none focus:border-blue-500" />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2"><Plus size={14}/> 创建工单</button>
         </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
         <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">
               <tr>
                  <th className="p-5">状态</th>
                  <th className="p-5">工单编号 / 描述</th>
                  <th className="p-5">当前进度</th>
                  <th className="p-5">负责人</th>
                  <th className="p-5">创建时间</th>
                  <th className="p-5 text-right">操作</th>
               </tr>
            </thead>
            <tbody>
               {WORK_ORDERS.map(wo => {
                 const status = (STATUS_MAP as any)[wo.status] || STATUS_MAP.pool;
                 return (
                   <tr key={wo.id} className="border-b hover:bg-slate-50 transition-colors group">
                      <td className="p-5">
                         <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase ${status.color}`}>{status.label}</span>
                      </td>
                      <td className="p-5">
                         <p className="text-xs font-mono text-slate-400 uppercase tracking-tighter mb-1">{wo.id}</p>
                         <p className="text-xs font-black text-slate-700">{wo.title}</p>
                      </td>
                      <td className="p-5 w-1/4">
                         <div className="flex justify-between text-[9px] font-black uppercase text-slate-400 mb-1.5"><span>{wo.timeline.split('->').pop()?.trim()}</span><span>{wo.progress}%</span></div>
                         <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${wo.progress}%` }}></div>
                         </div>
                      </td>
                      <td className="p-5">
                         {wo.assignee ? <div className="flex items-center gap-2 text-xs font-bold text-slate-600"><Users size={14} className="text-slate-300"/> {wo.assignee}</div> : <span className="text-[10px] font-black text-rose-500 animate-pulse uppercase">待派单 (In Pool)</span>}
                      </td>
                      <td className="p-5 text-[10px] font-bold text-slate-400">{wo.created}</td>
                      <td className="p-5 text-right">
                         <button onClick={() => setSelectedWO(wo)} className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><MoreHorizontal size={18}/></button>
                      </td>
                   </tr>
                 );
               })}
            </tbody>
         </table>
      </div>

      {selectedWO && <ProcessingModal wo={selectedWO} onClose={() => setSelectedWO(null)} />}
    </div>
  );
};

/** 5. 巡检计划管理 (Inspection Plan) - 增加提醒中心 */
export const WorkOrderInspectionView = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'ai' | 'alerts'>('calendar');
  const [recommending, setRecommending] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
        {[
           { id: 'calendar', label: '巡检日历与任务', icon: <CalendarDays size={14}/> },
           { id: 'alerts', label: '提醒与预警中心', icon: <BellRing size={14}/> },
           { id: 'ai', label: '智能计划定制 (AI)', icon: <Sparkles size={14}/> }
        ].map(tab => (
           <button 
             key={tab.id}
             onClick={() => setActiveTab(tab.id as any)} 
             className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all flex items-center gap-2 ${activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
           >
              {tab.icon} {tab.label}
           </button>
        ))}
      </div>

      {activeTab === 'alerts' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-fade-in">
           {/* 阀值预警实时监测 */}
           <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                    <Gauge size={18} className="text-rose-500" /> 实时指标阀值监控 (Threshold Monitor)
                 </h3>
                 <span className="bg-rose-50 text-rose-600 text-[9px] font-black px-2 py-1 rounded-full uppercase">2 Active Alerts</span>
              </div>
              
              <div className="space-y-4">
                 {THRESHOLD_ALERTS.map(alert => (
                    <div key={alert.id} className={`p-6 border rounded-[2rem] transition-all hover:shadow-md ${
                       alert.status === 'critical' ? 'bg-rose-50 border-rose-100' : 
                       alert.status === 'warning' ? 'bg-amber-50 border-amber-100' : 'bg-slate-50 border-slate-100'
                    }`}>
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <p className="text-sm font-black text-slate-800">{alert.assetName}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">{alert.metric}</p>
                          </div>
                          <div className="text-right">
                             <p className="text-[10px] font-black text-slate-400 uppercase mb-1">采样时间: {alert.time}</p>
                             <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                                alert.status === 'critical' ? 'bg-rose-600 text-white' : 
                                alert.status === 'warning' ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'
                             }`}>{alert.status}</span>
                          </div>
                       </div>
                       
                       <div className="flex items-end justify-between bg-white/40 p-4 rounded-2xl border border-white/20">
                          <div className="flex items-baseline gap-2">
                             <span className={`text-3xl font-black ${alert.status === 'critical' ? 'text-rose-600' : 'text-slate-800'}`}>{alert.currentValue}</span>
                             <span className="text-xs font-bold text-slate-400">{alert.unit}</span>
                             <ArrowUpRight size={16} className={`ml-2 ${alert.status === 'normal' ? 'hidden' : 'animate-bounce'}`} />
                          </div>
                          <div className="text-right">
                             <p className="text-[9px] font-black text-slate-400 uppercase mb-1">设定上限</p>
                             <p className="text-sm font-black text-slate-700">{alert.threshold} {alert.unit}</p>
                          </div>
                       </div>

                       {alert.status !== 'normal' && (
                          <div className="mt-4 flex gap-2">
                             <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">下发诊断任务</button>
                             <button className="px-6 border border-slate-200 py-2.5 rounded-xl text-[10px] font-black uppercase text-slate-400 hover:bg-white transition-colors">误报上报</button>
                          </div>
                       )}
                    </div>
                 ))}
              </div>
           </div>

           {/* 备件耗材寿命预警 */}
           <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="flex justify-between items-center mb-8">
                 <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                    <History size={18} className="text-blue-400" /> 预测性耗材寿命提醒 (Parts Life)
                 </h3>
              </div>

              <div className="space-y-8 flex-1">
                 {CONSUMABLE_REMINDERS.map(rem => (
                    <div key={rem.id} className="space-y-3 group cursor-pointer">
                       <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                             <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 transition-colors ${
                                rem.status === 'overdue' ? 'bg-rose-500/20 text-rose-400' : 
                                rem.status === 'replace-soon' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-blue-400'
                             }`}>
                                <Package size={20}/>
                             </div>
                             <div>
                                <h4 className="text-sm font-black">{rem.partName}</h4>
                                <p className="text-[10px] text-slate-500 uppercase font-bold">{rem.assetName}</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-xl font-black leading-none">{rem.remainingLife}%</p>
                             <p className="text-[9px] text-slate-500 uppercase font-black mt-1">剩余寿命</p>
                          </div>
                       </div>
                       
                       <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`absolute inset-y-0 left-0 transition-all duration-1000 ${
                              rem.status === 'overdue' ? 'bg-rose-500' : 
                              rem.status === 'replace-soon' ? 'bg-amber-500' : 'bg-emerald-500'
                            }`} 
                            style={{ width: `${rem.remainingLife}%` }}
                          ></div>
                       </div>
                       
                       <div className="flex justify-between items-center text-[10px] font-black uppercase">
                          <span className="text-slate-500">预计可用时长: <span className="text-white">{rem.estimatedDays} 天</span></span>
                          <button className={`flex items-center gap-1.5 transition-colors ${
                            rem.status === 'healthy' ? 'text-slate-600' : 'text-blue-400 hover:text-blue-300'
                          }`}>
                             <Zap size={10}/> {rem.status === 'healthy' ? '定期监控中' : '申请耗材库出库'}
                          </button>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-4">
                 <Sparkles size={24} className="text-blue-400" />
                 <div>
                    <p className="text-xs font-black">AI 自动补货建议</p>
                    <p className="text-[9px] text-slate-400 uppercase mt-0.5 leading-relaxed">检测到近期多台冰箱压缩机处于高负荷运行，建议增购 5 组密封配件以防突发性失效。</p>
                 </div>
              </div>
           </div>
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                 <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">2024年 5月 巡检全视图</h3>
                 <div className="flex gap-4 text-[10px] font-black uppercase">
                    <span className="flex items-center gap-1.5 text-emerald-500"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> 已完成</span>
                    <span className="flex items-center gap-1.5 text-slate-300"><div className="w-2.5 h-2.5 rounded-full bg-slate-100"></div> 待执行</span>
                    <span className="flex items-center gap-1.5 text-rose-500"><div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div> 逾期</span>
                 </div>
              </div>
              <div className="grid grid-cols-7 gap-4">
                 {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} className="text-center text-[10px] font-black text-slate-300 uppercase mb-4">{d}</div>)}
                 {Array.from({ length: 31 }).map((_, i) => (
                   <div key={i} className={`aspect-square rounded-2xl border flex flex-col items-center justify-center gap-2 cursor-pointer transition-all hover:border-blue-500 ${i === 20 ? 'bg-blue-50 border-blue-200' : 'border-slate-50 bg-slate-50/30'}`}>
                      <span className={`text-xs font-black ${i === 20 ? 'text-blue-600' : 'text-slate-700'}`}>{i + 1}</span>
                      {i % 4 === 0 && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>}
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm flex flex-col">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-8">当日待办事宜</h3>
              <div className="space-y-4 flex-1 overflow-y-auto">
                 {[
                   { title: '洁净室温湿度复核', time: '09:00', type: 'routine' },
                   { title: 'D栋主变压器巡查', time: '14:30', type: 'special' },
                 ].map((t, idx) => (
                   <div key={idx} className="p-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                      <div className="flex justify-between items-center mb-3">
                         <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">{t.type}</span>
                         <span className="text-[10px] font-black text-slate-400 uppercase">{t.time}</span>
                      </div>
                      <p className="text-xs font-black text-slate-700">{t.title}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      )}

      {activeTab === 'ai' && (
        <div className="max-w-3xl mx-auto space-y-10 py-10">
           <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner"><Sparkles size={40}/></div>
              <h3 className="text-xl font-black text-slate-800">AI 智能预测巡检模型</h3>
              <p className="text-sm text-slate-400 font-medium italic">基于历史维保大数据与传感器告警频次，自动为您的资产定制巡检路径。</p>
           </div>
           
           <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">预测资产类别</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-blue-500/20"><option>实验室精密设备</option><option>基础设施/强电</option></select>
                 </div>
                 <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">巡检优先目标</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-blue-500/20"><option>预防性维护 (PM)</option><option>能耗优化专项</option></select>
                 </div>
              </div>
              <button onClick={() => {setRecommending(true); setTimeout(()=>setRecommending(false), 2000)}} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-xs uppercase shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
                 {recommending ? <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div> : <Sparkles size={18}/>}
                 {recommending ? '正在分析历史故障树...' : '生成 AI 推荐巡检计划'}
              </button>
           </div>
           
           {!recommending && (
             <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2.5rem] flex items-start gap-6 animate-fade-in">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm shrink-0"><Siren size={24}/></div>
                <div>
                   <h4 className="text-sm font-black text-blue-900">推荐建议：2024夏季生物制冷系统专项巡检</h4>
                   <p className="text-xs text-blue-700/70 mt-1 leading-relaxed italic">"系统检测到 D栋 3-5层 离心机在 25℃ 以上环境下运行电流增加 15%，建议将月度巡检频率提升至周度，重点核查冷凝器清洁状态。"</p>
                </div>
             </div>
           )}
        </div>
      )}
    </div>
  );
};
