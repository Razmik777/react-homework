import React, { useContext } from "react";
import { UserContext, ThemeContext } from "./Contexts";

const Profile = () => {
  const { username, setUsername } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "светлая" ? "#fff" : "#333",
        color: theme === "светлая" ? "#000" : "#fff",
      }}
    >
      <h2>Профиль пользователя</h2>
      <p>Имя пользователя: {username}</p>
      <input
        type="text"
        placeholder="Введите новое имя"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setTheme(theme ==="светлая" ? "темная" : "светлая")}>
        Сменить тему
      </button>
    </div>
  );
};

export default Profile;