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
    <div className="app-container">
      <div className="content">
        <h1 className="text-3xl font-bold mb-4 ">Product Management</h1>
        {showForm || editingProduct ? (
          <ProductForm 
            initialProduct={editingProduct} 
            onSuccess={handleFormSuccess} 
          />
        ) : (
          <>
            <ProductList onEdit={setEditingProduct} />
            <button 
              className="btn btn-primary mt-4" 
              onClick={() => setShowForm(true)}
            >
              Add New Product
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
