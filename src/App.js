import React, { Component } from 'react'
import logo from './logo.svg'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
// import base from './base'

class App extends Component {
  // constructor(props){
  //   super(props)

  //   this.state = {
  //     categorias: []
  //   }
  // }
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
          <h3>Últimos Anúncios</h3>
          <div className="row">
            <AnuncioHome />
            <AnuncioHome />
            <AnuncioHome />
          </div>
          <h3>Categorias</h3>
          <div className="row">
            <LinkCategoria categoria={{ categoria: 'Bicicleta', 'icon': 'fa-lightbulb-o' }}/>
            <LinkCategoria />
            <LinkCategoria />
            <LinkCategoria />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
