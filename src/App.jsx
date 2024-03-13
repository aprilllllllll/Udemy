import Header from "./component/Header";
import Calculator from "./component/Calculator";
import Table from "./component/Table";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  function handleChange(inputType, value) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput, // copy the peviose value 
        [inputType]: +value // set the new value by using the inputType(name of the value) +sign means is number
      };
    });
  }
  console.log(userInput)

  return (
    <>
      <Header />
      <Calculator handleChange ={handleChange}/>
      <Table input = {userInput}/>
    </>
  );
}

export default App;
