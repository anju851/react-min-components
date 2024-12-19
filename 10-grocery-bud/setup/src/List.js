import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, handleEditing, handleDelete }) => {
  return (
    <div className="grocery-list">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <button
              type="button"
              className="edit-btn"
              onClick={() => handleEditing(id)}
            >
              <FaEdit />
            </button>
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDelete(id)}
            >
              <FaTrash />
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List
