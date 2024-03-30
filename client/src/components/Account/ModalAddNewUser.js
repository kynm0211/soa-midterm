import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateUser } from "../services/userServices";
import { toast } from "react-toastify";

function ModalAddNew(props) {
    const { show, handleClose, handleUpdateTable } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSaveUser = async () => {
        let res = await postCreateUser(name, job);
        console.log(res);
        if (res && res.id) {
            handleClose();
            setName("");
            setJob("");
            toast.success("Create user successfully!");
            handleUpdateTable({ first_name: name, id: res.id });
        } else {
            toast.error("Create user failed :(");
        }
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-addNew">
                        <form>
                            <div className="form-group">
                                <label className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                />
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                ></small>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Job:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your job"
                                    value={job}
                                    onChange={(event) =>
                                        setJob(event.target.value)
                                    }
                                />
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

export default ModalAddNew;
