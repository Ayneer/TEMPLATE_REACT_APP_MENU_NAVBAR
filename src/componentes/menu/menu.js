import React, { Component } from 'react';
import PerfectScrollabar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export class Menu extends Component {

    state = {
        className_2: "mobile-menu"
    }

    cambiarEstadoMenu = () =>{
        if(this.state.className_2 === "mobile-menu"){
            this.props.accionarMenu("navbar-collapsed");
        }else{
            this.props.accionarMenu("");
        }
    }

    render() {

        const { className, accion } = this.props;
        const nuevoClassName = className + " " + accion;

        return (
            <div className={nuevoClassName}>
                <div className="navbar-wrapper">

                    {/* Logo menu - Inicio */}
                    <div className="navbar-brand header-logo">
                        <a href="index.html" className="b-brand">
                            <div className="b-bg">
                                <i className="feather icon-trending-up"></i>
                            </div>
                            <span className="b-title">Menu</span>
                        </a>
                        <a className={this.state.className_2} id="mobile-collapse" onClick={this.cambiarEstadoMenu} href="#!"><span></span></a>
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
                                            <span className="label pcoded-badge">gg</span>
                                        </span>
                                        Dashboard
                                        {/* pcoded-badge */}
                                        <span className="label  pcoded-badge">
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

const mapStateToProps = (state) =>{
    return {
        state: state.menu,
        className: state.menu.className_menu_defecto,
        accion: state.menu.className_menu_añadido
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        accionarMenu : (accion) =>{
            dispatch({type: "ACCIONAR_MENU_MENU", accion})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
