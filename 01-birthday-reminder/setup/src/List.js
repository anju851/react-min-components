import React from 'react';

const List = ({ list }) => {
  return (
    <>
      {list.map((l) => {
        const {id, name, age, image} = l;

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
