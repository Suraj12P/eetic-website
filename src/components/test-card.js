import React from 'react'
import '../components/css/testimonials.css'

const TestCard = ({name , position , image , text}) => {
    return (
        <div className="wrapper">
          <div className="wrapper-2">
            <img src={image} alt="shehin" />
            <h3>{name}</h3>
            <h5 className='wrapper-2-2'>{position}</h5>
          </div>
          <div className="wrapper-3">
            <p>"{text}"</p>
          </div>
        </div>
      );
}

export default TestCard