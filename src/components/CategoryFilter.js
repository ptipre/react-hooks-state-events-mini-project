import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, handleSelect}) {
  

  const categoryButtons = categories.map((category) => {

    return <button 
    className={selectedCategory === category ? 'selected' : ''}
    id={category}
    key={category}
    onClick={handleSelect}>{category}</button>
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
