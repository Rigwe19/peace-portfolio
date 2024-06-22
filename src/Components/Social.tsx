import whatsapp from '../assets/whatsapp.png';
import social from '../assets/social.jpg';
const Social = () => {
    return (
        <div className="team" id="team">
            <div className="container">
                <div className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>My Socials</p>
                    {/* <h2>Expert Team Members</h2> */}
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.0s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={social} style={{ height: '245px' }} alt="Image" />
                            </div>
                            <div className="team-text">
                                <h2>Peace Amaugo</h2>
                                <h4>Digital Communications Strategist | Product Marketing Manager  | Social Media Manager</h4>
                                <p>
                                    Connect with me!
                                </p>
                                <div className="team-social">
                                    <a className="btn" target='_blank' href="https://www.linkedin.com/in/peace-amaugo-631ab0244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href="mailto:Amaugopeace@gmail.com"><i className="fa fa-envelope "></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.2s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={whatsapp} alt="Whatsapp" />
                            </div>
                            <div className="team-text">
                                <h2>My whatsapp Link</h2>
                                <p>
                                    Scan this code with your whatsapp camera or click <a target='_blank' href="https://wa.me/qr/364VA5KNHC2EP1">here</a> to connect with me
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social