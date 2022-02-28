import { CategoryItem } from "./CategoryItem";

function CategoryList(props) {
  const { catalog } = props;

  return (
    <>
      <div className="list">
        {catalog.map((item) => (
          <CategoryItem key={item.idCategory} {...item} />
        ))}
      </div>
    </>
  );
}

export { CategoryList };
