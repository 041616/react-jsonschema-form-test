import { getKeyValues } from './utils';
import basic from './basic';
import buyButton from './components/buy-button';


const properties = Object.assign({}, basic, buyButton);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export const schema = {
    type: 'object',
    description: 'Design settings',
    additionalProperties: false,
    required,
    properties,
    ui,
};
