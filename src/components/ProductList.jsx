import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from '../store/productSlice';

const ProductList = ({setEditingProduct}) => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Наименование товаров</h2>
            {products.length === 0 ? (
                <p>Нет товаров.</p>
            ) : (
                products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: р.{product.price.toFixed(2)}</p>
                        <p>Наличие: {product.available ? 'Да' : 'Нет'}</p>
                        <button onClick={() => dispatch(toggleAvailability(product.id))}>
                            Доступность
                        </button>
                        <button onClick={() => dispatch(removeProduct(product.id))}>
                           Удалить товар
                        </button>
                        <button onClick={() => setEditingProduct(product)}>
                            Изменить товар
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;
