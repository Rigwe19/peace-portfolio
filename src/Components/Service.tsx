// import AOS from 'aos';
// import 'aos/dist/aos,css';

import React from "react";
import { Children } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

// import { useEffect } from 'react';
const Service = () => {
    const services = [
        {
            title: "Product Marketing",
            icon: "fa fa-chart-line",
            text: "Marketing Research, Product Positioning, Messaging Development, Competitive Analysis, Product Launch Strategy, Content Creation, Pricing Strategy, Public Relations and Media Outreach, Product Lifecycle Management, Metrics & Analysics, UI/UX understanding, AB testing.",
            skills: 95
        },
        {
            title: "Digital Marketing",
            icon: "fa fa-ad",
            text: "Social media management/marketing, Search engine optimization (SEO), Content Creation/Marketing, Email marketing, Influencer Marketing, Pay-per-click (PPC) advertising, Copy writing,",
            skills: 95
        },
        {
            title: "Content Creation & Video Editing",
            icon: "fa fa-video",
            text: "Editing Software: Capcut, Storytelling, Transitions and Effects, Color Correction and Grading, Audio Editing and Mixing, Storyboarding and Scripting, File Management and Organization, Knowledge of Copyright Laws",
            skills: 80
        },
        {
            title: "Marketing/Social Media Analytics",
            icon: "fa fa-chart-pie",
            text: "Analytical Skills, Analytics Tools: (Google analytics, social media analytics platforms), Qualitative Analysis, Data Visualization, Quantitative Analysis, Business Acumen, Critical Thinking,  Social Media Metrics, A/B Testing,Social Media Algorithms.",
            skills: 70
        },
        {
            title: "Public Relations",
            icon: "fa fa-comment-dots",
            text: "Brand reputation management, internal communication, public events and sponsorship, Crisis communication, media relations, press release, influencer management",
            skills: 60
        },
        {
            title: "Copywriting",
            icon: "fa fa-quote-right",
            text: "Brand Story Telling, SEO-friendly website copy, compelling email campaigns, social media posts, blog writing, Ad copies, Technical writing, user manual, Product descriptions, Brochures, PR talking points and Radio jingles script.",
            skills: 65
        },
        {
            title: "Social Media Management",
            icon: "fab fa-instagram",
            text: "Content Calendar and Scheduling, Content Creation, Community Management, Influencer Marketing, Paid Ads, Reporting and Analysis, Page layout, Follower and Audience Growth, Brand Visibility, Optimized Bio and Automated Response",
            skills: 50
        },
        {
            title: "Soft Skills",
            icon: "fa fa-shapes",
            text: " Creative Thinking, Adaptability and Learning Agility, Leadership and Collaboration, Problem-Solving Skills, Communication Skills.",
            skills: 95
        },
    ]
    return (
        <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>What I do</p>
                    <h2>Awesome Quality Services</h2>
                </div>
                <div className="row">
                    {Children.toArray(services.map(value => <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className={value.icon}></i>
                                <div className="service-progress-wrapper">
                                    <CircularProgressbar styles={buildStyles({ pathColor: "#CD9C8A" })} className="service-progress" value={value.skills} /* text={`${value.skills}%`} */ />
                                </div>
                            </div>
                            <div className="service-text">
                                <h3>{value.title}</h3>
                                <p style={{ fontSize: '14px' }}>
                                    {value.text}
                                </p>

                            </div>
                        </div>
                    </div>))}
                </div>
                {/* <Waypoint
                    onEnter={() => handleProgress("second", 95)}
                    onLeave={() => handleProgress("second", 0)}
                /> */}
            </div>
        </div>
    )
}

export default Service