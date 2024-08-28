import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../features/product';
import { AppDispatch } from '../app/store';

interface ProductFormProps {
  initialProduct?: {
    id?: number;
    product_name: string;
    category: string;
    price: number;
    discount?: number;
  };
  onSuccess: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialProduct, onSuccess }) => {
  const [product, setProduct] = useState(initialProduct || {
    product_name: '',
    category: '',
    price: 0,
    discount: undefined,
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'discount' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.id) {
      dispatch(updateProduct(product as any))
        .then(() => onSuccess());
    } else {
      dispatch(addProduct(product as any))
        .then(() => onSuccess());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="product_name"
        value={product.product_name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="number"
        name="discount"
        value={product.discount || ''}
        onChange={handleChange}
        placeholder="Discount"
      />
      <button type="submit">{product.id ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
