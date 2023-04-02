import React, { useState } from 'react';
import InputsData from './components/InputsData2';
import AgeCalculatorDisplay from './components/AgeCalculatorDisplay';



function App() {

  const [ageData, setAgeData] = useState({
    day: false,
    month: false,
    year: false,
  })
  const [showAge, setShowAge] = useState(false);

  return (
    <main>
    <div className="app-container">
     <InputsData ageData={ageData} setAgeData={setAgeData} showAge={showAge} setShowAge={setShowAge} /> 
     <AgeCalculatorDisplay ageData={ageData} showAge={showAge} setShowAge={setShowAge}  />
    </div>
    </main>
  );
}

export default App;
