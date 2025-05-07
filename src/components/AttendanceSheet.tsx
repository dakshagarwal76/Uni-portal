import React, { useState } from 'react';
import { Student, Course } from '../types';
import { Check, X } from 'lucide-react';

interface AttendanceSheetProps {
  students: Student[];
  selectedCourse: Course | null;
  onSaveAttendance: (presentStudents: string[]) => void;
}

export function AttendanceSheet({ students, selectedCourse, onSaveAttendance }: AttendanceSheetProps) {
  const [presentStudents, setPresentStudents] = useState<Set<string>>(new Set());

  if (!selectedCourse) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-300">
        Please select a course to take attendance
      </div>
    );
  }

  const toggleAttendance = (studentId: string) => {
    const newPresentStudents = new Set(presentStudents);
    if (newPresentStudents.has(studentId)) {
      newPresentStudents.delete(studentId);
    } else {
      newPresentStudents.add(studentId);
    }
    setPresentStudents(newPresentStudents);
  };

  const handleSave = () => {
    onSaveAttendance(Array.from(presentStudents));
    setPresentStudents(new Set());
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Attendance for {selectedCourse.name}
        </h2>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Attendance
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Roll Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Attendance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {student.rollNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    onClick={() => toggleAttendance(student.id)}
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                      presentStudents.has(student.id)
                        ? 'bg-green-100 text-green-600 dark:bg-green-500 dark:text-green-100'
                        : 'bg-red-100 text-red-600 dark:bg-red-500 dark:text-red-100'
                    }`}
                  >
                    {presentStudents.has(student.id) ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <X className="w-5 h-5" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
