import { getKeyValues } from '../../../../utils';
import color from './properties/color';
import file from './properties/file';
import hoverColor from './properties/hover-color';


const properties = Object.assign({}, file, color, hoverColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    icon: {
        type: 'object',
        title: 'Icon for buy button',
        description: 'Icon for buy button',
        additionalProperties: false,
        required,
        properties,
        ui,
    },
};
