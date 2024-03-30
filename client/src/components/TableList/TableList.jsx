import React from "react";
import './TableList.css'

export default function TableList() {
    return (
        <div className="tableList-container">
            <div className="ListTab">
                <div className="TabItem">
                    All Table
                </div>
                <div className="TabItem">
                    Empty
                </div>
                <div className="TabItem">
                    Full
                </div>
            </div>

            <div className="TableList">
                <div className="Table">
                    <div className="tableNumber">A01</div>
                    <div className="tableStatus">Full</div>
                </div>
                <div className="Table">
                    <div className="tableNumber">A02</div>
                    <div className="tableStatus">Empty</div>
                </div>
                <div className="Table">
                    <div className="tableNumber">A03</div>
                    <div className="tableStatus">Full</div>
                </div>
                
                <div className="Table">
                    <div className="tableNumber">A04</div>
                    <div className="tableStatus">Empty</div>
                </div>
                <div className="Table">
                    <div className="tableNumber">A05</div>
                    <div className="tableStatus">Full</div>
                </div>
                <div className="Table">
                    <div className="tableNumber">A06</div>
                    <div className="tableStatus">Empty</div>
                </div>
            </div>
        </div>
    )
}