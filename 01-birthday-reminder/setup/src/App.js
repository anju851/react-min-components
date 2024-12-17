import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [list, setList] = useState(data);
  
  return (
    <main>
      <section className="container">
        <h3>{list.length} birthdays today</h3>
        <List list={list} />
        {/* enhancement: show button only if list length >0 */}
        {list.length > 0 && (
          <button onClick={() => setList([])}>Clear all</button>
        )}
      </section>
    </main>
  );
}

export default App;
