import React from "react";
import {gql, useQuery} from '@apollo/client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperModules = [Navigation, Pagination, Autoplay, EffectFade];

const GET_SLIDER = gql`
  query TestSlider {
    page(id: 123, idType: DATABASE_ID) {
      editorBlocks(flat: true) {
        __typename
        ... on SemdesignM001SliderV1 {
          attributes {
                slides
                customAttributes
                size
                topOverlap
                autoplay
                loop
                autoHeight
                effectFade
                dots
                arrows
                firstTagH1
                tagName
          }
        }
      }
    }
  }
`;

export default function Slider() {
    const {loading, error, data} = useQuery(GET_SLIDER);
    // const sliderBlock = data.page.editorBlocks.find(
    //     block => block.__typename === 'SemdesignM001SliderV1'
    // );
    // const slides = sliderBlock.attributes.slides.map(s => JSON.parse(s));
    // const {effectFade, arrows, dots, autoHeight, tagName} = sliderBlock.attributes;
    // const Tag = tagName;

    // zamiast tego powyzej mozna uzyc useMemo nie jest to podoobno konieczne, ale czasem moze byc bardziej optymalne
    const sliderBlock = React.useMemo(() => {
        return data?.page?.editorBlocks?.find(
            block => block.__typename === 'SemdesignM001SliderV1'
        );
    }, [data]);

    const slides = React.useMemo(() => {
        return sliderBlock?.attributes?.slides?.map(s => JSON.parse(s)) ?? [];
    }, [sliderBlock]);

    const {effectFade, arrows, dots, autoHeight, tagName} = sliderBlock?.attributes ?? {};

    const Tag = tagName;

    if (loading) return <p>Ładowanie...</p>;
    if (error) return <p>Błąd: {error.message}</p>;
    return (
        <>
            {slides.length > 0 ?
                <Swiper
                    key={effectFade ? 'fade' : 'slide'}
                    modules={swiperModules}
                    navigation={arrows}
                    pagination={dots ? {clickable: true} : false}

                    effect={effectFade ? 'fade' : 'slide'}
                    fadeEffect={{crossFade: true}}
                    autoHeight={autoHeight}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide
                            key={index}
                            style={{ backgroundColor: slide.bgColor, color: slide.textColor }}
                            className={`slide-${index}
                                    ho-module-m-001-slider-v1__horizontal-alignment-${slide.horizontalAlignment}
                                    ho-module-m-001-slider-v1__vertical-alignment-${slide.verticalAlignment}
                                    ${!slide.overLayGradient ? 'ho-module-m-001-slider-v1__overlay-gradient-hidden' : ''}
                                    ${slide.overLayFull ? 'ho-module-m-001-slider-v1__overlay-full' : ''}
                                    ${slide.customClasses}
                                `}
                        >
                            {slide.imageUrl ? (
                                <img
                                    className={`ho-module-m-001-slider-v1__image object-position-${slide.imagePosition}`}
                                    src={slide.imageUrl}
                                    alt="Preview"
                                />
                            ) : null}
                            <div className={`container d-flex text-${slide.horizontalAlignment} justify-content-${slide.horizontalAlignment} ${
                                (slide.verticalAlignment === 'start' || slide.verticalAlignment === 'end')
                                    ? (slide.verticalAlignment === 'start' ? 'mt-0' : 'mb-0')
                                    : ''
                            }`}>
                                <div>
                                    {slide.title && <Tag className="h2">{slide.title}</Tag>}
                                    {slide.description && <p>{slide.description}</p>}
                                    {slide.caption && <p><i>{slide.caption}</i></p>}

                                    {slide.buttonUrl && slide.buttonLabel && (
                                        <a
                                            className="btn btn--blur-light"
                                            href={slide.buttonUrl}
                                            target={slide.openInNewTab ? '_blank' : undefined}
                                            rel={slide.openInNewTab ? 'noopener noreferrer' : undefined}
                                        >
                                            {slide.buttonLabel}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                : ''}
        </>
    );
}
