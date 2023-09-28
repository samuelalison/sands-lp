"use client"
import React, { useState } from 'react';
import './Customers.css'
import Carousel from './Carousel';

const datas = [
    {
        desc: "This card is a life-saver when it comes to networking! Sharing my details with just one tap has made everything so much easier. It is so convenient and hassle-free it is, and it's definitely saved me time and effort. I no longer have to fumble around with a stack of business cards and worry about losing them. I highly recommend it to anyone who wants to make networking a breeze.",
        header: "Okoli Chinonso",
        place: "Lagos, Nigeria"
    },
    {
        desc: "This card is a life-saver when it comes to networking! Sharing my details with just one tap has made everything so much easier. It is so convenient and hassle-free it is, and it's definitely saved me time and effort. I no longer have to fumble around with a stack of business cards and worry about losing them. I highly recommend it to anyone who wants to make networking a breeze.",
        header: "sam Chinonso",
        place: "Lagos, Nigeria"
    },
    {
        desc: "This card is a life-saver when it comes to networking! Sharing my details with just one tap has made everything so much easier. It is so convenient and hassle-free it is, and it's definitely saved me time and effort. I no longer have to fumble around with a stack of business cards and worry about losing them. I highly recommend it to anyone who wants to make networking a breeze.",
        header: "john Chinonso",
        place: "Lagos, Nigeria"
    },
]

export const Customers = () => {
  return (
    <div className='customers'>
        <div className='customer_text'>
            <h2 className='customer_text_h2'>What Our Customers Are Saying</h2>
        </div>
            
        <div className='customer__carousel'>
        <Carousel data={datas} />
        </div>
    </div>
  )
}
