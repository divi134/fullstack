import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import SectionTitle from "@components/section-title/layout-02";
import AboutCard from "@components/about-card";
import Sticky from "@ui/sticky";
import { ImageType, ItemType, SectionTitleType } from "@utils/types";

import Lottie from "react-lottie";

import HomeLottie from "../../../assets/lottie-files/about.json";
const HomeLottiesOptions = {
    loop:true,
    autoplay: true,
    animationData:HomeLottie,
    renderSettings:{
        preserveAspectRatio: 'xMidYMid slice'
    }
}

   

const AboutArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-about-banner-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container mb--30">
            <div className="row">
                <div className="col-12">
                    {data?.section_title && (
                        <SectionTitle
                            className="about-title-m"
                            {...data.section_title}
                        />
                    )}
                </div>
            </div>
        </div>
        <div className="container-fluid about-fluidimg ">
            <div className="row">
                <div className="img-wrapper">
                    {/* {data?.image?.src && (
                        <Image
                            src={data.image.src}
                            alt={data.image?.alt || "Slider BG"}
                            quality={100}
                            priority
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                        )} */}
                         <div>
                                <Lottie options={HomeLottiesOptions} height={470} width={850} ></Lottie>
                        </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row g-5">
                {data?.items?.[0] && (
                    <div className="col-lg-6">
                        <div className="h--100">
                            <Sticky>
                                <AboutCard
                                    className="mt_dec--50 widge-wrapper rbt-sticky-top-adjust"
                                    title={data.items[0].title}
                                    desc={data.items[0].description}
                                    path={data.items[0].path}
                                />
                            </Sticky>
                        </div>
                    </div>
                )}
                {data?.items?.[1] && (
                    <div className="col-lg-6">
                        <AboutCard
                            className="transparent-bg"
                            title={data.items[1].title}
                            desc={data.items[1].description}
                            path={data.items[1].path}
                        />
                    </div>
                )}
            </div>
        </div>
    </div>
);

AboutArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        image: ImageType,
        items: PropTypes.arrayOf(ItemType),
    }),
};

AboutArea.defaultProps = {
    space: 1,
};

export default AboutArea;
