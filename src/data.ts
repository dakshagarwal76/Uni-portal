import { Student, Course, Holiday, ClassSchedule } from './types';

export const sampleStudents: Student[] = [
  { 
    id: '1', 
    name: 'Daksh Agarwal', 
    rollNumber: '108',
    rfidTag: 'RF001',
    biometricId: 'BIO001',
    qrCode: 'QR001'
  },
  { 
    id: '2', 
    name: 'Shashank Kumar', 
    rollNumber: '086',
    rfidTag: 'RF002',
    biometricId: 'BIO002',
    qrCode: 'QR002'
  },
  { 
    id: '3', 
    name: 'Shri', 
    rollNumber: '076',
    rfidTag: 'RF003',
    biometricId: 'BIO003',
    qrCode: 'QR003'
  },
  { 
    id: '4', 
    name: 'Lavya', 
    rollNumber: '099',
    rfidTag: 'RF004',
    biometricId: 'BIO004',
    qrCode: 'QR004'
  },
  { 
    id: '5', 
    name: 'Arun Kumar', 
    rollNumber: '088',
    rfidTag: 'RF005',
    biometricId: 'BIO005',
    qrCode: 'QR005'
  },
];

export const sampleCourses: Course[] = [
  { id: '1', name: 'Computer Network', code: 'CS101' },
  { id: '2', name: 'Data Structures', code: 'CS201' },
  { id: '3', name: 'Machine Learning', code: 'CS301' },
  { id: '4', name: 'Software Engineering', code: 'CS401' },
  { id: '5', name: 'Data Warehouse and Data Mining', code: 'CS501' },
  { id: '6', name: 'Economics', code: 'CS601' },
  { id: '7', name: 'Artificial Intelligence', code: 'CS701' }
];

export const holidays: Holiday[] = [
  {
    id: '1',
    name: 'New Year',
    date: '2024-01-01',
    type: 'public',
    description: 'New Year\'s Day celebration'
  },
  {
    id: '2',
    name: 'Spring Break',
    date: '2024-03-15',
    type: 'academic',
    description: 'One week spring break'
  },
  {
    id: '3',
    name: 'Annual Day ',
    date: '2024-04-05',
    type: 'event',
    description: 'Annual college foundation day celebrations'
  },
  {
    id: '4',
    name: 'Summer Vacation',
    date: '2024-06-01',
    type: 'academic',
    description: 'Summer vacation begins'
  },
  {
    id: '5',
    name: 'Independence Day',
    date: '2024-07-04',
    type: 'public',
    description: 'Independence Day celebration'
  }
];

export const classSchedule: ClassSchedule[] = [
  {
    id: '1',
    courseId: '4',
    dayOfWeek: 1, // Monday
    startTime: '09:00',
    endTime: '10:00',
    room: 'Room 404'
  },
  {
    id: '2',
    courseId: '7',
    dayOfWeek: 1, // Monday
    startTime: '10:00',
    endTime: '11:00',
    room: 'Room 404'
  },
  {
    id: '3',
    courseId: '1',
    dayOfWeek: 1, // Monday
    startTime: '11:00',
    endTime: '13:00',
    room: 'Room 404'
  },
  {
    id: '4',
    courseId: '5',
    dayOfWeek: 1, // Monday
    startTime: '13:00',
    endTime: '14:00',
    room: 'Room 404'
  },
  {
    id: '5',
    courseId: '3',
    dayOfWeek: 1, // Monday
    startTime: '14:00',
    endTime: '15:00',
    room: 'Room 404'
  },
  {
    id: '6',
    courseId: '5',
    dayOfWeek: 1, // Monday
    startTime: '15:00',
    endTime: '17:00',
    room: 'Room 404'
  },

  {
    id: '7',
    courseId: '2',
    dayOfWeek: 2, // Tuesday
    startTime: '9:00',
    endTime: '11:00',
    room: 'Room 404'
  },

  {
    id: '8',
    courseId: '7',
    dayOfWeek: 2, // Tuesday
    startTime: '11:00',
    endTime: '12:00',
    room: 'Room 404'
  },
  {
    id: '9',
    courseId: '3',
    dayOfWeek: 2, // Tuesday
    startTime: '12:00',
    endTime: '13:00',
    room: 'Room 404'
  },

  {
    id: '10',
    courseId: '4',
    dayOfWeek: 2, // Tuesday
    startTime: '13:00',
    endTime: '14:00',
    room: 'Room 404'
  },

  {
    id: '11',
    courseId: '5',
    dayOfWeek: 2, // Tuesday
    startTime: '14:00',
    endTime: '16:00',
    room: 'Room 404'
  },

  {
    id: '12',
    courseId: '7',
    dayOfWeek: 2, // Tuesday
    startTime: '16:00',
    endTime: '17:00',
    room: 'Room 404'
  },

  {
    id: '13',
    courseId: '2',
    dayOfWeek: 3, // Wednesday
    startTime: '09:00',
    endTime: '10:00',
    room: 'Room 404'
  },
  {
    id: '14',
    courseId: '1',
    dayOfWeek: 3, // Wednesday
    startTime: '10:00',
    endTime: '11:00',
    room: 'Room 404'
  },
  {
    id: '15',
    courseId: '7',
    dayOfWeek: 3, // Wednesday
    startTime: '11:00',
    endTime: '13:00',
    room: 'Room 404'
  },

  {
    id: '16',
    courseId: '3',
    dayOfWeek: 3, // Wednesday
    startTime: '14:00',
    endTime: '15:00',
    room: 'Room 404'
  },

  {
    id: '17',
    courseId: '3',
    dayOfWeek: 3, // Wednesday
    startTime: '15:00',
    endTime: '17:00',
    room: 'Room 404'
  },

  {
    id: '18',
    courseId: '2',
    dayOfWeek: 4, // Thursday
    startTime: '09:00',
    endTime: '10:00',
    room: 'Room 404'
  },

  {
    id: '19',
    courseId: '3',
    dayOfWeek: 4, // Thursday
    startTime: '10:00',
    endTime: '11:00',
    room: 'Room 404'
  },
  {
    id: '20',
    courseId: '4',
    dayOfWeek: 4, // Thursday
    startTime: '11:00',
    endTime: '13:00',
    room: 'Room 404'
  },

  {
    id: '21',
    courseId: '5',
    dayOfWeek: 4, // Thursday
    startTime: '15:00',
    endTime: '17:00',
    room: 'Room 404'
  },

  {
    id: '22',
    courseId: '2',
    dayOfWeek: 5, // Friday
    startTime: '09:00',
    endTime: '10:00',
    room: 'Room 404'
  },

  {
    id: '23',
    courseId: '5',
    dayOfWeek: 5, // Friday
    startTime: '10:00',
    endTime: '11:00',
    room: 'Room 404'
  },

  {
    id: '24',
    courseId: '3',
    dayOfWeek: 5, // Friday
    startTime: '11:00',
    endTime: '12:00',
    room: 'Room 404'
  },

  {
    id: '25',
    courseId: '4',
    dayOfWeek: 5, // Friday
    startTime: '13:00',
    endTime: '14:00',
    room: 'Room 404'
  },

  {
    id: '26',
    courseId: '6',
    dayOfWeek: 5, // Friday
    startTime: '14:00',
    endTime: '17:00',
    room: 'Room 404'
  },
  
];