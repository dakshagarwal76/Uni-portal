import React from 'react';
import { Course } from '../types';
import { BookOpen } from 'lucide-react';

interface CourseListProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  selectedCourseId: string | null;
}

export function CourseList({ courses, onSelectCourse, selectedCourseId }: CourseListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Courses</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className={`p-4 rounded-lg border transition-all ${
              selectedCourseId === course.id
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-700'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-blue-500 dark:text-blue-300" />
              <div className="text-left">
                <h3 className="font-medium text-gray-900 dark:text-white">{course.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{course.code}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
