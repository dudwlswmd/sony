import React, { useRef } from 'react'
import Input from '../../UI/input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {

     //ref를 통해서 입력된 값을 받아옴(특정 돔을 선택해서 받아올때 사용)
     const amountInputRef = useRef()
     
     const submitHandler = (e) => {
          e.preventDefault();
          const enterdAmount = amountInputRef.current.value;
          // console.log(enterdAmount);
          console.log(typeof enterdAmount);//문자열
          // const enterdAmountNumber = Number(enterdAmount)//기존방법
          const enterdAmountNumber = +enterdAmount//최신방법//숫자열로 바꿔줌
          console.log(enterdAmountNumber);

          //유효성 검사
          if(enterdAmount.trim().length===0 || enterdAmount<1 || enterdAmount >5 ){
               return;
          }
          props.onAddToCart(enterdAmountNumber);//이거뭐임?//MealItem에서 쳐 가져온 함수임
          //수량을 onAddToCart의 인자값으로 넘김

     }
     return (
          <form className={classes.form} onSubmit={submitHandler}>
               <Input label="Amount" 
               ref={amountInputRef}
               input={{ 
                    id:"Amount_"+props.id,
                    type:"number",
                    min:"1",
                    max:"10",
                    defaultValue:"1",
                    step:"1",
          }}/>
               {/* <input type="number" min="1" max="6" defaultValue={0} step={2} id={id} /> */}
               <button> + 구매(이적)</button>
          </form>
     )
}

export default MealItemForm