import React from "react";
import SwiperCore, { Navigation, Pagination, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Center, Image, Box} from "@chakra-ui/react";
import {ChevronRightIcon, ChevronLeftIcon} from "@chakra-ui/icons";

SwiperCore.use([Navigation, Pagination, Zoom]);

const ProductCarousel = ({product}) => {
    return(
        <Box border="1px solid #DADBDD" className="carousel-container" height="fit-content"> 
            <Swiper zoom grabCursor watchOverflow tag="section" wrapperTag="ul" navigation={{nextEl: ".arrow-right", prevEl: ".arrow-left" }} pagination={{clickable: true}} spaceBetween={50} slidesPerView={1} >
                {product.images.map((imgUrl, i) => (
                    <SwiperSlide   width="100%" height="100%" style={{listStyle: "none"}} tag="li" key={i}>
                        <Center  width="100%" height="100%">
                            <Image src={imgUrl} objectFit="cover" alt="product-img" />
                        </Center>
                    </SwiperSlide>    
                ))}
            </Swiper>
            <div className="arrow-left">
                <ChevronLeftIcon boxSize={8} _hover={{color: "#1DBF73"}} />
            </div>
            <Center className="arrow-right">
                <ChevronRightIcon boxSize={8} _hover={{color: "#1DBF73"}} />
            </Center>
        </Box>
    )
}

export default ProductCarousel;