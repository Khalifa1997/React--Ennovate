import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Modal.css";

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title
            className="modalTitle"
            id="contained-modal-title-vcenter"
          >
            New Nova
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="form-control novaArea"
            id="exampleFormControlTextarea3"
            rows="3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            className="modalButton"
            onClick={this.props.onHide}
          >
            Nova
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
