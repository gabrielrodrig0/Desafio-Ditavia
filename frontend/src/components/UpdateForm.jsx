import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import axios from 'axios';

const UpdateForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    memoria: 0,
    data: '',
  });

  useEffect(() => {
    if (location.state && location.state.data) {
      setFormData(location.state.data);
    }
  }, [location.state]);

  const cancel = () => {
    navigate('/');
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/cellphones/${formData._id}`, formData);
      navigate('/');
    } catch (error) {
      console.error('Erro ao atualizar o celular:', error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form className="w-full max-w-sm rounded border-2 border-gray-100 p-6 w-200">
        <p className=" text-gray-800 font-bold mb-5 text-center">
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
              required
              value={formData.marca}
              onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
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
              className="bg-white appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-gray-800"
              id="modelo"
              type="text"
              required
              value={formData.modelo}
              onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
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
              className="bg-white appearance-none border-2 border-gray-100 rounded w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-gray-800"
              id="memoria"
              type="number"
              min="0"
              max="64"
              required
              value={formData.memoria}
              onChange={(e) => setFormData({ ...formData, memoria: e.target.value })}
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
              className="bg-white appearance-none border-2 border-gray-100 rounded w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-gray-800"
              id="data"
              type="date"
              required
              value={formData.data}
              onChange={(e) => setFormData({ ...formData, data: e.target.value })}
            />
          </div>
        </div>

        <hr className='mb-6'></hr>
        <div className="flex justify-center space-x-4 mb-6">
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={cancel}>Cancelar</button>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={handleUpdate}>Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
