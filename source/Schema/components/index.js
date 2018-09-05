import { getKeyValues } from 'Schema/utils';
import buyButton from './buy-button';


const properties = Object.assign({}, buyButton);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);
const propertyName = 'components';


export default {
    [propertyName]: {
        type: 'object',
        title: propertyName,
        description: 'Design components',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
