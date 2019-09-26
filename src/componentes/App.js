//Componente
import React, { Component, Suspense } from 'react';
import Loadable from 'react-loadable';

//Redux
import { connect } from 'react-redux';

import Aux from './_Aux/_Aux';
import cargando from './cargando/cargando';

//Al ser este archivo quien contiene las rutas, se debe import lo necesario.
import { Switch, Route } from 'react-router-dom';

//scss
import '../../node_modules/font-awesome/scss/font-awesome.scss';
import './app.scss';

//Componente Menu que aparece a la izquierda
import Menu from './menu/menu';

//Componente navbar
import Navbar from './navbar/navbar';

//importamos la ruta por defecto (La importará cuando sea requerida)
const InicarSesion = Loadable({
  loader: () => import('./sesion/iniciarSesion'),
  loading: cargando
});

//Prueba - Borrar
const Home = Loadable({
  loader: () => import('./administrador-vistas/home'),
  loading: cargando
});


export class App extends Component {

  ocultarMenu = (evento) => {
    if(this.props.accion === "mob-open"){
      this.props.ocultarMenu("");
    }
  }

  render() {
    return (
      < Aux >
        <Suspense fallback={<cargando />}>
          {/* Suspense se utiliza para mostrar "algo" miestras se carga el/los import necesarios */}
          <Menu />
          <Navbar />
          <div className="pcoded-main-container" onClick={this.ocultarMenu}>
            <div className="pcoded-wrapper">
              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  <div className="main-body">
                    <div className="page-wrapper">
                      <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/iniciarSesion" component={InicarSesion} />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>

      </Aux >
    )
  }
}


const mapStateToProps = (state) =>{
  return {
      accion: state.menu.className_menu_añadido
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      ocultarMenu : (accion) =>{
          dispatch({type: "ACCIONAR_MENU_APP", accion})
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
