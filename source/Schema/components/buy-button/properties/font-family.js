import definitions from 'Schema/definitions';


const propertyName = 'fontFamily';


export default {
    [propertyName]: Object.assign({
        title: propertyName,
        description: '"Buy" button font family',
    }, definitions.font)
};
