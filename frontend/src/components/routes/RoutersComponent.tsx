import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeComponents from '../pages/home/HomeComponents'
import PageNotFound from '../pages/errors/PageNotFound'
import DashboardComponent from '../admin/pages/DashboardComponent'
import LoginComponents from '../pages/auth/LoginComponents'
import RegisterComponents from '../pages/auth/RegisterComponents'


function RoutersComponent() {
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<HomeComponents/>}/>
                <Route path="/dashboard" element={<DashboardComponent/>}/>
                <Route path="/register" element={<RegisterComponents/>}/>
                <Route path="/login" element={<LoginComponents/>}>
                    
                </Route>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default RoutersComponent