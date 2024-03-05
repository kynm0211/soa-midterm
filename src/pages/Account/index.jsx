import React from "react";
import Navbar from "../../components/Navbar/navbar-manager"
import Account from "../../components/Account/Account";
import { Helmet } from "react-helmet";

export default function accountManagement(){
    return(
        <div>
            <Helmet><title>Account Management</title></Helmet>
            <Navbar></Navbar>
            <Account></Account>
        </div>
    )
}