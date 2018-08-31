const propertyName = 'backgroundColor';


export default {
    [propertyName]: {
        $ref: '#/definitions/color',
        title: propertyName,
        description: 'Basic background color of the design',
        ui: {
            'ui:widget': 'customColorWidget'
        }
    }
};
