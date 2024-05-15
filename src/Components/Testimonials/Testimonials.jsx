
import bayzid from "../../assets/bayjid.jpg"
import linkedin from "../../assets/linkedin.png"
import rightArrow from "../../assets/right-arrow.png"
import touhid from "../../assets/touhidSir.jpg"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import "./Testimonials.css"

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Bayjid Ahmed",
      title: "Instructor at Anneshon",
      img:
        bayzid,
      icon: twitter,
      desc:
        "In summary, Tanvir has exceeded expectations in his role as a instructor. Her dedication, professionalism, and strong work ethic make him an asset to our team.",
    },
    {
      id: 2,
      name: "Md. Touhid Hossain",
      title: "Founder At Anneshon",
      img:
        touhid,
      icon: youtube,
      desc:
        "Moreover, Tanvir is a proactive team player who willingly shares his knowledge and expertise with colleagues. He actively participates in brainstorming sessions, mentors junior engineers, and fosters a collaborative work environment that encourages learning and growth.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: linkedin,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials </h1>
      <div className="container-fluid testimonialContainer ">
       {data.map((d)=>(
         <div className={d.featured?"cards featured":"cards"}>
         <div className="top">
           <img src={rightArrow} className='left' alt="" />
           <img  src={d.img} className='user' alt="" />
           <img src={d.icon} className='right' alt="" />
         </div>
         <div className="center">
           {d.desc}
         </div>
         <div className="bottom">
           <h3>{d.name}</h3>
           <h4>{d.title}</h4>
         </div>
       </div>
       ))}
      </div>
    </div>
  )
}

export default Testimonials
