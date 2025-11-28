"use client";

import Image from "next/image";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";

type Project = {
  id: string;
  title: string;
  img: string;
  desc: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  const rows = Array.from({ length: Math.ceil(projects.length / 2) }).map((_, i) =>
    projects.slice(i * 2, i * 2 + 2)
  );

  return (
    <div className="flex flex-col w-full gap-8 px-0">
      {rows.map((row, rowIdx) => {
        const [left, right] = row;
        const leftDefault = rowIdx === 0 ? 3 : 2;
        const rightDefault = rowIdx === 0 ? 2 : 3;
        const rowIds = row.map((p) => p.id);

        const getSpanClass = (id: string, defaultSpan: number) => {
          if (!hovered) return `xl:col-span-${defaultSpan}`;
          if (!rowIds.includes(hovered)) return `xl:col-span-${defaultSpan}`;
          return hovered === id ? "xl:col-span-3" : "xl:col-span-2";
        };

        const getCardMotion = (id: string, isLeft: boolean) => {
          if (!hovered) return "";
          if (hovered === id)
            return "scale-[1.05] translate-x-0 shadow-2xl z-10";
          if (isLeft && hovered !== id) return "-translate-x-3 scale-[0.98] opacity-90";
          if (!isLeft && hovered !== id) return "translate-x-3 scale-[0.98] opacity-90";
          return "";
        };

        return (
          <div
            key={rowIdx}
            className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-5 lg:gap-8 transition-all duration-700 ease-in-out"
          >
            {left && (
              <div
                onMouseEnter={() => setHovered(left.id)}
                onMouseLeave={() => setHovered(null)}
                className={`flex flex-col gap-4 ${getSpanClass(left.id, leftDefault)} 
                transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]`}
              >
                <div
                  className={`relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl 
                  transform transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${getCardMotion(left.id, true)}`}
                >
                  <Image
                    src={left.img}
                    alt={left.title}
                    fill
                    className="object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    priority
                    quality={100}
                  />
                </div>
                <div className="flex flex-col justify-start items-start text-start gap-2">
                  <a href={`/projects/${left.id}`} className="group">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-red-500">
                        {left.title}
                      </h3>

                      <TbExternalLink
                        className="text-red-500 text-3xl p-1 border-2 border-red-500 rounded-full 
                        transition-all duration-300 
                        group-hover:bg-red-500 group-hover:text-white"
                      />
                    </div>
                  </a>

                  <p className="text-lg md:text-xl lg:text-2xl">{left.desc}</p>
                </div>
              </div>
            )}

            {right && (
              <div
                onMouseEnter={() => setHovered(right.id)}
                onMouseLeave={() => setHovered(null)}
                className={`flex flex-col gap-4 mt-8 lg:mt-0 ${getSpanClass(right.id, rightDefault)} 
                transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]`}
              >
                <div
                  className={`relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl 
                  transform transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${getCardMotion(right.id, false)}`}
                >
                  <Image
                    src={right.img}
                    alt={right.title}
                    fill
                    className="object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    priority
                    quality={100}
                  />
                </div>
                <div className="flex flex-col justify-start items-start text-start gap-2">
                  <a href={`/projects/${right.id}`} className="group">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl lg:text-4xl font-bold transition-colors duration-300 group-hover:text-red-500">
                        {right.title}
                      </h3>

                      <TbExternalLink
                        className="text-red-500 text-3xl p-1 border-2 border-red-500 rounded-full 
                        transition-all duration-300 
                        group-hover:bg-red-500 group-hover:text-white"
                      />
                    </div>
                  </a>
                  <p className="text-lg md:text-xl lg:text-2xl">{right.desc}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}