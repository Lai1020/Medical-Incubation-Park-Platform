
import React from 'react';

export enum NavigationTab {
  DASHBOARD = 'dashboard',
  INCIDENTS = 'incidents',
  METRICS = 'metrics',
  AI_ASSISTANT = 'ai-assistant',
  SETTINGS = 'settings',
  ASSET_OVERVIEW = 'asset-overview',
  ASSET_LIST = 'asset-list',
  ASSET_OPS = 'asset-ops',
  SERVICE_CONTROL = 'service-control',
  SERVICE_MEETING = 'service-meeting',
  SERVICE_VISITOR = 'service-visitor',
  SERVICE_TENANT = 'service-tenant',
  WO_OVERVIEW = 'wo-overview',
  WO_REPAIR = 'wo-repair',
  WO_LIST = 'wo-list',
  WO_INSPECTION = 'wo-inspection'
}

export interface ThresholdAlert {
  id: string;
  assetName: string;
  metric: string;
  currentValue: number;
  threshold: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  time: string;
}

export interface ConsumableReminder {
  id: string;
  partName: string;
  assetName: string;
  remainingLife: number; // 0-100 percentage
  estimatedDays: number;
  status: 'healthy' | 'replace-soon' | 'overdue';
}

export interface WorkOrder {
  id: string;
  title: string;
  priority: 'urgent' | 'high' | 'medium' | 'low';
  status: 'pool' | 'inspection' | 'repairing' | 'waiting_parts' | 'issue_confirm' | 'completion_confirm' | 'archived' | 'knowledge_base';
  assignee: string | null;
  progress: number;
  timeline: string;
  created: string;
  assetId?: string;
}

export interface InspectionTask {
  id: string;
  title: string;
  type: 'routine' | 'special' | 'temporary';
  status: 'pending' | 'completed' | 'missed';
  time: string;
  user?: string;
}

export interface Asset {
  id: string;
  name: string;
  vendor: string;
  date: string;
  status: '运营中' | '维护中' | '备库' | '已报废' | '闲置';
  life: string;
  value: string;
  residualValue: string;
  tco: string;
  healthScore: number;
  efficiency: number;
  manager: string;
  inboundDate: string;
  warrantyDate: string;
  location: string;
  category: '研发实验' | '辅助检测' | '基础设施' | '公共设施';
  contractRef?: string;
  model?: string;
  manufacturer?: string;
}

export interface AssetLog {
  time: string;
  type: 'repair' | 'maintenance' | 'normal';
  title: string;
  desc: string;
  user: string;
}

export interface MetricData {
  time: string;
  cpu: number;
  memory: number;
  requests: number;
}

export interface MeetingRoom {
  id: string;
  name: string;
  floor: number;
  capacity: number;
  isAvailable: boolean;
  currentMeeting?: {
    title: string;
    time: string;
    contact: string;
  };
}

export interface VisitorRecord {
  id: string;
  visitorName: string;
  hostName: string;
  meetingId?: string;
  needParking: boolean;
  entryTime: string;
  exitPassStatus: 'issued' | 'pending';
}

export interface ControlState {
  id: string;
  name: string;
  light: boolean;
  ac: boolean;
  temp?: number;
  humidity?: number;
}

export interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: { id: string; title: string }[];
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'investigating' | 'resolved' | 'pending';
  timestamp: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Added missing Tenant interface for tenant management
export interface Tenant {
  id: string;
  name: string;
  room: string;
  industry: string;
  contact: string;
  phone: string;
}

// Added missing LeaseContract interface for lease management
export interface LeaseContract {
  id: string;
  tenantId: string;
  startDate: string;
  endDate: string;
  amount: number;
  deposit: number;
  status: 'active' | 'expiring' | 'terminated';
}

// Added missing UtilityBill interface for billing management
export interface UtilityBill {
  id: string;
  tenantId: string;
  month: string;
  type: 'water' | 'electricity';
  usage: number;
  amount: number;
  status: 'paid' | 'unpaid';
}

// Added missing CustomerCareRecord interface for CRM records
export interface CustomerCareRecord {
  id: string;
  tenantId: string;
  date: string;
  category: 'visit' | 'gift' | 'feedback' | 'other';
  title: string;
  content: string;
  manager: string;
}
