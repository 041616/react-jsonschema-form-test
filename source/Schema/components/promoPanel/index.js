import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';


const NAME = 'promoPanel';


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
        description: 'Promo panel',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
