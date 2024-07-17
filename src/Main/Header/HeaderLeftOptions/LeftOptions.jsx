import React from 'react'
import './LeftOptions.css'

const LeftOptions = ({leftOptions}) => {
  return (
    <div className="left-options-container">
        {leftOptions.map((option,index) => (
          <div key={index} className="options-list">
            <p>{option.caption}</p>
          </div>
        ))}
    </div>
  )
}

export default LeftOptions