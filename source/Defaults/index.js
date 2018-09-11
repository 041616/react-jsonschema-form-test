import Color from 'color';


function setBuyButtonBackgroundColor(basic) {
    const color = Color(basic.textColor).lighten(0.795);
    return color.alfa < 1 ?
        color.rgb().string().toLowerCase() :
        color.hex().toLowerCase();
};


export default function(initFormData) {
    return {
        basic: {
            backgroundColor: initFormData.backgroundColor,
            textColor: initFormData.textColor,
            fontFamily: initFormData.fontFamily,
            linkColor: initFormData.linkColor,
            linkHoverColor: initFormData.linkHoverColor,
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
            backgroundHoverColor: initFormData.textColor,
            fontFamily: initFormData.fontFamily,
        },
    }
};
