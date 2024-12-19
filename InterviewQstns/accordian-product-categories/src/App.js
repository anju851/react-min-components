import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md"; // <MdKeyboardArrowRight />
import { MdKeyboardArrowDown } from "react-icons/md"; // <MdKeyboardArrowDown />
import { data } from "./data.js";

function App() {

  const [activeId, setActiveId] = useState(1);

  //fetch unique categories from the data
  const categories = [...new Set(data.map(item => item.category))];
  console.log("categories: " + categories);
  
  return (
    <main className="header-container">
      <h3 className="header">Product Categories</h3>
      <section className="categories-container">
        {categories.map((category, index) => {
          return (
            <ul className="category">
              {category}
              <button className="btn" onClick={() => setActiveId(index)}>
                {activeId == index 
                ? <MdKeyboardArrowDown />
                : <MdKeyboardArrowRight /> }
              </button>
              {data.map(
                (item) => item.category === category && activeId == index && <li className="category-items">{item.title}</li>
              )}
            </ul>
          );
        })}
      </section>
    </main>
  );
}

export default App;


// import { useState } from "react";

// const App = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const categories = [
//     {
//       id: 1,
//       name: 'Chair',
//       items: ['Office Chair', 'Recliner Chair', 'Dining Chair'],
//     },
//     {
//       id: 2,
//       name: 'Decor',
//       items: ['Wall Art', 'Rugs', 'Curtains'],
//     },
//     {
//       id: 3,
//       name: 'Interior',
//       items: ['Sofa', 'Coffee Table', 'TV Stand'],
//     },
//   ];

//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="accordion">
//       {categories.map((category, index) => (
//         <div key={category.id} className="accordion-item">
//           <div
//             className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
//             onClick={() => handleClick(index)}
//           >
//             <span>{category.name}</span>
//             <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`} />
//           </div>
//           {activeIndex === index && (
//             <div className="accordion-content">
//               <ul>
//                 {category.items.map((item) => (
//                   <li key={item}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App;