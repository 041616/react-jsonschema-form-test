import React from 'react';
import { SketchPicker } from 'react-color';


const ESC_KEY_CODE = 27;


function isColorDark(r, g, b, a) {
    // per ITU-R BT.709
    return (0.2126*r + 0.7152*g + 0.0722*b + 0.5*a) < 140 && a > 0.4;
};


function isHexColor(color) {
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);
};


function isRGBAColor(color) {
    return /^rgb\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}\s*\)$|^rgba\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*(0|1|(0?.\d+))\s*\)$/.test(color);
};


function extractRGBA(color) {
    if (isRGBAColor(color)) {
        const c = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(/\s*,\s*/);
        return c.length > 3 ? {
            r: c[0], g: c[1], b: c[2], a: c[3]
        } : {
            r: c[0], g: c[1], b: c[2], a: 1
        };
    } else if (isHexColor(color)) {
        let c = color.substring(1).split('');
        if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        c = `0x${c.join('')}`;
        return { r: (c>>16)&255, g: (c>>8)&255, b: c&255, a: 1 };
    }
    throw new Error('[extractRGBA] invalid color value');
};


function getColorData(color) {
    if (!color) return { backgroudColor: null, textColor: null };
    const { r, g, b, a } = color.rgb || extractRGBA(color);
    return {
        backgroudColor: a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : color.hex || color,
        textColor: isColorDark(r, g, b, a) ? '#fff' : null,
    };
};


const ColorPicker = ({ enable, color, onChange, onClose }) => {
    if (!enable) return null;
    return (
        <div className='overlay'>
            <div className='overlay-background-layer' onClick={onClose}/>
            <div className='overlay-body'>
                <SketchPicker color={color} onChangeComplete={onChange} width={400}/>
            </div>
        </div>
    );
};


class CustomColorWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayColorPicker: false };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown, false);
    }

    componentWillUnmount() {
        document.body.style.overflow = null;
        document.removeEventListener('keydown', this.handleKeyDown, false);
    }

    handleClick() {
        const { displayColorPicker } = this.state;
        document.body.style.overflow = !displayColorPicker ? 'hidden' : null;
        this.setState({ displayColorPicker: !displayColorPicker });
    }

    handleClose() {
        document.body.style.overflow = null;
        this.setState({ displayColorPicker: false });
    }

    handleKeyDown(event) {
        const shouldCloseColorPicker = (
            this.state.displayColorPicker &&
            event.keyCode === ESC_KEY_CODE
        );
        if (shouldCloseColorPicker) this.handleClose();
    }

    handleChange(color) {
        this.props.onChange(getColorData(color).backgroudColor || '');
    }

    render() {
        const colorData = getColorData(this.props.value);
        const inputBackgroundColor = colorData.backgroudColor;
        const inputTextColor = colorData.textColor;
        return [
            <input
                id={this.props.id}
                key={this.props.id}
                type='text'
                className='form-control'
                value={inputBackgroundColor || ''}
                required={this.props.required}
                readOnly={this.props.readonly}
                onClick={this.handleClick}
                style={{
                    backgroundColor: inputBackgroundColor,
                    color: inputTextColor,
                    cursor: 'pointer',
                }}
                autoComplete='off'
            />,
            <ColorPicker
                enable={this.state.displayColorPicker}
                color={inputBackgroundColor || '#fff'}
                onChange={this.handleChange}
                onClose={this.handleClose}
                key={`color-picker-overlay-${this.props.id}`}
            />
        ];
    };
};


export { CustomColorWidget };
