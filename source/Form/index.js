import React from 'react';
import Form from 'react-jsonschema-form';
import { SketchPicker } from 'react-color'
import { schema, uiSchema } from '../Schema';
import { isColorDark, extractRGBAFromHex } from './utils'


const initSchema = {
    styles: {
        backgroundColor: '#fefefe',
        textColor: '#333',
        fontFamily: 'Arial, Helvetica, sans-serif',
        linkColor: '#1a0dab',
    }
};


const defaultSchema = {
    styles: {
        linkHoverColor: initSchema.linkColor
    }
}


const Description = ({ id, label, description, required }) => {
    if (!label) return description;
    return (
        <div className="row">
            <div className="col-md-auto">
                <label className='control-label font-weight-bold text-info tree-line' htmlFor={id}>
                    {label}
                    {required ? <span className='required text-danger'>*</span> : null}
                </label>
            </div>
            <div className="col">{description}</div>
        </div>
    );
};


const ErrorList = ({ errors }) => {
    if (!errors) return null;
    return (
        <ul>
            {errors.map((error, i) => <li className='text-danger' key={i}>{error}</li>)}
        </ul>
    );
};

const FieldTemplate = (props) => {
    const { classNames, rawHelp, children, rawErrors } = props;
    return (
        <div className={classNames}>
            <Description {...props}/>
            {children}
            <div className='help-block text-muted'>{rawHelp}</div>
            <ErrorList errors={rawErrors}/>
        </div>
    );
};


const ErrorListTemplate = ({ errors }) => (
    <ol>
        {errors.map((error, i) => (
            <li className='text-danger' key={i}>
                {error.stack}
            </li>
        ))}
    </ol>
);


const ObjectFieldTemplate = ({ properties }) => (
    <fieldset className='form-fieldset'>
        {properties.map((element, i) => element.content)}
    </fieldset>
);


const CustomFileWidget = (props) => {
    return (
        <input
            id={props.id}
            type='file'
            required={props.required}
            onChange={(event) => props.onChange(event.target.value)}
        />
    );
};
// function processFile(files) {
//   const f = files[0];
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event) => resolve(event.target.result);
//     reader.readAsDataURL(f);
//   });
// }
//
// const FileWidget = (props) => {
//   return (
//     <input type="file"
//       required={props.required}
//       onChange={(event) => processFile(event.target.files).then(props.onChange)} />
//   )
// };


class CustomColorWidget extends React.Component {
    constructor(props) {
        super(props);
        const initColor = {};
        if (this.props.value) {
            const { r, g, b, a } = extractRGBAFromHex(this.props.value);
            initColor.rgb = { r, g, b, a };
            initColor.hex = this.props.value;
        }
        this.state = {
            displayColorPicker: false,
            color: initColor,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleClick() {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose() {
        this.setState({ displayColorPicker: false });
    };

    handleChange(color) {
        this.setState({ color });
    };

    render() {
        let inputBackgroundColor = null;
        let inputTextColor = null;
        if (this.state.color.rgb) {
            const { r, g, b, a } = this.state.color.rgb;
            const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
            const hex = this.state.color.hex;
            inputBackgroundColor = a < 1 ? rgba : hex;
            inputTextColor = isColorDark(r, g, b, a) ? '#fff' : null;
        }

        return (
            <div>
                <input
                    id={this.props.id}
                    type='text'
                    className='form-control'
                    value={inputBackgroundColor || ''}
                    required={this.props.required}
                    onChange={(event) => this.props.onChange(event.target.value)}
                    onClick={this.handleClick}
                    style={{
                        backgroundColor: inputBackgroundColor,
                        color: inputTextColor,
                        cursor: 'pointer',
                    }}
                />
                { this.state.displayColorPicker ? (
                    <div style={{ position: 'absolute', zIndex: 2 }}>
                        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }} onClick={ this.handleClose }/>
                        <SketchPicker color={ inputBackgroundColor || '#fff' } onChangeComplete={ this.handleChange } width={350}/>
                    </div>
                ) : null }
            </div>
        );
    };
};


const widgets = {
    CustomColorWidget,
    CustomFileWidget
};


class SchemaForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    };

    handleSubmitClick() {
        debugger;
    };

    handleClearClick() {
        console.log(this.props);
    };

    render() {
        return (
            <Form
                schema={schema}
                noHtml5Validate={true}
                uiSchema={schema.ui}
                FieldTemplate={FieldTemplate}
                ObjectFieldTemplate={ObjectFieldTemplate}
                ErrorList={ErrorListTemplate}
                showErrorList={true}
                widgets={widgets}
                onSubmit={this.handleSubmitClick}
                formData={initSchema}
            />
        );
    }
};


export { SchemaForm };
