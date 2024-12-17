import React, { useState, useEffect } from 'react'
import data from './data';
import Tours from './Tours'

function App() {

  const [apiData, setapiData] = useState(data);

  function handleClickNotInterested(event) {
    console.log(event);
    let data = apiData.filter(dat => dat.id !== event.target.id );
    setapiData(data);
  }
  
  return (
    <main>
      <h1>Our Tours </h1>
      <section>
        <Tours
          tours={apiData}
          handleClickNotInterested={handleClickNotInterested}
        />
      </section>
    </main>
  );
 
}

export default App
