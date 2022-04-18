import React, {useRef, useEffect} from 'react'
import  './hover.css'

function Hoverboard() {

  const container = useRef (null)
  useEffect(()=>{

    const colors = ['red' , 'blue' , 'green' , 'white' , 'pink']
    const squ = 120;

    for(let s= 0; s<squ; s++){
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover',() => settColor(square))
      square.addEventListener('mouseout',() => removeColor(square))
      container.current.appendChild(square)
    }

    const settColor = (e) =>{
      let color = getRandomColor();
      e.style.background = color;
      e.style.boxShadow = `0 0 2px ${color} 0 0 8px ${color}`
    }
    const removeColor =(e) =>{
     e.style.background = '#1d1d1d'
    //  e.style.boxShadow = '#000'
    }
    const getRandomColor = () =>{
      return colors[Math.floor(Math.random()* colors.length)]
    }
  },[])
  return (
    <>
        <div className="container" ref={container}>
           
        
        </div>
    </>
  )
}

export default Hoverboard