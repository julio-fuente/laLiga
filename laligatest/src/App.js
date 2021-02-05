import './App.css';
import styled from 'styled-components';
import Buttons from './components/Buttons';



function App() {

 // background: rgb(12, 27, 35);
  const Wrapper = styled.section`
  padding: 100%;
`;
  return (
    <div>
        <span>lolo</span>
        <Buttons desc='Lista de Usuarios' type='secondary' clickHandler={()=>alert()}></Buttons>
        <Buttons desc='Login' type='primary' clickHandler={()=>alert()}></Buttons>
      <Wrapper>
      </Wrapper>
    </div>
  );
}

export default App;
