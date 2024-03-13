import React, { useState } from "react";
import "./Account.css";
// import Popup from 'reactjs-popup';

export default function Account() {
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    // const [isOpenEdit, setIsOpenEdit] = useState(false);

    const openPopupAdd = () => {
        setIsOpenAdd(true);
    };

    const closePopupAdd = () => {
        setIsOpenAdd(false);
    };

    const createConfirm = () => {
        setIsOpenAdd(false);
        alert("Create a new account.");
    };

    const deleteConfirm = () => {
        alert("Delete button.");
    };

    // const openPopupEdit = () => {
    //     setIsOpenEdit(true);
    // }

    // const closePopupEdit = () => {
    //     setIsOpenEdit(false);
    // };
    
    return (
        <div>
            <div className="account-search">
                <input className="accountSearch-box" type="text" placeholder="Search"></input>
            </div>

            <div className="account-add">
                <button onClick={openPopupAdd} className="Add-btn">Add</button>
                {isOpenAdd && (
                    <div className="overlayAdd">
                        <dialog className="popupAdd" open={isOpenAdd}>
                            {/* <div onClick={closePopupAdd} style={{ position: 'absolute', right: 0 }}>X</div> */}
                            <div>
                                <h2 className="popup-header">Create a new account</h2>
                                <div className="popup-content">
                                    <label htmlFor="fullname">Fullname: </label>
                                    <input type="text" id="fullname" className="fullname" /><br />
                                    <label htmlFor="username">Username: </label>
                                    <input type="text" id="username" className="username" /><br />
                                    <label htmlFor="pwd">Password: </label>
                                    <input type="text" id="pwd" className="pwd" /><br />
                                    <label htmlFor="role">Role: </label>
                                    <select name="role" id="role">
                                        <option value="none">None</option>
                                        <option value="chef">Chef</option>
                                        <option value="manager">Manager</option>
                                        <option value="waiter">Waiter</option>
                                    </select><br />
                                    {/* <label htmlFor="dob">Date of birth: </label> */}
                                    {/* <input type="date" id="dob" className="dob" /><br /> */}
                                    {/* <label htmlFor="phone">Phone: </label>
                                    <input type="text" id="phone" className="phone" /><br />
                                    <label htmlFor="email">Email: </label>
                                    <input type="email" id="email" className="email" /><br /> */}
                                </div>
                            </div>
                            <div className="popup-btn">
                                <button onClick={closePopupAdd} className="cancel-btn">Cancel</button>
                                <button onClick={createConfirm} className="create-btn">Create</button>
                            </div>

                        </dialog>
                    </div>
                )}
            </div>

            {/* <div>
                <Popup trigger={<button> Mở popup </button>} position="right center">
                    <div>Nội dung popup</div>
                </Popup>
            </div> */}


            <div className="table">
                <table className="account-table">
                    <thead>
                        <tr>
                            <th className="number-order-col">No.</th>
                            <th>Fullname</th>
                            <th>Username</th>
                            <th>Pwd</th>
                            <th>Role</th>
                            {/* <th>Birthday</th> */}
                            {/* <th>Phone</th>
                            <th>Mail</th> */}
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
                            {/* <td>abcdef</td> */}
                            {/* <td>abcdef</td>
                            <td>abcdef</td> */}
                            <td className="action">
                                <span className="edit-iccon">
                                    <i class="bi bi-pencil-square"></i>
                                </span>

                                <span onClick={deleteConfirm} className="delete-icon">
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
                            {/* <td>...</td> */}
                            {/* <td>...</td>
                            <td>...</td> */}
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            {/* <td>...</td> */}
                            {/* <td>...</td>
                            <td>...</td> */}
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div >
    )
}

