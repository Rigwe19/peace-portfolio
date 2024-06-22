const Footer = () => {
    return (
        <div className="footer" data-aos="fade" data-aos-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>Peace Amaugo</h2>
                        <h3>Abuja, Nigeria</h3>
                        <div className="footer-menu">
                            <p>+2348101322158</p>
                            <p>amaugopeace@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            {/* <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a> */}
                            <a target="_blank" href="https://medium.com/@Amaugopeace"><i className="fab fa-medium"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/peace-amaugo-631ab0244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; Your Product Marketing Sis, All Right Reserved | {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer