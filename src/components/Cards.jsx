import React from 'react'
import Card from './Card'

const Cards = ({userData}) => {
  return (
    <div className='w-full max-h-[75vh] mt-10 rounded-md p-4 flex justify-center flex-wrap gap-10 overflow-auto'>
    {
   userData.map((user,index)=>{
    return <Card key={index} user={user}/>
   })
   }
    </div>
  )
}

export default Cards