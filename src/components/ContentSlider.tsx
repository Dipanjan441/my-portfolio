import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { SliderType } from '../type';

interface ImageSlider {
    id: number,
    image: string
}

interface Props {
    sliderImages: ImageSlider[],
    sliderType: SliderType
}

const ContentSlider = ({sliderImages, sliderType}:Props) => {
    let moduleArray = [];
    switch(sliderType) {
        case SliderType.cube:
            moduleArray = [EffectCube,Pagination, Autoplay];
            break;
        case SliderType.cards:
            moduleArray = [ EffectCards, Autoplay];
            break;
        default:
            moduleArray = [Pagination, Autoplay];
            break;
    }
  return (
    <div className='container py-2'>
        <Swiper
            effect={sliderType}
            grabCursor={true}
            autoplay={{
                delay:2500
            }}
            loop={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.96
            }}
            pagination={true}
            modules={moduleArray}
        >
            {sliderImages.map((image)=>(
                <SwiperSlide key={image.id}>
                    <Image  className="rounded img-fluid mx-auto" src={image.image} alt={`About-${image.id}`} />
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ContentSlider
