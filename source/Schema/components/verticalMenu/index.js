import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';


const NAME = 'verticalMenu';


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
        description: 'Vertical menu is navigation element of the website. Usually located in a sidebar',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
