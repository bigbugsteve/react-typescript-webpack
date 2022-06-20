import React, { useEffect } from 'react';
export const App = () => {
    console.log('%chello APP', 'color: red', process.env.API_URL);
    console.log('%cPROCESS ENV', process.env.API_URL, 'color: red');

    useEffect(() => {
        console.log('Hello');
    }, []);
    return <>Basic Template</>;
};
