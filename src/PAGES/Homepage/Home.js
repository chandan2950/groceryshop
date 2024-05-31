import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import BannerSlider from '../../Components/Banners/BannerSlider';
import HomeCategories from '../../Components/Categories/HomeCategories';
import Footer1 from '../../Components/Footer/Footer';
import Product_Sidebar from '../../Components/Product/Product_sidebar';
import img1 from '../../Assets/Products/pic1.jpg'
import img2 from '../../Assets/Products/pic2.jpg'
import img3 from '../../Assets/Products/pic3.jpg'
import img4 from '../../Assets/Products/pic4.jpg'


const Home = () => {
  return (
    <div>
        <Navbar />
        <BannerSlider />
        <HomeCategories />
        <Product_Sidebar />
        <Footer1 />
        Home
    </div>
  )
}

export default Home;