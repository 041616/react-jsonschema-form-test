import { getKeyValues } from '../utils';
import backgroundColor from './properties/background-color';
import color from './properties/color';
import fontFamily from './properties/font-family';
import linkColor from './properties/link-color';
import linkHoverColor from './properties/link-hover-color';


const properties = Object.assign({}, backgroundColor, color, fontFamily, linkColor, linkHoverColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    styles: {
        type: 'object',
        title: 'Main design styles',
        description: 'Main design styles',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
