export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  rfidTag?: string;
  biometricId?: string;
  qrCode?: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
}

export interface AttendanceRecord {
  id: string;
  courseId: string;
  date: string;
  presentStudents: string[];
  method: 'manual' | 'rfid' | 'biometric' | 'qrcode';
  timestamp: string;
}

export type AttendanceMethod = 'manual' | 'rfid' | 'biometric' | 'qrcode';

export interface Holiday {
  id: string;
  name: string;
  date: string;
  type: 'public' | 'academic' | 'event';
  description?: string;
}

export interface ClassSchedule {
  id: string;
  courseId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  room: string;
}