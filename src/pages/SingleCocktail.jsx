import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function SingleCocktail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["single-cocktail",id],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      return res.data.drinks[0];
    },
  });

  if (isLoading) return <h2 className="section-title">Loading ...</h2>;
  if (isError) return <h2 className="section-title">Error...</h2>;

  if (!data) return <h2 className="section-title">No drink found...</h2>;

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = data;
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];
  const newCocktail = {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  };

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span>name</span>: {name}
          </p>
          <p>
            <span>category</span>: {category}
          </p>
          <p>
            <span>info</span>: {info}
          </p>
          <p>
            <span>glass</span>: {glass}
          </p>
          <p>
            <span>instructions</span>: {instructions}
          </p>
          <p>
            <span>ingredients : </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
