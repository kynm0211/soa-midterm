import React, { useEffect, useState } from "react";
import "./Account.css";
import { fetchAllUser } from "../services/userServices";
import ModalAddNew from "./ModalAddNewUser";

// import Popup from 'reactjs-popup';

export default function Account() {
    const [listUsers, setListUsers] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

    const handleClose = () => {
        setIsShowModalAddNew(false);
        // setIsShowModalEditUser(false);
    };
    // const [isOpenEdit, setIsOpenEdit] = useState(false);

    // const openPopupAdd = () => {
    //     setIsOpenAdd(true);
    // };

    // const closePopupAdd = () => {
    //     setIsOpenAdd(false);
    // };

    // const createConfirm = () => {
    //     setIsOpenAdd(false);
    //     alert("Create a new account.");
    // };

    const deleteConfirm = () => {
        alert("Delete button.");
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let res = await fetchAllUser();

        if (res && res.data) {
            setListUsers(res.data.users);
            console.log("fe received:", res.data);
        }
    };
    //refesh data
    const refreshUsers = async () => fetchAllUser();
    return (
        <div className="account-container">
            <div className="account-search">
                <input
                    className="accountSearch-box"
                    type="text"
                    placeholder="Search"
                ></input>
            </div>

            {/* <div>
                <Popup trigger={<button> Mở popup </button>} position="right center">
                    <div>Nội dung popup</div>
                </Popup>
            </div> */}

            <div className="acc-table">
                <table className="account-table">
                    <thead>
                        <tr>
                            <th className="number-order-col">No.</th>
                            <th>Fullname</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers &&
                            listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr key={`users-${index}`}>
                                        <td>{index}</td>
                                        <td>{item.fullName}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.role}</td>
                                        <td className="action">
                                            <span className="edit-iccon">
                                                <i class="bi bi-pencil-square"></i>
                                            </span>

                                            <span
                                                onClick={deleteConfirm}
                                                className="delete-icon"
                                            >
                                                <i class="bi bi-trash3-fill"></i>
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
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
                <ModalAddNew
                    show={isShowModalAddNew}
                    handleClose={handleClose}
                    // handleUpdateTable={handleUpdateTable}
                />
            </div>
        </div>
    );
}
