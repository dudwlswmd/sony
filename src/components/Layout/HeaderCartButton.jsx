import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../store/cart-context'


// const Header = (props) => {
//      const cartCtx = useContext(CartContext)
//      const numberOfCartItems = cartCtx.items.length

//      return (
//           <button className={classes.button} onClick={props.onclick}>
//                <span className={classes.icon}><CartIcon/></span>
//                <span>Tour Cart</span>
//                <span className={classes.badge}>{numberOfCartItems}</span>
//           </button>
//      )
// }

// export default Header



const HeaderCartButton = (props) => {
     const cartCtx = useContext(CartContext);
     const [btnIsHigh,setBtnIsHigh] = useState()//버튼 상태(애니메이션 적용여부)
     const {items} = cartCtx;//구조분해

     useEffect(()=>{
          if(items.length===0){return}
          setBtnIsHigh(true);
          
          const timer = setTimeout(()=>{
               setBtnIsHigh(false)
          },300)

          //사이드이펙트 정리, 클립업함수
          return()=>{
               clearTimeout(timer);
          }

     },[items])
     //컨텍스트에 배열이 바뀔때 작동
     const btnClass = `${classes.button} ${btnIsHigh ? classes.bump : null}`

     //배열.reduce((합해진값,밸류,index,array)=>{실행구},합해진값의 초기값)
     // const numberOfCartItems = cartCtx.items ? cartCtx.items.length : 0;
     const numberOfCartItems = cartCtx.items.reduce((sum,item)=>{
          return sum += item.amount
     },0)

     return (
          <button className={btnClass} onClick={props.onClick}>
               <span className={classes.icon}><CartIcon/></span>
               <span>Tour Cart</span>
               <span className={classes.badge}>{numberOfCartItems}</span>
          </button>
     )
}

export default HeaderCartButton
