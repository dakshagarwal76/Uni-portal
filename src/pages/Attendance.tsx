import React from 'react';
import { AttendanceSheet } from '../components/AttendanceSheet';
import { AutomatedAttendance } from '../components/AutomatedAttendance';
import { CourseList } from '../components/CourseList';
import { sampleCourses, sampleStudents } from '../data';
import { Course, AttendanceMethod } from '../types';
import { useAttendanceStore } from '../store/attendanceStore';
import toast from 'react-hot-toast';

export function Attendance() {
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(null);
  const { addAttendanceRecord } = useAttendanceStore();

  const handleSaveAttendance = (presentStudents: string[]) => {
    if (!selectedCourse) return;

    const newRecord = {
      id: Date.now().toString(),
      courseId: selectedCourse.id,
      date: new Date().toISOString().split('T')[0],
      presentStudents,
      method: 'manual' as const,
      timestamp: new Date().toISOString(),
    };

    addAttendanceRecord(newRecord);
    toast.success('Attendance saved successfully!');
  };

  const handleAutomatedAttendance = (studentId: string, method: AttendanceMethod) => {
    if (!selectedCourse) {
      toast.error('Please select a course first');
      return;
    }

    const newRecord = {
      id: Date.now().toString(),
      courseId: selectedCourse.id,
      date: new Date().toISOString().split('T')[0],
      presentStudents: [studentId],
      method,
      timestamp: new Date().toISOString(),
    };

    addAttendanceRecord(newRecord);
    toast.success(`Attendance marked for ${sampleStudents.find(s => s.id === studentId)?.name}`);
  };

  return (
    <div className="space-y-8 text-gray-900 dark:text-white">
      <CourseList
        courses={sampleCourses}
        onSelectCourse={setSelectedCourse}
        selectedCourseId={selectedCourse?.id || null}
      />

      {selectedCourse && (
        <>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Automated Attendance
            </h2>
            <AutomatedAttendance
              onMarkAttendance={handleAutomatedAttendance}
              students={sampleStudents}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Attendance Sheet
            </h2>
            <AttendanceSheet
              students={sampleStudents}
              selectedCourse={selectedCourse}
              onSaveAttendance={handleSaveAttendance}
            />
          </div>
        </>
      )}
    </div>
  );
}
