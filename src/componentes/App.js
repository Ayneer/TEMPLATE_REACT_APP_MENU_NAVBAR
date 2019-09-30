//Componente
import React, { Component, Suspense } from 'react';
import Loadable from 'react-loadable';

//Redux
import { connect } from 'react-redux';

import Aux from './_Aux/_Aux';
import CargandoPagina from './cargando/CargandoPagina';

//Al ser este archivo quien contiene las rutas, se debe import lo necesario.
import { Switch, Route, withRouter } from 'react-router-dom';

//scss
import '../../node_modules/font-awesome/scss/font-awesome.scss';
import './app.scss';

//Componente Menu que aparece a la izquierda
import Menu from './menu/menu';
//Componente navbar
import Navbar from './navbar/navbar';
import HomeDefecto from './vistas/home/homeDefecto';

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
          <div className="pcoded-main-container" onClick={this.ocultarMenu}>
            <div className="pcoded-wrapper">
              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  <HomeDefecto titulo={this.props.titulo} />
                  <div className="main-body">
                    <Switch>
                      <Route exact path="/" component={Home} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Route path="/iniciarSesion" component={InicarSesion} />
            <Route path="/registrarme" component={Registrarme} /> */}

        </Suspense>

      </Aux >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  let titulo = "";
  switch (ownProps.location.pathname) {
    case '/': titulo = "Home"; break;
    default: break;
  }
  return {
    menu_añadido: state.menu.className_menu_añadido,
    titulo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ocultarMenu: (accion) => {
      dispatch({ type: "ACCIONAR_MENU_APP", accion })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)((App)));
