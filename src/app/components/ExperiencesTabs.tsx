"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function ExperiencesTabs({
    experiencias,
}: {
    experiencias: {
        title: string;
        date: string;
        atividades: string[];
    }[];
}) {
    const [active, setActive] = useState(0);

    return (
        <div className="w-full flex flex-row gap-24 pb-8 items-stretch">

            <div className="flex flex-col w-40 border-l border-zinc-300 h-auto">
                {experiencias.map((exp, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`text-left text-xl font-semibold transition-all border-l-4 p-4 cursor-pointer h-1/2 ${active === i ? "text-red-500" : "opacity-60 hover:opacity-100"
                            }`}
                    >
                        {exp.title}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-1 w-full">
                <h3 className="text-3xl font-bold text-start">
                    {
                        (() => {
                            const title = experiencias[active].title;
                            const words = title.split(" ");

                            if (words.length === 1 && (title.toLowerCase() === "freelancer" || title.toLowerCase() === "freelance")) {
                                return <span className="text-red-500 !font-bold">{title}</span>;
                            }

                            const lastWord = words[words.length - 1];

                            if (lastWord.toUpperCase() === "IBGE" || lastWord.toLowerCase() === "l’ibge") {
                                const before = words.slice(0, -1).join(" ");

                                return (
                                    <>
                                        {before} 
                                        <span className="text-red-500 !font-bold"> {lastWord}</span>
                                    </>
                                );
                            }

                            return title;
                        })()
                    }
                </h3>


                <p className="text-lg opacity-80 font-semibold text-start pb-8">
                    {experiencias[active].date}
                </p>

                <div className="flex flex-col gap-4">
                    {experiencias[active].atividades.map((a, i) => (
                        <div key={i} className="flex items-start gap-3 text-lg font-semibold text-start">
                            <FaCheck className="text-red-500 text-2xl mt-1" />
                            <p>{a}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
