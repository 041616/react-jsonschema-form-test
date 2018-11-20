import definitions from 'Schema/definitions';


const NAME = 'backgroundColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Background color of the "next" arrow',
    }, definitions.color)
};
