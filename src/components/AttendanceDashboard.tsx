import { AttendanceRecord, Course, Student } from '../types';
import { BarChart, Users, Clock, CalendarCheck } from 'lucide-react';

interface AttendanceDashboardProps {
  attendanceRecords: AttendanceRecord[];
  selectedCourse: Course;
  students: Student[];
}

export function AttendanceDashboard({ attendanceRecords, selectedCourse, students }: AttendanceDashboardProps) {
  const courseRecords = attendanceRecords.filter(record => record.courseId === selectedCourse.id);
  
  const totalClasses = new Set(courseRecords.map(record => record.date)).size;
  const averageAttendance = courseRecords.reduce((acc, record) => acc + record.presentStudents.length, 0) / (totalClasses || 1);

  const methodStats = courseRecords.reduce((acc, record) => {
    acc[record.method] = (acc[record.method] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const getStudentAttendance = (studentId: string) => {
    const attended = courseRecords.filter(record => record.presentStudents.includes(studentId)).length;
    return totalClasses ? Math.round((attended / totalClasses) * 100) : 0;
  };

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen dark:bg-gray-900 dark:text-white transition-all">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[{
          icon: <CalendarCheck className="w-8 h-8 opacity-80" />,
          label: 'Total Classes',
          value: totalClasses,
          gradient: 'from-violet-500 to-purple-600',
        },
        {
          icon: <Users className="w-8 h-8 opacity-80" />,
          label: 'Average Attendance',
          value: Math.round(averageAttendance),
          gradient: 'from-blue-500 to-cyan-500',
        },
        {
          icon: <BarChart className="w-8 h-8 opacity-80" />,
          label: 'Attendance Rate',
          value: `${Math.round((averageAttendance / students.length) * 100)}%`,
          gradient: 'from-emerald-500 to-teal-600',
        },
        {
          icon: <Clock className="w-8 h-8 opacity-80" />,
          label: 'Records',
          value: courseRecords.length,
          gradient: 'from-rose-500 to-pink-600',
        }
        ].map((card, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 text-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105`}
          >
            <div className="flex items-center gap-4">
              {card.icon}
              <div>
                <p className="text-xl font-bold">{card.value}</p>
                <p className="text-sm opacity-90">{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Methods */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Attendance Methods</h3>
            <div className="space-y-5">
              {Object.entries(methodStats).map(([method, count]) => (
                <div key={method} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                    <span className="capitalize">{method}</span>
                    <span className="text-gray-900">{count} times</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${method === 'manual' ? 'bg-violet-500' :
                        method === 'rfid' ? 'bg-blue-500' :
                        method === 'biometric' ? 'bg-emerald-500' :
                        'bg-rose-500'}`}
                      style={{ width: `${(count / courseRecords.length) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Attendance */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Student Attendance</h3>
            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
              {students.map(student => {
                const attendance = getStudentAttendance(student.id);
                return (
                  <div key={student.id} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{student.name}</span>
                      <span>{attendance}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${attendance >= 75 ? 'bg-emerald-500' :
                          attendance >= 50 ? 'bg-yellow-500' : 'bg-rose-500'}`}
                        style={{ width: `${attendance}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
