import React from 'react';
import { HolidayCalendar } from '../components/HolidayCalendar';
import { holidays } from '../data';

export function Calendar() {
  return (
    <div className="max-w-3xl mx-auto">
      <HolidayCalendar holidays={holidays} />
    </div>
  );
}