import React, { useState } from "react";
import "./Invoice.css";

export default function Invoice() {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const days = ['All', ...Array.from({ length: 31 }, (_, i) => i + 1)];
    const months = ['All', ...Array.from({ length: 12 }, (_, i) => i + 1)];
    const years = [2022, 2023, 2024];

    const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false);

    const openPopupOrderDetail = () => {
        setIsOpenOrderDetail(true);
    };

    const closePopupOrderDetail = () => {
        setIsOpenOrderDetail(false);
    };

    return (
        <div className="invoice-container">
            {/* search bar */}
            <div className="invoice-search">
                <input className="invoiceSearch-box" type="text" placeholder="Search"></input>
            </div>
            {/* invoice information to filter */}
            <div className="invoice-info">
                <div className="invoice-info-item">
                    {/* <input type="date" name="day-of-invoice" id="day-of-invoice" disabled /> */}
                    <label htmlFor="invoice-day">Day:</label>
                    <select name="invoice-day" id="invoice-day" defaultValue={currentDay} className="invoice-date">
                        {days.map((day) => <option value={day}>{day}</option>)}
                    </select>

                    <label htmlFor="invoice-month">Month:</label>
                    <select name="invoice-month" id="invoice-month" defaultValue={currentMonth+1} className="invoice-date">
                        {months.map((month) => <option value={month}>{month}</option>)}
                    </select>

                    <label htmlFor="invoice-year">Year:</label>
                    <select name="invoice-year" id="invoice-year" defaultValue={currentYear} className="invoice-date">
                        {years.map((year) => <option value={year}>{year}</option>)}
                    </select>
                </div>

                <div className="invoice-info-item">
                    <label htmlFor="shift">Shift:</label>
                    <select name="shift" id="shift" defaultValue="all" className="shift">
                        <option value="all">All shift</option>
                        <option value="shift-1">Shift 1</option>
                        <option value="shift-2">Shift 2</option>
                        <option value="shift-3">Shift 3</option>
                    </select>
                </div>

                <div className="invoice-info-item">
                    <label htmlFor="total-invoice" className="total-invoice-label">Total invoice:</label>
                    <input type="text" id="total-invoice" className="total-invoice" disabled placeholder="3" />
                </div>

                <div className="invoice-info-item">
                    <label htmlFor="revenue" className="revenue-label">Revenue: </label>
                    <input type="text" id="revenue" className="revenue" disabled placeholder="$" />
                </div>

            </div>

            {/* table of invoices */}
            <div className="table-of-invoices">
                <table className="invoice-table">
                    <thead>
                        <tr>
                            <th className="number-order-col">No.</th>
                            <th>Table Name</th>
                            <th className="OrID">Order ID</th>
                            <th>Shift</th>
                            <th className="username">Username</th>
                            <th>Quantity</th>
                            <th className="total">Total</th>
                            <th className="payment-time">Payment time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={openPopupOrderDetail}>
                            {isOpenOrderDetail && (
                                <div className="overlayOrderDetail">
                                    <dialog className="popupOrderDetail" open={isOpenOrderDetail}>
                                        <div>
                                            <h3 className="popup-header">Order Details</h3>
                                            <table className="order-detail-table">
                                                <thead>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>Table Name</th>
                                                        <th>Order</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>A01</td>
                                                        <td>Yangzhou fried rice</td>
                                                        <td>3</td>
                                                        <td>150$</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="popup-btn">
                                            <button onClick={closePopupOrderDetail} className="cancel-btn">Cancel</button>
                                        </div>
                                    </dialog>
                                </div>
                            )}
                            <td>01</td>
                            <td>A01</td>
                            <td>#abc12def</td>
                            <td>3</td>
                            <td>123$</td>
                            <td>1</td>
                            <td>abc</td>
                            <td>09:00:00 12/03/2024</td>
                        </tr>
                        <tr>
                            <td>...</td>
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
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* pagination bar */}


        </div>
    )
}