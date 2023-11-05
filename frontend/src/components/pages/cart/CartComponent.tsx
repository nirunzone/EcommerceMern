import React from 'react'
import { Link } from 'react-router-dom'
// import HeaderComponents from '../../layouts/HeaderComponents'

function CartComponent() {
  return (
    <React.Fragment>
      {/* <HeaderComponents/> */}
     <div className="wrapper">
     <header className="site-header">
    <div className="inner-wrap">
      <h1>Shopping.</h1>
      <ul className="list-inline">
        <li><Link to="/" className="search"><i className="fa fa-search"></i></Link></li>
        <li><a href="/" className="account">Login</a></li>
        <li><button className="your-cart js-toggle-cart" data-item-num="3">Your Cart <i className="fa fa-lg fa-shopping-cart"></i></button></li>
      </ul>
    </div>
  </header>

  <div className="site-toolbar">
    <div className="inner-wrap clearfix">
      <div className="notifications animated"><span>Amazing Product</span> Added to Cart!</div>
    </div>
  </div>

  <div className="filter-grid">
    <div className="inner-wrap">
      <div className="filter-cell">
        <select className="form-control">
          <option value="*">Category</option>
          <option value="fav">Favorites</option>
        </select>
      </div>
      <div className="filter-cell">
        <select className="form-control">
          <option  value="*">Product Type</option>
          <option value="square">Square</option>
          <option value="circular">Circular</option>
        </select>
      </div>
      <div className="filter-cell">
        <select className="form-control" disabled={true}>
          <option>Price</option>
        </select>
      </div>
      <div className="filter-cell">
        <select className="form-control" disabled={true}>
          <option>Brand</option>
        </select>
      </div>
    </div>
  </div>

  <div className="inner-wrap content-wrap">

    <div className="product-grid">
      <div className="grid-product square fav">
        <div className="img-name camera"><h4>Camera</h4></div>
        <p className="price">$3.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product circular fav">
        <div className="img-name watch"><h4>Watch</h4></div>
        <p className="price">$5.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product square">
        <div className="img-name canoe"><h4>Canoe</h4></div>
        <p className="price">$6.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product">
        <div className="img-name typewriter"><h4>Typewriter</h4></div>
        <p className="price">$7.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product square">
        <div className="img-name canoe"><h4>Canoe</h4></div>
        <p className="price">$6.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product circular">
        <div className="img-name typewriter"><h4>Typewriter</h4></div>
        <p className="price">$7.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product">
        <div className="img-name camera"><h4>Camera</h4></div>
        <p className="price">$3.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product fav">
        <div className="img-name watch"><h4>Watch</h4></div>
        <p className="price">$5.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product square">
        <div className="img-name typewriter"><h4>Typewriter</h4></div>
        <p className="price">$7.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product">
        <div className="img-name camera"><h4>Camera</h4></div>
        <p className="price">$3.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product circular square fav">
        <div className="img-name canoe"><h4>Canoe</h4></div>
        <p className="price">$6.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product fav">
        <div className="img-name watch"><h4>Watch</h4></div>
        <p className="price">$5.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product tasty">
        <div className="img-name typewriter"><h4>Typewriter</h4></div>
        <p className="price">$7.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product circular">
        <div className="img-name watch"><h4>Watch</h4></div>
        <p className="price">$5.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product fav">
        <div className="img-name camera"><h4>Camera</h4></div>
        <p className="price">$3.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
      <div className="grid-product square">
        <div className="img-name canoe"><h4>Canoe</h4></div>
        <p className="price">$6.99 <button className="add-to-cart js-add-to-cart btn">Add</button></p>
      </div>
    </div>
  </div>

  <div className="sticky"></div>
  </div>

  <div className="cart">
  
  <div className="inner-wrap">
    <h2>Your Cart</h2>
    
    <table className="cart-table">
      <thead>
        <tr>
          <th className="product-remove">Remove Items</th>
          <th className="product-name">Product</th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-line-total">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr id="product-camera">
          <td><button type="button" className="product-remove" data-id="product-camera"><i className="fa fa-times"></i></button></td>
          <td>Camera</td>
          <td className="product-price" data-price="3.99">3.99</td>
          {/* <td className="product-quantity">
            <input type="number" pattern="\d*" step="1" min="1" max="5" value="1" data-id="product-camera">
            <button className="plus js-number-control">
              <i className="fa fa-plus-square"></i>
            </button>
            <button className="minus js-number-control">
              <i className="fa fa-minus-square"></i>
            </button></input>
          </td> */}
          <td className="product-line-total" id="product-camera-total" data-line-total="3.99">3.99</td>
        </tr>
      </tbody>
    </table>
    
  </div>

</div>

</React.Fragment>
  )
}

export default CartComponent