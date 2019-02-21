import React, { Component } from "react";
// componentes
import Header from "./components/Header";

import Routes from "./routes";

import Main from "./pages/main";

// configuração da api
import api from "./services/api";

// css
import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Fala Dev</h1>
//       </div>
//     );
//   }
// }

export default App;
