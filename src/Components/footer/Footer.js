import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer container-fluid text-white d-flex align-items-center justify-content-center">
        <div className="row">
        
            <div className="col-lg-6 col-sm-12">

                <p>For any kind of information please contact my social platform.</p>
            </div>
            <div className="socialIcons col-lg-6 col-sm-12 align-items-center justify-content-end d-flex text-white">
            <div className="socialIcon" style={{background:"#3B5999"}}>
                <Facebook className="icons"/>
                </div>
                <div className="socialIcon" style={{background:"#E4405F"}}>
                <Instagram className="icons"/>
                </div>
                <div className="socialIcon" style={{background:"#000"}}>
                <GitHub className="icons"/>
                </div>
                
                <div className="socialIcon " style={{background:"#3B5999"}}>
                <LinkedIn className="icons"/>
                </div>
                <div className="socialIcon" style={{background:"#55ACEE"}}>
                <Twitter className="icons"/>
                </div>
                
            </div>
        
        <div className="bottom pt-4  d-flex align-items-center justify-content-between">
            <div>
                <h4>Project</h4>
                <a href="/#contact">Changelog</a>
                <a href="/#contact">Status</a>
                <a href="/#contact">Issues</a>

            </div>
            <div>
                <h4>Community</h4>
                <a href="https://github.com/exploreTanvir">Github</a>
                <a href="/#contact">Project</a>
                <a href="https://twitter.com/exploreTanvir">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/#contact">support</a>
                <a href="/#contact">Troubleshooting</a>
                <a href="/#contact">Contact us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/#contact">Terms of service</a>
                <a href="/#contact">Privacy policy</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer