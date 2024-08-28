import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../features/product';
import { RootState, AppDispatch } from '../app/store';
import ProductForm from './ProductForm';

interface Product {
  id: number;
  product_name: string;
  category: string;
  price: number;
  discount?: number;
}

interface ProductListProps {
  onEdit: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onEdit }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector((state: RootState) => state.products);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (product: Product) => {
    onEdit(product);
    setEditingProduct(product);
  };

  const handleUpdateSuccess = () => {
    setEditingProduct(null);
    dispatch(fetchProducts());
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  const formatDiscount = (discount?: number): string => {
    return discount !== undefined ? `${discount}%` : 'N/A';
  };

  if (editingProduct) {
    return <ProductForm initialProduct={editingProduct} onSuccess={handleUpdateSuccess} />;
  }

  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Product List</h1>
      {status === 'loading' && <p className="text-gray-600">Loading...</p>}
      {status === 'failed' && <p className="text-red-600">{error}</p>}
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700 border-b">
            <th className="p-4">Product Name</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Discount</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="p-4">{product.product_name}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">{formatPrice(product.price)}</td>
              <td className="p-4">{formatDiscount(product.discount)}</td>
              <td className="p-4">
                <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
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
