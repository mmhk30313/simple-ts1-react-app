import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
const UniLayout = ({children}: any) => {
    return (
        <React.Fragment>
            <NavigationBar/>
            {children}
            <footer>
                <p style={{textAlign: 'center', color: "#9C27B0"}}>&copy; {new Date().getFullYear()} MEHEDI HASAN</p>
            </footer>
        </React.Fragment>
    );
};

export default UniLayout;