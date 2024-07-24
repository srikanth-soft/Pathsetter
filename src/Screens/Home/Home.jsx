import React from 'react'
import MainSection from './MainSection'
import Features from './Features'
import TrackUser from './TrackUser'
import Products from './Products'
import InfiniteSlider from './InfiniteSlider'
import CompanySection from './CompanySection'
import { Spotlight } from './SpotLight'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="bg-[#03091D] font-sans">
    <MainSection></MainSection>
    <Features></Features>
    <TrackUser></TrackUser>
    <Products></Products>
    <InfiniteSlider></InfiniteSlider>

    <div className="max-w-[1350px] m-auto">
      <CompanySection></CompanySection>
      {/* <Spotlight></Spotlight> */}
      <Footer></Footer>
    </div>
  </div>
  )
}

export default Home