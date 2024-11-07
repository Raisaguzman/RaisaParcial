import Card from "./Card";
import { useState } from "react";
import './Form.css';

const Form = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState('');
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasErrors = false;
    
    if (input1.length < 3 || input1.startsWith(" ")) {
      
      hasErrors = true;
    }

    if (input2.length < 6) {
      
      hasErrors = true;
    }
   
    if (hasErrors) {
      setError('Por favor chequea que la información sea correcta');
      setMostrarTarjeta(false);
    } else {
      setError('');
      setMostrarTarjeta(true);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Cual es tu Mascota:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
         </div>
        <div>
          <label htmlFor="input2">Como se llama tu mascota:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {mostrarTarjeta && <Card input1={input1} input2={input2}/>};
    </div>
  );
};

export default Form;
