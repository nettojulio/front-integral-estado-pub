import { useState } from 'react';
import hamburguer from './assets/hamburguer.png';
import './App.css';

function App() {

  const [contador, setContador] = useState(0);
  function acc() {
    setContador(contador + 1);
  }

  function red() {
    const newContador = contador === 0 ? '' : setContador(contador - 1);
    console.log(newContador);
  }

  function Card(props) {
    return (
      <div className='stick'>
        <img className='picture' src={props.pics} alt="pic"></img>
        <h1 className='main-title'>
          {props.product}
        </h1>
        <p className='main-description'>
          {props.description}
        </p>
        <div className='cart'>
          <button onClick={red} className='remove'>
            -
          </button>
          <h2 className='counter'>
            {contador}
          </h2>
          <button onClick={acc} className='add'>
            +
          </button>
        </div>

      </div>
    )
  }

  return (
    <div className="App">
      <Card
        pics={hamburguer}
        product='Hamburguer'
        description='Arcu, sagittis, ut lectus 
      congue dapibus semper odio a, lobortis.'>
      </Card>
    </div>
  );
}

export default App;
