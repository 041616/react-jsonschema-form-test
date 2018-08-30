import { getKeyValues } from '../utils';
import buyButton from './buy-button';


const properties = Object.assign({}, buyButton);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    components: {
        type: 'object',
        title: 'Design components',
        description: 'Design components',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
