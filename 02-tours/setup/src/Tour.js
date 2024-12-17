import { useState } from 'react';

const Tour = ({ id, name, info, image, price, handleClickNotInterested}) => {

  const [readMore , setReadMore] = useState(false);
  return (
    <section>
      <div key={id}>
        <h2>{name}</h2>
        <img src={image} />
        <p>
          {readMore ? info : info.substring(0, 200)} ....
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : "Read more"}</button>
        </p>
        <span>{price}</span>
        <button id={id} onClick={handleClickNotInterested}>Not interested</button>
      </div>
    </section>
  );
};

export default Tour;
