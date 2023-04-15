import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAppContext } from "../context";
import Cocktail from "./Cocktail";
import axios from "axios";

const CocktailList = () => {
  const { searchTerm } = useAppContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cocktails", searchTerm],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );


      return res.data.drinks || [];
    },
  });

  if (isLoading) return <h2 className="section-title">Loading ...</h2>;
  if (isError) return <h2 className="section-title">Error...</h2>;

  if (!data || data.length === 0)
    return <h2 className="section-title">No drinks found...</h2>;

  const drinks = data.map((drink) => {
    const { idDrink, strDrink, strCategory, strAlcoholic, strDrinkThumb } =
      drink;
    return {
      id: idDrink,
      name: strDrink,
      category: strCategory,
      alcoholic: strAlcoholic,
      image: strDrinkThumb,
    };
  });

  console.log('cocktail')

  return (
    <section className="section cocktails">
      <div className="section-title">Cocktails</div>
      <div className="section-center cocktails-center">
        {drinks.map((drink) => (
          <Cocktail {...drink} />
        ))}
      </div>
      <ul></ul>
    </section>
  );
};

export default CocktailList;
