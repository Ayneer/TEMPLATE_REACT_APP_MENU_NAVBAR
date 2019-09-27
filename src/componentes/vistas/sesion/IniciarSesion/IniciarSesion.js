import React from 'react';
import { NavLink } from 'react-router-dom';

import Aux from "../../../_Aux/_Aux";

class IniciarSesion extends React.Component {
    render() {
        return (
            <Aux>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon" />
                                </div>
                                <h3 className="mb-4">Ingresar a ExampleApp</h3>
                                <div className="input-group mb-3">
                                    <input type="mail" className="form-control" placeholder="Correo" />
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="Contraseña" />
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Ingresar</button>
                                <p className="mb-2 text-muted">¿Olvido su contraseña? <NavLink to="#">Restaurar</NavLink></p>
                                <p className="mb-0 text-muted">¿Aun no tienes una cuenta? <NavLink to="#">Registrarme!</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default IniciarSesion;