import React, { Component } from 'react';
import PerfectScrollabar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export class Menu extends Component {

    state = {
        className_2: "mobile-menu"
    }

    cambiarEstadoMenu = () =>{
        if(this.props.className_icon === "mobile-menu"){
            this.props.accionarMenu("navbar-collapsed");
        }else{
            this.props.accionarMenu("");
        }
    }

    cambairEstadoDropdown = () => {
        if(this.props.estadoDropdown === "nav-item pcoded-hasmenu"){
            this.props.accionarDropdown("nav-item pcoded-hasmenu active pcoded-trigger");
        }else{
            this.props.accionarDropdown("nav-item pcoded-hasmenu");
        }
    }

    render() {

        const { className, accion, className_icon } = this.props;
        const nuevoClassName = className + " " + accion;
        console.log(className_icon)
        return (
            <div className={nuevoClassName}>
                <div className="navbar-wrapper">

                    {/* Logo menu - Inicio */}
                    <div className="navbar-brand header-logo">
                        <a href="index.html" className="b-brand">
                            <div className="b-bg">
                                <i className="icon feather icon-paperclip"></i>
                            </div>
                            <span className="b-title">Menu</span>
                        </a>
                        <a className={className_icon} id="mobile-collapse" onClick={this.cambiarEstadoMenu} href="#!"><span></span></a>
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
                                            <i className="icon feather icon-home"></i>
                                        </span>
                                        <span className="pcoded-mtext">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Dropdown</label>
                                </li>
                                {/* active pcoded-trigger -> añadir con evento */}
                                <li className={this.props.estadoDropdown}>
                                    <NavLink to="#" onClick={this.cambairEstadoDropdown}>
                                        <span className="pcoded-micon">
                                            <i className="feather icon-box"></i>
                                        </span>
                                        <span className="pcoded-mtext">Componet</span>
                                    </NavLink>
                                    <ul className="pcoded-submenu">
                                        <li>
                                            <NavLink className="nav-link" to="/">
                                                Sub item
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/">
                                                Sub item 2
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </PerfectScrollabar>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        state: state.menu,
        className: state.menu.className_menu_defecto,
        accion: state.menu.className_menu_añadido,
        className_icon: state.menu.className_menu_icon,
        estadoDropdown: state.menu.className_dropdown
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        accionarMenu : (accion) =>{
            dispatch({type: "ACCIONAR_MENU_MENU", accion})
        },
        accionarDropdown: (action) => {
            dispatch({type: "ACCIONAR_DROPDOWN", action})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
