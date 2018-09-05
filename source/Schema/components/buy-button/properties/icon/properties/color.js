import definitions from 'Schema/definitions';


const propertyName = 'color';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: '"Buy" button icon color',
    }, definitions.color)
};
