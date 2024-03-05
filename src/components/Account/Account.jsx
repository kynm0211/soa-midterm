import React from "react";
import "./Account.css";

export default function Account() {
    return (
        <div>
            <div className="account-search">
                <input className="accountSearch-box" type="text" placeholder="Search"></input>
            </div>

            <div className="account-add">
                <button className="Add-btn">Add</button>
            </div>

            <div className="table">
                <table className="account-table">
                    <thead>
                        <tr>
                            <th className="number-order-col">No.</th>
                            <th>Fullname</th>
                            <th>Username</th>
                            <th>Pwd</th>
                            <th>Role</th>
                            <th>Birthday</th>
                            <th>Phone</th>
                            <th>Mail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>abc</td>
                            <td>abcdef</td>
                            <td>abcdef</td>
                            <td>abcdef</td>
                            <td>abcdef</td>
                            <td>abcdef</td>
                            <td>abcdef</td>
                            <td className="action">
                                <span className="edit-iccon">
                                    <i class="bi bi-pencil-square"></i>
                                </span>

                                <span className="delete-icon">
                                <i class="bi bi-trash3-fill"></i>
                                </span>
                            </td>
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
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div >
    )
}

