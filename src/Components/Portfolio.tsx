import ImageGallery from "react-image-gallery";
import Modal from "./Modal";
import { Children, useState } from "react";
import photos from '../Data/photo';
import videos from '../Data/video';
import codes from '../Data/code';
import play from '../assets/play.png';
import graphics from '../Data/graphics';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'video-react/dist/video-react.css';
import { useMediaQuery } from 'react-responsive'

// import { Video } from 'react-video-ts'
// import 'react-video-ts/dist/index.css'
import { Player } from "video-react";
// import { LinkPreview } from "@dhaiwat10/react-link-preview";
const articles = [{
    link: 'https://thenationonlineng.net/empowering-future-innovators-the-slate-center-unleashes-robotics-gurus-and-celebrity-tutors-to-ignite-childrens-skills-this-summer/ ',
    image: '/img/articles/nation.png',
    title: "Empowering Future Innovators: The Slate Center Unleashes Robotics Gurus and Celebrity Tutors to Ignite Children's Skills this Summer! - The Nation Newspaper",
    site: 'thenationonlineng.net/'
}, {
    link: 'https://medium.com/@Amaugopeace/the-gift-of-delusion-fb170da1c01d ',
    image: '/img/articles/delusion.jpg',
    title: "The Gift of Delusion",
    site: "medium.com"
}, {
    link: 'https://medium.com/@Amaugopeace/masturbation-not-sexual-8efb22a57395',
    image: '/img/articles/masturbation.jpg',
    title: "Masturbation-Not sexual",
    site: "medium.com"
}, {
    link: 'https://medium.com/@Amaugopeace/if-youve-lost-a-loved-one-does-it-get-better-d23120903e45',
    image: '/img/articles/lost.jpg',
    title: "If you've lost a loved one, does it get better?",
    site: "medium.com"
}, {
    link: 'https://medium.com/@Amaugopeace/youre-not-okay-c11cddb73919',
    image: '/img/articles/okay.jpg',
    title: "You're not Okay",
    site: "medium.com"
}];
const products = [{
    path: "/img/products/_ Akukom's Pre-launch Content Plan..docx.pdf",
    title: "Akukom's Pre-launch Content Plan"
}, {
    path: '/img/products/14 Days Content Calendar for AKUKOM.pdf',
    title: '14 Days Content Calendar for AKUKOM'
}, {
    path: '/img/products/15 DAYS CONTENT CALENDAR FOR AKUKOM.pdf',
    title: '15 DAYS CONTENT CALENDAR FOR AKUKOM'
},]
const ceyise = [{
    path: "/img/strategy/Ceyise/CEYISE STUDIOS CONTENT PLAN FOR PINTEREST.pdf",
    title: "CEYISE STUDIOS CONTENT PLAN FOR PINTEREST"
}, {
    path: '/img/strategy/Ceyise/CEYISE STUDIO ANALYTIC REPORT FOR IG & FB.pdf',
    title: 'CEYISE STUDIO ANALYTIC REPORT FOR IG & FB'
}]

