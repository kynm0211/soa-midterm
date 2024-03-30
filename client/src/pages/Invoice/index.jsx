import React from "react";
import Navbar from "../../components/Navbar/navbar-manager";
import Invoice from "../../components/Invoice/Invoice";
import { Helmet } from "react-helmet";

export default function invoiceManagement(){
    return(
        <div>
            <Helmet><title>Invoice management</title></Helmet>
            <Navbar></Navbar>
            <Invoice></Invoice>
        </div>
    )
}