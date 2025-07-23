import React, { useState } from 'react';
import Cliente from './Cliente';
import Vendedor from './Vendedor';
import Login from './Login';

export default function App() {
  const [logado, setLogado] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Doces Caseiros</h1>
      {!logado && !mostrarLogin && (
        <>
          <Cliente />
          <button onClick={() => setMostrarLogin(true)} className="mt-4 underline text-blue-600">Área do Vendedor</button>
        </>
      )}
      {mostrarLogin && !logado && <Login setLogado={setLogado} />}
      {logado && <Vendedor />}
    </div>
  );
}