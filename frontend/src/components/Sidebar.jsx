import React from 'react'
import Header from './Header'
import { Separator } from './ui/separator'
import { Settings,LogOut,Pencil, Mails, CircleHelp} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className='flex flex-col h-full gap-y-24 w-48 mx-12 mt-10'>
        <Header fontSize={"text-lg"} />
        <div><Separator orientation='horizontal' className="w-full" /></div>  
        <Settings />
        <LogOut />
        <Pencil />
    </div>
  )
}
