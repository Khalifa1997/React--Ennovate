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
        style={{ minWidth: "70%" }}
      >
        <ModalHeader toggle={props.toggle}>Comments</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
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
