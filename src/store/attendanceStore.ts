import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AttendanceRecord } from '../types';

interface AttendanceStore {
  attendanceRecords: AttendanceRecord[];
  addAttendanceRecord: (record: AttendanceRecord) => void;
  getAttendanceForCourse: (courseId: string) => AttendanceRecord[];
}

export const useAttendanceStore = create<AttendanceStore>()(
  persist(
    (set, get) => ({
      attendanceRecords: [],
      addAttendanceRecord: (record) =>
        set((state) => ({
          attendanceRecords: [...state.attendanceRecords, record],
        })),
      getAttendanceForCourse: (courseId) =>
        get().attendanceRecords.filter((record) => record.courseId === courseId),
    }),
    {
      name: 'attendance-storage',
    }
  )
);