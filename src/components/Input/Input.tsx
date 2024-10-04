import React, { useState } from 'react'

const Input = () => {

    const [height,setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [isHidden, setIsHidden] = useState(false)
    const handleHeight = (e) =>{
        setHeight(e.target.value)
    }

    const handleWeight = (e) =>{
      setWeight(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(weight,height)
    setIsHidden(true)
    setWeight(0)
    setHeight(0)
    

  }

  const handleTryButton = (e) =>{
    e.preventDefault()
    setIsHidden(false)
  }

  return (
      isHidden ? (
        <div>
        <h1>{Number(height)*Number(height) / Number(weight)}</h1>
        <button onClick={handleTryButton}>Try Again</button>
        </div>
      ):(
        <div className='input-container'>
          <form onSubmit={handleSubmit}>
        
            <input type="text" placeholder='Height(m)' value={height} onChange={handleHeight}/>
            <input type="text" placeholder='Weight(kg)' value={weight} onChange={handleWeight}/>
            <button>Submit</button>
          </form>
        </div>
      
        )
  )
}

export default Input
