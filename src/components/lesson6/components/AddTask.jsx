import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleTask = () => {
        if(description.trim()) {
            dispatch(addTask(description));
            setDescription('');
        }
    };

    return(
        <div>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Новая задача" />
            <button onClick={handleTask}>Добавить задачу</button>
        </div>
    )
};

export default AddTask;