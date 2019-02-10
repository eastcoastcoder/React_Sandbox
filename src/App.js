import React, { Component } from 'react';
import './App.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Button } from 'reactstrap';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        description: '<p>Hey this <strong>editor</strong> rocks 😀</p>',
        information: null,
      },
      editorStateObj: { },
    };
  }

  componentDidMount() {
    this.setUpEditorStates();
  }

  deriveHtmlData = (html) => {
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      return EditorState.createWithContent(contentState);
    } else {
      return EditorState.createEmpty();
    }
  }

  setUpEditorStates = () => {
    const { formData, editorStateObj } = {...this.state};
    for (const key of Object.keys(formData)) {
      if(!formData[key]) {
        editorStateObj[key] = EditorState.createEmpty();
      } else {
        editorStateObj[key] = this.deriveHtmlData(formData[key]);
      }
    }
    this.setState({ editorStateObj });
  }

  onEditorStateChange = (editorState, key) => {
    const {editorStateObj} = {...this.state};
    editorStateObj[key] = editorState;
    this.setState({
      editorStateObj,
    });
  };

  handleSubmit = () => {
    const { editorStateObj } = this.state;
    const resultArr = [];
    for (const key of Object.keys(editorStateObj)) {
      resultArr.push(draftToHtml(convertToRaw(editorStateObj[key].getCurrentContent())));
    }
    console.log(resultArr);
  };

  render() {
    const { editorStateObj } = this.state;
    return (
      <div className="App">
        <Editor
          editorState={editorStateObj.description}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={editorState => this.onEditorStateChange(editorState, 'description')}
        />
        <Editor
          editorState={editorStateObj.information}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={editorState => this.onEditorStateChange(editorState, 'information')}
        />
      <Button color="primary" onClick={this.handleSubmit}>Submit Me</Button>
      </div>
    );
  }
}

export default App;
