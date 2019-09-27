import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

export class Navbar extends Component {

    state = {
        className: "mobile-menu"
    }

    mostrarMenu = () => {
        if (this.state.className === "mobile-menu") {
            this.props.accionarMenu("mob-open");
        }
    }

    render() {

        const { className_icon } = this.props;

        return (
            <header className="navbar pcoded-header navbar-expand-lg header-default">
                <div className="m-header">
                    <a href="#!" className={className_icon} id="mobile-collapse1" onClick={this.mostrarMenu}><span /></a>
                    <a href="#!" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up" />
                        </div>
                        <span className="b-title">Menu</span>
                    </a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            {/* 
                                        <i className="icon feather fa fa-spinner fa-spin"></i> */}
                            <Dropdown>
                                <Dropdown.Toggle variant='link' id="dropdown-basic">
                                    <i className="icon feather icon-bell" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu alignRight className="notification">
                                    <div className="noti-head">
                                        <h6 className="d-inline-block m-b-0">Notificaciones</h6>
                                        <div className="float-right">
                                            <a href="#!" className="m-r-10">Marcar como leidas</a>
                                            <a href="#!">Borrar todo</a>
                                        </div>
                                    </div>
                                    <ul className="noti-body">
                                        <li className="n-title">
                                            <p className="m-b-0">RECIENTES</p>
                                        </li>
                                        <li className="notification">
                                            <div className="media">
                                                <img className="img-radius" src="" alt="img" />
                                                <div className="media-body">
                                                    <p><strong>John Doe</strong><span className="n-time text-muted"><i
                                                        className="" />30 min</span></p>
                                                    <p>New ticket Added</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="noti-footer">
                                        <a href="#!">Mostrar todas las notificaiciones</a>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                    </ul>
                </div>
            </header>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        className_icon: state.menu.className_menu_icon
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        accionarMenu: (accion) => {
            dispatch({ type: "ACCIONAR_MENU_NAVBAR", accion })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
