import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { newNova } from "../../../Actions/newNovaAction";
import { connect } from "react-redux";

import {
  Editor,
  CompositeDecorator,
  EditorState,
  convertToRaw,
  RichUtils,
  Modifier,
  ContentState
} from "draft-js";
import "./replyModal.css";
import * as Regex from "../TweetDraft/lex";

class replyModal extends React.Component {
  constructor(props) {
    super(props);

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: handleSpan
      }
    ]);

    this.state = {
      text: "",
      editorState: EditorState.createEmpty(compositeDecorator),
      handles: []
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => {
      const blocks = convertToRaw(this.state.editorState.getCurrentContent())
        .blocks;
      const value = blocks
        .map(block => (!block.text.trim() && "\n") || block.text)
        .join("\n");
      this.setState({ text: value });
      this.setState({ editorState: editorState });
    };
  }

  // onChangeHandler = event => {
  //   const cloneState = {
  //     ...this.state
  //   };

  //   cloneState.text = event.target.value;

  //   this.setState({ text: cloneState.text });
  // };

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
          {/* i need to change kol da be fradt.js */}

          <span>
            <div className="root">
              <div className="editor text" onClick={this.focus} id="formToSave">
                <Editor
                  className="editor"
                  onClick={this.focus}
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  ref="editor"
                  textAlignment="left"
                />
              </div>
            </div>
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            className="modalButton"
            onClick={text => {
              let mentions = document.getElementsByClassName("handle");
              const clone = {
                ...this.state
              };
              console.log(mentions);
              for (var i = 0; i < mentions.length; i++) {
                clone.handles.push(mentions[i].textContent);
              }

              this.setState({ handles: clone.handles }, () => {
                console.log("handles", this.state.handles);
              });
              this.props
                .newNova(this.state.text, this.state.handles, this.props.id)
                .then(() => {
                  this.props.onHide();
                });
            }}
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

function handleStrategy(contentBlock, callback, contentState) {
  findWithRegex(Regex.HANDLE, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

const handleSpan = props => {
  console.log(props);
  return (
    <span
      style={styles.mention}
      data-offset-key={props.offsetKey}
      className="handle"
    >
      {props.children}
    </span>
  );
};

const styles = {
  mention: {
    color: "#7EC0EE"
  }
};

export default connect(
  null,
  { newNova }
)(replyModal);
