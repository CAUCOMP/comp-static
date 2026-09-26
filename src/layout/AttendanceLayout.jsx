import React from 'react'
import { Outlet } from 'react-router-dom'
import AttendanceNav from '@/components/AttendanceNav'

const AttendanceLayout = () => {
  return (
    <div>
        <AttendanceNav />
        <main className="min-h-screen">
            <Outlet />
        </main>
    </div>
  )
}

export default AttendanceLayout