import React from 'react'
import '../Css/Submitted.css'
import check from'../Images/check.svg'


export default function Submitted() {
  return(
    <div className='popup-div'>
        {/* <button className='close-btn'><img src={close} className="close-img"></img></button> */}
        <img alt='Submitted' className='check-img' src={check}></img>
        <h3 className='submitted-txt'>Eingereicht!</h3>
        <meta http-equiv="refresh" content="2;url=/" />
    </div>
  )
}
