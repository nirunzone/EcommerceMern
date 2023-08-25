import React from 'react'
import HeaderComponents from '../../layouts/HeaderComponents'
import FooterComponents from '../../layouts/FooterComponents'
import f from '../../../assets/images/f.jpg'
import g from '../../../assets/images/g.jpg'


function PageNotFound() {
  return (
    <React.Fragment>
        <HeaderComponents/>
        <React.Fragment>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={f} className="d-block w-100" height={400} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={g} className="d-block w-100" height={400} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={f} className="d-block w-100"  height={400}alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </React.Fragment>
        <FooterComponents/>
        </React.Fragment>
  )
}

export default PageNotFound