import  { useState } from 'react'

const Input = () => {

    const [height,setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmimsg , setBmiMsg] = useState("")
    const [isHidden, setIsHidden] = useState(false)
    const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setHeight(e.target.value)
    }

    const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setWeight(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    console.log(weight,height)
    if( weight && height != ""){
      setIsHidden(true)
    }
    else{
      alert("Please input a value")
    }
    if (bmi < 18.5){
      setBmiMsg("UnderWeight")
    }
    else if(bmi > 18.5 && bmi < 24.9){
      setBmiMsg("Normal Weight")
    }
    else if(bmi > 25 && bmi < 29.9){
      setBmiMsg("Over Weight")
    }
    else if(bmi > 30 && bmi < 35){
      setBmiMsg("Obese")
    }
    else if(bmi > 35){
      setBmiMsg("Morbid Obesity")
    }

  }

  const handleTryButton = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    setIsHidden(false)
    setHeight('')
    setWeight('')
  }
  const bmi = height !== "" && weight!== "" ? Number(weight) / (Number(height) * Number(height)) : 0;

  return (
      isHidden ? (
        <div className='result-container'>
          <p>Your BMI is :</p>
        <h1 className='result'>{bmi.toFixed(2)}</h1>
        <h1 className='bmi-msg'>{bmimsg}</h1>
        <button onClick={handleTryButton} className='button'>Try Again</button>
        </div>
      ):(
        <div>
          <form onSubmit={handleSubmit} className='input-container'>
        
            <input type="number" placeholder='Height(m)' value={height} onChange={handleHeight} className='input-box'/>
            <input type="number" placeholder='Weight(kg)' value={weight} onChange={handleWeight} className='input-box'/>
            <button className='button'>Submit</button>
          </form>
        </div>
      
        )
  )
}

export default Input
