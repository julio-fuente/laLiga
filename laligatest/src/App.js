import React, { PureComponent } from 'react'

import styled from 'styled-components';
import Buttons from './components/Buttons';
import { Container } from "@material-ui/core";
import List from './views/listUser/ListaUser'
import ModalLogin from "./views/login/Login";
import AlertDialog from "./components/AlertDialog";
import backgroundHome from "./assets/img/backgroundHome.jpg";
import './App.css';


function App() {
  const Wrapper = styled.section`
  padding: 100%;
  background: papayawhip;
  `;
  
  const { body, setBody } = React.useState(true)

  const openModalLogin = () => {
    //this.ModalLogin.bind(this)
  }
  const onListUser = () => {
    //setBody(<ListUser></ListUser>)
  }
  return (
    <div>
      <header>
        <Buttons desc='Lista de Usuarios' type='secondary' clickHandler={onListUser}></Buttons>
        <Buttons desc='Acceder' type='primary' clickHandler={openModalLogin}></Buttons>
      </header>

      <Container maxWidth="xl" className='containerButtons'>
        {/* {body} */}
        <List></List>
      </Container>
    </div>
  );
}

export default App;
