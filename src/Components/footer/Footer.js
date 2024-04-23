import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>MTHR</h1>
                <p>For any kind of information please contact my social platform.</p>
            </div>
            <div>
                <a href="https://www.facebook.com/exploreTanvir"><i class="fa-brands fa-square-facebook"></i></a>
                <a href="/#"><i className="fa-brands fa-instagram-square"></i></a>
                <a target="blank" href="https://github.com/exploreTanvir"><i className="fa-brands fa-github-square"></i></a>
                <a href="/#"><i className="fa-brands fa-twitter-square"></i></a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/#contact">Changelog</a>
                <a href="/#contact">Status</a>
                <a href="/#contact">Issues</a>

            </div>
            <div>
                <h4>Community</h4>
                <a href="/#contact">Github</a>
                <a href="/#contact">Project</a>
                <a href="/#contact">Twitter</a>
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
  )
}

export default Footer