import React from 'react'
import Home from './component/Home'
import Banner from './component/Banner'
import Featureproduct from './component/featureproduct'
import Categories from './component/Category'
import Image from './component/Imagestyle'
import Product from './component/Product'
const page = () => {
  return (
    <div>
      <Home/>
      <Banner/>
      <Featureproduct/>
      <Categories/>
      <Image/>
      <Product/>
    </div>
  )
}

export default page
