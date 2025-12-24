
import React, { useState } from 'react';
import { 
  Zap, Wind, Thermometer, Droplets, Monitor, Play, Camera, 
  DoorOpen, User, Calendar, Coffee, Tv, Video, FileText, 
  MapPin, Car, CheckCircle, Smartphone, Send, Clock, Layers,
  Lightbulb, Shield, Eye, Trash2, Plus, Users, Trash, 
  FileSignature, Coins, Heart, Lock, EyeOff, MessageSquare, Briefcase,
  /* Fixed missing imports */
  MoreHorizontal, AlertCircle, Filter
} from 'lucide-react';
import { ROOMS, VISITORS, CONTROL_ROOMS, TENANTS, CONTRACTS, UTILITY_BILLS, CARE_RECORDS } from '../utils/mockData';

/** 1. 智能控制中心 (Service Control Center) */
// Added implementation of ServiceControlView
export const ServiceControlView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {CONTROL_ROOMS.map(room => (
        <div key={room.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><Monitor size={24}/></div>
            <div className="flex gap-2">
              {room.temp && <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-[10px] font-black">{room.temp}°C</span>}
              {room.humidity && <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-lg text-[10px] font-black">{room.humidity}% RH</span>}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800">{room.name}</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Room Control ID: {room.id}</p>
          </div>
          <div className="space-y-3">
             <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${room.light ? 'bg-amber-100 text-amber-600' : 'bg-slate-200 text-slate-400'}`}><Lightbulb size={16}/></div>
                   <span className="text-xs font-black text-slate-700">Lighting</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors cursor-pointer ${room.light ? 'bg-blue-600' : 'bg-slate-300'}`}>
                   <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${room.light ? 'left-6' : 'left-1'}`}></div>
                </div>
             </div>
             <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${room.ac ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-400'}`}><Wind size={16}/></div>
                   <span className="text-xs font-black text-slate-700">Air Conditioning</span>
                </div>
                <div className={`w-10 h-5 rounded-full relative transition-colors cursor-pointer ${room.ac ? 'bg-blue-600' : 'bg-slate-300'}`}>
                   <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${room.ac ? 'left-6' : 'left-1'}`}></div>
                </div>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/** 2. 会议室预约 (Meeting Room Booking) */
// Added implementation of ServiceMeetingView
export const ServiceMeetingView = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ROOMS.map(room => (
          <div key={room.id} className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-slate-800">{room.name}</h3>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase border ${room.isAvailable ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'}`}>
                  {room.isAvailable ? 'Available' : 'Occupied'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400"><Users size={14}/> {room.capacity} Pax</div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400"><Layers size={14}/> Floor {room.floor}</div>
              </div>
              {!room.isAvailable && room.currentMeeting && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Current Meeting</p>
                  <p className="text-sm font-black text-slate-800">{room.currentMeeting.title}</p>
                  <p className="text-xs text-blue-600 font-bold mt-1">{room.currentMeeting.time}</p>
                </div>
              )}
              <button className={`w-full py-3 rounded-2xl font-black text-[10px] uppercase shadow-lg transition-all ${room.isAvailable ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
                {room.isAvailable ? 'Book This Room' : 'View Schedule'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/** 3. 访客预约管理 (Visitor Management) */
// Added implementation of ServiceVisitorView
export const ServiceVisitorView = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden animate-fade-in">
      <div className="p-8 border-b border-slate-100 flex justify-between items-center">
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">访客预约记录 (Visitor Logs)</h3>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase shadow-xl">+ 预约新访客</button>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">
          <tr>
            <th className="p-5">访客姓名</th>
            <th className="p-5">受访人员</th>
            <th className="p-5">进场时间</th>
            <th className="p-5">停车需求</th>
            <th className="p-5">状态</th>
            <th className="p-5 text-right">放行码</th>
          </tr>
        </thead>
        <tbody>
          {VISITORS.map(v => (
            <tr key={v.id} className="border-b hover:bg-slate-50 transition-colors">
              <td className="p-5 font-black text-slate-800">{v.visitorName}</td>
              <td className="p-5 font-bold text-slate-600">{v.hostName}</td>
              <td className="p-5 font-black text-blue-600">{v.entryTime}</td>
              <td className="p-5 text-center">
                {v.needParking ? <Car size={16} className="text-blue-500 mx-auto" /> : <span className="text-slate-200">-</span>}
              </td>
              <td className="p-5">
                <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border ${v.exitPassStatus === 'issued' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                  {v.exitPassStatus === 'issued' ? '已发放' : '待处理'}
                </span>
              </td>
              <td className="p-5 text-right">
                <button className="text-blue-600"><Smartphone size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/** 4. 租户管理 (Tenant Management) */
export const ServiceTenantView = () => {
  const [activeSubTab, setActiveSubTab] = useState<'contracts' | 'utilities' | 'care'>('contracts');
  const [hasPermission, setHasPermission] = useState(false); // 模拟权限状态

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* 顶部子页签 */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
        {[
          { id: 'contracts', label: '租赁合同库', icon: <FileSignature size={14}/> },
          { id: 'utilities', label: '能耗收缴看板', icon: <Coins size={14}/> },
          { id: 'care', label: '客户关怀记录', icon: <Heart size={14}/> }
        ].map(tab => (
          <button 
            key={tab.id} 
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${activeSubTab === tab.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {activeSubTab === 'contracts' && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">园区租户与合同台账 (Tenant Ledger)</h3>
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase shadow-lg shadow-blue-200">+ 新增租户入驻</button>
             </div>
             <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">
                   <tr>
                      <th className="p-5">租户名称 / 行业</th>
                      <th className="p-5">房号</th>
                      <th className="p-5">合同有效期</th>
                      <th className="p-5">月租金 / 押金</th>
                      <th className="p-5">状态</th>
                      <th className="p-5 text-right">操作</th>
                   </tr>
                </thead>
                <tbody>
                   {TENANTS.map(tenant => {
                     const contract = CONTRACTS.find(c => c.tenantId === tenant.id);
                     return (
                       <tr key={tenant.id} className="border-b hover:bg-slate-50 transition-colors">
                          <td className="p-5">
                             <p className="font-black text-slate-800">{tenant.name}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase">{tenant.industry}</p>
                          </td>
                          <td className="p-5 font-black text-blue-600">{tenant.room}</td>
                          <td className="p-5 text-xs font-bold text-slate-600">
                             {contract ? `${contract.startDate} 至 ${contract.endDate}` : 'N/A'}
                          </td>
                          <td className="p-5">
                             <p className="font-black text-slate-700">¥ {contract?.amount.toLocaleString()}</p>
                             <p className="text-[9px] text-slate-400">押金: ¥ {contract?.deposit.toLocaleString()}</p>
                          </td>
                          <td className="p-5">
                             <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border ${
                               contract?.status === 'active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                               contract?.status === 'expiring' ? 'bg-amber-50 text-amber-600 border-amber-100 animate-pulse' :
                               'bg-slate-50 text-slate-400'
                             }`}>
                                {contract?.status === 'active' ? '执行中' : contract?.status === 'expiring' ? '即将到期' : '已终止'}
                             </span>
                          </td>
                          <td className="p-5 text-right">
                             <button className="text-slate-400 hover:text-blue-600 transition-colors"><MoreHorizontal size={18}/></button>
                          </td>
                       </tr>
                     );
                   })}
                </tbody>
             </table>
          </div>
        </div>
      )}

      {activeSubTab === 'utilities' && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
           <div className="xl:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                 <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">能耗收缴明细 (Utility Billing)</h3>
                 <div className="flex gap-2">
                    <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-[10px] font-black outline-none"><option>2024年 04月</option></select>
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase">导出对账单</button>
                 </div>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">
                   <tr>
                      <th className="p-5">租户</th>
                      <th className="p-5">能耗类型</th>
                      <th className="p-5">消耗量</th>
                      <th className="p-5">费用金额</th>
                      <th className="p-5">状态</th>
                   </tr>
                </thead>
                <tbody>
                   {UTILITY_BILLS.map(bill => {
                     const tenant = TENANTS.find(t => t.id === bill.tenantId);
                     return (
                       <tr key={bill.id} className="border-b hover:bg-slate-50 transition-colors">
                          <td className="p-5 font-bold text-slate-700">{tenant?.name}</td>
                          <td className="p-5">
                             <div className="flex items-center gap-2">
                                {bill.type === 'water' ? <Droplets size={14} className="text-blue-500"/> : <Zap size={14} className="text-amber-500"/>}
                                <span className="text-[10px] font-black uppercase text-slate-500">{bill.type === 'water' ? '水费' : '电费'}</span>
                             </div>
                          </td>
                          <td className="p-5 font-black text-slate-600">{bill.usage} {bill.type === 'water' ? 'm³' : 'kWh'}</td>
                          <td className="p-5 font-black text-slate-900">¥ {bill.amount.toFixed(2)}</td>
                          <td className="p-5">
                             <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border ${
                               bill.status === 'paid' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                               'bg-rose-50 text-rose-600 border-rose-100'
                             }`}>
                                {bill.status === 'paid' ? '已缴纳' : '未缴纳'}
                             </span>
                          </td>
                       </tr>
                     );
                   })}
                </tbody>
              </table>
           </div>

           <div className="space-y-6">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">本月收费概况 (Total Revenue)</h3>
                 <div className="space-y-6">
                    <div>
                       <p className="text-[10px] font-bold text-slate-500 uppercase">已实收总额</p>
                       <p className="text-3xl font-black">¥ 124,502.50</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                          <p className="text-[9px] font-bold text-emerald-400 uppercase">电费收缴率</p>
                          <p className="text-xl font-black">92.4%</p>
                       </div>
                       <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                          <p className="text-[9px] font-bold text-blue-400 uppercase">水费收缴率</p>
                          <p className="text-xl font-black">100%</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                 <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">异常缴费预警</h3>
                 <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-2xl border border-rose-100">
                    <AlertCircle size={24} className="text-rose-600 shrink-0"/>
                    <div>
                       <p className="text-xs font-black text-rose-900">2个租户存在逾期未缴</p>
                       <p className="text-[9px] text-rose-500 uppercase mt-1">请及时下发催缴通知单</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {activeSubTab === 'care' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           {/* 左侧：权限控制面板 */}
           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                    <Shield size={20} className="text-blue-600" />
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">安全与权限 (Security)</h3>
                 </div>
                 <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6 italic">“客户关怀内容涉及企业隐私与园区战略，仅限园区运营管理人员（Role: ADMIN/SERVICE_MANAGER）查看。”</p>
                 <button 
                   onClick={() => setHasPermission(!hasPermission)}
                   className={`w-full py-3 rounded-2xl font-black text-[10px] uppercase transition-all flex items-center justify-center gap-2 ${
                     hasPermission ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-900 text-white shadow-xl'
                   }`}
                 >
                    {hasPermission ? <><Eye size={14}/> 权限已验证 (可读模式)</> : <><Lock size={14}/> 验证管理员权限</>}
                 </button>
              </div>

              {/* 关怀统计卡片 */}
              <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mb-10 -mr-10"></div>
                 <h3 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2"><Briefcase size={16}/> 服务效能评估</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                       <span className="text-[10px] font-bold text-blue-100 uppercase">本月关怀总次数</span>
                       <span className="text-2xl font-black">42 次</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                       <span className="text-[10px] font-bold text-blue-100 uppercase">租户满意度 (Avg)</span>
                       <span className="text-2xl font-black">98.4%</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* 右侧：记录流 */}
           <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                 <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">租户关怀历史记录 (Care Timeline)</h3>
                 <div className="flex items-center gap-2 text-[10px] font-black text-slate-400">
                    <Filter size={14}/> 按租户筛选
                 </div>
              </div>
              <div className="p-8 space-y-8 relative">
                 <div className="absolute left-[3.5rem] top-8 bottom-8 w-px bg-slate-100"></div>
                 {CARE_RECORDS.map((record, i) => (
                   <div key={record.id} className="relative pl-16 group">
                      <div className={`absolute left-0 top-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 ${
                        record.category === 'visit' ? 'bg-blue-500' :
                        record.category === 'gift' ? 'bg-rose-500' :
                        record.category === 'feedback' ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}>
                         {record.category === 'visit' ? <Users size={18}/> : 
                          record.category === 'gift' ? <Heart size={18}/> : 
                          record.category === 'feedback' ? <MessageSquare size={18}/> : <Plus size={18}/>}
                      </div>
                      <div className="flex justify-between items-start mb-2">
                         <div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{record.date}</span>
                            <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                               {record.title}
                               <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 rounded-full uppercase">ID: {record.id}</span>
                            </h4>
                         </div>
                         <div className="text-right">
                            <span className="text-[10px] font-black text-slate-400 uppercase">负责人</span>
                            <p className="text-xs font-bold text-slate-600">{record.manager}</p>
                         </div>
                      </div>
                      
                      {/* 内容遮罩层 (Permission UI) */}
                      <div className="mt-3 relative rounded-2xl overflow-hidden">
                         <div className={`bg-slate-50 border border-slate-200 p-4 transition-all duration-500 ${!hasPermission ? 'blur-sm select-none opacity-40' : 'blur-0 opacity-100'}`}>
                            <p className="text-xs text-slate-600 leading-relaxed font-medium">{record.content}</p>
                         </div>
                         {!hasPermission && (
                           <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200 shadow-sm flex items-center gap-2 animate-pulse">
                                 <Lock size={12} className="text-slate-400"/>
                                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">内容已锁定 - 需验证权限</span>
                              </div>
                           </div>
                         )}
                      </div>
                      <div className="mt-2 flex gap-4 text-[9px] font-black uppercase text-blue-600">
                         <button className="hover:underline">查看租户基本资料</button>
                         <button className="hover:underline">生成关怀工单</button>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 text-center">
                 <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">加载更多历史记录</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
