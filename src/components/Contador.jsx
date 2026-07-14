import { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  return (
    <div>
      <h3>Contador: {numero}</h3>
      <button onClick={incrementar}>+1</button>
    </div>
  );
}

export default Contador;