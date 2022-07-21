import React from 'react';
import UniLayout from '../layouts/uni-layout';
import Home from '../pages/home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import CreateUser from '../pages/create-user';

const AllRoutes = () => {
    return (
        <React.Fragment>
                <Router>
                    <Routes>
                        
                        <Route path='/' element={<UniLayout><Home /></UniLayout>} />
                        <Route path='/home' element={<UniLayout><Home /></UniLayout>} />
                        <Route path='/dashboard' element={<UniLayout><Home /></UniLayout>} />
                        <Route path='/create-user' element={<UniLayout><CreateUser /></UniLayout>} />
                        <Route path="*" element={<div>404 Not Found</div>} />
                    </Routes>
                </Router>
        </React.Fragment>
    );
};

export default AllRoutes;