import React from 'react';
import Sidebar from '@/components/back office/Sidebar';
import Navbar from '@/components/back office/Navbar';

export default function layout({children}) {
  return (
    <div className='flex gap-1'>
            <Sidebar/>
        <div className="w-full">
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    </div>
  )
}
