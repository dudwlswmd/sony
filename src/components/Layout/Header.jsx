import React from 'react'
import classes from "./Header.module.css"
import mealsImg from "../../assert/son.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
     return (
          <>
               <header className={classes.header}>
                    <h1>쏘니!!!!!!</h1>
                    <button>Cart</button>
                    <HeaderCartButton onClick={props.onShowCart}/>
               </header>
               <div className={classes["main-imgage"]}>
                    {/* main-image 클라스는 안에 -가 있어서 .을 못 씀 */}
                    <img src={mealsImg} alt="아침조식뿌셔" />
               </div>
          </>
     )
}

export default Header