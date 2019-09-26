import React, { Component } from 'react';
import PerfectScrollabar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';



export class Menu extends Component {
    render() {
        return (
            <div className="pcoded-navbar">
                <div className="navbar-wrapper">

                    {/* Logo menu - Inicio */}
                    <div className="navbar-brand header-logo">
                        <a href="index.html" className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-trending-up"></i>
                            </div>
                            <span className="b-title">Menu</span>
                        </a>
                        <a className="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
                    </div>
                    {/* Logo menu - Fin */}

                    <div className="navbar-content datta-scroll">
                        <PerfectScrollabar>
                            <ul className="nav pcoded-inner-navbar">
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Ejemplo</label>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" exact={true} target="">
                                        <span className="pcoded-micon">
                                            <i className="fa fa-home"></i>
                                        </span>
                                        {"Dashboard"}
                                        <span className="label  pcoded-mtext ">
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/iniciarSesion" className="nav-link" exact={true}>
                                        <span className="pcoded-micon">
                                            <i className="fa fa-spinner fa-spin" />
                                        </span>
                                        Iniciar Sesion
                                        <span className="label pcoded-mtext">
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </PerfectScrollabar>
                    </div>

                </div>
            </div>
        )
    }
}

export default Menu;
