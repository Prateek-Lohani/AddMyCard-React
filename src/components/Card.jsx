import React from 'react'

const Card = ({user}) => {
  return (
    <section className='bg-white p-2 min-w-40 min-h-40 flex flex-col items-center justify-center rounded-lg'>
      <div className='bg-red-200 w-20 h-20 overflow-hidden rounded-full'>
        <img src={user.picture} alt="" className='w-full h-full overflow-hidden object-cover' />
      </div>
      <div>
        <h3 className='mt-2 text-center font-semibold text-lg'>{user.name}</h3>
        <h4 className='text-[.55em] font-bold text-center text-slate-500'>{user.email}</h4>
      </div>
    </section>
  )
}

export default Card