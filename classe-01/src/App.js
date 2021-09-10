import { useState } from 'react';
import './App.css';
import cookie from './assets/cookie.svg'
import closed from './assets/close.svg'

function App() {
  const [close, setClose] = useState('');

  function Card({ picture, type, children, buttonText }) {
    return (
      <div className={`card ${close}`}>
        <img onClick={closeAlert} src={closed} alt="close" className="close" />
        <img src={picture} alt={type} className="icon" />
        <p>
          {children}
        </p>
        <button onClick={closeAlert} className={type}>{buttonText}</button>
      </div>
    )
  }

  function closeAlert() {
    const closeHidden = close !== 'hidden' ? 'hidden' : '';
    setClose(closeHidden);
    // EXTRA POP UP
    // setTimeout(() => setClose(''), 5000);
  }


  return (
    <div className="App">
      {console.log(close)}
      <Card type="cookie" picture={cookie} buttonText="Tudo bem!">
        Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
      </Card>
    </div>
  );
}

export default App;
