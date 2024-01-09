import React, { useState } from 'react';
import { ItemList } from './ItemList';

export const ItemListContainer = ({ greetings, handleProductDetails }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='container-fluid mt-3'>
      <h1 className='text-center tituloh1'>{greetings}</h1>
      <ItemList
        handleVerDetalle={handleProductDetails}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};
