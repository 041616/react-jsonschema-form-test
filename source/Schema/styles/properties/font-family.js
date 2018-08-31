const propertyName = 'fontFamily';


export default {
    [propertyName]: {
        $ref: '#/definitions/font',
        title: propertyName,
        description: 'Basic font family of the desing',
        ui: {
            'ui:help': 'Enter a link to the font'
        },
    }
};
