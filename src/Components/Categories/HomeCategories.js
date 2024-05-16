import React from 'react'
import './HomeCategories.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'


const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='veggie' />
        <div className='content'>
          <h1>
            Vegetables at your doorstep
          </h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='veggie' />
        <div className='content'>
          <h1>
            Vegetables at your doorstep
          </h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='fruit' />
        <div className='content'>
          <h1>
            Fruits at your doorstep
          </h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='fruit' />
         <div className='content'>
          <h1>
            Fruits at your doorstep
          </h1>
          <p> Shop vegetables now</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories
