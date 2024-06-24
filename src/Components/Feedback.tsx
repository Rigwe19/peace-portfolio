import { useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import ImageGallery from "react-image-gallery";
import Modal from "./Modal";
const Feedback = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    const photos = Array(7).fill(1).map((value, i) => {
        return {
            original: `img/feedbacks/feedback (${value + i}).jpg`,
            thumbnail: `img/feedbacks/feedback (${value + i}).jpg`,
        };
    });
    return (
        <div className="team" id="team">
            <div className="container">
                <div className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>Clients Feedback</p>
                    <h2>My Clients Experiences</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0.0s">
                        <p>
                            Here, you will find testimonials and reviews from clients and collaborators who
                            have experienced my work firsthand. Their feedback highlights my dedication to excellence,
                            professionalism, and the positive impact my contributions have made in their projects and
                            organizations.
                        </p>
                    </div>
                    <div className="hero-btn col-lg-6 d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="0.2s">
                        <button onClick={handleOpen} className='btn btn-primary'>Check out Their Feedback</button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ImageGallery items={photos} />
            </Modal>
        </div>
    )
}

export default Feedback