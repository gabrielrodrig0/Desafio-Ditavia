import React from 'react'
import Table from '../components/Table'
import Nome from '../components/Nome'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  function newCell()
  {
    navigate("/cellphones");
  }
  
  return (
    <>
         <Nome></Nome>
        <div className='flex items-center justify-center h-screen'>
            <div>
            <button onClick={newCell}className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' >Novo Celular</button>
            <Table></Table>
            </div>
        </div>
    </>
   
    
  )
}

export default Home