import React, { useState } from 'react';

export default function Login({ setLogado }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    if (email === 'vendedor@doces.com' && senha === '123456') {
      setLogado(true);
    } else {
      alert('Dados incorretos');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Login do Vendedor</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} /><br />
      <button onClick={logar}>Entrar</button>
    </div>
  );
}