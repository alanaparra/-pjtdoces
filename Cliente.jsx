import React, { useState } from 'react';

const catalogo = [
  { id: 1, nome: 'Brigadeiro', preco: 2.5 },
  { id: 2, nome: 'Beijinho', preco: 2.5 },
  { id: 3, nome: 'Bolo de pote', preco: 8 },
];

export default function Cliente() {
  const [pedidos, setPedidos] = useState([]);
  const [formData, setFormData] = useState({});

  const adicionarPedido = (produto) => {
    const qtd = parseInt(prompt(`Quantos ${produto.nome}?`), 10);
    if (!isNaN(qtd) && qtd > 0) {
      const novoPedido = {
        ...produto,
        quantidade: qtd,
        total: qtd * produto.preco,
        comprador: formData,
      };
      setPedidos([...pedidos, novoPedido]);
    }
  };

  const totalCompra = pedidos.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Catálogo</h2>
      <div>
        {catalogo.map((item) => (
          <div key={item.id}>
            {item.nome} - R$ {item.preco.toFixed(2)}{' '}
            <button onClick={() => adicionarPedido(item)}>Pedir</button>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold">Seus Dados</h2>
        <input placeholder="Nome" onChange={(e) => setFormData({ ...formData, nome: e.target.value })} /><br />
        <input placeholder="Endereço" onChange={(e) => setFormData({ ...formData, endereco: e.target.value })} /><br />
        <input placeholder="Horário preferido" onChange={(e) => setFormData({ ...formData, horario: e.target.value })} /><br />
        <input placeholder="Dia da entrega" onChange={(e) => setFormData({ ...formData, dia: e.target.value })} />
      </div>
      <div>
        <h2 className="text-xl font-semibold">Resumo do Pedido</h2>
        {pedidos.map((item, idx) => (
          <div key={idx}>
            {item.quantidade}x {item.nome} - R$ {item.total.toFixed(2)}
          </div>
        ))}
        <p><strong>Total:</strong> R$ {totalCompra.toFixed(2)}</p>
      </div>
    </div>
  );
}