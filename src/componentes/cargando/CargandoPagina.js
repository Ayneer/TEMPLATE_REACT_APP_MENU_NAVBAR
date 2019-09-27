import React from 'react';
import Cargando from './cargando';

const CargandoPagina = ({ estaCargando, error }) => {
    if (estaCargando) {
        return <Cargando />
    }
    else if (error) {
        return <div>Error, al intentar cargar la pagina</div>;
    } else {
        return null;
    }

}

export default CargandoPagina;