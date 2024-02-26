import React from 'react';
import link from 'next/link';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="bg-slate-800 space-y-6 w-52 h-screen">
     <Link className='mb-6' href="#">Logo</Link>  
     <div className="flex flex-col space-y-3"><Link href="#">Dashboard</Link> 
          <Link href="#">Catalogue</Link> 
          <Link href="#">Customers</Link> 
          <Link href="#">Markets</Link> 
          <Link href="#">Farmers</Link> 
          <Link href="#">Staff</Link> 
          <Link href="#">Settings</Link> 
          <Link href="#">Online Store</Link> 
     </div> 
    </div>
  )
}
