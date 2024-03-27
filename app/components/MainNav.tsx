"use client"
import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

interface MainNavProps{
 data:Category[ ]
}

const MainNav:FC<MainNavProps> = ({data}) => {
  const pathname = usePathname()

  const routes = data.map((route:any)=>({
    href:`/category/${route.id}`,
    label:route.name,
    active: pathname === `/category/${route.id}` 
  }))
  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {
        routes.map((route:any)=>(
          <Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-black",route.active ? "text-black" : "text-neutral-500")}>
            {route.label}
          </Link>
        ))
      }
    </nav>
  )
}

export default MainNav