const social_photos = Array(4).fill(1).map((value, index) => `/img/strategy/Photos/photo (${index + 1}).jpg`)
const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [section, setSection] = useState("");
    const [currentVideo, setCurrentVideo] = useState<number>(0);
    const handleOpen = (folder: string) => {
        setIsOpen(true)
        setSection(folder);
    }
    const handleClose = (ev: boolean | ((prevState: boolean) => boolean)) => {
        setIsOpen(ev);
        setSection("");
    }
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-1">Web Design</li>
                            <li data-filter=".filter-2">Mobile Apps</li>
                            <li data-filter=".filter-3">Game Dev</li>
                        </ul>
                    </div>
                </div> */}
                <Modal overflow={section === 'video' ? 'hidden' : 'static'} isOpen={isOpen} onClose={(ev: boolean | ((prevState: boolean) => boolean)) => handleClose(ev)}>
                    {section === "graphics" && <ImageGallery items={graphics} />
                        // <div className="position-relative w-100">
                        //     <div className="row g-2 overflow-hidden">
                        //         {!isMobile && <>
                        //             <div className="col-10" style={{ height: '100vh', overflow: 'auto' }}>
                        //                 <Player aspectRatio="16:9" src={graphics[currentVideo].src}></Player>
                        //             </div>
                        //             <div className="col-2 relative" style={{ maxHeight: '100vh', overflow: 'auto' }}>
                        //                 {Children.toArray(graphics.map((value, index) => (<div className="position-relative">
                        //                     <img onClick={() => setCurrentVideo(index)} className="img-thumbnail" style={{ width: "100%", marginBottom: '5px' }} src={value.poster} alt="Image not found" />
                        //                     <img role="button" tabIndex={0} onClick={() => setCurrentVideo(index)} src={play} alt="play" style={{ width: "50px", position: 'absolute', top: '40%', right: '40%' }} />
                        //                 </div>)))}
                        //             </div>
                        //         </>}
                        //         {isMobile && <>
                        //             <div className="col-12">
                        //                 <Player src={graphics[currentVideo].src}></Player>
                        //             </div>
                        //             {Children.toArray(graphics.map((value, index) => (<div className="col-6" style={{ maxHeight: '100vh', overflow: 'auto', position: 'relative' }}>
                        //                 <img onClick={() => setCurrentVideo(index)} className="img-thumbnail" style={{ width: "100%", marginBottom: '5px' }} src={value.poster} alt="Image not found" />
                        //                 <img onClick={() => setCurrentVideo(index)} src={play} alt="play" style={{ width: "50px", position: 'absolute', top: '40%', right: '40%' }} />
                        //             </div>)))}
                        //         </>}
                        //     </div>
                        // </div>
                    }
                    {section === "articles" && <div className="row article-carousel">
                        {Children.toArray(articles.map(article => <div className="col-12 col-md-4">
                            <a target="_blank" href={article.link} className="article-link">
                                <img src={article.image} alt="medium depression article" className="article-image" />
                                <div className="article-text">
                                    <span className="article-title">{article.title}</span>
                                    <span className="article-site">{article.site}</span>
                                </div>
                            </a>
                        </div>))}
                    </div>}
                    {section === "christmas" && <div className="container d-flex h-100">
                        <div className="bg-white py-4 px-4 m-auto rounded-4">
                            <h3>Ceyise Studio Houston Texas</h3>
                            <div className="row article-carousel g-2">
                                {Children.toArray(ceyise.map(props => <div className="col-12 col-md-4">
                                    <a target="_blank" href={props.path} className="article-link">
                                        <img src="/img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">{props.title}</span>
                                            {/* <span className="article-site">thenationonlineng.net</span> */}
                                        </div>
                                    </a>
                                </div>))}

                            </div>
                            <h3 className="mt-3">Page Layout</h3>
                            <div className="row article-carousel g-2">
                                {Children.toArray(social_photos.map(photo => <div className="col-12 col-md-3">
                                    <a href={photo} target="_blank">
                                        <img src={photo} alt="" style={{ objectFit: "contain" }} className="article-image" />
                                    </a>

                                </div>))}
                            </div>

                        </div>
                    </div>}
                    {section === "photo" && <ImageGallery items={photos} />}
                    {section === "video" && <div className="position-relative w-100">
                        <div className="row g-2 overflow-hidden">
                            {!isMobile && <>
                                <div className="col-10" style={{ height: '100vh', overflow: 'auto' }}>
                                    <Player aspectRatio="16:9" src={videos[currentVideo].src}></Player>
                                </div>
                                <div className="col-2 relative" style={{ maxHeight: '100vh', overflow: 'auto' }}>
                                    {Children.toArray([1, 2, 3, 4, 5, 6].map(value => (<div className="position-relative">
                                        <img onClick={() => setCurrentVideo(value - 1)} className="img-thumbnail" style={{ width: "100%", marginBottom: '5px' }} src={`img/videos/video_${value}.jpg`} alt="Image not found" />
                                        <img role="button" tabIndex={0} onClick={() => setCurrentVideo(value - 1)} src={play} alt="play" style={{ width: "50px", position: 'absolute', top: '40%', right: '40%' }} />
                                    </div>)))}
                                </div>
                            </>}
                            {isMobile && <>
                                <div className="col-12">
                                    <Player src={videos[currentVideo].src}></Player>
                                </div>
                                {Children.toArray([1, 2, 3, 4, 5, 6].map(value => (<div className="col-6" style={{ maxHeight: '100vh', overflow: 'auto', position: 'relative' }}>
                                    <img onClick={() => setCurrentVideo(value - 1)} className="img-thumbnail" style={{ width: "100%", marginBottom: '5px' }} src={`img/videos/video_${value}.jpg`} alt="Image not found" />
                                    <img onClick={() => setCurrentVideo(value - 1)} src={play} alt="play" style={{ width: "50px", position: 'absolute', top: '40%', right: '40%' }} />
                                </div>)))}
                            </>}
                        </div>
                    </div>

                    }
                    {section === "product" && <div className="container d-flex h-100">
                        <div className="bg-white py-4 px-4 m-auto rounded-4">
                            <h3>Akukom</h3>
                            <div className="row article-carousel g-2">
                                {Children.toArray(products.map(product => <div className="col-12 col-md-4">
                                    <a target="_blank" href={product.path} className="article-link">
                                        <img src="/img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">{product.title}</span>
                                        </div>
                                    </a>
                                </div>))}
                            </div>
                            {/* <h3>Summer Camp</h3>
                            <div className="row article-carousel g-2">
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="/img/strategy/Summer/SUMMER_AT_THE_SLATE_2021_CONTENT_CALENDAR.pdf" className="article-link">
                                        <img src="/img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">Summer at the Slate 2021 Content Calendar</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="/img/strategy/Summer/SUMMER_AT_THE_SLATE_2021_CONTENT_PLAN.pdf" className="article-link">
                                        <img src="/img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">Summer at the Slate 2021 Content Plan</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a target="_blank" href="/img/strategy/Summer/TSC_SUMMER_2021_PROMOTIONAL_STRATEGY.pdf" className="article-link">
                                        <img src="/img/strategy/pdf.png" alt="" style={{ objectFit: "contain" }} className="article-image" />
                                        <div className="article-text">
                                            <span className="article-title">TSC Summer 2021 Promotional Strategy</span>
                                        </div>
                                    </a>
                                </div>
                            </div> */}

                        </div>
                    </div>}
                </Modal>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1" data-aos="fade-up" data-aos-delay="0.0s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("graphics")}>
                            <div className="portfolio-img">
                                <img src="/img/graphics/graphics.jpg" alt="item visual" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Graphics and Motion Videos</h3>
                                <a href="#portfolio" className="btn plus">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2" data-aos="fade-up" data-aos-delay="0.2s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("articles")}>
                            <div className="portfolio-img">
                                <img src="/img/articles/article.jpg" alt="item visual" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Copywriting</h3>
                                <a className="btn plus" href="#portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3" data-aos="fade-up" data-aos-delay="0.4s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("christmas")}>
                            <div className="portfolio-img">
                                <img src="/img/strategy/strategy.jpg" alt="item visual" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Social Media Marketing / Management</h3>
                                <a className="btn plus" href="#portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1" data-aos="fade-up" data-aos-delay="0.6s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("photo")}>
                            <div className="portfolio-img">
                                <img src="/img/photography/camera.jpg" alt="item visual" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Paid Ads and Analytics</h3>
                                <a className="btn plus" href="#portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2" data-aos="fade-up" data-aos-delay="0.8s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("product")}>
                            <div className="portfolio-img">
                                <img src="/img/products/product_marketing.jpg" alt="item visual" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Product Marketing</h3>
                                <a className="btn plus" href="#portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3" data-aos="fade-up" data-aos-delay="1s">
                        <div className="portfolio-wrap" onClick={() => handleOpen("video")}>
                            <div className="portfolio-img">
                                <img src="/img/videos/video.jpg" alt="item visual" />
                            </div>
                            <div className="portfolio-text">
                                <h3>Content Creation</h3>
                                <a className="btn plus" href="#portfolio">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio