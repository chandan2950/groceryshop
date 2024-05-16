import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import BannerSlider from '../../Components/Banners/BannerSlider';
import HomeCategories from '../../Components/Categories/HomeCategories';




const Home = () => {
  return (
    <div>
        <Navbar />
        <BannerSlider />
        <HomeCategories />
        Home
    </div>
  )
}

export default Home;