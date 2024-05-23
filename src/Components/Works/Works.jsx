import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import globe from "../../assets/globe.png";
import mobile from "../../assets/mobile.png";
import writing from "../../assets/writing.png";
import "./Works.css";

export default function Works() {
  const data = [
    {
      id: "1",
      icon: mobile,
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: globe,
      title: "Web Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: writing,
      title: "UI & UX Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const [slide,setSlide]=useState(0)
  const handleClick=(direction)=>{
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 2);
    } else {
      setSlide(slide < 2 ? slide + 1 : 0);
    }
  }
  
  return (
    <div className="works" id="works">
       <div onClick={()=>handleClick("left")} className="arrow leftIcon rounded-circle position-absolute " direction="left">
                <ArrowLeftOutlined/>
            </div>
      <div
        className="slider d-flex" style={{ transform: `translateX(-${slide * 82}vw)` }} slide={slide}
      >
        {data.map((d) => (
          <div className="container d-flex justify-content-center align-items-center">
            <div className="item ">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Project</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img }
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>


      <div onClick={()=>handleClick()} className="arrow rightIcon rounded-circle position-absolute" direction="right">
                <ArrowRightOutlined/>
            </div>
    </div>
  );
}
