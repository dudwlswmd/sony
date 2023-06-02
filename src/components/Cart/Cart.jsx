import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../store/cart-context'

const Cart = (props) => {
     const cartCtx = useContext(CartContext);
     const hasItems = cartCtx.items.length > 0;//장바구니에 주문이 있음
     const totalAmount2 = `$ ${cartCtx.totalAmount.toFixed()}`//toFixed()이거뭐임?

     const cartItemRemoveHandler = (id) =>{
          cartCtx.removeItem(id)
     }
     const cartItemAddHandler = (item) =>{
          cartCtx.addItem({...item,amount:1})
     }

     // const price =`$ ${props.price.toFixed(2)}`;

     const cartItems = (
          <ul className={classes['cart-items']}>
               {cartCtx.items.map((e)=>(
                    <li key={e.id}>
                         <div>
                              <h2>{e.name}</h2>
                              <div className={classes.itemButtons}>
                                   <span className={classes.price}>{`$ ${e.price.toFixed(2)}`}</span>
                                   <span className={classes.amount}>x{e.amount}</span>
                              </div>
                         </div>
                         <div className={classes.btns}>
                              <button onClick={()=>cartItemRemoveHandler(e.id)}>-</button>
                              <button onClick={() => cartItemAddHandler(e)}>+</button>
                              {/* <button onClick={()=>cartItemAddHandler(item)}>+</button> */}
                         </div>
                    </li>
               ))}
          </ul>
     )

     return (
          <Modal onHideCart={props.onHideCart}>
               <div>
                    {cartItems}
                    <div className={classes.total}>
                         <span>총수량</span>
                         <span>{totalAmount2}</span>
                    </div>
                    <div className={classes.action}>
                         <button className={classes['button-outline']} onClick={props.onHideCart}>닫기</button>
                         {hasItems && <button className={classes.button}>주문</button>}
                    </div>
               </div>
          </Modal>
     )
}

export default Cart