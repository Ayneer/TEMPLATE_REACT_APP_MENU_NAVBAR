import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

export class Navbar extends Component {

    state = {
        className : "mobile-menu"
    }

    mostrarMenu = () =>{
        if(this.state.className === "mobile-menu"){
            this.props.accionarMenu("mob-open");
            this.setState({
                className : "mobile-menu on"
            })
        }else{
            this.setState({
                className : "mobile-menu"
            })
        }
        
    }

    render() {
        return (
            <header className="navbar pcoded-header navbar-expand-lg header-default">
                <div className="m-header">
                    <a href="#!" className={this.state.className} id="mobile-collapse1" onClick={this.mostrarMenu}><span /></a>
                    <a href="#!" className="b-brand">
                        <div className="b-bg">
                            <i className="feather icon-trending-up" />
                        </div>
                        <span className="b-title">Menu</span>
                    </a>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Dropdown alignRight={true}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <span className="pcoded-micon">
                                    <i className="fas fa-bell"></i>
                                </span>
                            </Dropdown.Toggle>
                        </Dropdown>
                    </li>
                </ul>
            </header>


        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        accionarMenu : (accion) =>{
            dispatch({type: "ACCIONAR_MENU_NAVBAR", accion})
        }
    }
}

export default connect(null, mapDispatchToProps)(Navbar);
