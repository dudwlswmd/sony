import React, { useReducer } from 'react'
import CartContext from './cart-context'

//리듀서 함수 정의
const cartReducer =(state,action)=>{
     if(action.type==="ADD"){
          const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

          //findIndex(함수) - 제일 먼저 나오는 조건에 맞는 아이템의 인덱스를 반환
          const existingCartItemIndex = state.items.findIndex((item)=>item.id === action.item.id)
          //기존에 있는 state.items의 id랑  action.item.id가 같은게 있는지 찾아라
          // console.log('기존 배열에 같은게 있어???',existingCartItemIndex)
          const existingCartItem = state.items[existingCartItemIndex]
          //기존 아이템이 없을 경우는 undefined

          let updatedItems;
          if(existingCartItem){
               //추가한 아이템이 기존에 있는 아이템일 경우
               const updatedItem = {
                    ...existingCartItem,
                    amount:existingCartItem.amount+action.item.amount}
               updatedItems = [...state.items]//기존 객체를 새 배열로
               updatedItems[existingCartItemIndex]=updatedItem;//값을 더해준 기존 아이템 업데이트
          }else{
               //추가한 아이템이 기존에 없는 아이템일 경우
               updatedItems = state.items.concat(action.item);
          }
          return{
               items:updatedItems,
               totalAmount:updatedTotalAmount,
          }
     }    
     if(action.type==="REMOVE"){
          
          //findIndex(함수) - 제일 먼저 나오는 조건에 맞는 아이템의 인덱스를 반환
          const existingCartItemIndex = state.items.findIndex((item)=>item.id === action.id)
          
          //기존에 있는 state.items의 id랑  action.item.id가 같은게 있는지 찾아라
          const existingCartItem = state.items[existingCartItemIndex];
          //기존 아이템이 없을 경우는 undefined

          const updatedTotalAmount = state.totalAmount - existingCartItem.price;
          //총합계에서 현재 아이템 가격을 빼줌

          let updatedItems;
          if(existingCartItem.amount === 1){
               //1인 상태에서 빼주면 완전히 사라져야 됨
               updatedItems = state.items.filter((item)=>item.id !== action.id)
          }else{
               const updatedItem = {
                    ...existingCartItem,
                    amount:existingCartItem.amount-1,
               }
               updatedItems = [...state.items]//기존 객체를 새 배열로
               updatedItems[existingCartItemIndex]=updatedItem;//값을 빼준 기존 아이템 업데이트
          }
          return{
               items:updatedItems,
               totalAmount:updatedTotalAmount,
          }
          // return defaultCartState
     }
     // switch(action.type){
     //      case "ADD":
     //           return{
     //                items:state.items.concat(action.item),
     //                totalAmount:state.totalAmount + action.item.price * action.item.amount,
     //           }
     // }
     // return defaultCartState
}

//리듀서 초기화 정의
const defaultCartState = {
     items:[],
     totalAmount:0,
}

const CartProvider = (props) => {
     //useReducer 호출(선언)
     const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)//dispatchCartAction를 cartReducer에다가 action으로 보낸다.

     const addItemToCartHandler = (item)=>{
          dispatchCartAction({type:"ADD",item:item})
     }
     const removeItemToCartHandler = (id)=>{
          // dispatchCartAction({type:"REMOVE",id:id})
          // dispatchCartAction({ type: "REMOVE", item: { id: id } });
          dispatchCartAction({ type: "REMOVE", id: id });
          

     }


     //업데이트 될 개개체- 다이나믹하게 변하는 부분
     const cartContext ={
          items:cartState.items, //아이템이 들어있는 배열//defaultCartState에 들어있는 items
          totalAmount:cartState.totalAmount,//총금액//defaultCartState에 들어있는 totalAmount
          addItem:addItemToCartHandler,
          removeItem:removeItemToCartHandler
     }

     return (
          <CartContext.Provider value={cartContext}>
               {props.children}
          </CartContext.Provider>
     )
}

export default CartProvider