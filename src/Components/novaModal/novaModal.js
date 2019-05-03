import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Portal from "./Portal/Portal";
const NovaModal = props => {
  return (
    <Portal>
      <Modal
        isOpen={props.isOpen}
        toggle={props.toggle}
        style={{ minWidth: "90%" }}
      >
        <ModalHeader toggle={props.toggle}>
          {props.modalType === 1 ? <p>Notications</p> : <p>Comments</p>}
        </ModalHeader>
        <ModalBody style={{ height: "60%" }}>{props.children}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Portal>
  );
};

export default NovaModal;
