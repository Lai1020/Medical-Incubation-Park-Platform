
import { Asset, AssetLog, MetricData, MeetingRoom, VisitorRecord, ControlState, WorkOrder, Incident, Tenant, LeaseContract, UtilityBill, CustomerCareRecord, ThresholdAlert, ConsumableReminder } from '../types';

export const INCUBATOR_STATS = {
  enterprises: 23,
  sharedLabs: 2,
  patents: 111,
  employees: 175,
  talents: 16,
  trademarks: 135,
  workstations: 92,
  meetingRooms: 18,
  area: 13886.77
};

export const VISITOR_STATS = {
  total: 4940,
  thisYear: 2168,
  thisMonth: 55,
  hourly: [
    { time: '08:00', count: 5 },
    { time: '10:00', count: 18 },
    { time: '12:00', count: 12 },
    { time: '14:00', count: 25 },
    { time: '16:00', count: 15 },
    { time: '18:00', count: 8 },
  ]
};

export const INSTRUMENT_INVENTORY = [
  { name: '流式细胞仪', count: 1 },
  { name: '4000rpm台式离心机', count: 13 },
  { name: 'CO2 培养箱', count: 9 },
  { name: 'PCR 扩增仪', count: 6 },
  { name: '超低温冰箱', count: 12 },
];

export const SERVICE_CENTERS = [
  { name: '研发加速中心', services: 10, icon: '🚀' },
  { name: '评估验证中心', services: 10, icon: '⚖️' },
  { name: '临床转化中心', services: 10, icon: '🧬' },
];

export const RECENT_ENTERPRISES = [
  { date: '2024-09-25', name: '上海小步智能科技有限公司' },
  { date: '2023-11-02', name: '北京锐威医疗科技有限公司' },
  { date: '2023-08-01', name: '上海三千和医药科技有限公司' },
  { date: '2023-02-01', name: '上海斯诺生命科技有限公司' },
  { date: '2022-12-15', name: '伯豪生物技术有限公司' },
];

export const ENV_MONITORING = {
  airQuality: 80,
  airQualityStatus: '良',
  freshAir: 47,
  formaldehyde: 0.03,
  noise: 56,
  temperature: 22,
  humidity: 30
};

export const ALERT_MESSAGES = [
  { date: '2024-09-11', msg: 'D栋3楼楼道灯不亮' },
  { date: '2024-09-01', msg: '实验室空调异响需检修' },
  { date: '2024-12-12', msg: '洗手间感应水龙头故障' },
  { date: '2024-05-29', msg: '弱电井异常高温 (45℃)' },
  { date: '2024-05-27', msg: '会议室投影幕布卡死' },
];

// ... (Existing exports below)
export const THRESHOLD_ALERTS: ThresholdAlert[] = [
  { id: 'AL-001', assetName: 'D-304 超低温冰箱', metric: '冷柜内部温度', currentValue: -72.4, threshold: -75.0, unit: '°C', status: 'warning', time: '14:45' },
  { id: 'AL-002', assetName: '洁净区 A01 风机', metric: '电机运行电流', currentValue: 12.8, threshold: 10.0, unit: 'A', status: 'critical', time: '13:20' },
  { id: 'AL-003', assetName: '中央供水站', metric: '水压指标', currentValue: 0.42, threshold: 0.35, unit: 'MPa', status: 'normal', time: '15:00' },
];

export const CONSUMABLE_REMINDERS: ConsumableReminder[] = [
  { id: 'CR-001', partName: 'HEPA 高效过滤器', assetName: '生物安全柜 (E-402)', remainingLife: 15, estimatedDays: 12, status: 'replace-soon' },
  { id: 'CR-002', partName: '精密机械润滑油', assetName: '大型离心机 V3', remainingLife: 5, estimatedDays: 3, status: 'overdue' },
  { id: 'CR-003', partName: '密封胶圈', assetName: '高压灭菌锅', remainingLife: 82, estimatedDays: 245, status: 'healthy' },
];

export const TENANTS: Tenant[] = [
  { id: 'T-001', name: '博奥基因生物科技有限公司', room: 'D-304', industry: '基因测序', contact: '王晓亮', phone: '138****0012' },
  { id: 'T-002', name: '睿健医药研发中心', room: 'D-402', industry: '创新药研发', contact: '陈静', phone: '139****5566' },
];

