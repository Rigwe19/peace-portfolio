import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sena from '../assets/sena.jpg';
import chiemezie from '../assets/chimezie.jpg';
import joy from '../assets/joy.jpg';
const Testimonial = () => {
    return (
        <div className="testimonial fadeInUp" data-aos="fade-up" data-aos-delay="0.1s" id="review">
            <div className="container">
                <div className="testimonial-icon">
                    <i className="fa fa-quote-left"></i>
                </div>
                <OwlCarousel className="testimonials-carousel" loop margin={10} nav items={1} autoplay>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={sena} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                As the founder of EmpowerHerTech Foundation, I highly recommend Peace. She trained 40 women in strategic digital marketing and personal branding with clarity and dedication. Her expertise significantly empowered our participants, enhancing their skills and digital presence, aligning perfectly with our mission.
                            </p>
                            <h3>Sena Aondona</h3>
                            <h4>Founder, EmpowerHerTech Foundation</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={chiemezie} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                It is one thing to have someone create a product marketing strategy for you using templates they got from training. It's another thing for the person to seek to understand your product, have as much discussions with you so that you're both speaking the same language, that way she can craft and manage a marketing campaign as well as know how best to structure and maintain your social media page. Peace is the latter and she does it with such grace that you want to keep throwing more responsibilities her way. She indeed is a joy to work with.
                            </p>
                            <h3>Chiemezie Ucheaga</h3>
                            <h4>Chief Technology Officer - Mavis Computel Ltd</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={joy} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Ms. Peace Amaugo significantly boosted my online presence and bookings
                                as a makeup artist. Her expertise in creating excellent content, professional
                                video editing, and advertising services transformed my digital presence. Highly
                                recommended for any digital marketing needs!
                            </p>
                            <h3>Joy Iwu</h3>
                            <h4>Makeup Artist</h4>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Testimonial