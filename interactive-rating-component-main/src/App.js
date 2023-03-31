import Rating from "./components/Rating";
import React, { useState } from "react";
import "./rating.css";
import ThankYou from "./components/ThankYou";

function App() {
  const [submit, setSubmit] = useState(false);
  console.log(submit);

  return (
    <main>
      <div className="container">
        {submit ? <ThankYou /> : <Rating setSubmit={setSubmit} /> }
      </div>
    </main>
  );
}

export default App;
