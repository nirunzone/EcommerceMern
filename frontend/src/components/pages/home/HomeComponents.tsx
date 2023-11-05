import React from 'react'
import HeaderComponents from '../../layouts/HeaderComponents'
import FooterComponents from '../../layouts/FooterComponents'
import BannerComponents from '../../lib/BannerComponents'
import { Link } from 'react-router-dom'
import grocery from '../../../assets/images/grocery.jpg'
import mclothes from '../../../assets/images/mclothes.jpg'
import fclothes from '../../../assets/images/fclothes.jpg'
import watch from '../../../assets/images/watch.jpg'
import shoes from '../../../assets/images/shoes.jpg'
import shoesg from '../../../assets/images/shoesg.jpg'
// import BodyComponent from '../../layouts/BodyComponent'

function HomeComponents() {
  return (
    <React.Fragment>
     <HeaderComponents/>
      <BannerComponents/>
      
      {/* <Link to="/about" className="btn btn-primary"><button className='btn btn-success'>CKEDITOR</button></Link> */}


      <div className="container">
     
        <div className="row">
          <div className="col-md-12 mt-5 mb-5">
            <h1>Product List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
          <div className="card">
        <img src={grocery} className="card-img-top" height={150} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Grocery</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/cart" className="btn btn-primary">Go to Groceries</Link>
        </div>
      </div>
          </div>
          <div className="col-md-4 mb-3">
          <div className="card">
        <img src={mclothes} className="card-img-top" height={150} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Male Clothes</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/cart" className="btn btn-primary">Go to Male Clothes</Link>
        </div>
      </div>
          </div>
          <div className="col-md-4 mb-3">
          <div className="card">
        <img src={fclothes} className="card-img-top" height={150} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Female Clothes</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/cart" className="btn btn-primary">Go to Female Clothes</Link>
        </div>
      </div>
          </div>
          <div className="col-md-4 mb-3">
          <div className="card">
        <img src={watch} className="card-img-top" height={150} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Watches</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/cart" className="btn btn-primary">Go to Watches</Link>
        </div>
      </div>
          </div>
          <div className="col-md-4 mb-3">
          <div className="card">
        <img src={shoes} className="card-img-top" height={150} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Male Shoes</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/cart" className="btn btn-primary">Go to Male Shoes</Link>
        </div>
      </div>
          </div>
          <div className="col-md-4 mb-3">
          <div className="card">
        <img src={shoesg} className="card-img-top" height={150} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Female Shoes</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/cart" className="btn btn-primary">Go to Female Shoes</Link>
        </div>
      </div>
          </div>
        </div>
      </div>
      <FooterComponents/>
      {/* <BodyComponent/> */}
      </React.Fragment>
  )
}

export default HomeComponents
