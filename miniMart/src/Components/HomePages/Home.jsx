import React, { useState } from 'react'
import HeroSection from '../HeroSection'
import HeroSectionContentPart from '../HeroSectionContentPart'
import FeatureProduct from '../FeatureProduct'
import FeatureTitle from '../FeatureTitle'
import { useProductContax } from '../ProdaxContax'



function Home() {
  const{feature}=useProductContax()


  return (
    <>
        <HeroSection/>
        <HeroSectionContentPart/>
        <FeatureTitle/>
       
       {feature && <FeatureProduct/> }
    </>
  )
}

export default Home