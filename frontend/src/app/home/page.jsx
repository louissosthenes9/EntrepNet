import React from 'react'
import Sidebar from '@/components/Sidebar'
import FeedSection from '@/components/FeedSection'
import RightBar from '@/components/RightBar'

export default function page() {
  return (
    <div className='h-full flex justify-between'>
        <Sidebar /> 
        <FeedSection/>
        <RightBar /> 
    </div>
  )
}
