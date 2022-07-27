import React from 'react'
import { 
    Outlet
} from 'react-router-dom'
import Header from '../../containers/Header/Header'


export const Layout = () => (
    <>
        <Header />
        <Outlet />
    </>
)