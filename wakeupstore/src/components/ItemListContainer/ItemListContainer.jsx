import React from 'react'


export const ItemListContainer = ({greetings}) => {
  return (
<div>
<h1 className='text-center mt-5'>¡Bienvenidos a la Web de WakeUp!</h1>
<p className='text-center'>{greetings}</p>
</div>
  )
}
