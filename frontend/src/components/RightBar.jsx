"use client"
import { CircleAlertIcon } from 'lucide-react'
import React from 'react'
import Notification from "./Notification"

export default function RightBar() {
  return (
    <div  className="mt-8 mr-0">
         <div className="flex gap-x-8"><Notification/><CircleAlertIcon/></div>
         <div>
             
         </div>
    </div>
  )
}
