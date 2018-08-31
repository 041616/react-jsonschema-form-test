import React from 'react';
import Form from 'react-jsonschema-form';
import { SketchPicker } from 'react-color'
import { schema, uiSchema } from '../Schema';
import { rgbaToHex } from './utils'


const Description = ({ id, label, description, required }) => {
    if (!label) return description;
    return (
        <div className="row">
            <div className="col-md-auto">
                <label className='control-label text-info tree-line' htmlFor={id}>
                    {label}
                    {required ? <span className='required text-danger'>*</span> : null}
                </label>
            </div>
            <div className="col">{description}</div>
        </div>
    );
};


const CustomFieldTemplate = (props) => {
    const { classNames, help, errors, children } = props;
    return (
        <div className={classNames}>
            <Description {...props}/>
            {children}
            {errors}
            {help}
        </div>
    );
};


class customColorWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
            color: {
                r: '241',
                g: '112',
                b: '19',
                a: '1',
            },
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false });
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb });
    };

    render() {
        const { r, g, b, a } = this.state.color;
        const color = `rgba(${r}, ${g}, ${b}, ${a})`;
        return (
            <div>
                <input
                    id={this.props.id}
                    type='text'
                    className='form-control'
                    value={color}
                    required={this.state.required}
                    onChange={(event) => this.props.onChange(event.target.value)}
                    onClick={this.handleClick}
                    style={{ backgroundColor: color }}
                />
                { this.state.displayColorPicker ? (
                    <div style={{ position: 'absolute', zIndex: 2 }}>
                        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }} onClick={ this.handleClose }/>
                        <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                    </div>
                ) : null }
            </div>
        );
    };
};

// https://casesandberg.github.io/react-color/#examples


const fields = {
    TitleField: () => null,
};


const widgets = {
    customColorWidget
};


const SchemaForm = () => (
    <Form
        schema={schema}
        noHtml5Validate={true}
        uiSchema={schema.ui}
        FieldTemplate={CustomFieldTemplate}
        fields={fields}
        widgets={widgets}
    />
);


export { SchemaForm as Form };
