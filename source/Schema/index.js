import { getKeyValues } from './utils';
import basic from './basic';
import promoPanel from './components/promoPanel';
import title from './components/title';
import buyButton from './components/buyButton';
import header from './components/header';
import slider from './components/slider';
import sidebar from './components/sidebar';
import horizontalMenu from './components/horizontalMenu';
import verticalMenu from './components/verticalMenu';
import hamburgerMenu from './components/hamburgerMenu';
import catalogItem from './components/catalogItem';
import footer from './components/footer';


const properties = Object.assign(
    {},
    basic,
    promoPanel,
    title,
    buyButton,
    header,
    slider,
    sidebar,
    horizontalMenu,
    verticalMenu,
    hamburgerMenu,
    catalogItem,
    footer,
);
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
