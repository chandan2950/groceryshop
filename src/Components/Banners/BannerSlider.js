import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css' 

const BannerSlider = () => {
    const data = [
        {
            id: 1, 
            img:'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Fresh Veggies & Fruits at Your Doorstep',
            description: 'Experience the taste of freshly picked vegetables delivered straight from our garden to your Home',
            button: 'https://www.khhet.com/product-category/khhet-fresh/essentials/'
        },
        {
            id: 2, 
            img:'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Fresh Veggies & Fruits at Your Doorstep',
            description: 'Experience the taste of freshly picked vegetables delivered straight from our garden to your Home',
            button: 'https://www.khhet.com/product-category/khhet-fresh/essentials/'  
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        SlidesToShow: 1,
        SlidesToScroll: 1,

    }
  return (
    <div className="Slider">
        <slider className="Slider" {...settings}>
            {
                data.map(item=> {
                    return(
                        <div className="imagecont" key={item.id}>
                            <img src={item.img

                            } alt='image' />
                            <div className="content">
                                <h1>{item.title}</h1>
                                <span>{item.description}</span>
                                <button>Shop More</button>
                            </div>
                        </div>

                    
                    )
                }

                )
            }
        </slider>
    </div>
  )
}

export default BannerSlider;