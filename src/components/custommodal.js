import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalController(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button variant="outline-light" onClick={e => { e.stopPropagation(); setModalShow(true); }}>
                {props.icon}
            </Button>
            <CustomModal show={modalShow}
                onHide={() => setModalShow(false)}
                props={props}
                title={props.title}
                description={props.description}
                function={props.function} />
        </>
    );
}

function CustomModal(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={e => { e.stopPropagation(); props.function(); }}>Confirm</Button>
                <Button variant="primary" onClick={e => { e.stopPropagation(); props.onHide(); }}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}