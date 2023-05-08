import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [...categories, inputValue]);


    onNewCategory(inputValue.trim())

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  );
};
