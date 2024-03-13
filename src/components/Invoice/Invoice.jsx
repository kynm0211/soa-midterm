import React from "react";
import "./Invoice.css";

export default function Invoice(){
    return(
        <div>
            <div className="invoice-search">
                <input className="invoiceSearch-box" type="text" placeholder="Search"></input>
            </div>
            <div className="invoice-info">
                <div className="invoice-info-item">
                    <input type="date" name="day-of-invoice" id="day-of-invoice" disabled />
                </div>

                <div className="invoice-info-item">
                    <select name="shift" id="shift" className="shift">
                        <option value="All">All shift</option>
                        <option value="shift-1">Shift 1</option>
                        <option value="shift-2">Shift 2</option>
                        <option value="shift-3">Shift 3</option>
                    </select>
                </div>
                
                <div className="invoice-info-item">
                    <label htmlFor="total-invoice" className="total-invoice-label">Total invoice:</label>
                    <input type="text" id="total-invoice" className="total-invoice" disabled placeholder="3"/>
                </div>
                
                <div className="invoice-info-item">
                    <label htmlFor="revenue" className="revenue-label">Revenue: </label>
                    <input type="text" id="revenue" className="revenue" disabled placeholder="$"/>
                </div>
                
            </div>
            
            <div className="table">
                <table className="invoice-table">
                    <thead>
                        <tr>
                            <th className="number-order-col">No.</th>
                            <th>Table Name</th>
                            <th className="OrID">Order ID</th>
                            <th>Quantity</th>
                            <th className="total">Total</th>
                            <th>Shift</th>
                            <th className="payment-time">Payment time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>A01</td>
                            <td>#abc12def</td>
                            <td>3</td>
                            <td>123$</td>
                            <td>Shift 1</td>
                            <td>09:00:00</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}