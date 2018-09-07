import React from 'react';
import { dataURItoBlob, shouldRender } from './utils';


function addNameToDataURL(dataURL, name) {
    return dataURL.replace(';base64', `;name=${name};base64`);
};


function processFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.onerror = reject;
        reader.onload = (event) => resolve({
            dataURL: addNameToDataURL(event.target.result, file.name),
            name: file.name,
            size: file.size,
            type: file.type
        });
        reader.readAsDataURL(file);
    });
};


function processFiles(files) {
    return Promise.all([].map.call(files, processFile));
};


function extractFileInfo(dataURLs) {
    return dataURLs.filter(
        dataURL => typeof dataURL !== 'undefined'
    ).map(dataURL => {
        const { blob, name } = dataURItoBlob(dataURL);
        return { name, size: blob.size, type: blob.type };
    });
};


const FilesInfo = ({ filesInfo }) => {
    if (!filesInfo.length) return null;
    return (
        <ul className='mt-2 mb-2'>
            {filesInfo.map(({ name, size, type }, i) => (
                <li key={i}><b>{name}</b> ({type}, {size} bytes)</li>
            ))}
        </ul>
    );
};


class CustomFileWidget extends React.Component {
    constructor(props) {
        super(props);
        const { value } = this.props;
        const values = Array.isArray(value) ? value : [value];
        this.state = { values, filesInfo: extractFileInfo(values) };
        this.handleChange = this.handleChange.bind(this);
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shouldRender(this, nextProps, nextState);
    };

    handleChange(event) {
        const { onChange, multiple } = this.props;
        processFiles(event.target.files).then(filesInfo => {
            this.setState({
                filesInfo,
                values: filesInfo.map(fileInfo => fileInfo.dataURL),
            }, () => onChange(multiple ? this.state.values : this.state.values[0]));
        });
    };

    render() {
        const { multiple, id, readonly, disabled, autofocus, required } = this.props;
        const { filesInfo } = this.state;
        return (
            <div>
                <input
                    id={id}
                    type='file'
                    onChange={this.handleChange}
                    autoFocus={autofocus}
                    multiple={multiple}
                    disabled={readonly || disabled}
                    required={required}
                    accept='.svg'
                />
                <FilesInfo filesInfo={filesInfo}/>
            </div>
        );
    };
};


export { CustomFileWidget };
