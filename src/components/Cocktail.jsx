import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,name,image,category,alcoholic}) => {
  return (
   <article key={id} className='cocktail'>
          <div className="img-container">
            <img className="img" src={image}/>
          </div>

          <div className="item-info cocktail-footer">
            <h2>{name}</h2>
            <h3>{category}</h3>
            <p>{alcoholic}</p>

            <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
              Details
            </Link>
          </div>
      

   </article>
  )
}

export default Cocktail