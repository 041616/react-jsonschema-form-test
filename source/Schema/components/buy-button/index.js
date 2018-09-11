import { getKeyValues } from 'Schema/utils';
import icon from './properties/icon';
import textColor from './properties/text-color';
import textHoverColor from './properties/text-hover-color';
import backgroundColor from './properties/background-color';
import backgroundHoverColor from './properties/background-hover-color';
import fontFamily from './properties/font-family';


const properties = Object.assign({}, icon, textColor, textHoverColor, backgroundColor, backgroundHoverColor, fontFamily);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);
const propertyName = 'buyButton';


export default {
    [propertyName]: {
        type: 'object',
        title: propertyName,
        description: 'Buy button',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
