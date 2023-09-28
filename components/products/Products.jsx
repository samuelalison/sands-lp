import React from 'react';
import './Products.css';

export const Products = () => {
  return (
    <div className='products'>
        <div>
        <h2 className='products__h2'>New Products Handpicked For You!</h2>
        <p className='products__p'>Explore our collection of unique digital business cards. We guarantee you’ll find a match</p>
    </div>

    <div className='cards-container'>
        <section className='cards'> 
        <div className='card-1'>
            
          <img className='card-img' src="/images/Matte-GIF.gif" alt="Matte" />
    
          <h2 className='card__h2'>Matte Black PVC Card</h2>
          <p className='card__p'>Introducing Hardsands Matte PVC Card. The only business card you'll ever buy... This premium polypropylene card has Hardsands technology and an iconic QR code for fast sharing. Tap your Hardsand</p>

          <div className='card__type'>
           <div className='card__type_right'>
            <div className='card__type_customized'>
            <p className='card__type_customized_p'>Customized</p>
            </div>

            <div className='card__type_plain'>
            <p className='card__type_plain_p'>Plain</p>
            </div>
            </div>

            <div className='card__type_cost'>
            <p className='card__type_cost_p'>₦16,803.79</p>
            </div>
          </div>

         <button className='card-btn'>Add to cart</button>
        </div>

        <div className='card-2'>
        
        <img className='card-img' src="/images/Bamboo-wood-GIF.gif" alt="Bamboo Wood" />
        

        <h2 className='card__h2'>Bamboo Wood</h2>
          <p className='card__p'>Introducing the Hardsands Bamboo Card. This lovely Polished finish card features a Back-Laser engraved QR code and is powered by Hardsands Technology. An eco-</p>

          <div className='card__type'>
  
         <div className='card__type_right'>
            <div className='card__type_customized'>
            <p className='card__type_customized_p'>Customized</p>
            </div>

            <div className='card__type_plain'>
            <p className='card__type_plain_p'>Plain</p>
            </div>
            </div>
            <div className='card__type_cost'>
            <p className='card__type_cost_p'>₦20,949.02</p>
            </div>
          </div>

         <button className='card-btn'>Add to cart</button>
        </div>

        <div className='card-3'>
        
        <img className='card-img' src="/images/Sapele-wood-GIF.gif" alt="Sapele Wood" />
    

        <h2 className='card__h2'>Sapele Wood</h2>
          <p className='card__p'>Introducing the Hardsands Sapele Card. This lovely Polished finish card features a Back-Laser engraved QR code and is powered by Hardsands Technology. An eco-friendly approach to networking is certain to create</p>

          <div className='card__type'>
            <div className='card__type_right'>
            <div className='card__type_customized'>
            <p className='card__type_customized_p'>Customized</p>
            </div>

            <div className='card__type_plain'>
            <p className='card__type_plain_p'>Plain</p>
            </div>
            </div>

            <div className='card__type_cost'>
            <p className='card__type_cost_p'>₦20,949.02</p>
            </div>
          </div>

         <button className='card-btn'>Add to cart</button>
        </div>
    </section>

    </div>
    <div className='browse'><p>Browse All Products&gt;&gt;</p></div>

    </div>

  )
}
