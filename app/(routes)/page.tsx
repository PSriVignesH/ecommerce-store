import getBillboard from '@/actions/getBillboard'
import React from 'react'
import Container from '../components/ui/Container'
import Billboard from '../components/Billboard'
import getProducts from '@/actions/getProducts'
import ProductList from '../components/ProductList'

export const revalidate =0

const HomePage =async() => {
  const billboard = await getBillboard("3207db29-39c4-4c1c-a6a0-a3b2060aa1e2")
  const products = await getProducts({isFeatured:true})
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}/> 
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title="Featured Products" items={products}/>
      </div>
      </div>
    </Container>
  )
}

export default HomePage