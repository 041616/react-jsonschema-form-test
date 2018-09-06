import React from 'react';
import Form from 'react-jsonschema-form';
import { schema } from 'Schema';
import primarySchema from 'Schema/styles';
import { CustomFileWidget } from './components/widgets/CustomFileWidget';
import { CustomColorWidget } from './components/widgets/CustomColorWidget';
import { FieldTemplate } from './components/fields/FieldTemplate';
import { ObjectFieldTemplate } from './components/fields/ObjectFieldTemplate';
import { ErrorListTemplate } from './components/ErrorListTemplate';


// const initSchema = {
//     styles: {
//         backgroundColor: '#fefefe',
//         textColor: '#333',
//         fontFamily: 'Arial, Helvetica, sans-serif',
//         linkColor: '#1a0dab',
//     }
// };


function createDefaultConfig(initFormData) {
    return {
        styles: {
            backgroundColor: initFormData.backgroundColor,
            textColor: initFormData.textColor,
            fontFamily: initFormData.fontFamily,
            linkColor: initFormData.linkColor,
            linkHoverColor: initFormData.linkHoverColor,
        }
    }
};


const widgets = { CustomColorWidget, CustomFileWidget };


class SchemaForm extends React.Component {
    constructor(props) {
        super(props);
        this.initSchema = primarySchema[Object.keys(primarySchema)[0]];
        delete this.initSchema.title;
        this.state = {
            formSchema: this.initSchema,
            formData: {},
            isFormBlank: true,
        };
        this.count = 0;
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleCreateConfigClick = this.handleCreateConfigClick.bind(this);
    };

    handleSubmitClick(data) {
        if (this.state.isFormBlank) {
            this.setState({
                formSchema: schema,
                formData: createDefaultConfig(data.formData),
                isFormBlank: false,
            });
        }
    };

    handleCreateConfigClick() {
        const isConfirmed = confirm(
            'WARNING: current configuration data will be erased! \n' +
            'Would you like to continue?'
        );
        if (isConfirmed) {
            this.count = 0;
            this.setState({
                formSchema: this.initSchema,
                formData: {},
                isFormBlank: true,
            });
        }
    };

    render() {
        this.count = this.count + 1;

        const shouldRenderErrorList = this.count > 1;
        debugger;
        const { formSchema, formData, isFormBlank } = this.state;
        return (
            <Form
                schema={formSchema}
                uiSchema={formSchema.ui}
                FieldTemplate={FieldTemplate}
                ObjectFieldTemplate={ObjectFieldTemplate}
                ErrorList={ErrorListTemplate}
                showErrorList={true}
                widgets={widgets}
                onSubmit={this.handleSubmitClick}
                noHtml5Validate={true}
                formData={formData}
                formContext={{ shouldRenderErrorList }}
            >
                <div className='fixed-top pt-2 pb-2 bg-white shadow-sm'>
                    <div className='container'>
                        <button type='submit' className='btn btn-sm btn-info'>
                            {isFormBlank ? 'Create' : 'Submit' }
                        </button>
                        {/*<button type='reset' className='btn btn-info ml-2'>Clear</button>*/}
                        {!isFormBlank ? (
                            <button
                                type='button'
                                className='btn btn-sm btn-info ml-2'
                                onClick={this.handleCreateConfigClick}
                            >Create new config</button>
                        ) : null}
                    </div>
                </div>
            </Form>
        );
    }
};


export { SchemaForm };
