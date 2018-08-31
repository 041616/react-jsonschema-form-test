import { getKeyValues } from './utils';
import definitions from './definitions';
import styles from './styles';
import components from './components';


const properties = Object.assign({}, styles, components);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export const schema = {
    type: 'object',
    description: 'Design settings',
    additionalProperties: false,
    definitions,
    required,
    properties,
    ui,
};
