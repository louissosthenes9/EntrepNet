"use client"
import Profile from './Profile'
import React from 'react'
import Notification from "./Notification"
export default function RightBar() {
  return (
    <div  className="mt-8 ">
         <div className="flex gap-x-8">
          <Notification/>
          <Profile />
        </div>
         <div>
             
         </div>
    </div>
  )
}
