import { getKeyValues } from './utils';
import definitions from './definitions';
import styles from './styles';
import components from './components';


const properties = Object.assign({}, styles, components);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export const schema = {
    type: 'object',
    title: 'Config of the design',
    description: 'Config of the design',
    additionalProperties: false,
    definitions,
    required,
    properties,
    ui,
};
