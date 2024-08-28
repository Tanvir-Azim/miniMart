import React, { useState } from 'react'
import HeroSection from '../HeroSection'
import HeroSectionContentPart from '../HeroSectionContentPart'
import FeatureProduct from '../FeatureProduct'
import FeatureTitle from '../FeatureTitle'
import { useProductContax } from '../ProdaxContax'
import LatestProduct from '../LatestProduct'
import BestSellerProduct from '../BestSellerProduct'
import SlickCarousel from '../SlickCarousel'
import ProductList from '../ProductList'
import Header from '../Header'
import { useFilterContax } from '../FilterContax'
import Loding from '../Loding'
import Footer from '../Footer'


function Home() {
  const{feature,latest,bestSeller,bestSellerProduct}=useProductContax()
  const{loading}=useFilterContax()


  return (
    <>
      {loading?<Loding/>:<div>
        <HeroSection/>
        <HeroSectionContentPart/>
        <FeatureTitle/>
       
       {feature && <FeatureProduct/> }
       {latest && <LatestProduct/>}
       {bestSeller && <BestSellerProduct/>}
       <SlickCarousel miniproduct={bestSellerProduct}/>
       <ProductList/>
      </div>}
    </>
  )
}

export default Home