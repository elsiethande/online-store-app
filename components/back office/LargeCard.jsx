import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({className}) {
  return (
    <div className={'rounded-lg text-white ${className} '}>
        <Layers/>
        <h4>Today Orders</h4>
        <h2 className='text-3xl '>ksh 5.5k</h2>
    </div>
  )
}
