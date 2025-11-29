'use client';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperModules = [Navigation, Pagination, Autoplay, EffectFade];

export default function SemdesignM001SliderV1({ blockData }) {
    const sliderBlock = blockData;
    const slides = React.useMemo(() => {
        return sliderBlock?.attributes?.slides?.map(s => JSON.parse(s)) ?? [];
    }, [sliderBlock]);

    const { effectFade, arrows, dots, autoHeight, tagName, size, topOverlap } = sliderBlock?.attributes ?? {};
    const Tag = tagName;

    if (!slides || slides.length === 0) return null;

    // mapowanie wysokości slidera na Tailwind
    const sizeClasses = {
        large: "!min-h-[calc(400px+10vw)]",
        medium: "!min-h-[calc(250px+10vw)]",
        small: "!min-h-[calc(60px+10vw)]",
        full: topOverlap ? '!min-h-[calc(100vh-40px)]' : '!min-h-[calc(100vh-104px)]',
        "aspect-ratio-3-2": "aspect-[3/2]",
    };

    return (
        <Swiper
            key={effectFade ? 'fade' : 'slide'}
            modules={swiperModules}
            navigation={slides.length > 1 ? arrows : false}
            pagination={dots ? { clickable: true } : false}
            effect={effectFade ? 'fade' : 'slide'}
            fadeEffect={{ crossFade: true }}
            autoHeight={autoHeight}
            className={`bg-black overflow-hidden relative border-t border-b border-[var(--color-brown-opacity-80)] ${topOverlap ? '-mt-16' : ''}`}
        >
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    style={{ backgroundColor: slide.bgColor, color: slide.textColor }}
                    className={`relative !flex !h-auto py-20 text-white ${sizeClasses[size] ?? ""} ${slide.customClasses ?? ""}
                    relative before:content-[''] before:absolute before:inset-0 before:z-[2] before:block
                        ${slide.overLayFull ? 'before:bg-[var(--color-black-opacity-65)]' : `                      ${slide.overLayGradient ? (() => {
                        if (slide.verticalAlignment === "start") {
                            return "before:bg-[linear-gradient(to_top,transparent,var(--color-black-opacity-90))]";
                        }
                        if (slide.verticalAlignment === "end") {
                            return "before:bg-[linear-gradient(to_bottom,transparent,var(--color-black-opacity-90))]";
                        }
                        // vertical center
                        if (slide.verticalAlignment === "center") {
                            if (slide.horizontalAlignment === "center") {
                                return "before:bg-[radial-gradient(circle_at_center,var(--color-black-opacity-65)_50%,transparent)]";
                            }
                            if (slide.horizontalAlignment === "start") {
                                return "before:!bg-[linear-gradient(to_right,var(--color-black-opacity-90),transparent)]"; // <-- poprawione
                            }
                            if (slide.horizontalAlignment === "end") {
                                return "before:!bg-[linear-gradient(to_right,transparent,var(--color-black-opacity-90))]";
                            }
                        }
                        return "";
                    })() : ""}`}
                    
                    `}
                >
                    {slide.imageUrl && (
                        <img
                            className={`absolute inset-0 w-full h-full object-cover object-${slide.imagePosition}`}
                            src={slide.imageUrl}
                            alt="Preview"
                        />
                    )}

                    <div
                        className={`
              relative z-10 flex w-full px-4
              ${slide.horizontalAlignment === "start" ? "justify-start text-left" : ""}
              ${slide.horizontalAlignment === "center" ? "justify-center text-center" : ""}
              ${slide.horizontalAlignment === "end" ? "justify-end text-right" : ""}
              ${slide.verticalAlignment === "start" ? "items-start mt-0" : ""}
              ${slide.verticalAlignment === "center" ? "items-center" : ""}
              ${slide.verticalAlignment === "end" ? "items-end mb-0" : ""}
            `}
                    >
                        <div className="max-w-[600px] flex flex-col gap-4">
                            {slide.title && <Tag className="text-4xl font-semibold">{slide.title}</Tag>}
                            {slide.description && <p className="text-xl">{slide.description}</p>}
                            {slide.caption && <p className="italic text-base">{slide.caption}</p>}
                            {slide.buttonUrl && slide.buttonLabel && (
                                <a
                                    className={`border border-white inline-block px-4 py-2 rounded bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors duration-300
                                          ${slide.horizontalAlignment === "start" ? "self-start" : ""}
                                          ${slide.horizontalAlignment === "center" ? "self-center" : ""}
                                          ${slide.horizontalAlignment === "end" ? "self-end" : ""}
                                    `}
                                    href={slide.buttonUrl}
                                    target={slide.openInNewTab ? "_blank" : undefined}
                                    rel={slide.openInNewTab ? "noopener noreferrer" : undefined}
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
