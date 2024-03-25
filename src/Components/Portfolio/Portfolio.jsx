import React from 'react'
import "./portfolio.css"
import PortfolioList from '../PortfolioList/PortfolioList';

const Portfolio = () => {
 
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
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title}/>
        ))}
      </ul>
      <div className='container'>
        <div className='items'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmIOqJmyXwyNRNPwTZxqzwsCb2KuvUkVHItczW2urnS5tbDRDBAYyg7QSxCgZqvvyAFw&usqp=CAU' alt=''/>
          <h3>Banking App</h3>
        </div>
        <div className='items'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmIOqJmyXwyNRNPwTZxqzwsCb2KuvUkVHItczW2urnS5tbDRDBAYyg7QSxCgZqvvyAFw&usqp=CAU' alt=''/>
          <h3>Banking App</h3>
        </div>
        <div className='items'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmIOqJmyXwyNRNPwTZxqzwsCb2KuvUkVHItczW2urnS5tbDRDBAYyg7QSxCgZqvvyAFw&usqp=CAU' alt=''/>
          <h3>Banking App</h3>
        </div>
        <div className='items'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmIOqJmyXwyNRNPwTZxqzwsCb2KuvUkVHItczW2urnS5tbDRDBAYyg7QSxCgZqvvyAFw&usqp=CAU' alt=''/>
          <h3>Banking App</h3>
        </div>
        <div className='items'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmIOqJmyXwyNRNPwTZxqzwsCb2KuvUkVHItczW2urnS5tbDRDBAYyg7QSxCgZqvvyAFw&usqp=CAU' alt=''/>
          <h3>Banking App</h3>
        </div>
        <div className='items'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmIOqJmyXwyNRNPwTZxqzwsCb2KuvUkVHItczW2urnS5tbDRDBAYyg7QSxCgZqvvyAFw&usqp=CAU' alt=''/>
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio