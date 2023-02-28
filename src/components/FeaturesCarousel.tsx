
import React, {useEffect, useRef, useState} from "react";
import {Feature, FeatureCard} from "./FeatureCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";

// Use default property for element such as className and style
export interface FeaturesCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    data: Feature[];
    disabled?: boolean;
}

export default function FeaturesCarousel({ className, data }: FeaturesCarouselProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [maxCards, setMaxCards] = React.useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setMaxCards(Math.min(data.length, Math.max(1, Math.floor(width / 300))));

        if (currentIndex + maxCards > data.length) {
            setCurrentIndex(Math.max(0, data.length - maxCards));
        }
    }, [width]);

    return (
        <div className="flex w-full flex-col gap-10 w-full relative" ref={ref}>
            <div className={`flex justify-end items-center gap-1 absolute below-lg:left-2 ranged-md:-top-16 below-md:-top-[3.7rem] md:-right-20 md:bottom-0 ${maxCards === data.length ? 'hidden' : ''}`}>
                <button
                    className="flex p-2 rounded bg-white drop-shadow-sm disabled:opacity-25 disabled:cursor-not-allowed disabled:bg-gray-100"
                    disabled={currentIndex === 0}
                    onClick={() => {
                    setCurrentIndex(Math.max(currentIndex - 1, 0))
                }}><FontAwesomeIcon icon={faChevronRight} /></button>
                <button
                    className="flex p-2 rounded bg-white drop-shadow-sm disabled:opacity-25 disabled:cursor-not-allowed disabled:bg-gray-100"
                    disabled={currentIndex + maxCards >= data.length}
                    onClick={() => {
                        setCurrentIndex(Math.min(currentIndex + 1, data.length - maxCards))
                    }}
                ><FontAwesomeIcon icon={faChevronLeft} /></button>
            </div>
            <div className={className}>
                {
                    data.slice(currentIndex, maxCards + currentIndex).map((feature) => <FeatureCard key={feature.id} grow={maxCards !== data.length} feature={feature} />)
                }
            </div>
        </div>
    )
}
