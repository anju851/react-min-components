import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [col, setCol] = useState();
  const [row, setRow] = useState();
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
    if (row && col) {
      console.log("row:", row);
      console.log("col:", col);
      const gridArray = Array(row)
        .fill()
        .map(() => Array(col).fill(""));
      console.log("gridArray:", gridArray);
      setGrid(gridArray);
    }
  }, [row, col]);

  function extractValues() {
    console.log("extractValues triggered");
    const inputs = input.split(",");
    console.log("inputs:", inputs);
    setRow(inputs[0]);
    setCol(inputs[1]);
  }

  return (
    <main>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={extractValues}>Create Table</button>
      <div>
        {grid.length > 0 && (
          <div>
            {grid.map((row, index) => (
              <div key={index}>
                {row.map((col, colindex) => (
                  <div
                    key={colindex}
                    style={{
                      width: "30px",
                      height: "30px",
                      display: "inline-block",
                      border: "1px solid blue",
                    }}
                  >
                    {col}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


// function App() {
//   const [rows, setRows] = useState(0);
//   const [cols, setCols] = useState(0);
//   const [grid, setGrid] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const [rowsValue, colsValue] = inputValue.split(",").map(Number);
//     setRows(rowsValue);
//     setCols(colsValue);
//     const gridArray = Array(rowsValue)
//       .fill()
//       .map(() => Array(colsValue).fill(""));
//     setGrid(gridArray);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter rows and cols (e.g., 2,5)"
//         />
//         <button type="submit">Create Grid</button>
//       </form>
//       {grid.length > 0 && (
//         <div>
//           {grid.map((row, rowIndex) => (
//             <div key={rowIndex}>
//               {row.map((cell, cellIndex) => (
//                 <div
//                   key={cellIndex}
//                   style={{
//                     display: "inline-block",
//                     width: "20px",
//                     height: "20px",
//                     border: "1px solid black",
//                   }}
//                 >
//                   {cell}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

export default App;
