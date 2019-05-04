import React from "react";
import {
  Editor,
  CompositeDecorator,
  EditorState,
  convertToRaw,
  RichUtils,
  Modifier,
  ContentState
} from "draft-js";
import * as Regex from "./lex";

class textEditor extends React.Component {
  constructor(props) {
    super(props);

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: handleSpan
      }
    ]);

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator)
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this.setState({ editorState: editorState });
  }

  render() {
    return (
      <Editor
        {...this.props}
        editorState={this.state.editorState}
        onChange={this.onChange}
        ref="editor"
        textAlignment="left"
      />
    );
  }
}

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
  return (
    <span style={styles.mention} data-offset-key={props.offsetKey}>
      {props.children}
    </span>
  );
};

const styles = {
  mention: {
    color: "#7EC0EE"
  }
};

export default textEditor;
