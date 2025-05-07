import React from 'react';
import { Holiday } from '../types';
import { Calendar } from 'lucide-react';

interface HolidayCalendarProps {
  holidays: Holiday[];
}

export function HolidayCalendar({ holidays }: HolidayCalendarProps) {
  const sortedHolidays = [...holidays].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-violet-500 dark:text-violet-300" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Academic Calendar</h2>
        </div>
        <div className="space-y-4">
          {sortedHolidays.map((holiday) => (
            <div
              key={holiday.id}
              className="p-4 rounded-lg border border-gray-100 hover:border-violet-100 transition-colors dark:border-gray-700 dark:hover:border-violet-500"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{holiday.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{holiday.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {new Date(holiday.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    holiday.type === 'public' ? 'bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100' :
                    holiday.type === 'academic' ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100' :
                    'bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-purple-100'
                  }`}>
                    {holiday.type.charAt(0).toUpperCase() + holiday.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
