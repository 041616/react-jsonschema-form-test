import { getKeyValues } from 'Schema/utils';
import color from './properties/color';
import file from './properties/file';
import hoverColor from './properties/hover-color';


const properties = Object.assign({}, file, color, hoverColor);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);
const propertyName = 'icon';


export default {
    [propertyName]: {
        type: 'object',
        title: propertyName,
        description: '"Buy" button icon',
        additionalProperties: false,
        required,
        properties,
        ui,
    },
};
