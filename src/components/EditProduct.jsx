import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/productSlice';

const EditProduct = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [available, setAvailable] = useState(product.available);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({ ...product, name, description, price: parseFloat(price), available }));
        onClose(); // Закрыть форму редактирования после обновления
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
            <input value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <label>
                Available:
                <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
            </label>
            <button type="submit">Update Product</button>
        </form>
    );
};

export default EditProduct;
