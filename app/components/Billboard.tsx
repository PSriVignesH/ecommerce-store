import React, { FC } from 'react'
import {Billboard as BillboardType} from '@/types'

interface BillboardProps{
  data:BillboardType
}

const Billboard:FC<BillboardProps> = ({data}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[3.25/1]  3xl:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-2xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard