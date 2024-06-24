// import { useState } from 'react';
import about from '../assets/about.jpg'

const About = () => {
    // const [progress, setProgress] = useState({
    //     first: 0,
    //     second: 0,
    //     third: 0,
    //     fourth: 0
    // });

    // const handleProgress = (index: string, value: number) => {
    //     setProgress(pv => ({ ...pv, [index]: value }))
    // }

    return (
        <section id="about">
            <div className="about aos fadeInUp" data-aos="fade-up" data-aos-delay="0.1s">
                <div className="container-fluid">
                    <header className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                        <p>Learn About Me</p>
                        <h2>Peace Amaugo</h2>
                    </header>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-12">
                            <div className="about-content">
                                {/* <div className="section-header text-left">
                                    <p>Learn About Me</p>
                                    <h2>10 Years Experience</h2>
                                </div> */}
                                <div className="about-text">
                                    <p>
                                        I'm a digital marketer with a dual passion: product marketing and social media strategy.  Fueled by a deep understanding of target audiences and a keen eye on the competitive landscape, I craft compelling product narratives that connect with users and propel business growth. My experience spans both sides of the marketing coin. I'm a strategic product marketer with a proven track record of developing impactful product positioning, messaging, and go-to-market strategies. I'm also a social media expert, adept at growing brand awareness, fostering audience engagement, and driving traffic through captivating social media campaigns.  Whether it's crafting content that converts, like product descriptions and blog posts, or utilizing data-driven insights to inform decisions and measure success, I thrive in a collaborative environment.  I'm eager to bring my combined skillset to your team, helping your brand launch winning products and build a vibrant online community
                                        Sena's commitment to diversity and empowerment makes her not just a digital virtuoso but also a passionate advocate shaping the future of tech through innovation and dedication to positive impact.
                                    </p>
                                </div>
                                {/* <div className="skills">
                                    <div className="skill-name">
                                        <p>Web Design</p>
                                        <p>85%</p>
                                    </div>
                                    <div className="">
                                        <Waypoint
                                            onEnter={() => handleProgress("first", 85)}
                                            onLeave={() => handleProgress("first", 0)}
                                        />
                                        <ProgressBar now={progress.first} />
                                    </div>
                                    <div className="skill-name">
                                        <p>Web Development</p>
                                        <p>95%</p>
                                    </div>
                                    <Waypoint
                                        onEnter={() => handleProgress("second", 95)}
                                        onLeave={() => handleProgress("second", 0)}
                                    />
                                    <ProgressBar now={progress.second} />
                                    <div className="skill-name">
                                        <p>Apps Design</p>
                                        <p>90%</p>
                                    </div>
                                    <Waypoint
                                        onEnter={() => handleProgress("third", 90)}
                                        onLeave={() => handleProgress("third", 0)}
                                    />
                                    <ProgressBar now={progress.third} />
                                    <div className="skill-name">
                                        <p>Apps Development</p>
                                        <p>85%</p>
                                    </div>
                                    <Waypoint
                                        onEnter={() => handleProgress("fourth", 85)}
                                        onLeave={() => handleProgress("fourth", 0)}
                                    />
                                    <ProgressBar now={progress.fourth} />
                                </div>
                                <a className="btn" href="">Learn More</a> */}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-img">
                                <img src={about} alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About