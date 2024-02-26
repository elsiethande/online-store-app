import React from 'react';
import Sidebar from '@/components/back office/Sidebar';
import Navbar from '@/components/back office/Navbar';

export default function layout({children}) {
  return (
    <div className='flex'>
            <Sidebar/>
        <div className="w-full">
            <Navbar/>
            <main className='p-8 bg-slate-950 text-slate-50 min-h-screen mt-16 ml-60'>
                {children}
            </main>
        </div>
    </div>
  )
}
