import { getKeyValues } from 'Schema/utils';
import basic from 'Schema/basic';
import promoPanel from 'Schema/components/promoPanel';
import promoPanelBackgroundColor from 'Schema/components/promoPanel/properties/backgroundColor';
import buyButton from 'Schema/components/buyButton';
import buyButtonBackgroundColor from 'Schema/components/buyButton/properties/backgroundColor';
import header from 'Schema/components/header';
import headerBackgroundColor from 'Schema/components/header/properties/backgroundColor';
import sidebar from 'Schema/components/sidebar';
import sidebarBackgroundColor from 'Schema/components/sidebar/properties/backgroundColor';
import horizontalMenu from 'Schema/components/horizontalMenu';
import horizontalMenuBackgroundColor from 'Schema/components/horizontalMenu/properties/backgroundColor';
import verticalMenu from 'Schema/components/verticalMenu';
import verticalMenuBackgroundColor from 'Schema/components/verticalMenu/properties/backgroundColor';
import catalogItem from 'Schema/components/catalogItem';
import catalogItemBackgroundColor from 'Schema/components/catalogItem/properties/backgroundColor';
import footer from 'Schema/components/footer';
import footerBackgroundColor from 'Schema/components/footer/properties/backgroundColor';


function init(component, property) {
    const initComponent = JSON.parse(JSON.stringify(component));
    initComponent[Object.keys(component)[0]].properties = property;
    initComponent[Object.keys(component)[0]].required = [Object.keys(property)[0]];
    return initComponent;
};


const initPromoPanel = init(promoPanel, promoPanelBackgroundColor);
const initBuyButton = init(buyButton, buyButtonBackgroundColor);
const initHeader = init(header, headerBackgroundColor);
const initSidebar = init(sidebar, sidebarBackgroundColor);
const initHorizontalMenu = init(horizontalMenu, horizontalMenuBackgroundColor);
const initVerticalMenu = init(verticalMenu, verticalMenuBackgroundColor);
const initCatalogItem = init(catalogItem, catalogItemBackgroundColor);
const initFooter = init(footer, footerBackgroundColor);


const properties = Object.assign(
    {},
    basic,
    initPromoPanel,
    initBuyButton,
    initHeader,
    initSidebar,
    initHorizontalMenu,
    initVerticalMenu,
    initCatalogItem,
    initFooter,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    type: 'object',
    description: 'Required parameters for design settings generation',
    additionalProperties: false,
    required,
    properties,
    ui,
};
