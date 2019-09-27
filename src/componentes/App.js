//Componente
import React, { Component, Suspense } from 'react';
import Loadable from 'react-loadable';

//Redux
import { connect } from 'react-redux';

import Aux from './_Aux/_Aux';
import CargandoPagina from './cargando/CargandoPagina';

//Al ser este archivo quien contiene las rutas, se debe import lo necesario.
import { Switch, Route, Redirect } from 'react-router-dom';

//scss
import '../../node_modules/font-awesome/scss/font-awesome.scss';
import './app.scss';

//Componente Menu que aparece a la izquierda
import Menu from './menu/menu';

//Componente navbar
import Navbar from './navbar/navbar';

//importamos la ruta por defecto (La importará cuando sea requerida)
const InicarSesion = Loadable({
  loader: () => import('./vistas/sesion/IniciarSesion/IniciarSesion'),
  loading: CargandoPagina
});
const Registrarme = Loadable({
  loader: () => import('./vistas/sesion/Registro/Registro'),
  loading: CargandoPagina
});

//Prueba - Borrar
const Home = Loadable({
  loader: () => import('./administrador-vistas/home'),
  loading: CargandoPagina
});


export class App extends Component {

  cambiarTitulo = (titulo) => {
    console.log(titulo)
  }

  ocultarMenu = () => {
    if (this.props.menu_añadido === "mob-open") {
      this.props.ocultarMenu("");
    }
  }

  render() {
    return (
      < Aux >
        <Suspense fallback={<CargandoPagina />}>
          {/* Suspense se utiliza para mostrar "algo" miestras se carga el/los import necesarios */}
          <Menu />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/iniciarSesion" component={InicarSesion} />
            <Route path="/registrarme" component={Registrarme} />
          </Switch>
        </Suspense>

      </Aux >
    )
  }
}


const mapStateToProps = (state) => {
  return {
    menu_añadido: state.menu.className_menu_añadido
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ocultarMenu: (accion) => {
      dispatch({ type: "ACCIONAR_MENU_APP", accion })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
