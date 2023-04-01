import React from 'react';
import "./Header.css"
import Navbar from "./Navabar";
import Head from "./Head";
import Search from "./Search";

const Header = ({cartItem}) => {
  return (
    <>
     <Head/>
     <Search cartItem={cartItem}/>
     <Navbar/>
    </>
  )
}

export default Header

