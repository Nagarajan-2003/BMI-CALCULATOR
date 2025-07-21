import React, { useState } from 'react'

const App = () => {
  const [bmi,setBmi]=useState('');
  function Calculatebmi(){
    const weightinput=prompt("enter your weight");
    const heightinput=prompt("enter your height");
    const weight=parseFloat(weightinput);
    const heightCM=parseFloat(heightinput);
    const height=heightCM/100;
    if(isNaN(weight)||isNaN(height)||weight<=0||height<=0){
      alert("please enter valid inputs of weight and height");
      return;
    }
    const bmi=weight/(height*height);
    setBmi(bmi.toFixed(2));
    }
  
  return (
    <div>
      <h1>BMI CALCULATOR</h1>
      <p>click the below button to know your bmi</p>
      <button onClick={Calculatebmi}>Check your BMI</button>
      {bmi && <p>Your BMI is {bmi}</p>}
    </div>
  )
}

export default App