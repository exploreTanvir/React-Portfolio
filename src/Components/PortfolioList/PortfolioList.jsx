import React from 'react'
import "./PortfolioList.css"

const PortfolioList = (props) => {
    const {active,set,id,title}=props
  return (
    <li className={active?"portfolioList active":"portfolioList"} onClick={()=>set(id)}>
        {title}
    </li>
  )
}

export default PortfolioList