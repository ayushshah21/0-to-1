import React from 'react'

const Backgrounds = () => {
    function updateColor(e){
        document.body.style.backgroundColor = e.target.className;
    }
  return (
    <div className='color-container'>
        <div onClick={updateColor} className='red'>Red</div>
        <div onClick={updateColor} className='yellow'>Yellow</div>
        <div onClick={updateColor} className='black'>Black</div>
        <div onClick={updateColor} className='purple'>Purple</div>
        <div onClick={updateColor} className='green'>Green</div>
        <div onClick={updateColor} className='blue'>Blue</div>
        <div onClick={() => document.body.style.backgroundColor='white'} className='default'>Default</div>
    </div>
  )
}

export default Backgrounds