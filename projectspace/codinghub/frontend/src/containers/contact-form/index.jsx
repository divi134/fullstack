import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import ContactForm from "@components/contact-form";
import Lottie from "react-lottie";

import HomeLottie from "../../assets/lottie-files/contact.json";

const HomeLottiesOptions = {
    loop:true,
    autoplay: true, 
    animationData:HomeLottie,
    renderSettings:{
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const ContactFormArea = ({ space, className }) => (
    <div
        className={clsx(
            "login-area message-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="connect-thumbnail">
                        {/* <div className="left-image">
                            <Image
                                src="/images/contact.json"
                                alt="Nft_Profile"
                                width={669}
                                height={686}
                            />
                        </div> */}
                        <div>
                                <Lottie options={HomeLottiesOptions} height={686} width={669} ></Lottie>
                        </div>

                    </div>

                </div>
                
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
);

ContactFormArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ContactFormArea.defaultProps = {
    space: 1,
};

export default ContactFormArea;
