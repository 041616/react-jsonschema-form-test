import definitions from 'Schema/definitions';


const propertyName = 'backgroundColor';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: '"Buy" button background color',
    }, definitions.color)
};
