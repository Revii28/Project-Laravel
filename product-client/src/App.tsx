import React from 'react';
import ProductList from './components/ProductList';


const App: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div>
      <h1>Product Management</h1>
      {showForm ? (
        <ProductForm onSuccess={() => setShowForm(false)} />
      ) : (
        <>
          <ProductList />
          <button onClick={() => setShowForm(true)}>Add New Product</button>
        </>
      )}
    </div>
  );
};

export default App;
