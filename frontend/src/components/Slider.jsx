'use client';

import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperModules = [Navigation, Pagination, Autoplay, EffectFade];

export default function Slider({ blockData }) {
    const sliderBlock = blockData;

    const slides = React.useMemo(() => {
        return sliderBlock?.attributes?.slides?.map(s => JSON.parse(s)) ?? [];
    }, [sliderBlock]);

    const {effectFade, arrows, dots, autoHeight, tagName} = sliderBlock?.attributes ?? {};
    const Tag = tagName;

    if (!slides || slides.length === 0) return null;

    return (
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
                        ho-module-m-001-slider-v-001__vertical-alignment-${slide.verticalAlignment}
                        ${!slide.overLayGradient ? 'ho-module-m-001-slider-v1__overlay-gradient-hidden' : ''}
                        ${slide.overLayFull ? 'ho-module-m-001-slider-v1__overlay-full' : ''}
                        ${slide.customClasses}`}
                >
                    {slide.imageUrl && (
                        <img
                            className={`ho-module-m-001-slider-v1__image object-position-${slide.imagePosition}`}
                            src={slide.imageUrl}
                            alt="Preview"
                        />
                    )}
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
    );
}
