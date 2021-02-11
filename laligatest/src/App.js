import React, { useState } from 'react'
import List from './views/listUser/ListaUser'
import Login from "./components/Login";
import backgroundHome from "./assets/img/backgroundHome.jpg";
import { toast } from 'react-toastify';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


toast.configure()
function App() {
  const [modalShowLogin, setModalShowLogin] = useState(false);

  return (
    <div className='container mt-2' >
      <Router>
        <div className='btn-group'>
          <Link to='/' className='btn btn-primary'>
            Inicio
        </Link>
          <Link to='/usuarios' className='btn btn-primary'>
            Lista de usuarios
        </Link>
          <button type="button" className="btn btn-primary" onClick={() => setModalShowLogin(true)}>Acceder</button>
        </div>
        <hr></hr>
        <Switch >
          <Route path='/' exact>
            <img src={backgroundHome}></img>
          </Route>
        </Switch>
        <Switch >
          <Route path='/usuarios'>
            <List></List>
          </Route>
        </Switch>
      </Router>
      <Login show={modalShowLogin} onHide={() => setModalShowLogin(!modalShowLogin)} ></Login>
    </div>
  );
}

export default App;
