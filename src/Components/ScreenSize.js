
import React, { useEffect, useState } from 'react'

const ScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const screenSize= () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        console.log("add listner");
        window.addEventListener("resize", screenSize)
        return () => { 
            console.log("remove listner")
            window.removeEventListener("resize", screenSize);}
    })
   
  return (
    <>
      <h1>Screen Size</h1>
      <p>{width}</p>
    </>
  )
}

export default ScreenSize
