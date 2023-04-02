import React, { useState } from 'react'
import "./App.css"
import Header from "./Components/header/Header"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pages from "./Pages/Pages";
import Data from './Components/flashDeals/Data'
import Cart from './Components/cart/Cart'
import Sdata from './Components/shops/Sdata';
import Footer from './Components/footer/Footer';


const App = () => {
  // step 1 : fetch data from database
  const { productItems } = Data
  const { shopItem } = Sdata
  const [cartItem, setCardItem] = useState([])

  
  const addToCart = (product) =>{

  
      const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item) =>
      (item.id === product.id?
        {...productExit,qty:productExit.qty+1} :item )))
      }else{
        setCardItem([...cartItem, {...product,qty: 1}])
      }
    }
    // console.log("addToCart")
    const decreaseQty = (product) =>{
      const productExit =cartItem.find((item) => item.id===product.id)
      if(productExit.qty === 1){
        setCardItem(cartItem.filter((item) => item.id !==product.id))
      }else{
        setCardItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty : productExit.qty-1}:item)))
      }
    }
    return (
      <>
        <Router>
          <Header cartItem={cartItem} />
          <Switch>
            <Route path="/" exact>
              <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItem}/>
            </Route>
            <Route path="/cart" exact>
              <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </>
    )
  }

  export default App


