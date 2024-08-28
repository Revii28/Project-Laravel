import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../features/product';
import { AppDispatch } from '../app/store';
import '../index.css';

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
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="product_name"
        value={product.product_name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        className="input-field"
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        className="input-field"
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        className="input-field"
        type="number"
        name="discount"
        value={product.discount || ''}
        onChange={handleChange}
        placeholder="Discount"
      />
      <button className="submit-btn" type="submit">{product.id ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
