import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;

    const newCategories = [value, ...categories];

    setCategories(newCategories);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((categorie) => (
        <GifGrid category={categorie} key={categorie} />
      ))}
    </>
  );
};
