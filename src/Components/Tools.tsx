import { Children } from "react"

const Tools = () => {
    const tools = [{
        title: 'Canva',
        image: '/img/tools/canva.png'
    }, {
        title: 'Notion ',
        image: '/img/tools/notion.png'
    }, {
        title: 'Air table ',
        image: '/img/tools/airtable.png'
    }, {
        title: 'Google drive',
        image: '/img/tools/drive.png'
    }, {
        title: 'Hubspot ',
        image: '/img/tools/hubspot.png'
    }, {
        title: 'CapCut',
        image: '/img/tools/capcut.png'
    }, {
        title: 'Wordpress',
        image: '/img/tools/wordpress.png'
    }, {
        title: 'MailChimp',
        image: '/img/tools/mailchimp.png'
    }, {
        title: 'Answer The Public',
        image: '/img/tools/answer_the_public.png'
    }, {
        title: 'Google Analytics',
        image: '/img/tools/google_analytics.png'
    }, {
        title: 'Tailwind',
        image: '/img/tools/tailwind.png'
    }, {
        title: 'ChatGPT',
        image: '/img/tools/chatgpt.png'
    }, {
        title: 'Meta Ads Manager',
        image: '/img/tools/metaAds.png'
    }]
    return (
        <div className="experience" style={{ width: "100%", overflow: "hidden" }} id="tools">
            <div className="container">
                <header className="section-header text-center" data-aos="zoom" data-aos-delay="0.1s">
                    <p>Software Proficiency Lists</p>
                    <h2>Tools</h2>
                </header>
                <div className="tools">
                    {Children.toArray(tools.map(tool => <div className="tool-item col-6 col-md-3">
                        <img src={tool.image} alt="" />
                        <h5 className="text-center">{tool.title}</h5>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Tools