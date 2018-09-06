import React from 'react';
import { SketchPicker } from 'react-color';


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


function extractRGBAFromHex(hex) {
    if (!isHexColor(hex)) throw new Error('[hexToRgba] incorrect Hex value');
    let c = hex.substring(1).split('');
    if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    c = `0x${c.join('')}`;
    return { r: (c>>16)&255, g: (c>>8)&255, b: c&255, a: 1 };
};


function getColorValue(color) {
    if (!color.rgb) return { backgroudColor: null, textColor: null };
    const { r, g, b, a } = color.rgb;
    return {
        backgroudColor: a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : color.hex,
        textColor: isColorDark(r, g, b, a) ? '#fff' : null,
    };
};


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

    componentWillUnmount() {
        document.body.style.overflow = null;
    }

    handleClick() {
        const { displayColorPicker } = this.state;
        document.body.style.overflow = !displayColorPicker ? 'hidden' : null;
        this.setState({ displayColorPicker: !displayColorPicker });
    };

    handleClose() {
        document.body.style.overflow = null;
        this.setState({ displayColorPicker: false });
    };

    handleChange(color) {
        this.props.onChange(getColorValue(color).backgroudColor || '');
        this.setState({ color });
    };

    render() {
        const colorData = getColorValue(this.state.color);
        const inputBackgroundColor = colorData.backgroudColor;
        const inputTextColor = colorData.textColor;
        return (
            <div>
                <input
                    id={this.props.id}
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
                />
                { this.state.displayColorPicker ? (
                    <div className='overlay'>
                        <div className='overlay-background-layer' onClick={ this.handleClose }/>
                        <div className='overlay-body'>
                            <SketchPicker
                                color={ inputBackgroundColor || '#fff' }
                                onChangeComplete={ this.handleChange }
                                width={400}
                            />
                        </div>
                    </div>
                ) : null }
            </div>
        );
    };
};


export { CustomColorWidget };
