import { useState } from 'react';
import { handleChangeCtx } from './components/handleChangeCtx';
import Navigation from './Navigation/Navigation';
import Products from './Products/Products';
import './App.css';
import Sidebar from '../src/Sidebar/Sidebars/Sidebar'
import Recommended from './Recommended/Recommended';
import product from './services/data'
import Cards from './components/Cards';
import { handleClickCtx } from './components/handleClickCtx';




function Home() {

  const [category, setCategory]= useState(null)
  const [input, setInput] = useState('')
 

  const handleSubmit = (e)=>{
      setInput(e.target.value)
  }

  //filter items
  const filteredItems = product.filter((item)=>
    item.title.toLowerCase().includes(input.toLocaleLowerCase()) ||
    item.company.toLowerCase().includes(input.toLocaleLowerCase())
    // item.title.toLowerCase().indexOf(input.toLocaleLowerCase())!== -1
  )

  //.......Radio Filter........
  const handleChange = (event)=>{
    setCategory(event.target.value)
  
  }


  //.............Buttons Filter.............
  const handleClick = (e)=>{
    setCategory(e.target.value)
    
  }

  //filtering function
  function filteredData(product, selected, input){
    let filteredProducts = product

    //filtering input items
    if (input){
      filteredProducts = filteredItems
    } 

    if (selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title})=>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected,
      )
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice, id})=>(
      <Cards key={id} img= {img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} id={id}/>
    ))
  }


  const results = filteredData(product, category, input)



  return (
    <div className="App">
      
        <div className='left-col'>
          <handleChangeCtx.Provider value={handleChange}>
            <Sidebar />
          </handleChangeCtx.Provider>
        </div>
        <div className='right-col'>
          <Navigation input={input} handleSubmit={handleSubmit} />
          <handleClickCtx.Provider value={handleClick}>
            <Recommended  />
          </handleClickCtx.Provider>
          <Products results = {results} />
          
        </div>
        
      
    </div>
  );
}

export default Home;
