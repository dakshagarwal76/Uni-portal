import React from 'react';
import { AttendanceDashboard } from '../components/AttendanceDashboard';
import { CourseList } from '../components/CourseList';
import { sampleCourses, sampleStudents } from '../data';
import { Course } from '../types';
import { useAttendanceStore } from '../store/attendanceStore';
import { motion } from 'framer-motion';

export function Dashboard() {
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(null);
  const { attendanceRecords } = useAttendanceStore();

  return (
    <div
      className="
        space-y-8 px-4 sm:px-6 lg:px-8 py-6 min-h-screen transition-all duration-500
        bg-white dark:bg-gray-900
      "
    >
      {/* Title and Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          Welcome to Your Dashboard 🚀
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Track your courses, attendance, and progress seamlessly.
        </p>
      </motion.div>

      {/* Course List */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CourseList
          courses={sampleCourses}
          onSelectCourse={setSelectedCourse}
          selectedCourseId={selectedCourse?.id || null}
        />
      </motion.div>

      {/* Attendance Dashboard */}
      {selectedCourse && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            p-6 rounded-xl shadow-lg transition-all duration-500
            bg-white dark:bg-gray-800
          "
        >
          <AttendanceDashboard
            attendanceRecords={attendanceRecords}
            selectedCourse={selectedCourse}
            students={sampleStudents}
          />
        </motion.div>
      )}

      {/* No Course Selected */}
      {!selectedCourse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-800 dark:text-gray-200"
        >
          <p className="text-xl">Please select a course to view attendance data. 📚</p>
        </motion.div>
      )}
    </div>
  );
}
