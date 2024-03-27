import { Product } from '@/types'
import React, { FC } from 'react'
import NoResults from './ui/NoResults'
import ProductCard from './ui/ProductCard'

interface ProductListProps{
  title:string,
  items:Product[]
}

const ProductList:FC<ProductListProps> = ({title,items}) => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {items.length === 0 && <NoResults/>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          items.map((item:any)=>(
            <ProductCard key={item.id} data={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList