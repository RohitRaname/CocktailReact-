import React from "react";
import { Form } from "react-router-dom";
import { useAppContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">Search your Favourite Cocktail</label>
          <input
            type="text"
            id="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
