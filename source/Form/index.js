import React from 'react';
import Form from "react-jsonschema-form";


const schema = {
    title: 'Todo',
    type: 'object',
    required: ['title'],
    properties: {
        title: {
            type: 'string',
            title: 'Title',
            default: 'A new task'
        },
        done: {
            type: 'boolean',
            title: 'Done?',
            default: false
        }
    }
};


const SchemaForm = () => <Form schema={schema}/>;


export { SchemaForm as Form };
