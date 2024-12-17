import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, handleClickNotInterested }) => {
  return (
    <>
      {tours.map((dat) => (
        <Tour {...dat} handleClickNotInterested={handleClickNotInterested} />
      ))}
    </>
  );
};

export default Tours;
