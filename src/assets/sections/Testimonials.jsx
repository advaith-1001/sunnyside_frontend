import '../styles/testimonials.css'

function Testimonials() {
    return(
        <>
        <h1>CLIENT TESTIMONIALS</h1>
        <div className="testimonials-ctr">
            <div className="testimonial">
                <img src="sunnyside-agency-landing-page-main\sunnyside-agency-landing-page-main\images\image-emily.jpg" alt="" />
                <p>We put our trust in Sunnyside and they <br />
                 delivered, making sure our needs
                    were met <br /> and deadlines were always hit
                </p>
                <h2>Emily R.</h2>
                <p className="client-position">Marketing director</p>
            </div>
            <div className="testimonial">
                <img src="sunnyside-agency-landing-page-main\sunnyside-agency-landing-page-main\images\image-thomas.jpg" alt="" />
                <p>Sunnyside's enthusiasm coupled with their <br /> keen interest in our brand's success made
                it <br /> a satistfying and enjoyable experience.</p>
                <h2>Thomas S.</h2>
                <p className="client-position">Chief Operating Officer</p>
            </div>
            <div className="testimonial">
                <img src="sunnyside-agency-landing-page-main\sunnyside-agency-landing-page-main\images\image-jennie.jpg" alt="" />
                <p>Incredible end result! Our sales increased <br /> over 400% when we worked with Sunnyside. <br /> Highly recommended!</p>
                <h2>Jennie F.</h2>
                <p>Business Owner</p>
            </div>
        </div>
        </>
    );
}

export default Testimonials