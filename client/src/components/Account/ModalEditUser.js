import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { editUser } from "../services/userServices";
import { toast, ToastContainer } from "react-toastify";
import Form from "react-bootstrap/Form";

function ModalEditUser(props) {
    const { show, handleClose, handleUpdateTable, data } = props; //received from parent
    const [email, setEmail] = useState("");
    const [userName, setuserName] = useState("");
    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(data.role);
    const [re_password, setRepassword] = useState("");

    useEffect(() => {
        setEmail(data.email);
        setuserName(data.userName);
        setfullName(data.fullName);
        setRole(data.role);
    }, [data]);

    const validateData = () => {
        //email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            toast.error("Please enter Email!");
            return false;
        } else if (!emailRegex.test(email)) {
            toast.error("Email is invalid!");
            return false;
        } else if (!userName) {
            toast.error("Please enter username!");
            return false;
        } else if (!fullName) {
            toast.error("Please enter full ame!");
            return false;
            // } else if (!password) {
            //     toast.error("Please enter password!");
            //     return false;
            // } else if (!re_password) {
            //     toast.error("Please enter re-password!");
            //     return false;
            // } else if (password !== re_password) {
            //     toast.error("Password and re-password must be same!");
            //     return false;
        } else if (!role) {
            toast.error("Please choose role!");
            return false;
        }
        return true;

        //
    };

    const handleSaveUser = async () => {
        const _id = data._id;
        const dataUser = { _id, email, userName, fullName, role };
        if (validateData()) {
            let res = await editUser(dataUser);
            if (res && res.data) {
                handleClose();
                setEmail("");
                setuserName("");
                setfullName("");
                setRole("");
                handleUpdateTable();
                toast.success("Update user successfully!");
                // handleUpdateTable();
            } else {
                toast.error("Update user failed :(");
            }
        }
        console.log(data);
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-addNew">
                        <form>
                            <div className="form-group">
                                <label className="form-label">Email:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                ></small>
                            </div>
                            <div className="form-group">
                                <label className="form-label">User Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your username"
                                    value={userName}
                                    onChange={(event) =>
                                        setuserName(event.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Full Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    value={fullName}
                                    onChange={(event) =>
                                        setfullName(event.target.value)
                                    }
                                />
                            </div>
                            {/* <div className="form-group">
                                <label className="form-label">Password:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Re-Password:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your re-password"
                                    value={re_password}
                                    onChange={(event) =>
                                        setRe_password(event.target.value)
                                    }
                                />
                            </div> */}
                            <div className="form-group">
                                <label className="form-label">Role:</label>
                                <Form.Select
                                    aria-label="Default select example"
                                    value={role}
                                    onChange={(event) =>
                                        setRole(event.target.value)
                                    }
                                >
                                    <option>Choose a role</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Waiter">Waiter</option>
                                    <option value="Chef">Chef</option>
                                </Form.Select>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalEditUser;
