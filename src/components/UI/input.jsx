import React, { forwardRef } from 'react'
import classes from './input.module.css'

const input = forwardRef((props,ref) => {
     return (
          <div className={classes.input}>
               <label htmlFor={props.input.id} >{props.label}</label>
               <input ref={ref} {...props.input}/>
          </div>
     )
})

export default input

//forwardRef전달받은 ref 어트리뷰트를 하부 트리 내의 다른 컴포넌트로 전달할때 함수부분을 감싸서 사용
