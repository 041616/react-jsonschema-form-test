import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';


const NAME = 'footer';


const properties = Object.assign(
    {},
    backgroundColor
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Footer is a bottom part of the website with contact info, copyrights etc',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
