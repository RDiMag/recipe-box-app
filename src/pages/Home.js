import React, { useState, useEffect } from 'react';
import '../styles/recipestyle.css';
import Recipe from '../components/recipe.js';
import axios from 'axios';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import hero from '../images/hero.jpg';

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('basil')
  
  useEffect(() => {
    getRecipes('string')
  }, [query])
  
  const getRecipes = async () => {
    const response = await axios.get(
      // `https://recipe-box-nmgo.onrender.com/recipes/${query}` || 
      `http://localhost:5000/recipes/${query}`
    )
    console.log(response.data)
    setRecipes(response.data)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      {/* <div className="App-header">
        <img src={logo} alt="Logo" className="logo" />
      </div> */}

      <div className="mainDiv" style={{ backgroundImage:`url(${hero})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",
      }}>
       <div className="heroText">
        <h1>Enter an ingredient.</h1>
        <h2>Get recipes.</h2>
        <p className="heroParagraph"><em>Bon appetit!</em></p>
      
        <form onSubmit={getSearch} className="searchForm">
          <input 
            className="search-bar" 
            type="text" 
            value={search} 
            onChange={updateSearch} />
          <Button className="search-button" type="submit">Search</Button>
        </form>
        </div> 
      </div>

      <div className="gridContainer">
        <div className="recipeStyle">
        {recipes.map((recipe) => (
          <Recipe 
            key={recipe.recipe.uri}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            source={recipe.recipe.source}
            url={recipe.recipe.url}
            />
          ))}
      </div>
      </div>
      
          
    <div id="edamam-badge" data-color="white"></div>
  </div>
  )
}

export default Home