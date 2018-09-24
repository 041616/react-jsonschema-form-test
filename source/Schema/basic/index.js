import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/background-color';
import textColor from './properties/text-color';
import fontFamily from './properties/font-family';
import linkColor from './properties/link-color';
import linkHoverColor from './properties/link-hover-color';
import externalFontFamily from './properties/external-font-family';


function getRequired(properties) {
    const propertyKeys = Object.keys(properties);
    const excludedPropertyKeys = [Object.keys(externalFontFamily)[0]];
    return propertyKeys.filter(
        propertyKey => !excludedPropertyKeys.includes(propertyKey)
    );
};


const properties = Object.assign(
    {},
    backgroundColor,
    textColor,
    linkColor,
    linkHoverColor,
    fontFamily,
    externalFontFamily,
);
const required = getRequired(properties);
const ui = getKeyValues('ui', properties);
const propertyName = 'basic';


export default {
    [propertyName]: {
        type: 'object',
        title: propertyName,
        description: 'Basic design styles',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
