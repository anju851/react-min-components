import React, { useState, useRef, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [itemName, setItemName] = useState('');
  const [groceryList, setGroceryList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    if(!itemName){
        showAlert(true, "danger", "type a valid name");
    } 
    else if(isEditing && itemName){
      setGroceryList(groceryList.map((item) => {
        if(editId === item.id) {
          item.title = itemName;
        }
        return item;
      }));

      setEditId(null);
      setItemName('');
      setIsEditing(false);
      showAlert(true, "success", "value changed!")
    }
    else{
      const newItem = {id: new Date().getTime().toString() , title: itemName}
        setGroceryList([...groceryList, newItem]);
        showAlert(true, "success", "item added to the list");
        setItemName("");
    }
    
  }

  function showAlert(show=false, msg='', type=''){
    setAlert({show, msg, type});
  }

  function handleEditing(id){
    setEditId(id);
    setIsEditing(true);
    const editItemName = groceryList.find((item) => item.id === id);
    setItemName(editItemName.title);
    console.log(editItemName.title);
  }

  function handleDelete(id) {
    setGroceryList(groceryList.filter((item) => item.id !== id));
    showAlert(true, "danger", "item removed");
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert removeAlert={showAlert} list={groceryList} {...alert} />
        )}
        <h3>grocery bud practice</h3>
        <input
          ref={inputRef}
          className="grocery"
          value={itemName}
          type="text"
          placeholder="enter grocery name"
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "Edit" : "Submit"}
        </button>
      </form>
      {groceryList.length > 0 ? (
        <div className="grocery-container">
          <List
            list={groceryList}
            handleEditing={handleEditing}
            handleDelete={handleDelete}
          />
        </div>
      ) 
    : (
      <div className="grocery-container">
        <p>Your grocery basket is empty :(</p>
      </div>
    )}
    </section>
  );
}

export default App
