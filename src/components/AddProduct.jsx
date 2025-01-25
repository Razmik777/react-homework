import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // Генерация уникального ID
      name,
      description,
      price: parseFloat(price),
      available,
    };
    dispatch(addProduct(newProduct));
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(false);
  };

  return (
    <form className="form-product" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Цена"
        required
      />
      <label>
        Наличие:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default AddProduct;
