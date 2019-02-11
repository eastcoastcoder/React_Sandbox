import React, { Component } from 'react';
import './App.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Button } from 'reactstrap';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Form from 'react-jsonschema-form'
import LayoutGridField from 'react-jsonschema-form-layout-grid';

const schema = {
  properties: {
    description: {
      type: "string",
      title: "Description",
    },
    information: {
      type: "string",
      title: "Info"
    },
    other: {
      type: "string",
      title: "Other Thing",
    },
  }
};

const fields = {
  layout_grid: LayoutGridField
}
 
const generateUiSchema = () => {
  return {
    'ui:field': 'layout_grid',
    'ui:layout_grid': {
      'ui:row': [
        { 'ui:col': { md: 12, children: [
          { 'ui:group': 'Some Field Group',
            'ui:row': [
              { 'ui:col': { md: 3, children: ['other'] } },
              { 'ui:col': { md: 3, children: ['information'] } } ] }] } },
        ]
    }
  };
}

const formData = {
  description: '<p>Hey this <strong>editor</strong> rocks 😀</p>',
  information: '',
  other: '<strong>OTHER THING</strong>',
};

const WYSIWYGFields = ['description', 'information', 'other'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      editorStateObj: { },
    };
  }

  componentDidMount() {
    this.setUpEditorStates();
    this.setUpUiSchema();
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
    const { editorStateObj } = {...this.state};
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
    const { editorStateObj } = {...this.state};
    editorStateObj[key] = editorState;
    this.setState({
      editorStateObj,
    });
  };

  setUpUiSchema = () => {
    this.setState({ uiSchema: generateUiSchema(), loading: false  });
  }

  handleSubmit = () => {
    const { editorStateObj } = this.state;
    const resultArr = [];
    for (const key of Object.keys(editorStateObj)) {
      resultArr.push(draftToHtml(convertToRaw(editorStateObj[key].getCurrentContent())));
    }
    console.log(resultArr);
  };

  render() {
    const { editorStateObj, loading, uiSchema } = this.state;
    return (
      <div className="App">
        {!loading &&
          <>
            <Form
              formData={formData}
              schema={schema}
              uiSchema={uiSchema}
              fields={fields}
              onSubmit={this.handleSubmit}
            />
            {WYSIWYGFields.map((key) => (
              <Editor
                editorState={editorStateObj[key]}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={editorState => this.onEditorStateChange(editorState, key)}
              />))}
          </>}
      </div>
    );
  }
}

export default App;
