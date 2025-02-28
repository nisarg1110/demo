
import React from 'react'
import heroshoes2 from './hero-shoes2.webp'
import heroshoes3 from './hero-shoes3.avif'
import heroshoes4 from './hero-shoes4.avif'

export default function Heroslider() {
        const mystyle = {
                width: "100%",
                height: "300px",
                objectFit:" fill",
        };
  return (
    <div>
         <div className="hero-slider">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img style={mystyle} src={heroshoes4} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={mystyle} src={heroshoes2} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img style={mystyle} src={heroshoes3} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
    </div>
  )
}
