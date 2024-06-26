const Projects = () => {
    return (
        <div className="experience" style={{ width: "100%", overflow: "hidden" }} id="projects">
            <div className="container">
                <header className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Projects</h2>
                </header>
                <div className="timeline">
                    <div className="timeline-item left" data-aos="slide-left" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">August 2023 - December 2023</div>
                            <h2>Digital Media Strategist for Kogi State Gubernatorial Candidate</h2>
                            {/* <h4></h4> */}
                            <p>
                                I developed and executed comprehensive social media strategies, creating engaging multimedia content and managing targeted ad campaigns across Facebook, Instagram, Twitter, and LinkedIn. I increased the candidate's visibility and voter engagement, collaborated with influencers, and effectively handled community management and crisis resolution. By monitoring trends and using analytics tools, I optimized campaign performance, achieving significant increases in social media followers and engagement rates, and improving ad campaign effectiveness. This experience highlights my ability to ensure a campaign reaches and resonates with its target audience.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right" data-aos="slide-right" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">February 2023- March 2023</div>
                            <h2>Hall 7 real Estate - 10th Series Campaign</h2>
                            {/* <h4>TheShowroom Nigeria</h4> */}
                            <p>
                                I spearheaded the social media strategy for Hall 7's 10th Series, a campaign celebrating a decade of success by selling duplex units.  Through an engaging and industry tailored campaign strategy targeted at a specified audience and visuals across platforms, the team achieved a 30% boost in engagement and lead generation.  Continual analysis with industry tools ensured campaign optimization, while influencer and industry partner collaborations further amplified the campaign's reach.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left" data-aos="slide-left" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">January 2022 - June 2022</div>
                            <h2>Tailor's Pal - Product marketing Interns | Technical Writer</h2>
                            <p>
                                As a Product Marketing Intern and Tech Writer for Tailors Pal, I improved the user experience of their inventory management app. I collaborated with developers to understand the app's features, then crafted user-friendly manuals, guides, and FAQs in clear, concise language for tailors of all technical backgrounds. Additionally, I conducted market research and created a marketing strategy to inform the app's Minimum Viable Product (MVP).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects