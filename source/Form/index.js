import React from 'react';
import Form from 'react-jsonschema-form';
import { schema, uiSchema } from '../Schema';


const SchemaForm = () => {
    return <Form
        schema={schema}
        noHtml5Validate={true}
        uiSchema={schema.ui}
    />
};


export { SchemaForm as Form };
