import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Student, AttendanceMethod } from '../types';
import { Fingerprint, Scan, QrCode } from 'lucide-react';

interface AutomatedAttendanceProps {
  onMarkAttendance: (studentId: string, method: AttendanceMethod) => void;
  students: Student[];
}

export function AutomatedAttendance({ onMarkAttendance, students }: AutomatedAttendanceProps) {
  const [activeMethod, setActiveMethod] = useState<AttendanceMethod | null>(null);
  const [lastScanned, setLastScanned] = useState<string>('');

  useEffect(() => {
    let qrScanner: Html5QrcodeScanner | null = null;

    if (activeMethod === 'qrcode') {
      qrScanner = new Html5QrcodeScanner(
        'qr-reader',
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );

      qrScanner.render((decodedText) => {
        const student = students.find(s => s.qrCode === decodedText);
        if (student) {
          onMarkAttendance(student.id, 'qrcode');
          setLastScanned(`Marked attendance for ${student.name}`);
        }
      }, (error) => {
        console.error(error);
      });
    }

    return () => {
      if (qrScanner) {
        qrScanner.clear();
      }
    };
  }, [activeMethod, students, onMarkAttendance]);

  const handleRFIDScan = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rfidTag = event.target.value;
    const student = students.find(s => s.rfidTag === rfidTag);
    if (student) {
      onMarkAttendance(student.id, 'rfid');
      setLastScanned(`Marked attendance for ${student.name}`);
      event.target.value = '';
    }
  };

  const handleBiometricScan = () => {
    // Simulate biometric scan
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    onMarkAttendance(randomStudent.id, 'biometric');
    setLastScanned(`Marked attendance for ${randomStudent.name}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => setActiveMethod(activeMethod === 'rfid' ? null : 'rfid')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeMethod === 'rfid'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <Scan className="w-5 h-5" />
          RFID Scanner
        </button>
        <button
          onClick={() => setActiveMethod(activeMethod === 'biometric' ? null : 'biometric')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeMethod === 'biometric'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <Fingerprint className="w-5 h-5" />
          Biometric
        </button>
        <button
          onClick={() => setActiveMethod(activeMethod === 'qrcode' ? null : 'qrcode')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeMethod === 'qrcode'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <QrCode className="w-5 h-5" />
          QR Code
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        {activeMethod === 'rfid' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">RFID Scanner</h3>
            <input
              type="text"
              placeholder="Scan RFID card..."
              onChange={handleRFIDScan}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              autoFocus
            />
          </div>
        )}

        {activeMethod === 'biometric' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Biometric Scanner</h3>
            <button
              onClick={handleBiometricScan}
              className="w-full px-4 py-8 border-2 border-dashed rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors dark:border-gray-600 dark:text-white dark:hover:border-gray-500"
            >
              <Fingerprint className="w-12 h-12 mx-auto mb-2" />
              Place finger on scanner
            </button>
          </div>
        )}

        {activeMethod === 'qrcode' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">QR Code Scanner</h3>
            <div id="qr-reader" className="w-full max-w-sm mx-auto"></div>
          </div>
        )}

        {lastScanned && (
          <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg dark:bg-green-900 dark:text-green-200">
            {lastScanned}
          </div>
        )}
      </div>
    </div>
  );
}
