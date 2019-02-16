import React, { Component } from 'react';
import './App.css';
import Form from 'react-jsonschema-form'
import LayoutGridField from 'react-jsonschema-form-layout-grid';
import { TypeaheadField } from "react-jsonschema-form-extras/lib/TypeaheadField";

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

const uiSchema = {
  'description': {
    "ui:field": "typeahead",
    "typeahead": {
       options: [ { id: 1, value: "New York" }, { id: 2, value: "Washington" }],
       labelKey: "value",
       mapping: "id",
       minLength: 0,
     }
  },
  'ui:field': 'layout_grid',
  'ui:layout_grid': {
    'ui:row': [
      { 'ui:col': { md: 12, children: [
        { 'ui:group': 'Some Field Group',
          'ui:row': [
            { 'ui:col': { md: 3, children: ['description'] } },
            { 'ui:col': { md: 3, children: ['other'] } },
            { 'ui:col': { md: 3, children: ['information'] } } ] }] } },
      ]
  }
}

const formData = {
  description: 'Hey this editor rocks 😀',
  information: '',
  other: 'OTHER THING',
};

class App extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      editorStateObj: { },
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  onEditorStateChange = (editorState, key) => {
    console.log(key);
    const { editorStateObj } = {...this.state};
    editorStateObj[key] = editorState;
    this.setState({
      editorStateObj,
    });
  };

  handleSubmit = (e) => {
    console.log(e);
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {!loading &&
          <>
            <Form
              ref={this.formRef}
              formData={formData}
              schema={schema}
              uiSchema={uiSchema}
              fields={{
                layout_grid: LayoutGridField,
                typeahead: TypeaheadField,
              }}
              onSubmit={this.handleSubmit}
            />
          </>}
      </div>
    );
  }
}

export default App;
