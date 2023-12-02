import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { formatarDataEscrita } from '../../common/functions.js';

const Table = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/cellphones')
      .then(response => {
        setData(response.data.reverse());
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/cellphones/${id}`)
      .then(response => {
        setData(data.filter(item => item._id !== id).reverse());
      })
      .catch(error => {
        console.error('Erro ao excluir o item:', error);
      });
  };

  const handleUpdate = (id) => {
    const selectedCellphone = data.find(item => item._id === id);
    navigate(`/cellphones/update/${id}`, { state: { data: selectedCellphone } });
  };

  return (
    <div className="table-container max-h-96 overflow-y-auto pr-4">
      <table className="table-auto w-full max-w-2xl rounded border-2 border-gray-100 my-4">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th className="px-4 py-2">Marca</th>
            <th className="px-4 py-2">Modelo</th>
            <th className="px-4 py-2">Capacidade de Memória (GB)</th>
            <th className="px-4 py-2">Lançamento</th>
            <th className="px-4 py-2">Alterar</th>
            <th className="px-4 py-2">Excluir</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{item.marca}</td>
              <td className="border px-4 py-2">{item.modelo}</td>
              <td className="border px-4 py-2">{item.capacidade}</td>
              <td className="border px-4 py-2">{formatarDataEscrita(item.data)}</td>
              <td
                className="border px-4 py-2 font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
                onClick={() => handleUpdate(item._id)}
              >
                Alterar
              </td>
              <td
                className="border px-4 py-2 font-bold text-sm text-red-500 hover:text-red-800 cursor-pointer"
                onClick={() => handleDelete(item._id)}
              >
                Excluir
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
