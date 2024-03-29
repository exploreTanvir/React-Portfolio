import React, { useEffect, useState } from 'react'
import "./portfolio.css"
import PortfolioList from '../PortfolioList/PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../Data";

const Portfolio = () => {

  const [selected,setSelected]=useState("featured")
  const [data,setData]=useState([])
 
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Web Design",
    },
    {
      id: "uiux",
      title: "UI & UX",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "featured":setData(featuredPortfolio)
      break
      case "web":setData(webPortfolio)
      break
      case "design":setData(mobilePortfolio)
      break
      case "uiux":setData(designPortfolio)
      break
      case "branding":setData(contentPortfolio)
      break;
      default:setData(featuredPortfolio)
    }


  },[selected])


  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title} active={selected===item.id} set={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className='container'>
        {data.map((d)=>(   
        <div className='items'>
          <img src={d.img} alt=''/>
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio