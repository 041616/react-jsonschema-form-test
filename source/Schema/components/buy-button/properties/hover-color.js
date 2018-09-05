import definitions from 'Schema/definitions';


const propertyName = 'textHoverColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: '"Buy" button text hover color',
    }, definitions.color)
};