export const CONTRACTS: LeaseContract[] = [
  { id: 'C-2024-001', tenantId: 'T-001', startDate: '2024-01-01', endDate: '2026-12-31', amount: 45000, deposit: 90000, status: 'active' },
];

export const UTILITY_BILLS: UtilityBill[] = [
  { id: 'B-W-001', tenantId: 'T-001', month: '2024-04', type: 'water', usage: 125, amount: 625, status: 'paid' },
];

export const CARE_RECORDS: CustomerCareRecord[] = [
  { id: 'R-001', tenantId: 'T-001', date: '2024-03-15', category: 'visit', title: '季度常规回访', content: '租户反馈D-304空调噪音略大...', manager: '张丽' },
];

export const ASSETS: Asset[] = [
  { 
    id: 'ZC-2023-001', 
    name: '离心机 V3 Pro', 
    vendor: 'Thermo Fisher', 
    date: '2023-01-15', 
    status: '运营中', 
    life: '88%', 
    value: '¥ 125,000', 
    residualValue: '¥ 118,500', 
    tco: '¥ 128,650',
    healthScore: 98.5,
    efficiency: 82.4,
    manager: '张工',
    inboundDate: '2023-11-20',
    warrantyDate: '2025-11-20',
    location: 'D栋 3F 洁净实验室',
    category: '研发实验',
    model: 'V3 Pro Series',
    manufacturer: 'Thermo Scientific'
  }
];

export const WORK_ORDERS: WorkOrder[] = [
  { 
    id: 'WO-20240520-001', 
    title: 'D栋 304室 超低温冰箱压缩机异响', 
    priority: 'urgent', 
    status: 'repairing', 
    assignee: '李维修', 
    progress: 60,
    timeline: '已派单 -> 现场检查完成 -> 维修中',
    created: '2024-05-20 08:30'
  }
];

export const ROOMS: MeetingRoom[] = [
  { id: 'MR-101', name: '学术报告厅', floor: 1, capacity: 50, isAvailable: false, currentMeeting: { title: 'Q1季度战略研讨会', time: '09:00 - 11:30', contact: '王经理' } },
];

export const VISITORS: VisitorRecord[] = [
  { id: 'V-8821', visitorName: '刘正义', hostName: '李教授', meetingId: 'MR-101', needParking: true, entryTime: '10:15', exitPassStatus: 'issued' },
];

export const CONTROL_ROOMS: ControlState[] = [
  { id: 'L-LOBBY', name: '中心大厅', light: true, ac: true, temp: 24.5, humidity: 45 },
];

export const generateMetrics = (): MetricData[] => [
  { time: '08:00', cpu: 30, memory: 60, requests: 1200 },
  { time: '12:00', cpu: 45, memory: 70, requests: 1800 },
  { time: '16:00', cpu: 35, memory: 65, requests: 1400 },
  { time: '20:00', cpu: 25, memory: 55, requests: 900 },
];

export const STAT_CARDS = [
  { label: 'System Health', value: '98.2%', color: 'text-emerald-400', trend: '+0.5%' },
];

export const MOCK_INCIDENTS: Incident[] = [
  { id: 'INC-2024-001', title: 'DB Connection Timeout', description: 'Primary database cluster is experiencing connectivity issues...', severity: 'critical', status: 'investigating', timestamp: '2024-03-15 08:42' },
];

export const RADAR_DATA = [
  { subject: '可用性', A: 120, full: 150 },
  { subject: '性能', A: 98, full: 150 },
  { subject: '质量', A: 86, full: 150 },
  { subject: '能效', A: 99, full: 150 },
  { subject: '合规性', A: 85, full: 150 },
];

export const MOCK_LOGS: AssetLog[] = [
  { time: '2024-05-10', type: 'maintenance', title: '定期保养', desc: '更换密封圈及润滑轴承', user: '李工' },
];

export const generateEnergyData = () => [
  { time: '00:00', kwh: 12 },
  { time: '12:00', kwh: 60 },
];
