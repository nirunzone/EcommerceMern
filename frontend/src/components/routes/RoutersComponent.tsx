import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeComponents from '../pages/home/HomeComponents'
import PageNotFound from '../pages/errors/PageNotFound'
import DashboardComponent from '../admin/pages/DashboardComponent'
import LoginComponents from '../pages/auth/LoginComponents'
import RegisterComponents from '../pages/auth/RegisterComponents'
import CartComponent from '../pages/cart/CartComponent'
import CategoryComponent from '../admin/pages/CategoryComponent'
// import AboutComponents from '../pages/home/AboutComponents'


function RoutersComponent() {
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<HomeComponents/>}/>
                <Route path="dashboard">
                    <Route path="/dashboard" element={<DashboardComponent/>}/>
                    <Route path="category" element={<CategoryComponent/>}/>
                </Route> 
                {/* <Route path="/category" element={<CategoryComponent/>}/> */}
                <Route path="/register" element={<RegisterComponents/>}/>
                <Route path="/login" element={<LoginComponents/>}/>
                <Route path="/cart" element={<CartComponent/>}/>
                {/* <Route path="/about" element={<AboutComponents/>}/> */}

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default RoutersComponent