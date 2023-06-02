//모달 팝업창
import React from 'react'
import classes from './Modal.module.css'
// import { createPortal } from 'react-dom'
import ReactDom from 'react-dom'

//모달 백그라운드반투명 까만
const BackDrop=(props)=>{
     return <div className={classes.backdrop} onClick={props.onHideCart}/>
}
//모달 창(가운데 하얀창)
const ModalOverlay=(props)=>{
     return(
          <div>
               <div className={classes.modal}>
                    <div>{props.children}</div>
               </div>
          </div>
     )
}

const portalElement = document.getElementById('overlays');

//메인 컴포넌트
const Modal = (props) => {
     return (
          <div>
               {ReactDom.createPortal(<BackDrop onHideCart={props.onHideCart}/>,portalElement)}
               {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}      

               {/* <BackDrop /> */}
               {/* <ModalOverlay>{props.children}</ModalOverlay> */}
          </div>
     )
}

export default Modal