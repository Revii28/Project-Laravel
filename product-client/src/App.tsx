import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div>
      <h1>Product Management</h1>
      {showForm || editingProduct ? (
        <ProductForm 
          initialProduct={editingProduct} 
          onSuccess={handleFormSuccess} 
        />
      ) : (
        <>
          <ProductList onEdit={setEditingProduct} />
          <button onClick={() => setShowForm(true)}>Add New Product</button>
        </>
      )}
    </div>
  );
};

export default App;
