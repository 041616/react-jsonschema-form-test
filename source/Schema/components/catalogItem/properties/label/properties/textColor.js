import definitions from 'Schema/definitions';


const NAME = 'textColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Product label text color',
    }, definitions.color)
};
