import React from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
  return (
    <section className="section home">
      <SearchForm />
      <CocktailList />
    </section>
  );
}
