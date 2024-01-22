import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.2s" id="about">
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>About</h1>
                    <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 pb-4 pb-lg-0">
                        <img className="img-fluid rounded w-100" src="img/about.jpg" alt="" />
                    </div>
                    <div className="col-lg-7">
                        <h3 className="mb-4">Digital Communication Specialist</h3>
                        <p>I’m a spontaneous and witty creative with over four years of experience
                            as a Digital communications strategist and copy writer, possessing
                            optimum SEO knowledge and expertise in research, digital marketing,
                            email marketing, analytics as well as meta and google ads. As an
                            equally experienced radio presenter with a proven track record of
                            engaging audiences, delivering captivating content, maintaining a
                            professional on-air presence, and impeccable storytelling, I tell brand
                            stories holistically from relatable angles and develop comprehensive
                            strategies that effectively convey brand narratives and engage target
                            audience. I am confident that my diverse skill set and all-encompassing
                            approach to problem-solving makes me the ideal digital
                            communications strategist for your brand.</p>
                        {/* <div className="row mb-3">
                            <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Kate Winslet</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">1 April 1990</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Master</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">10 Years</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+012 345 6789</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">info@example.com</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">123 Street, New York, USA</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                        </div> */}
                        <a href="" className="btn btn-outline-primary mr-4">Hire Me</a>
                        {/* <a href="" className="btn btn-outline-primary">Learn More</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About