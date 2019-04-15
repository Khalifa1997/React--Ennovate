import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { newNova } from "../../../Actions/newNovaAction";
import { connect } from "react-redux";

import "./Modal.css";

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "sfgdfgdfhdhdghghgdh"
    };
  }
  render() {
    const text = {
      text: "kfghksdbfksdf"
    };
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
            onClick={text => this.props.newNova({ text: "kfghksdbfksdf" })}
          >
            Nova
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth,
//   error: state.errors
// });

export default connect(
  null,
  { newNova }
)(MyVerticallyCenteredModal);
