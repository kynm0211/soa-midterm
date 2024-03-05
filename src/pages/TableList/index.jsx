import React from "react";
import TableList from "../../components/TableList/TableList"
import Navbar from "../../components/Navbar/navbar-waiter"
import { Helmet } from "react-helmet";

export default function Table(){
    return(
        <div>
            <Helmet>
                <title>Table List</title>
            </Helmet>
            <Navbar></Navbar>
            <TableList></TableList>
        </div>
        
    )
}