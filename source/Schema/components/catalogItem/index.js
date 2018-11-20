import { getKeyValues } from 'Schema/utils';
import backgroundColor from './properties/backgroundColor';
import title from './properties/title';
import price from './properties/price';
import oldPrice from './properties/oldPrice';
import label from './properties/label';
import stateAvailable from './properties/stateAvailable';
import stateClarify from './properties/stateClarify';
import stateOrder from './properties/stateOrder';
import gift from './properties/gift';


const NAME = 'catalogItem';


const properties = Object.assign(
    {},
    backgroundColor,
    title,
    price,
    oldPrice,
    label,
    stateAvailable,
    stateClarify,
    stateOrder,
    gift,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Item of a product list',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
