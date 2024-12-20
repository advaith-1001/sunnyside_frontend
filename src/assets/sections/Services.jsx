import '../styles/services.css'

function Services() {
    return(
        <div className="services-ctr">
            <div className="service1">
                <div className="service1-text">
                    <h2 className="service1-header">Transform your brand</h2>
                    <p className='service1-desc'>We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do 
                        most of the marketing for you.
                    </p>
                    <a className='service-learn-more1'  href="">LEARN MORE</a>
                </div>
            </div>
            <div className='img1-ctr'>
                <img className='img1' src="sunnyside-agency-landing-page-main\sunnyside-agency-landing-page-main\images\desktop\image-transform.jpg" alt="" />
            </div>
            <div className='img2-ctr'>
                <img className='img2' src="sunnyside-agency-landing-page-main\sunnyside-agency-landing-page-main\images\desktop\image-stand-out.jpg" alt="" />
            </div>
            <div className="service2">
                <div className="service2-text">
                    <h2 className="service2-header">Stand Out to the right audience</h2>
                    <p className='service2-desc'>Using collaborative formula of designers, researchers, photographers, videographers, and 
                        copywriters, we'll build and extend your brand in digital spaces.
                    </p>
                    <a className='service-learn-more2'  href="">LEARN MORE</a>
                </div>
            </div>
            <div className='service3'>
                <h2>Graphic Design</h2>
                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and 
                    captures potential clients' attention.
                </p>
            </div>
            <div className='service4'>
                <h2>Photography</h2>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
            

            
        </div>
    );
}

export default Services