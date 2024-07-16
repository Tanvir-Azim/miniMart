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


function Home() {
  const{feature,latest,bestSeller,bestSellerProduct}=useProductContax()


  return (
    <>
        <HeroSection/>
        <HeroSectionContentPart/>
        <FeatureTitle/>
       
       {feature && <FeatureProduct/> }
       {latest && <LatestProduct/>}
       {bestSeller && <BestSellerProduct/>}
       <SlickCarousel miniproduct={bestSellerProduct}/>
       <ProductList/>
    </>
  )
}

export default Home