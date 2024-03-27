import getProduct from '@/actions/getProduct'
import getProducts from '@/actions/getProducts'
import Info from '@/app/components/Info'
import ProductList from '@/app/components/ProductList'
import Gallery from '@/app/components/gallery/Gallery'
import Container from '@/app/components/ui/Container'
import React, { FC } from 'react'

export const revalidate = 0

interface ProductPageProps{
  params:{
    productId:string
  }
}

const ProductPage:FC<ProductPageProps>= async({params}) => {

  const product =await getProduct(params.productId)
  const suggestedProducts = await getProducts({
    categoryId:product?.category?.id
  })
  return (
    <div className='bg-white'>
      <Container>
         <div className='px-4 py-10 sm:px-6 lg:px-8'>
           <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            <Gallery images={product.images}/>
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
             <Info data={product}/>
            </div>
           </div>
           <hr className='my-10'/>
           <ProductList title='Related Items' items={suggestedProducts}/>
         </div>
      </Container>

    </div>
  )
}

export default ProductPage