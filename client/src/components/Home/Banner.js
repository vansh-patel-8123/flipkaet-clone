import { Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerData from '../constants/BannerData';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Image = styled('img')`
    height: 180;
`;

function Banner() {
    return (
        <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
        >
            {
                BannerData.map(data => (
                    <Image src={data.url} alt="banner-img" />
                    // <Typography>{data.id}</Typography>
                ))
            }
        </Carousel>
    );
}

export default Banner;
