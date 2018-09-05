import definitions from 'Schema/definitions';


const propertyName = 'hoverColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: '"Buy" button icon hover color',
    }, definitions.color)
};
