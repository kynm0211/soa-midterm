import React from "react";
import "./TableOrder.css";

export default function TableOrder() {
    return (
        <div>
            <div className="tableOrderNumber">A01</div>
            <div className="menuOrder">
                <input type="text" placeholder="Search" className="search-bar"></input>
                <div className="category">
                    <div>All</div>
                    <div>Dishes</div>
                    <div>Dessert</div>
                    <div>Drinks</div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <image></image>
                    </div>
                    <div className="item-info">
                        <div className="item-name">Bread</div>
                        <div className="item-price">5$</div>
                    </div>
                </div>
            </div>
            <div className="action-btn">
                <button className="cart-btn">CART</button>
                <button className="pay-btn">PAY</button>
            </div>

        </div>
    )
}