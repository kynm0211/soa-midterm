import React from "react";
import TableOrder from "../../components/TableOrder/TableOrder"
import Navbar from "../../components/Navbar/navbar-waiter"
import { Helmet } from 'react-helmet'

export default function tableOrder(){
    return(
        <div>
            <Helmet>
                <title>Table Order</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="tableOrder-container">
                <TableOrder></TableOrder>
            </div>
            
        </div>
        
    )
}