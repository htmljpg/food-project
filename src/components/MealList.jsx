import { useNavigate } from "react-router-dom";
import { MealItem } from "./MealItem";

function MealList({ meals }) {
  const navigate = useNavigate();
  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="list">
        {meals.map((item) => (
          <MealItem key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  );
}

export { MealList };
