import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const LeftMenu: React.FC = () => {

    let [leftMenuVisibility, setLeftMenuVisibility] = useState(false);

    function changeLeftMenuVisibility() {
        setLeftMenuVisibility(!leftMenuVisibility);
    }

    function getCollapseClass() {
        return (leftMenuVisibility) ? "" : "collapsed";
    }

    return (
        <Fragment>
            <div className="toggle-area">
                <button className="btn btn-primary toggle-button" onClick={() => changeLeftMenuVisibility()}>
                    <i className="fas fa-bolt"></i>
                </button>
            </div>

            <ul className={`navbar-nav bg-gradient-primary-green sidebar sidebar-dark accordion ${getCollapseClass()}`}
                id="collapseMenu">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div style={{padding: '10px', backgroundColor: 'white', color: 'black'}}>
                        
                        {/* <img src="https://www.eindiawholesale.com/media/logo/stores/1/elogo.png" alt='logo' style={{height: '92', width: '272'}} /> */}
                    <div className="sidebar-brand-text mx-3">E India <sup>Mart</sup></div>
                    </div>
                    {/* <div className="sidebar-brand-icon icon-green rotate-n-15"> */}
                        {/* <i className="fas fa-bolt"></i> */}
                    {/* </div> */}
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">

                    <Link className="nav-link" to="Home">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Warehouse
                </div>

                <li className="nav-item">
                    <Link className="nav-link" to={`/products`}>
                        <i className="fas fa-fw fa-warehouse"></i>
                        <span>Products</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/orders`}>
                        <i className="fas fa-fw fa-dollar-sign"></i>
                        <span>Orders</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Admin
                </div>


                <li className="nav-item">
                    <Link className="nav-link" to={`/users`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Users</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </Fragment>
    );
};

export default LeftMenu;
