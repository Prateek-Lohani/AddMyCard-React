import React, { useState } from 'react'
import Form from './components/Form'
import Cards from './components/Cards'

const App = () => {

  const [userData,setUserData]=useState([]);

  const handleFormSubmit=(data)=>{
    setUserData([...userData,data]);;
  }

  return (
    <div className='w-full h-screen bg-slate-600 p-8'>
      <Form handleFormSubmit={handleFormSubmit}/>
      <Cards userData={userData} />
    </div>
  )
}

export default App