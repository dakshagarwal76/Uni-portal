import React from 'react';
import { TimeTable as TimeTableComponent } from '../components/TimeTable';
import { classSchedule, sampleCourses } from '../data';

export function TimeTable() {
  return (
    <div className="max-w-3xl mx-auto">
      <TimeTableComponent schedule={classSchedule} courses={sampleCourses} />
    </div>
  );
}