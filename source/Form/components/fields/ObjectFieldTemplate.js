import React from 'react';


const ObjectFieldTemplate = ({ properties }) => (
    <fieldset className='form-fieldset'>
        {properties.map((element, i) => element.content)}
    </fieldset>
);


export { ObjectFieldTemplate };
