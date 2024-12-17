import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {id, name, job, image, text} = people[index]; 

  function handleClickLeft(){
    setIndex(checkNumber(index - 1));
  }
  function handleClickRight() {
    setIndex(checkNumber(index + 1));
  }

  function checkNumber(num){
    if(num < 0) return people.length-1;
    if (num > people.length-1) return 0;
    return num;
  }

  function handleClickRandom(){
    let randomVal = Math.floor(Math.random() * people.length);
    console.log(randomVal);
    
    if(index == randomVal) {
      
      setIndex(checkNumber(randomVal +1));
      console.log(randomVal + 1);
    }
    else setIndex(checkNumber(randomVal));
    
  }

  return (
    <article>
      <section key={id}>
        <img alt={name} src={image}></img>
        <FaQuoteRight />
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </section>
      <section>
        <button onClick={handleClickLeft}>
          <FaChevronLeft />
        </button>
        <button onClick={handleClickRight}>
          <FaChevronRight />
        </button>
        <button onClick={handleClickRandom}>
          Surprise me!
        </button>
      </section>
    </article>
  );
};

export default Review;
