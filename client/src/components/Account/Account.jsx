import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Account.css";
import { fetchAllUser, deleteUser } from "../services/userServices";
import DeleteConfirmation from "../ModalConfirm/ModalConfirmDelete";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import ModalAddNew from "./ModalAddNewUser";
import Container from "react-bootstrap/Container";
import { toast, ToastContainer } from "react-toastify";

// import Popup from 'reactjs-popup';

export default function Account() {
    const [listUsers, setListUsers] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);

    const handleClose = () => {
        setIsShowModalAddNew(false);
        // setIsShowModalEditUser(false);
        setIsShowModalDelete(false);
    };

    const closePopupAdd = () => {
        setIsShowModalAddNew(false);
    };

    const showModalDelete = () => {
        setIsShowModalDelete(true);
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

    const refeshPage = () => {
        getAllUsers();
    };

    const getAllUsers = async () => {
        let res = await fetchAllUser();

        if (res && res.data) {
            setListUsers(res.data.users);
            console.log("fe received:", res.data);
        }
    };

    const createConfirm = async () => {};

    const delete_User = async (data) => {
        setIsShowModalDelete(true);
        // const userId = data._id;
        // let res = await deleteUser(userId);

        // if (res) {
        //     refeshPage();
        //     toast.info(`Delete ${data.fullName} successfully!`);
        // } else {
        //     toast.error("Error!");
        // }
    };

    //refesh data
    // const refeshPage = async () => fetchAllUser();
    return (
        <Container>
            <div className="account-container">
                <div className="account-search">
                    <input
                        className="accountSearch-box"
                        type="text"
                        placeholder="Search"
                    ></input>
                </div>

                <div className="my-3 d-flex justify-content-between">
                    <b>List User:</b>
                    <button
                        className="btn btn-success"
                        onClick={() => setIsShowModalAddNew(true)}
                    >
                        Add new user
                    </button>
                </div>
                <Table striped bordered hover className="reponsive ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>User Name</th>
                            <th>Full Name</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers &&
                            listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr key={`users-${index}`}>
                                        <td>{index}</td>
                                        <td>{item.email}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.fullName}</td>
                                        <td>@{item.role}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    setIsShowModalEditUser(true)
                                                }
                                                className="btn btn-warning mx-3"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    delete_User(item)
                                                }
                                                className="btn btn-danger"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                <ModalAddNew
                    show={isShowModalAddNew}
                    handleClose={handleClose}
                    handleUpdateTable={refeshPage}
                />

                <DeleteConfirmation
                    showModal={isShowModalDelete}
                    hideModal={handleClose}
                    message={"Do you want to delete"}
                />
                {/* <ModalEditUser
                show={isShowModalEditUser}
                handleClose={handleClose}
            /> */}
            </div>
        </Container>
    );
}
