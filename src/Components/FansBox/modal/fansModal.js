import _ from "lodash";
import React from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import "./fansModal.css";
import UserStrip from "../userStrip/UserStrip";

const ModalExampleScrollingContent = props => (
  <Modal
    dimmer={true}
    open={props.isOpen}
    onClose={props.onClose}
    className="FansModal"
  >
    <Modal.Header>{props.boxName}</Modal.Header>
    <Modal.Content scrolling>
      {props.list.map(user => (
        <UserStrip
          imgUrl={user.profile_image_url}
          userName={user.name}
          screenName={user.screen_name}
        />
      ))}
    </Modal.Content>
  </Modal>
);

export default ModalExampleScrollingContent;
