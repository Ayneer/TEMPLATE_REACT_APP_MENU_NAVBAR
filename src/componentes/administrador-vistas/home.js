//Componente
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    Inicio
                </div>
            </div>
        )
    }
}

export default connect(null, null)(Home);