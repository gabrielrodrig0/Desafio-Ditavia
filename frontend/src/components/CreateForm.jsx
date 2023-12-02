import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const CreateForm = () => {
  const navigate = useNavigate();

  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [memoria, setMemoria] = useState(0);
  const [dataLancamento, setDataLancamento] = useState('');

  const cancel = () => {
    navigate('/');
  };

  const handleCreate = () => {
    const dadosNovoItem = {
      marca,
      modelo,
      capacidade: memoria,
      data: dataLancamento,
    };

    axios.post('http://localhost:3000/cellphones', dadosNovoItem)
      .then(response => {
        console.log('Novo item criado com sucesso:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao criar novo celular:', error);
      });
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <form className="w-full max-w-sm rounded border-2 border-gray-100 p-6 w-200">
          <p className="text-gray-800 font-bold mb-5 text-center">
            Celular
          </p>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="marca">
                Marca
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                id="marca"
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="modelo">
                Modelo
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                id="modelo"
                type="text"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="memoria">
                Memória
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-2 border-gray-100 rounded w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                id="memoria"
                type="number"
                min="0"
                max="64"
                value={memoria}
                onChange={(e) => setMemoria(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="data">
                Lançamento
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-2 border-gray-100 rounded w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                id="data"
                type="date"
                value={dataLancamento}
                onChange={(e) => setDataLancamento(e.target.value)}
                required
              />
            </div>
          </div>

          <hr className='mb-6'></hr>
          <div className="flex justify-center space-x-4 mb-6">
            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={cancel}>Cancelar</button>
            <button className='bg-white hover-bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={handleCreate}>Criar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateForm;
