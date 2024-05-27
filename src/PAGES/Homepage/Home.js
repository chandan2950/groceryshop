import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import BannerSlider from '../../Components/Banners/BannerSlider';
import HomeCategories from '../../Components/Categories/HomeCategories';
import Footer1 from '../../Components/Footer/Footer';




const Home = () => {
  return (
    <div>
        <Navbar />
        <BannerSlider />
        <HomeCategories />
        <Footer1 />
        Home
    </div>
  )
}

export default Home;