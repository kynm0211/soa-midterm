import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteConfirmation = ({
    showModal,
    hideModal,
    confirmModal,
    fullName,
    id,
    deleteUser,
}) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="alert alert-danger">
                    Do you want to delete user {fullName} ?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={hideModal}>
                    Cancel
                </Button>
                <Button
                    variant="danger"
                    onClick={() => deleteUser(id, fullName)}
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmation;
