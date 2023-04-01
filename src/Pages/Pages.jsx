import React from 'react'
import FlashDeals from '../Components/flashDeals/FlashDeals.jsx';
import Home from "../Components/mainpage/Home.jsx";
import TopCate from '../Components/top/TopCate.jsx';
import NewArrival from '../Components/newarrivals/NewArrival.jsx';
import Discount from '../Components/discount/Discount.jsx';
// import Shop from '../Components/shop/Shop.jsx';




const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrival/>
        <Discount/>
        {/* <Shop shopItems={shopItems} addToCart={addToCart}/> */}
        
    </>
      
   
  )
}

export default Pages
