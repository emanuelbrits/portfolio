"use client";

import { useEffect, useRef, useState } from "react";

type AboutExperienceSectionProps = {
    dictionary: { [key: string]: string };
};

export default function AboutExperienceSection({ dictionary }: AboutExperienceSectionProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const number1divRef = useRef<HTMLDivElement | null>(null);
    const number1Ref = useRef<HTMLHeadingElement | null>(null);
    const number2Ref = useRef<HTMLHeadingElement | null>(null);

    const [lineTop, setLineTop] = useState(0);
    const [targetHeight, setTargetHeight] = useState(0);
    const heightRef = useRef(0);

    useEffect(() => {
        function calculatePositions() {
            const container = containerRef.current;
            const experience = experienceRef.current;
            const number1div = number1divRef.current;
            const num1 = number1Ref.current;
            const num2 = number2Ref.current;

            if (!container || !num1 || !num2 || !experience || !number1div) return;

            const experienceRect = experience.getBoundingClientRect();
            const number1divRect = number1div.getBoundingClientRect();
            const num1Rect = num1.getBoundingClientRect();

            const start = experienceRect.height + 48 + num1Rect.height + 6;
            setLineTop(start);

            const distanceTo02 = number1divRect.height - 48 - num1Rect.height + 90;

            function handleScroll() {
                const rect = container!.getBoundingClientRect();
                const progress = Math.min(Math.max(1 - rect.top / (window.innerHeight * 0.6), 0), 1);
                setTargetHeight(progress * distanceTo02);
            }

            window.addEventListener("scroll", handleScroll);
            handleScroll();

            return () => window.removeEventListener("scroll", handleScroll);
        }

        calculatePositions();
        window.addEventListener("resize", calculatePositions);

        return () => window.removeEventListener("resize", calculatePositions);
    }, []);

    useEffect(() => {
        function animate() {
            heightRef.current += (targetHeight - heightRef.current) * 0.12;
            requestAnimationFrame(animate);
        }
        animate();
    }, [targetHeight]);

    return (
        <div ref={containerRef} className="flex flex-col relative">
            <div ref={experienceRef}>
                <h4 className="text-4xl md:text-6xl font-bold mt-36">
                    {dictionary.myExperience}
                    <span className="text-red-500 !text-3xl md:!text-4xl xl:!text-6xl !font-bold">.</span>
                </h4>
            </div>

            <div
                className="absolute left-[48px] md:left-[58px] w-[4px] bg-red-500 rounded-full"
                style={{ top: `${lineTop}px`, height: `${heightRef.current}px` }}
            />

            <div ref={number1divRef} className="flex gap-12 pl-6 pt-12">
                <h4
                    ref={number1Ref}
                    className="text-5xl md:text-7xl font-bold leading-none h-12 md:h-16"
                >
                    01
                </h4>
                <div className="flex flex-col">
                    <p className="text-red-500 font-bold">{dictionary.itSupportDev}</p>
                    <h5 className="text-3xl xl:text-4xl font-bold pt-1">IBGE</h5>
                    <p className="text-lg xl:text-xl pt-6 md:w-4/5 lg:2/3 xl:w-3/4">
                        {dictionary.ibgeInternship}
                    </p>
                </div>
            </div>

            <div className="flex gap-12 pl-6 pt-24">
                <h4
                    ref={number2Ref}
                    className="text-5xl md:text-7xl font-bold leading-none h-12 md:h-16"
                >
                    02
                </h4>
                <div className="flex flex-col">
                    <p className="text-red-500 font-bold">{dictionary.softwareDeveloper}</p>
                    <h5 className="text-3xl xl:text-4xl font-bold pt-1">{dictionary.freelaTitle}</h5>
                    <p className="text-lg xl:text-xl pt-6 md:w-4/5 lg:2/3 xl:w-3/4">
                        {dictionary.freelancerWork}
                    </p>
                </div>
            </div>
        </div>
    );
}