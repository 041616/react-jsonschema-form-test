import definitions from 'Schema/definitions';


const NAME = 'hoverColor';


export default {
    [NAME]: Object.assign({
        title: NAME,
        description: 'Navigation link icon hover color',
    }, definitions.color)
};
