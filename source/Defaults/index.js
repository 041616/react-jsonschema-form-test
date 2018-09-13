import chroma from 'chroma-js';


function colorInstanceToString(color) {
    return color.alpha() < 1 ? color.css() : color.hex();
};


function setBuyButtonBackgroundColor(basic) {
    const color = chroma(basic.textColor).brighten(15 * 0.06);
    return colorInstanceToString(color);
};


function setBuyButtonBackgroundHoverColor(basic) {
    const color = chroma(basic.textColor).brighten(30 * 0.06);
    return colorInstanceToString(color);
};


function setBasicLinkHoverColor(basic) {
    if (basic.linkHoverColor) return basic.linkHoverColor;
    const color = chroma(basic.linkColor).brighten(20 * 0.06);
    return colorInstanceToString(color);
};


export default function(initFormData) {
    return {
        basic: {
            backgroundColor: initFormData.backgroundColor,
            textColor: initFormData.textColor,
            fontFamily: initFormData.fontFamily,
            linkColor: initFormData.linkColor,
            linkHoverColor: setBasicLinkHoverColor(initFormData),
        },
        buyButton: {
            icon: {
                file: '',
                color: initFormData.backgroundColor,
                hoverColor: initFormData.backgroundColor,
            },
            textColor: initFormData.backgroundColor,
            textHoverColor: initFormData.backgroundColor,
            backgroundColor: setBuyButtonBackgroundColor(initFormData),
            backgroundHoverColor: setBuyButtonBackgroundHoverColor(initFormData),
            fontFamily: initFormData.fontFamily,
        },
    }
};
