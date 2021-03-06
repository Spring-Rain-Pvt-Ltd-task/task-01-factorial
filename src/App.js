import React, { useState,useRef } from 'react';

const App=()=> {
const result = useRef()
const [num,setNum]= useState(0)
const handleOnChange= e => setNum(Number(e.target.value))
const factorial = value => {
  if(value<0) {
    return window.alert("Negative value not acceptable")
  }
    return value  ? value * factorial(value - 1) : 1;
}

const handleSubmit = e => {
    e.preventDefault()
    let factorial_result=factorial(num)
    return result.current.innerText=`Factorial: ${factorial_result ? factorial_result: 0}`;
}

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter a number..." onChange={handleOnChange} />
        <br />
        <button>Calculate Factorial</button>
      </form>
     <h2 ref={result}>Factorial:{0}</h2>
    </div>
  );

}

export default App;
