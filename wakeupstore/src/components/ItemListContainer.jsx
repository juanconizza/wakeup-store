import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetailContainer } from './ItemDetailContainer';

export const ItemListContainer = ({greetings}) => {
  return (
<div className='container-fluid mt-3'>

<h1 className='text-center tituloh1'>{greetings}</h1>

<ItemDetailContainer/>

</div>
  )
}
