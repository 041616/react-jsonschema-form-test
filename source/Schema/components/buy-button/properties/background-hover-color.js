import definitions from 'Schema/definitions';


const propertyName = 'backgroundHoverColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: '"Buy" button background hover color',
    }, definitions.color)
};
