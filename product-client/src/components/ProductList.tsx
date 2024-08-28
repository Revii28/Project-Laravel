import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import { fetchProducts, deleteProduct } from '../features/product';
import ProductForm from './ProductForm';
import '../index.css';

const ProductList: React.FC<{ onEdit: (product: any) => void }> = ({ onEdit }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status } = useSelector((state: RootState) => state.products);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (product: any) => {
    onEdit(product);
    setEditingProduct(product);
  };

  const handleUpdateSuccess = () => {
    setEditingProduct(null);
    dispatch(fetchProducts());
  };

  if (editingProduct) {
    return <ProductForm initialProduct={editingProduct} onSuccess={handleUpdateSuccess} />;
  }

  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product_name}</td>
              <td>{product.category}</td>
              <td>Rp{product.price.toLocaleString()}</td>
              <td>{product.discount !== undefined ? `${product.discount}%` : 'N/A'}</td>
              <td>
                <button 
                  className="btn edit-btn" 
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button 
                  className="btn delete-btn" 
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
