import './App.css';
import logo from  './img/freecodecamp-logo.png';
import Boton from './component/Boton';
function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          src = {logo}
          className='logo'
          alt='Logo' />
      </div>
      <div className='calculator-container'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
