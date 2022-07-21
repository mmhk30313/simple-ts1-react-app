import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';
const NavigationBar = () => {
    return (
        <React.Fragment>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                      <Link className='link-item' to="/home">MMHK</Link>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                
                <div className="nav-links">
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/create-user'>Create-User</Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavigationBar;