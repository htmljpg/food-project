import { Link } from "react-router-dom";

function MealItem(props) {
  const { idMeal, strMeal, strMealThumb } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
}

export { MealItem };
