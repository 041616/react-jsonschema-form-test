import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/background-color';
import textColor from './properties/text-color';
import fontFamily from './properties/font-family';
import linkColor from './properties/link-color';
import linkHoverColor from './properties/link-hover-color';


const properties = Object.assign({}, backgroundColor, textColor, fontFamily, linkColor, linkHoverColor);
const required = Object.keys(properties);
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
