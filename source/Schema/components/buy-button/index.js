import { getKeyValues } from '../../utils';
import icon from './properties/icon';
import color from './properties/color';
import hoverColor from './properties/hover-color';
import backgroundColor from './properties/background-color';
import backgroundHoverColor from './properties/background-hover-color';
import fontFamily from './properties/font-family';


const properties = Object.assign({}, icon, color, hoverColor, backgroundColor, backgroundHoverColor, fontFamily);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    buyButton: {
        type: 'object',
        title: 'Buy button',
        description: 'Buy button',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
