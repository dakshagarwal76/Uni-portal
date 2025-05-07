import React from 'react';
import { ClassSchedule, Course } from '../types';
import { Clock } from 'lucide-react';

interface TimeTableProps {
  schedule: ClassSchedule[];
  courses: Course[];
}

export function TimeTable({ schedule, courses }: TimeTableProps) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const getCourse = (courseId: string) => {
    return courses.find(course => course.id === courseId);
  };

  const scheduleByDay = days.map((day, index) => {
    return {
      day,
      classes: schedule.filter(s => s.dayOfWeek === index + 1)
        .sort((a, b) => a.startTime.localeCompare(b.startTime))
    };
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-violet-500 dark:text-violet-300" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Class Schedule</h2>
        </div>
        <div className="space-y-6">
          {scheduleByDay.map(({ day, classes }) => (
            <div key={day} className="space-y-3">
              <h3 className="font-medium text-gray-900 dark:text-white">{day}</h3>
              {classes.length > 0 ? (
                <div className="space-y-2">
                  {classes.map((classItem) => {
                    const course = getCourse(classItem.courseId);
                    return (
                      <div
                        key={classItem.id}
                        className="p-4 rounded-lg bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 dark:bg-gradient-to-r dark:from-indigo-900 dark:to-indigo-800 dark:border-indigo-700"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{course?.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{course?.code}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{classItem.room}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {classItem.startTime} - {classItem.endTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">No classes scheduled</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
