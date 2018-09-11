import definitions from 'Schema/definitions';


const propertyName = 'textColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: '"Buy" button text color',
    }, definitions.color)
};
