import { useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import SideBar from './Sidebar/SideBar'
import products from './db/data'
import Card from './Components/Card' // Make sure this path is correct

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  // input filter
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // filter products by query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // radio filter 
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredItems = products;

    if (query) {
      filteredItems = filteredItems.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredItems = filteredItems.filter(product =>
        product.category === selected ||
        product.company === selected ||
        product.color === selected ||
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredItems.map(({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        company={company}
        color={color}
        category={category}
      />
    ));
  }

  // You can use filteredData if you want to render cards directly here,
  // or just pass the filtered products to <Products />
  const finalFilteredProducts = filteredData(products, selectedCategory, query);

  return (
    <>
      <SideBar onChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended onClick={handleClick} />
      <Products finalFilteredProducts={finalFilteredProducts} />
    </>
  );
}

export default App
