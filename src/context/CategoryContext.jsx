import { createContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;