//Componente
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeDefecto from '../vistas/home/homeDefecto';

export class Home extends Component {
    render() {
        this.props.cambiarTitulo("Home");
        return (
            <div className="menu">
                <div className="pcoded-main-container" onClick={this.ocultarMenu}>
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <HomeDefecto />
                                <div> Home </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cambiarTitulo: (titulo) => {
            dispatch({ type: "CAMBIAR_TITULO_APP", titulo })
        }
    }
}

export default connect(null, mapDispatchToProps)(Home);