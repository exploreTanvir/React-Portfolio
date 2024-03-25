import React from 'react'
import "./PortfolioList.css"

const PortfolioList = (props) => {
  return (
    <li className='portfolioList'>
        {props.title}
    </li>
  )
}

export default PortfolioList