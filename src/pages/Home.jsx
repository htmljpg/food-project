import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCategory(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );

    navigate({
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCategory(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);
  console.log(search);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCategory} />
      )}
    </>
  );
}

export { Home };
