import React from 'react'
import Slider from "react-slick";
import './collecation.css'
import { useState,useEffect } from 'react';

export default function Collaction1() {
    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"

    };
    const setting = {

        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"

    };
    let [data, setData] = useState([]);
    let [data1, setData1] = useState([]);

    // let [wdetails, setWdetails] = useState()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((finalRes) => {
            setData(finalRes)
        })
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((finalRes) => {
            setData1(finalRes)
        })
      });
    
  
    return (
        <div>
            <div>
                <div className="coll-name pt-5 ms-3">
                    <h2>Nike</h2>
                </div>

                <div className="slider-container pt-2">
                    <Slider {...settings}>
                    
                            {
                                data.map((value) => {
                                    return(
                                    <div>
                                    <div class="card" style={{ width: "20rem" }}>
                                        <img src={value.image} class="card-img-top item-center" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title" style={{overflow:'hidden', textOverflow:'ellipsis', height:'50px'}}>{value.title}</h5>
                                            <p class="card-text" style={{overflow:'hidden', textOverflow:'ellipsis', height:'150px'}}>{value.description}</p>
                                            <a href="/" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                    </div>
                                    );
                                })
                            } 
                    </Slider>
                </div>
            </div>
            <div>
                <div className="coll-name pt-5 ms-3">
                    <h2>Jordan</h2>
                </div>

                <div className="slider-container pt-2">
                    <Slider {...setting}>
                            {
                                data1.map((value) => {
                                    return(
                                    <div>
                                    <div class="card" style={{ width: "20rem" }}>
                                        <img src={value.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title" style={{overflow:'hidden', textOverflow:'ellipsis', height:'50px'}}>{value.title}</h5>
                                            <p class="card-text" style={{overflow:'hidden', textOverflow:'ellipsis', height:'150px'}}>{value.description}</p>
                                            <a href="/" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                    </div>
                                    );
                                })
                            } 
                        
                    </Slider>
                </div>
            </div>
        </div>
    );
}   
