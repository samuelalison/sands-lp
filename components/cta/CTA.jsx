import React from 'react';
import './CTA.css';

export const CTA = () => {
  return (
    <div className='cta'>
        
            <img className='cta_left_side_img' src="./images/006_1.webp" alt="" />
     


        <div className='cta_right_side'>
            <h2 className='cta_right_side_h2'>Have Complete Control over your card's Actions</h2>
            <p className='cta_right_side_p'>You can choose from a variety of different actions to add a personal touch to your profile. Once a connection taps your card, your default action gets shared with them.</p>
            <button className='connect_btn'>TRY A CARD</button>
        </div>
    </div>
  )
}
