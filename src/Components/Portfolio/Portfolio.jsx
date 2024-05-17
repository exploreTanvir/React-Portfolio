import React, { useEffect, useState } from 'react';
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "../../Data";
import PortfolioList from '../PortfolioList/PortfolioList';
import "./portfolio.css";

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
      id: "WordPress",
      title: "WordPress",
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
      case "WordPress":setData(contentPortfolio)
      break;
      default:setData(featuredPortfolio)
    }


  },[selected])


  return (
    <div className='portfolio d-flex flex-column align-items-center' id='portfolio'>
      <h1 className='mt-5 fw-bold'>PROJECT'S</h1>
      <ul 
      className='p-0 d-flex'>
        {list.map((item)=>(
          <PortfolioList title={item.title} active={selected===item.id} set={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className='container-fluid itemContainer d-flex align-items-center justify-content-center flex-wrap'>
        {data.map((d)=>(   
        <div className='items  d-flex align-items-center justify-content-center text-white'>
          <img src={d.img} alt=''/>
         <div className="positionArea text-center">
         <h3>{d.title}</h3>
          <button className='p-1 rounded-2 text-white'><a target='_blank' href={d.source}>Source</a></button>
         </div>

        </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio