import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
const UniLayout = ({children}: any) => {
    return (
        <React.Fragment>
            <NavigationBar/>
            {children}
        </React.Fragment>
    );
};

export default UniLayout;