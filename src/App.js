import React, { Component } from 'react';
import './App.css';
import Form from 'react-jsonschema-form'
import LayoutGridField from 'react-jsonschema-form-layout-grid';
import { TypeaheadField } from "react-jsonschema-form-extras/lib/TypeaheadField";

const schema = {
  properties: {
    description: {
      type: "integer",
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
  information: {
    'ui:readonly': true,
  },
  description: {
    "ui:field": "typeahead",
    typeahead: {
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

class App extends Component {
  newFormData = {
    description: 'Hey this editor rocks 😀',
    other: '',
    information: '',
  };

  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({ uiSchema, formData: this.newFormData, loading: false });
  }

  handleSubmit = (e) => {
    console.log(e);
  };

  handleChange = ({ formData }) => {
    let { information } = this.state.uiSchema;
    if (information['ui:readonly'] && formData.description) {
      let { uiSchema } = { ...this.state };
      this.setState({ uiSchema: {} });
      uiSchema.information['ui:readonly'] = false;
      this.setState({ formData, uiSchema });
    }
    if (!information['ui:readonly'] && !formData.description) {
      let { uiSchema } = { ...this.state };
      this.setState({ uiSchema: {} });
      uiSchema.information['ui:readonly'] = true;
      this.setState({ formData, uiSchema });
    }
  }

  render() {
    const { loading, uiSchema, formData } = this.state;
    return (
      <div className="App">
        {!loading &&
          <>
            <Form
              formData={formData}
              onChange={this.handleChange}
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
