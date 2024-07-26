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
import Footer from '../Footer'

function HomePage1() {
  const{feature,latest,bestSeller,bestSellerProduct}=useProductContax()


  return (
    <>
         <div className=' h-16 w-full'>
            <Header/>
        </div>
        <HeroSection/>
        <HeroSectionContentPart/>
        <FeatureTitle/>
       
       {feature && <FeatureProduct/> }
       {latest && <LatestProduct/>}
       {bestSeller && <BestSellerProduct/>}
       <SlickCarousel miniproduct={bestSellerProduct}/>
       <ProductList/>
       <Footer/>
    </>
  )
}

export default HomePage1