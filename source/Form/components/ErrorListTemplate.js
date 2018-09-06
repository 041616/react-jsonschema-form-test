import React from 'react';


const ErrorListTemplate = ({ errors, formContext }) => {
    const { shouldRenderErrorList } = formContext;
    if (!shouldRenderErrorList) return null;
    return (
        <ol>
            {errors.map((error, i) => (
                <li className='text-danger' key={i}>
                    {error.stack}
                </li>
            ))}
        </ol>
    )
};


export { ErrorListTemplate };
